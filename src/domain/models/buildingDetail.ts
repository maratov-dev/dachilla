import { Types } from 'mongoose';
import { Lang } from '../commonTypes/lang';

export interface BuildingDetailModel {
    buildingId: Types.ObjectId;
    type: string;
    desc: Lang;
    price: number;
}
