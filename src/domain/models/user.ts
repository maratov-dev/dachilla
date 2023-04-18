export type UserPersonalData = {
    firstName: string | null;
    lastName: string | null;
    dob: Date;
    address: string | null;
};

export interface UserModel {
    personalData: UserPersonalData;
    status: boolean;
    phone: string | null;
    email: string | null;
}
