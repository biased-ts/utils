import BaseException from '../../exceptions/BaseException';

class UtilityOnly
{
    public constructor()
    {
        throw BaseException.create('UtilityOnly', 'A new instance of this class cannot be made.');
    }
}

export default UtilityOnly;