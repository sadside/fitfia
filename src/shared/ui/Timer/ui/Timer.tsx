import styles from './Timer.module.scss';
import {createTimeModel, useTimeModel} from 'react-compound-timer';
import {useAppDispatch} from 'src/shared/utils/hooks/redux.ts';
import {useEffect} from 'react';
import {getStageInfoThunk} from 'src/entities/Stage/stageThunks.ts';

interface TimerProps {
    className?: string;
    date: string;
}

const timer = createTimeModel({
    initialTime: Date.parse('04 Nov 2023 00:00:00 GMT+7') - Date.now(),
    direction: 'backward',
});

export const Timer = ({}: TimerProps) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getStageInfoThunk());
    }, []);

    const {value} = useTimeModel(timer);
    // const endDate = useAppSelector(state => state.stage.currentStage?.endDate);

    const days = value.d ? `${value.d}-` : '';

    return (
        <div className={styles.wrapper}>
            <div
                className={
                    styles.numbers
                }>{`${days}${value.h}-${value.m}-${value.s}`}</div>
            <div className={styles.text}>до конца этапа</div>
        </div>
    );
};
