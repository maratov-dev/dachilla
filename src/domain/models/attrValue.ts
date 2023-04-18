import { Types } from 'mongoose';

export interface AttrValueModel {
    attrId: Types.ObjectId;
    buildingId: Types.ObjectId;
    value: any;
}
