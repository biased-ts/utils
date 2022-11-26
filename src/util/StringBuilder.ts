// Borrowed from the language ive been using the most, recently.
// java.

/**
 * @description A very basic String-Builder implementation due to JS not having one.
 * @warning Only useful if you're using an older runtime, as normal concatation within modern runtimes is 99% of the time faster.
 * @example ```ts
 * const sb: StringBuilder = StringBuilder.create(); // or if you're adapt: new StringBuilder(text = '', arraySize = 0);
 * 
 * for(let i: number = 0; i < 100; i++)
 * {
 *    // append the number to the string builder; bad example but it shows usage of #append
 *    sb.append(i as string);
 * }
 * 
 * // get a proper string from it
 * console.log(sb.toString());
 * // reset the string builder, incase youre a nut who reuses them.
 * sb.reset();
 * ```
 * @author AceLikesGhosts
 */
class StringBuilder
{
    /**
     * ECMAScript private field.
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields
     */
    #arraySize: number = 0;
    protected messages: string[];

    static create(text: string = '', size: number = 0): StringBuilder
    {
        return new this(
            text,
            size
        );
    }

    /**
     * @param text - The intial text to put into the string builder
     * @param size - The size of the array to store the strings, passing 0 will default to javascripts magical extending lists
     */
    public constructor(protected readonly text: string, protected readonly size: number = 0)
    {
        this.#arraySize = size;
        this.messages = this.#arraySize === 0 ? [] : new Array<string>(0);

        this.messages.push(text);
    }

    public append(text: string): StringBuilder
    {
        this.messages.push(text);
        return this;
    }

    public insert(...text: readonly string[]): StringBuilder
    {
        for(let i: number = 0; i < text.length; i++)
            this.append(text[i]);

        return this;
    }

    public reset(): boolean
    {
        this.messages = [];
        return true;
    }

    public length(seperator: string = ''): number
    { 
        return this.toString(seperator).length;
    }

    public toString(seperator: string = ''): string
    {
        return this.messages.join(seperator);
    }

    /**
     * @description Compares contents equality between 2 strings or StringBuilders
     * @param {Readonly<string | StringBuilder>} arg - The string or StringBuilder to compare to our StringBuilder instance.
     * @param {string} seperator -  What to seperate our StringBuilder by to compare it.
     * @returns {boolean} If the string or StringBuilder passed is equal to our StringBuilder's contents.
     */
    public equals(arg: Readonly<string | StringBuilder>, seperator: string = ''): boolean
    {
        const ourValue: string = this.toString(seperator);
        if(typeof arg === 'object' && arg instanceof StringBuilder)
            if(arg.toString() !== ourValue)
                return false;

        if(typeof arg === 'string')
            if(arg !== ourValue)
                return false;

        return true;
    }
}

export default StringBuilder;