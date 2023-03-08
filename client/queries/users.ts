import {gql} from "@apollo/client";

interface User {
    id: number;
    email: string;
}

export interface UserData {
    user: User;
}

export interface UserVars {
}

export const GET_USER = gql`
    query GetUser {
        user {
            id
            email
        }
    }
`