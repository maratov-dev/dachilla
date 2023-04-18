import { Types } from 'mongoose';
import { BaseEntity } from './baseEntity';
import { BookingDate, BookingModel, BookingType } from '../models/booking';

export class BookingEntity extends BaseEntity<BookingModel> implements BookingModel {
    get buildingId(): Types.ObjectId {
        return this.model.buildingId;
    }

    set buildingId(value: Types.ObjectId) {
        this.model.buildingId = value;
    }

    get date(): BookingDate {
        return this.model.date;
    }

    set date(value: BookingDate) {
        this.model.date = value;
    }

    get type(): BookingType {
        return this.model.type;
    }

    set type(value: BookingType) {
        this.model.type = value;
    }

    get userId(): Types.ObjectId {
        return this.model.userId;
    }

    set userId(value: Types.ObjectId) {
        this.model.userId = value;
    }
}
