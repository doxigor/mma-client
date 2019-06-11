import React from 'react';
import { shallow, mount, render, ShallowWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import {FightersGreppling, IFightersRecorder} from './index';

configure({ adapter: new Adapter() });

describe("Header test", () => {
    let wrapper: ShallowWrapper<IFightersRecorder, null>;
    let fakeRecord: IFightersRecorder = {
        "fighter1": {
          "id": 2,
          "name": "Marlon Moraes",
          "record": "15-0-1",
          "lastFight": 1,
          "country": "South Korea",
          "height": "5.11",
          "weight": 155,
          "reach": 120,
          "legReach": 160,
          "wins": {
            "ko_tko": 10,
            "sub": 3,
            "dec": 54,
            "avgFightTime": 11,
            "knockDownAttempt": 2
          },
          "significantStrikes": {
            "landedPerMinute": 11,
            "significantStrikes": 10,
            "absorbedPerMinute": 16,
            "defense": 44
          },
          "grappling": {
            "takedownAvg": 2,
            "takedownAcc": 2,
            "takedownDefence": 0.4,
            "submission": 3
          }
        },
        "fighter2": {
          "id": 1,
          "name": "Henry Tsehudo",
          "record": "15-0-1",
          "lastFight": 1,
          "country": "South Korea",
          "height": "5.11",
          "weight": 155,
          "reach": 120,
          "legReach": 160,
          "wins": {
            "ko_tko": 14,
            "sub": 4,
            "dec": 4,
            "avgFightTime": 11,
            "knockDownAttempt": 2
          },
          "significantStrikes": {
            "landedPerMinute": 6,
            "significantStrikes": 14,
            "absorbedPerMinute": 16,
            "defense": 60
          },
          "grappling": {
            "takedownAvg": 2,
            "takedownAcc": 0.6,
            "takedownDefence": 1,
            "submission": 1
          }
        }
      }
    beforeEach( ()=> {
        wrapper= shallow(<FightersGreppling {...fakeRecord}/>);
    })

    describe('Records test:', ()=>{
        it('should have 6 children', ()=>{
            expect(wrapper.find("div.fighter-summary-record-row").length).toBe(4);
        });
    });

})

