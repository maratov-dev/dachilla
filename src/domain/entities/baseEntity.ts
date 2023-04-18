import { injectable } from 'inversify';
import { HydratedDocument } from 'mongoose';

@injectable()
export class BaseEntity<T> {
    protected model: HydratedDocument<T>;

    constructor(model: HydratedDocument<T>) {
        this.model = model;
    }
}
