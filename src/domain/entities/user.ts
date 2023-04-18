import { BaseEntity } from './baseEntity';
import { UserModel, UserPersonalData } from '../models/user';

export class UserEntity extends BaseEntity<UserModel> implements UserModel {
    get email(): string | null {
        return this.model.email;
    }

    set email(value: string | null) {
        this.model.email = value;
    }

    get personalData(): UserPersonalData {
        return this.model.personalData;
    }

    set personalData(value: UserPersonalData) {
        this.model.personalData = value;
    }

    get phone(): string | null {
        return this.model.phone;
    }

    set phone(value: string | null) {
        this.model.phone = value;
    }

    get status(): boolean {
        return this.model.status;
    }

    set status(value: boolean) {
        this.model.status = value;
    }
}
