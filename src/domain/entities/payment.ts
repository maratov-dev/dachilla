import { Types } from 'mongoose';
import { BaseEntity } from './baseEntity';
import { PaymentModel, PaymentStatuses, PaymentTypes } from '../models/payment';

export class PaymentEntity extends BaseEntity<PaymentModel> implements PaymentModel {
    get amount(): number {
        return this.model.amount;
    }

    set amount(value: number) {
        this.model.amount = value;
    }

    get buildingId(): Types.ObjectId {
        return this.model.buildingId;
    }

    set buildingId(value: Types.ObjectId) {
        this.model.buildingId = value;
    }

    get canceledAt(): Date {
        return this.model.canceledAt;
    }

    set canceledAt(value: Date) {
        this.model.canceledAt = value;
    }

    get paymentType(): PaymentTypes {
        return this.model.paymentType;
    }

    set paymentType(value: PaymentTypes) {
        this.model.paymentType = value;
    }

    get performedAt(): Date {
        return this.model.performedAt;
    }

    set performedAt(value: Date) {
        this.model.performedAt = value;
    }

    get status(): PaymentStatuses {
        return this.model.status;
    }

    set status(value: PaymentStatuses) {
        this.model.status = value;
    }

    get userId(): Types.ObjectId {
        return this.model.userId;
    }

    set userId(value: Types.ObjectId) {
        this.model.userId = value;
    }
}
