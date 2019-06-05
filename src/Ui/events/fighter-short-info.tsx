import React from 'react';
import { IFighterRecord } from '../../store/types';

const FighterShortInfo: React.FC<IFighterRecord> = (props: IFighterRecord) => {
    const { record, lastFight, country, height } = props;
    return (
        <>
            <li><b>Record:</b> {record}</li>
            <li><b>Last fight:</b> {lastFight}</li>
            <li><b>Country:</b> {country}</li>
            <li><b>Height: </b>{height}</li>
        </>
    );
}
export default FighterShortInfo;

