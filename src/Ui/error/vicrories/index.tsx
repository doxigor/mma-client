import React from 'react';
import { uid } from '../../../core/helpers';

export interface IInlineVictories{
    victories: string[];
}

const InlineVictoriesList: React.FC<IInlineVictories> = (props: IInlineVictories) => {
    return(<span>
        {props.victories.map( (victory) => <i key={uid()}>{victory}</i>)}
    </span>)
}

export { InlineVictoriesList }
