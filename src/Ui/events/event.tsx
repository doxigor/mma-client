import React from 'react';
import { IUFCEvent } from '../../store/types';
import { InlineVictoriesList } from '../error/vicrories';
import { Link } from 'react-router-dom';
import FighterShortInfo from './fighter-short-info';

interface IUfcEventProps {
    ufcEvent: IUFCEvent
}

const UfcEventPlaceholder: React.FC<IUFCEvent> = (props: IUFCEvent) => {

    const { title, city, card, id, promoImg } = props;
    const style = { border: card.isChampionFight ? '1px solid gold' : '1px solid silver' }

    return (
        <div className="single-ufc-event" style={style}>
            <div className="ufc-event-title">
                <h1>{title} in {city} :: {card.fighter.name} VS {card.fighter2.name}</h1>
            </div>
            <div>
                <ul className="event-fighters-info">
                    <li><img src={card.fighter.img} /></li>
                    <li><b>Significant victories:</b> <InlineVictoriesList victories={card.fighter.victories} /></li>
                    <FighterShortInfo {...card.fighter.meta} />
                </ul>
            </div>
            <div className="ufc-event-vs"> Light weight </div>
            <div>
                <ul className="event-fighters-info">
                    <li><img src={card.fighter2.img} /></li>
                    <li><b>Significant victories:</b> <InlineVictoriesList victories={card.fighter.victories} /></li>
                    <FighterShortInfo {...card.fighter2.meta} />
                </ul>
            </div>
            <div className="ufc-event-visit-link">
                <Link to={{
                    pathname: `/event/${id}`,
                    state: {
                        id: id
                    }
                }}>
                    Visit Event
                </Link>
            </div>
            
        </div>
    );
}

export default UfcEventPlaceholder;
