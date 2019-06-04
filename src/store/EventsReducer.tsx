
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { Dispatch } from 'redux';
import { ActionCreator } from 'redux';

import { IUFCEvents,IUFCEvent, LOAD_EVENTS, IEventsAction } from './types';

const initialState: IUFCEvents = {
    events: []
};

export function eventsReducer(state = initialState, action: IEventsAction): IUFCEvents {
  switch (action.type) {
    case LOAD_EVENTS: {
      return {
        ...state,
        events: [...action.payload]
      }; 
    }
    case "ERROR_ON_EVENTS": {
      console.log("error");
      return {
        ...state,
        error: "loading error"
      }; 
    }
    default: 
      return state;
  }
}


export const getEvents = () => {
  return async (dispatch: Dispatch<any>): Promise<any> => {
  //     const response = await fetch('http://localhost:3000/events');
  //     const data = await response.json();
  //     return dispatch({
  //       type:LOAD_EVENTS,
  //       payload: data
  //     });
  // }



  fetch('http://localhost:3000/events')
  .then(response => response.json())
    .then(data => dispatch({
        type: LOAD_EVENTS,
        payload: data
      }))
    .catch(error => dispatch({
        type: "ERROR_ON_EVENTS",
      })
    );
  }
};