/**
 * @description A general extension to the base error class, provides although bad support, for creating custom Exceptions (errors)
 * @summary A class to extend for ez custom errors
 * @example
 * ```ts
 * // Defining a new exception
 * class YourException extends BaseException
 * {
 *  public constructor(readonly message: string)
 *  {
 *      super('YourExceptionName', message);
 *  }
 * }
 * 
 * // If you only need it once you can just make a new BaseException instance.
 * throw new BaseException('YourExceptionName', 'Your Message');
 * 
 * // Or
 * throw BaseException.create('YourExceptionName', 'Your Message');
 * ```
 */
class BaseException extends Error
{
    static create(
        name: Readonly<string> = 'GeneralException',
        message: Readonly<string> = 'N/A'
    ): BaseException
    {
        return new BaseException(name, message);
    }

    public constructor(readonly name: string, readonly message: string)
    {
        super(message);
        this.name = name;
    }
}

export default BaseException;