import IllegalArgumentException from '../exceptions/IllegalArgumentException';

type Constructor<T> = new (...args: any[]) => T;

interface IBase<T>
{
    builder(): Builder<T>;
}

export default function <T extends Constructor<Record<string, unknown>>>(Base: T): IBase<T>
{
    return class extends Base
    {
        public static builder() { return new Builder<T>(Base); }
    };
}

/**
 * @description Not recommended to use, poorly written; and most likely will not work.
 * @deprecated
 * @bad
 */
class Builder<T>
{
    private readonly original: Record<string, unknown>;

    constructor(original: any)
    {
        if(original === null || typeof original !== 'object')
            throw new IllegalArgumentException('Original passed to Builder<T> is not an object or instantiable.');
        
        this.original = original;
        this.createProperties();
    }

    /**
     * @description defines properties upon our own class for each of the vars on an object
     */
    private createProperties(): void
    {
        const entires: any[] = Object.entries(this.original);
        for(let i: number = 0; i < entires.length; i++)
        {
            const typeOf: any = this.original[entires[i]];
            Object.defineProperty(
                this,
                entires[i] as string,
                {
                    value: (obj: typeof typeOf) =>
                    {
                        this.original[entires[i]] = obj;
                    }
                }
            );
        }
    }

    public build(): T
    {
        // todo: build an original, passing in the current instance properties
        return new (this.original as any) as T;
    }
}