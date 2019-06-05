import React from 'react';
import { IUFCEvent } from '../../store/types';
import UfcEventPlaceholder from './event';
import { uid as idGenerator} from './../../core/helpers';

interface IUfcEventsProps {
    ufcEvents?: any
}

const UfcEventsPlaceholder: React.FC<IUfcEventsProps> = (props: IUfcEventsProps) => {
    const noEvents = () => (<><h2>Sorry, no events at this time</h2></>);
    const loaddedEvents = (events: IUFCEvent[]) => (
        <div>
            <h1>Actual UFC events</h1>
            {events.map( event => {
                const id:string = idGenerator();
                return <UfcEventPlaceholder {...event} key={id} />
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