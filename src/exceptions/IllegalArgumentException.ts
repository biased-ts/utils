import BaseException from './BaseException';

/**
 * @description Used to Java? This is your thing, baby!
 * @summary Generic Error class, just funny naming convention due to Java port.
 * @author AceLikesGhosts
 */
class IllegalArgumentException extends BaseException
{
    public constructor(readonly message: string)
    {
        super('IllegalArgumentException', message);
    }
}

export default IllegalArgumentException;