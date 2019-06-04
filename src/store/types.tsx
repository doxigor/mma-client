// Describing the shape of the system's slice of state
export interface IEventsState {
    eventName: string
  }

export interface IEventsAction {
    id: number,
    type?: string,
    payload?: number 
  }

export interface IFighterState {
    name: string;
  }
  
export const LOAD_EVENTS = "UPDATE_SESSION";
export const LOAD_FIGHTER = "UPDATE_SESSION";
