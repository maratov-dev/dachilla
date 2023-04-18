import { Types } from 'mongoose';
import { BaseEntity } from './baseEntity';
import { AttrValueModel } from '../models/attrValue';

export class AttrValueEntity extends BaseEntity<AttrValueModel> implements AttrValueModel {
    get attrId(): Types.ObjectId {
        return this.model.attrId;
    }

    set attrId(value: Types.ObjectId) {
        this.model.attrId = value;
    }

    get buildingId(): Types.ObjectId {
        return this.model.buildingId;
    }

    set buildingId(value: Types.ObjectId) {
        this.model.buildingId = value;
    }

    get value(): any {
        return this.model.value;
    }

    set value(value: any) {
        this.model.value = value;
    }
}
