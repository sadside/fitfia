type User = {
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
