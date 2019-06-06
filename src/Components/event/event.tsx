import React from 'react';
import { useFetchEvent } from '../../core/helpers';
import { apiRoutes } from '../../core/api-routes';
import { IUFCEvent } from '../../store/types';

interface ISingleEventProps {
    match: {
        params: {
            id: number
        }
    }
}

const SingleEvent: React.FC<ISingleEventProps> = (props: ISingleEventProps) => {

    const event: any = useFetchEvent(apiRoutes.eventPage(props.match.params.id.toString()));
    const loadedEvent = (event: IUFCEvent) => {
        const { title } = event;
        return (
            <div>
                Event {title} is loaded!
        </div>
        )
    }

    return (
        <div className="page">
            {
                event ? loadedEvent(event) : null
            }
        </div>
    );
}

export default SingleEvent;