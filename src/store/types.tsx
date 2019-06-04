// Describing the shape of the system's slice of state
export interface IUFCFighter {
  name: string;
  id: number;
  victories: string[],
  isChampion: boolean;
}

export interface IUFCCard {
  fighter: IUFCFighter;
  fighter2: IUFCFighter;
  rounds: number;
  isChampionFight: boolean; 
}

export interface IUFCEvent {
  id: number;
  title: string;
  city: string;
  card: IUFCCard;
  promoImg: string;
}

export interface IUFCEvents {
  events: IUFCEvent[] | null;
  error?: string;
}

export interface IEventsAction {
    id: number,
    type?: string,
    payload?: any
  }

export interface IMainPage {
    id: number,
    type?: string,
    payload?: number 
  }

export interface IFighterState {
    name: string;
  }

export interface IGenericAction {
  name: string;
  payload: any;
}
  
export const LOAD_EVENTS = "LOAD_EVENTS";
export const LOAD_EVENT = "LOAD_EVENTS";
export const LOAD_FIGHTER = "LOAD_FIGHTER";
export const LOAD_CARD = "LOAD_CARD";
