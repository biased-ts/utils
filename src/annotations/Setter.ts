import StringBuilder from 'src/util/StringBuilder';

function Setter(target: unknown, key: string): void
{
    const sb: StringBuilder = new StringBuilder('');
    sb.append('set');
    sb.append(key[0].toUpperCase());
    sb.append(key.substr(1).toLowerCase());

    const dataType = typeof (target as Record<string, unknown>)[key];
    Object.defineProperty(target, sb.toString(), {
        set: (data: typeof dataType) => (target as Record<string, unknown>)[key] = data
    });
}

export default Setter;