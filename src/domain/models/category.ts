import { Lang } from '../commonTypes/lang';

export interface CategoryModel {
    title: Lang;
    type: CategoryType;
    parentId: string;
}

export enum CategoryType {
    MAIN = 'main',
    SUB = 'sub',
}
