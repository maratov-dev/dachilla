import { Types } from 'mongoose';
import { BaseEntity } from './baseEntity';
import { Lang } from '../commonTypes/lang';
import { BuildingModel, BuildingStatuses } from '../models/building';

export class BuildingEntity extends BaseEntity<BuildingModel> implements BuildingModel {
    get categoryId(): Types.ObjectId {
        return this.model.categoryId;
    }

    set categoryId(value: Types.ObjectId) {
        this.model.categoryId = value;
    }

    get images(): [string] {
        return this.model.images;
    }

    set images(value: [string]) {
        this.model.images = value;
    }

    get slug(): string {
        return this.model.slug;
    }

    set slug(value: string) {
        this.model.slug = value;
    }

    get status(): BuildingStatuses {
        return this.model.status;
    }

    set status(value: BuildingStatuses) {
        this.model.status = value;
    }

    get tag(): string {
        return this.model.tag;
    }

    set tag(value: string) {
        this.model.tag = value;
    }

    get title(): Lang {
        return this.model.title;
    }

    set title(value: Lang) {
        this.model.title = value;
    }

    get userId(): Types.ObjectId {
        return this.model.userId;
    }

    set userId(value: Types.ObjectId) {
        this.model.userId = value;
    }
}
