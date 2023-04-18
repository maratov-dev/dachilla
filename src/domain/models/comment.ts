import { Types } from 'mongoose';

export interface CommentModel {
    userId: Types.ObjectId;
    buildingId: Types.ObjectId;
    comment: string;
}
