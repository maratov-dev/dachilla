import { Types } from 'mongoose';

export interface BookingModel {
    userId: Types.ObjectId;
    buildingId: Types.ObjectId;
    date: BookingDate;
    type: BookingType;
}

export type BookingDate = {
    from: Date;
    to: Date | null;
};

export enum BookingType {
    SHORT = 'short',
    LONG = 'long',
}
