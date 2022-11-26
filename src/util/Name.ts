import StringBuilder from './StringBuilder';

/**
 * @description Changes a name of a variable/field into a getter name. IE. "property" -> "getProperty"
 * @param {string} str - The name to parse 
 */
function Name(str: string, isBool: boolean = false): string
{
    const sb: StringBuilder = new StringBuilder('');
    
    if(isBool)
        sb.append('is');
    else
        sb.append('get');

    sb.append(str[0].toUpperCase());
    sb.append(str.substr(1).toLowerCase());

    return sb.toString();
}

export default Name;