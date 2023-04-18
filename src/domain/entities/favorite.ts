import { Types } from 'mongoose';
import { BaseEntity } from './baseEntity';
import { FavoriteModel } from '../models/favorite';

export class FavoriteEntity extends BaseEntity<FavoriteModel> implements FavoriteModel {
    get buildingId(): Types.ObjectId {
        return this.model.buildingId;
    }

    set buildingId(value: Types.ObjectId) {
        this.model.buildingId = value;
    }

    get userId(): Types.ObjectId {
        return this.model.userId;
    }

    set userId(value: Types.ObjectId) {
        this.model.userId = value;
    }
}
