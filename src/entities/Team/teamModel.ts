export type Team = {
    members: teamMember[];
    team_achievements: teamAchievement[];
    team_name: 'string';
};

type teamMember = {
    email: string;
    faculty: string;
    messenger_link: string;
    username: string;
};

type teamAchievement = {
    escription: string;
    image: string;
    title: string;
};
