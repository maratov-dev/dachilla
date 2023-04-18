import { BaseEntity } from './baseEntity';
import { Lang } from '../commonTypes/lang';
import { CategoryModel, CategoryType } from '../models/category';

export class CategoryEntity extends BaseEntity<CategoryModel> implements CategoryModel {
    get parentId(): string {
        return this.model.parentId;
    }

    set parentId(value: string) {
        this.model.parentId = value;
    }

    get title(): Lang {
        return this.model.title;
    }

    set title(value: Lang) {
        this.model.title = value;
    }

    get type(): CategoryType {
        return this.model.type;
    }

    set type(value: CategoryType) {
        this.model.type = value;
    }
}
