import { Lang } from '../commonTypes/lang';
import { Types } from 'mongoose';

export interface AttributeModel {
    title: Lang;
    categoryId: Types.ObjectId;
}
