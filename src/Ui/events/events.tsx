import React from 'react';
import { IUFCEvent } from '../../store/types';
import UfcEventPlaceholder from './event';

interface IUfcEventsProps {
    ufcEvents?: any
}

const UfcEventsPlaceholder: React.FC<IUfcEventsProps> = (props: IUfcEventsProps) => {
    const noEvents = () => (<><h2>Sorry, no events at this time</h2></>);
    const loaddedEvents = (events: IUFCEvent[]) => (
        <div>
            <h1>I am events placeholder</h1>
            {events.map( event => {
                return <UfcEventPlaceholder {...event} key="" />
            })}
        </div>
    );
    return (
        <div className="promo page">
            {
                props.ufcEvents && props.ufcEvents.length > 1 
                ? loaddedEvents(props.ufcEvents) 
                : noEvents()
            }
        </div>
    );
}
export default UfcEventsPlaceholder;