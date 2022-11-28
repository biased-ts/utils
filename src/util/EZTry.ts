import BaseException from '../exceptions/BaseException';

/**
 * @generic The generic of T dictates what the return value of your method call is, and that is what will be passed back as the return type of EZTry.
 * @param method The method to call, and try/catch.
 * @param onError A function to call when we throw an error.
 * @param data The data to pass to your method.
 */
function EZTry<T>(method: (...args: any[]) => T, onError: (err: BaseException) => any, ...data: any[]): T | null
{
    try
    {
        return method(...data);
    }
    catch(ex: any)
    {
        onError(
            BaseException.create(
                ex.name,
                ex.message
            )
        );
    }

    return null;
}

/**
 * @description Async version of the normal EZTry function.
 * @generic The generic of T dictates what the return value of your method call is, and that is what will be passed back as the return type of EZTry.
 * @param method The method to call, and try/catch.
 * @param onError A function to call when we throw an error.
 * @param data The data to pass to your method.
 */
async function EZTryAsync<T>(method: (...args: any[]) => Promise<T>, onError: (err: BaseException) => any, ...data: any[]): Promise<T | null>
{
    let returnValue: T | null = null;

    try
    {
        returnValue = await method(data);
    }
    catch(ex: any)
    {
        onError(
            BaseException.create(
                ex.name,
                ex.message
            )
        );
    }

    return returnValue;
}

export default EZTry;
export
{
    EZTryAsync
};