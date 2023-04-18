import { Types } from 'mongoose';

export interface FavoriteModel {
    userId: Types.ObjectId;
    buildingId: Types.ObjectId;
}
