import styles from './StageCounter.module.scss';
import {FC} from 'react';
import {setCurrentMenuStage} from 'src/entities/Task/taskSLice.ts';
import {useAppDispatch, useAppSelector} from 'src/shared/utils/hooks/redux.ts';
import {CLIENT_STAGES} from 'src/entities/Task/taskModel.ts';

interface StageCounterProps {
    stage: CLIENT_STAGES;
}

export const StageCounter: FC<StageCounterProps> = ({stage}) => {
    const dispatch = useAppDispatch();
    const currentStage = useAppSelector(state => state.tasks.menuCurrentStage);

    const handleCLick = () => {
        dispatch(setCurrentMenuStage(stage));
    };

    return (
        <div
            className={`${styles.stageSquare} ${
                currentStage === stage && styles.active
            }`}
            onClick={handleCLick}>
            <div className={styles.stageText}>{stage}</div>
        </div>
    );
};
