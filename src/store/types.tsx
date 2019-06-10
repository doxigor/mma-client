import { Action } from "redux";

// Describing the shape of the system's slice of state

export interface IFighterRecord {
  record: string;
  lastFight: string;
  country: string;
  height: string;
  weight: string;
  reach: string;
  legReach: string;
}

export interface IUFCFighter {
  name: string;
  id: number;
  victories: string[];
  isChampion: boolean;
  img: string;
  meta: IFighterRecord;
}

export interface IUFCFighterInfo {
  id: number;
  name: string;
  record: string;
  lastFight: number;
  country: string;
  height: string;
  weight: number;
  reach: number;
  legReach: 160;
  wins: {
    ko_tko: number;
    sub: number;
    dec: number;
    avgFightTime: number;
    knockDownAttempt: number;
  };
  significantStrikes: {
    landedPerMinute: number;
    significantStrikes: number;
    absorbedPerMinute: number;
    defense: number;
  };
  grappling: {
    takedownAvg: number;
    takedownAcc: number;
    takedownDefence: number;
    submission: number;
  };
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
  date: number;
  card: IUFCCard;
  promoImg: string;
  rounds: number;
  isChampionFight: boolean;
  weight: string;
}
export interface IUFCEvents {
  events: IUFCEvent[] | null;
  error?: string;
}

export interface IEventsAction {
  type: string;
  payload?: any;
}

export interface IMainPage {
  id: number;
  type?: string;
  payload?: number;
}

export interface IFighterState {
  name: string;
}

export interface IGenericAction {
  name: string;
  payload: any;
}

export const LOAD_EVENTS = "LOAD_EVENTS";
export const LOAD_EVENT = "LOAD_EVENT";
export const HTTP_ERROR = "HTTP_LOADING_ERROR";
export const LOAD_FIGHTER = "LOAD_FIGHTER";
export const LOAD_CARD = "LOAD_CARD";

export interface LOAD_EVENTS extends Action<"LOAD_EVENTS"> {
  result: IUFCEvent[];
  payload?: any;
}

export type EventsActions = LOAD_EVENTS;
