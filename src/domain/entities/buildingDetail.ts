import { Types } from 'mongoose';
import { BaseEntity } from './baseEntity';
import { Lang } from '../commonTypes/lang';
import { BuildingDetailModel } from '../models/buildingDetail';

export class BuildingDetailEntity extends BaseEntity<BuildingDetailModel> implements BuildingDetailModel {
    get buildingId(): Types.ObjectId {
        return this.model.buildingId;
    }

    set buildingId(value: Types.ObjectId) {
        this.model.buildingId = value;
    }

    get desc(): Lang {
        return this.model.desc;
    }

    set desc(value: Lang) {
        this.model.desc = value;
    }

    get price(): number {
        return this.model.price;
    }

    set price(value: number) {
        this.model.price = value;
    }

    get type(): string {
        return this.model.type;
    }

    set type(value: string) {
        this.model.type = value;
    }
}
