import React, { Component } from 'react';
import './slider.css';
import { data } from './mockdata'
import { IUFCEvents, IUFCEvent } from '../../store/types';
import UfcPreviewCard from './ufc-preview-card';
import { uid } from '../../core/helpers';

interface ISliderState {
    events: IUFCEvent[],

    index: number;
}
class Slider extends Component<any, any> {

    constructor(props: IUFCEvents) {
        super(props);
        this.state = {
            events: [...data.events],
            event: { ...data.events[0] },
            index: 0
        }
    }

    nextProperty = () => {
        this.setState((currentState: ISliderState) => {
            return {
                index: currentState.index + 1,
            }
        })
    }

    prevProperty = () => {
        this.setState((currentState: ISliderState) => {
            return {
                index: currentState.index - 1,
            }
        })
    }

    render() {
        const { events, event, index } = this.state;
        return (
            <div className="App">

                <button
                    onClick={() => this.nextProperty()}
                    disabled={index === events.length - 1}
                >Next</button>
                <button
                    onClick={() => this.prevProperty()}
                    disabled={index === 0}
                >Prev</button>

                <div className="page">
                    <section>
                        <h1>Slider::</h1>
                    </section>

                    <div className="col">
                        <div className={`cards-slider active-slide-${event.id}`}>
                            <div className="cards-slider-wrapper" style={{
                                'transform': `translateX(-${index * (100 / events.length)}%)`
                            }}>
                                {
                                    events.map((event: IUFCEvent) => <UfcPreviewCard key={uid()} isSelected={false} {...event} />)
                                }
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export { Slider }