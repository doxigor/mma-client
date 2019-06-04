
import { IUFCEvents, LOAD_EVENTS, IEventsAction } from './types';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { Dispatch } from 'redux';
import { ActionCreator } from 'redux';


const initialState: IUFCEvents = {
    events: []
};

export function homeReducer(state = initialState, action: IEventsAction): IUFCEvents {
  switch (action.type) {
    case LOAD_EVENTS: {
      return {
        ...state,
      };
    }
    default: 
      return state;
  }
}