import { BaseEntity } from './baseEntity';
import { AttributeModel } from '../models/attribute';
import { Types } from 'mongoose';
import { Lang } from '../commonTypes/lang';

export class AttributeEntity extends BaseEntity<AttributeModel> implements AttributeModel {
    get categoryId(): Types.ObjectId {
        return this.model.categoryId;
    }

    set categoryId(value: Types.ObjectId) {
        this.model.categoryId = value;
    }

    get title(): Lang {
        return this.model.title;
    }

    set title(value: Lang) {
        this.model.title = value;
    }
}
