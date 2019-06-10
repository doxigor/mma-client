import { useState, useEffect } from 'react';
import { httpGet } from '../http';
import { IUFCEvent, IUFCFighterInfo } from '../../store/types';
import { apiRoutes } from '../api-routes';

function uid(): string {
    return Math.random().toString(36).substr(2, 9);
}

const useFetchEvent = (eventId: number) => {
    const [event, setEvent] = useState<IUFCEvent>();
    const [fighter, setFighter] = useState<IUFCFighterInfo>();
    const [fighter2, setFighter2] = useState<IUFCFighterInfo>();
    useEffect(() => {
        (async () => {
            let eventResponse: IUFCEvent;
            let eventUrl = apiRoutes.eventPage(eventId);
            let fighterResponse: IUFCFighterInfo;

            let id:number;
            let id2: number;
            eventResponse = <IUFCEvent>(await httpGet<IUFCEvent>(eventUrl)).parsedBody;

            setEvent(eventResponse);

            id = eventResponse.card.fighter.id;
            id2 = eventResponse.card.fighter2.id;

            fighterResponse = <IUFCFighterInfo>(await httpGet<IUFCFighterInfo>
                (apiRoutes.fighterPage(id))).parsedBody;

            setFighter(fighterResponse);

            fighterResponse =<IUFCFighterInfo>(await httpGet<IUFCFighterInfo>
                (apiRoutes.fighterPage(id2))).parsedBody;
            setFighter2(fighterResponse);
        })();
    }, [eventId]);
    return {event, fighter, fighter2};
};


export { uid, useFetchEvent }

