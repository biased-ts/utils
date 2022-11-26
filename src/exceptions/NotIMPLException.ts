import BaseException from './BaseException';

class NotImplementedException extends BaseException
{
    constructor(readonly message: string)
    {
        super('NotImplementedException', message);
    }
}

export default NotImplementedException;