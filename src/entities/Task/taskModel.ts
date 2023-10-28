export type Task = {
    id: number;
    isDaily: boolean;
    positionX: number;
    positionY: number;
    potentialPoints: string;
    status: string;
    title: string;
};

export interface TasksStages {
    [CLIENT_STAGES.ZERO]: Task[];
    [CLIENT_STAGES.ONE]: Task[];
    [CLIENT_STAGES.TWO]: Task[];
}

export enum CLIENT_STAGES {
    ONE = 'ONE',
    TWO = 'TWO',
    ZERO = 'ZERO',
}

export enum STAGES {
    DEVELOPE = 'DEVELOP',
    ONE = 'ONE',
    TEAMS_JOINING = 'TEAMS_JOINING',
    THREE = 'THREE',
    TWO = 'TWO',
    ZERO = 'ZERO',
}
