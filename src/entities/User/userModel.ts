import {FormValues} from 'src/pages/RegisterPage/ui/RegisterPage.tsx';

export type User = {
    content: {
        achievements: {
            description: string;
            image: string;
            title: string;
        }[];
        avatarId: number;
        faculty: string;
        messengerLink: string;
        points: number;
        userName: {
            email: string;
            username: string;
        };
    };
};

export type RegisterData = Omit<FormValues, 'token'>;

export type Token = {
    token: string;
};

export type LoginData = {
    email: string;
    password: string;
};
