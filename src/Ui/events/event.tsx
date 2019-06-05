import React from 'react';
import { IUFCEvent } from '../../store/types';

interface IUfcEventProps {
    ufcEvent: IUFCEvent
}

const UfcEventPlaceholder: React.FC<IUFCEvent> = (props: IUFCEvent) => {

    const style = { border: "1px solid silver" }

    return (
        <div className="promo page" style={style}>
            <ul>
                <li>Event name: {props.title}</li>
                <li>Event city: {props.city}</li>
            </ul>
        </div>
    );
}

export default UfcEventPlaceholder;
