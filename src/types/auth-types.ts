export interface registerPayload {
    username: string;
    password: string;
    firstName: string;
    lastName?: string;
    email: string;
    gender: string;
}
export interface loginPayload {
    username: string;
    password: string;
}
