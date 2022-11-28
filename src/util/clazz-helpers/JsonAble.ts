import BaseException from '../../exceptions/BaseException';

class JsonAble
{
    public fromJson(): Record<string, unknown>;
    public fromJson(obj?: any): Record<string, unknown>
    {
        let returnValue: Record<string, unknown>;

        try 
        {
            returnValue = JSON.parse(obj);
        }
        catch(ex)
        {
            throw BaseException.create('BadJSON', 'Cannot convert that JSON string back to an object.');
        }

        return returnValue;
    }

    public toJson(): string;
    public toJson(obj?: any): string
    {
        let returnValue: string;
        try 
        {
            returnValue = JSON.stringify(obj);
        }
        catch(ex)
        {
            throw BaseException.create('BadJSON', 'Cannot convert that object to JSON.');
        }

        return returnValue;
    }
}

export default JsonAble;