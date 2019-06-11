
import React from 'react';
import { IUFCEvent } from '../../store/types';

interface IUFCPReviewCard extends IUFCEvent {
    isSelected: boolean;
}

const UfcPreviewCard: React.FC<IUFCPReviewCard> = (props: IUFCPReviewCard) => {
    const {
        id,
        title,
        city,
        date,
        card,
        promoImg,
        rounds,
        isChampionFight,
        weight,
        isSelected 
    } = props;
    const onSelectedCard =() => {
        alert('loading card');
    }
    return (
        <div className= {isSelected ? "card selected-card" :"card" }>
            <img src={promoImg} alt={city} />
            <div className="details">
                <span className="index">{id + 1}</span>
                <button onClick={() => alert('done')}>Click me</button>
                <p className="location">
                    {city}<br />
                    {rounds}<br />
                    {title}<br />
                </p>
                <ul className="features">
                    <li><span>{city}</span></li>
                    <li><span>{rounds}</span></li>
                    <li><span>{title}</span></li>
                </ul>
            </div>
        </div>
    )
}

export default UfcPreviewCard;

