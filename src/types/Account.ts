export interface UserState{
    id: string | null;
    email: string | null;
    type : "customer" | "contributor"
}