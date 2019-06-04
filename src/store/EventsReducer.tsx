
import { IEventsState, LOAD_EVENTS, IEventsAction } from './types';

const initialState: IEventsState = {
    eventName: 'Some Event'
};

export function eventsReducer(state = initialState, action: IEventsAction): IEventsState {
  switch (action.type) {
    case LOAD_EVENTS: {
      console.log('Loading actions');  
      return {
        ...state,
      };
    }
    default: 
      return state;
  }
}
