export interface registerPayload {
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    gender: string;
}
export interface loginPayload {
    username: string;
    password: string;
}