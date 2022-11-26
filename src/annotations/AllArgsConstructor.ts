import NotImplementedException from '../exceptions/NotIMPLException';
import type AllTypes from '../util/AllTypes';

/**
 * @description Will not work, not implemented. Changing/creating a constructor is fucking work man!
 * @throws
 */
function AllArgsConstructor(): void
{
    /**
     * NewC.prototype = OldC.prototype;
     * NewC.prototype.constructor = NewC;
     * OldC = NewC;
     */

    throw new NotImplementedException('Constructor based annotations are not yet ready to be used and are not implemented.');
}

// @ts-expect-error We dont care its unused, its going to be useful in the future.
function allProperties(obj: any): [[string, AllTypes]]
{
    const values: [[string, AllTypes]] = [] as any as [[string, AllTypes]];
    const entires: any[] = Object.entries(obj as Record<string, unknown>);

    for(let i: number = 0; i < entires.length; i++)
    {
        values.push([
            entires[i] as string,
            typeof entires[i] as AllTypes
        ]);
    }

    return values;
}

export default AllArgsConstructor;