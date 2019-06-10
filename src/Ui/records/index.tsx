import React, { useEffect } from 'react';
import { IUFCFighterInfo } from '../../store/types';
import { SingleBarChart, CircleChart, DoughnutChart } from '../charts';
interface IFightersRecorder{
    fighter1: IUFCFighterInfo,
    fighter2: IUFCFighterInfo
}

interface FighterRecordSummary extends IFightersRecorder{};

const FightersRecordSummary: React.FC<IFightersRecorder> = (props: IFightersRecorder) => {
    const f1:IUFCFighterInfo = props.fighter1;
    const f2:IUFCFighterInfo = props.fighter2;
    return (
        <div className="fighter-summary-record bottom-margin">
            <h1 className="stat-header">MatchUp Stats</h1>
            <div className="fighter-summary-record-row small-record-row"> 
                <div className="red bif">{f1.record}</div>
                <div className="fighter-prop-description">Record</div>
                <div className="blue bif">{f2.record}</div>
            </div>
            <div className="fighter-summary-record-row"> 
                <div className="red medium-bif">{f1.lastFight? <>Won</>: <>lost</>}</div>
                <div className="fighter-prop-description">Last Fight</div>
                <div className="blue medium-bif">{f2.lastFight? <>Won</>: <>lost</>}</div>
            </div>
            <div className="fighter-summary-record-row"> 
                <div className="red style-bif">{f1.country}</div>
                <div className="fighter-prop-description">Country</div>
                <div className="blue style-bif">{f2.country}</div>
            </div>
            <div className="fighter-summary-record-row"> 
                <div className="red">{f1.height}</div>
                <div className="fighter-prop-description">Height</div>
                <div className="blue">{f2.height}</div>
            </div>
            <div className="fighter-summary-record-row"> 
                <div className="red">{f1.weight}</div>
                <div className="fighter-prop-description">Weight</div>
                <div className="blue">{f2.weight}</div>
            </div>
            <div className="fighter-summary-record-row"> 
                <div className="red">{f1.reach}</div>
                <div className="fighter-prop-description">Reach</div>
                <div className="blue">{f2.reach}</div>
            </div>
            <div className="fighter-summary-record-row"> 
                <div className="red">{f1.legReach}</div>
                <div className="fighter-prop-description">Leg reach</div>
                <div className="blue">{f2.legReach}</div>
            </div>
        </div>
    );
};

const FightersWinBySummary: React.FC<IFightersRecorder> = (props: IFightersRecorder) => {
    const f1:IUFCFighterInfo = props.fighter1;
    const f2:IUFCFighterInfo = props.fighter2;
    return (
        <div className="fighter-summary-record bottom-margin">
            <h1 className="stat-header">Win By</h1>
            <div className="fighter-summary-record-row"> 
                <div className="red huge-bif">
                    {f1.wins.ko_tko}
                </div>
                <div className="fighter-prop-description">
                    <div>KO/TKO</div>
                    <SingleBarChart a={f1.wins.ko_tko} b={f2.wins.ko_tko}/>
                </div>
                <div className="blue huge-bif">
                    {f2.wins.ko_tko}
                </div>
            </div>
            <div className="fighter-summary-record-row"> 
                <div className="red">{f1.wins.sub}</div>
                <div className="fighter-prop-description">
                    <div>SUB</div>
                    <SingleBarChart a={f1.wins.sub} b={f2.wins.sub}/>
                </div>
                <div className="blue">{f2.wins.sub}</div>
            </div>
            <div className="fighter-summary-record-row"> 
                <div className="red">{f1.wins.dec}</div>
                <div className="fighter-prop-description">
                    <div>DEC</div>
                    <SingleBarChart a={f1.wins.dec} b={f2.wins.dec}/>
                </div>
                <div className="blue">{f2.wins.dec}</div>
            </div>
            <div className="fighter-summary-record-row"> 
                <div className="red">{f1.wins.avgFightTime}</div>
                <div className="fighter-prop-description">
                    <div>AVG Fight Time</div>
                    <SingleBarChart a={f1.wins.avgFightTime} b={f2.wins.avgFightTime}/>
                </div>
                <div className="blue">{f2.wins.avgFightTime}</div>
            </div>
        </div>
    );
};

const FightersWinByStrikes: React.FC<IFightersRecorder> = (props: IFightersRecorder) => {
    const f1:IUFCFighterInfo = props.fighter1;
    const f2:IUFCFighterInfo = props.fighter2;
    return (
        <div className="fighter-summary-record bottom-margin">
            <h1 className="stat-header">Significant Strikes</h1>
            <div className="fighter-summary-record-row"> 
                <div className="red huge-bif">
                    {f1.significantStrikes.landedPerMinute}
                </div>
                <div className="fighter-prop-description">
                    <div>Landen per minute</div>
                    <CircleChart a={f1.significantStrikes.landedPerMinute} b={f2.significantStrikes.landedPerMinute}/>
                </div>
                <div className="blue huge-bif">
                     {f2.significantStrikes.landedPerMinute}
                </div>
            </div>
            <div className="fighter-summary-record-row"> 
                <div className="red">{f1.significantStrikes.significantStrikes}</div>
                <div className="fighter-prop-description">
                    <div>Significant Strikes</div>
                    <DoughnutChart a={f1.significantStrikes.significantStrikes} b={f2.significantStrikes.significantStrikes}/>
                </div>
                <div className="blue">{f2.significantStrikes.significantStrikes}</div>
            </div>
            <div className="fighter-summary-record-row"> 
                <div className="red">{f1.significantStrikes.absorbedPerMinute}</div>
                <div className="fighter-prop-description">
                    <div>Absorbed per minute</div>
                    <SingleBarChart a={f1.significantStrikes.absorbedPerMinute} b={f2.significantStrikes.absorbedPerMinute}/>
                </div>
                <div className="blue">{f2.significantStrikes.absorbedPerMinute}</div>
            </div>
            <div className="fighter-summary-record-row"> 
                <div className="red">{f1.significantStrikes.defense}</div>
                <div className="fighter-prop-description">
                    <div>Striking defense</div>
                    <CircleChart a={f1.significantStrikes.defense} b={f2.significantStrikes.defense}/>
                </div>
                <div className="blue">{f1.significantStrikes.defense}</div>
            </div>
        </div>
    );
};

const FightersGreppling: React.FC<IFightersRecorder> = (props: IFightersRecorder) => {
    const f1:IUFCFighterInfo = props.fighter1;
    const f2:IUFCFighterInfo = props.fighter2;
    return (
        <div className="fighter-summary-record">
            <h1 className="stat-header">Grappling</h1>
            <div className="fighter-summary-record-row"> 
                <div className="red">
                    {f1.grappling.takedownAvg}
                </div>
                <div className="fighter-prop-description">
                    <div>Takedown avg</div>
                    <CircleChart a={f1.grappling.takedownAvg} b={f2.grappling.takedownAvg}/>
                </div>
                <div className="blue">
                     {f2.grappling.takedownAvg}
                </div>
            </div>
            <div className="fighter-summary-record-row"> 
                <div className="red">{f1.grappling.takedownAcc}</div>
                <div className="fighter-prop-description">
                    <div>Takedown Accuracy</div>
                    <DoughnutChart a={f1.grappling.takedownAcc} b={f2.grappling.takedownAcc}/>
                </div>
                <div className="blue">{f2.grappling.takedownAcc}</div>
            </div>
            <div className="fighter-summary-record-row"> 
                <div className="red">{f1.grappling.takedownDefence}</div>
                <div className="fighter-prop-description">
                    <div>Takedown Defense</div>
                    <SingleBarChart a={f1.grappling.takedownDefence} b={f2.grappling.takedownDefence}/>
                </div>
                <div className="blue">{f2.grappling.takedownDefence}</div>
            </div>
            <div className="fighter-summary-record-row"> 
                <div className="red">{f1.grappling.submission}</div>
                <div className="fighter-prop-description">
                    <div>Submission attempts</div>
                    <CircleChart a={f1.grappling.submission} b={f2.grappling.submission}/>
                </div>
                <div className="blue">{f2.grappling.submission}</div>
            </div>
        </div>
    );
};

const FightersRecord: React.FC<IFightersRecorder> = (props: IFightersRecorder) => {
    const f1:IUFCFighterInfo = props.fighter1;
    const f2:IUFCFighterInfo = props.fighter2;
    return (

        <div className="page fighter-info">
            <div className="fighter-general-record fighter-summary-record-row fighter-small-record-table">
                <div className="fighter-caption red">{f1.name}</div>
                <div>&nbsp;</div>
                <div className="fighter-caption blue">{f2.name}</div>
            </div>
            <FightersRecordSummary fighter1={f1} fighter2 ={f2} />
            <FightersWinBySummary fighter1={f1} fighter2 ={f2} />
            <FightersWinByStrikes fighter1={f1} fighter2 ={f2} />
            <FightersGreppling fighter1={f1} fighter2 ={f2}  />
        </div>
    );
}

export { FightersRecord }
