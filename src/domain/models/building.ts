import { Types } from 'mongoose';
import { Lang } from '../commonTypes/lang';

export interface BuildingModel {
    userId: Types.ObjectId;
    title: Lang;
    categoryId: Types.ObjectId;
    tag: string;
    slug: string;
    images: [string];
    status: BuildingStatuses;
}

export enum BuildingStatuses {
    ACTIVE = 'active',
    IN_ACTIVE = 'inactive',
    DRAFT = 'draft',
    PAUSE = 'pause',
}
