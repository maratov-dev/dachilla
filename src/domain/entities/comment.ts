import { Types } from 'mongoose';
import { BaseEntity } from './baseEntity';
import { CommentModel } from '../models/comment';

export class CommentEntity extends BaseEntity<CommentModel> implements CommentModel {
    get buildingId(): Types.ObjectId {
        return this.model.buildingId;
    }

    set buildingId(value: Types.ObjectId) {
        this.model.buildingId = value;
    }

    get comment(): string {
        return this.model.comment;
    }

    set comment(value: string) {
        this.model.comment = value;
    }

    get userId(): Types.ObjectId {
        return this.model.userId;
    }

    set userId(value: Types.ObjectId) {
        this.model.userId = value;
    }
}
