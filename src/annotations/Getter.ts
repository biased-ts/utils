import Name from '../util/Name';

function Getter(target: unknown, key: string): void
{
    const parsedName: string = Name(key, typeof (target as Record<string, unknown>)[key] === 'boolean');
    Object.defineProperty(target, parsedName, { value: () => (target as Record<string, unknown>)[key] });
}

export default Getter;