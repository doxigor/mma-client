import { Dispatch, Reducer } from 'redux';
import { IUFCEvents, IUFCEvent, LOAD_EVENTS, IEventsAction, HTTP_ERROR, EventsActions } from './types';
import { IHttpResponse, http } from '../core/http';
import { apiRoutes } from '../core/api-routes';

const initialState: IUFCEvents = {
  events: [],
  error: ''
};

export const eventsReducer: Reducer<IUFCEvents, EventsActions> =
  (
    state: IUFCEvents = initialState,
    action: IEventsAction
  ) => {
    switch (action.type) {
      case LOAD_EVENTS: {
        return {
          ...state,
          events: [...action.payload]
        }
      }
      default:
        return { ...state };
    }
  };

// export function eventsReducer(state = initialState, action: IEventsAction): IUFCEvents {
//   switch (action.type) {
//     case LOAD_EVENTS: {
//       return {
//         ...state,
//         events: [...action.payload]
//       }; 
//     }
//     case HTTP_ERROR: {
//       return {
//         ...state,
//         error: "loading error"
//       }; 
//     }
//     default: 
//       return state;
//   }
// }


export const getEvents = () => {
  return async (dispatch: Dispatch<any>): Promise<any> => {
    let response: IHttpResponse<IUFCEvent[]>;
    try {
      response = await http<IUFCEvent[]>(apiRoutes.eventsPage);
      dispatch({
        type: LOAD_EVENTS, payload: response.parsedBody
      })
    } catch (response) {
      dispatch({ type: HTTP_ERROR })
    }
  }
}