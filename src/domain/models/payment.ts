import { Types } from 'mongoose';

export interface PaymentModel {
    userId: Types.ObjectId;
    buildingId: Types.ObjectId;
    status: PaymentStatuses;
    paymentType: PaymentTypes;
    amount: number;
    performedAt: Date;
    canceledAt: Date;
}

export enum PaymentStatuses {
    PENDING = 1,
    DONE = 2,
    CANCELED = 3,
}

export enum PaymentTypes {
    CARD = 1,
    CASH = 2,
    PAYME = 3,
    CLICK = 4,
    UZUM = 5,
}
