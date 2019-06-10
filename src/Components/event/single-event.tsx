import React from "react";
import { useFetchEvent } from "../../core/helpers";
import { IUFCEvent, IUFCFighterInfo } from "../../store/types";
import { SingleBarChart, CircleChart } from "../../Ui/charts";
import { FightersRecord } from "../../Ui/records";
import { Container, Typography } from "@material-ui/core";

interface ISingleEventProps {
  match: {
    params: {
      id: number;
    };
  };
}

const SingleEvent: React.FC<ISingleEventProps> = (props: ISingleEventProps) => {
  const { event, fighter, fighter2 } = useFetchEvent(props.match.params.id);

  const loadedEvent = (
    event: IUFCEvent,
    fighter2: IUFCFighterInfo,
    fighter: IUFCFighterInfo
  ) => {
    const { title } = event;
    return (
      <div className="page">
      <React.Fragment>
        <Container maxWidth="lg">
          <Typography component="div">
            <h1>Events</h1>
            <div>
              <div className="single-event-page">
                <FightersRecord fighter1={fighter} fighter2={fighter2}/>
                <span>{fighter.name} VS {fighter2.name}</span>
              </div>
            </div>
          </Typography>
        </Container>
      </React.Fragment>
    </div>
    );
  };

  return (
    <div className="page">
      {event && fighter && fighter2 ? (
        loadedEvent(event, fighter, fighter2)
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default SingleEvent;
