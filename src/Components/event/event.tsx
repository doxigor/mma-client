import React, { useEffect } from "react";
import { useFetchEvent } from "../../core/helpers";
import { IUFCEvent, IUFCFighterInfo } from "../../store/types";
import { SingleBarChart, CircleChart } from "../../Ui/charts";

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
      <div>
        Event {title} is loaded!
        <div>
          <span>
            {fighter.name} VS {fighter2.name}
          </span>{" "}
          <SingleBarChart a={10} b={2} />
          <CircleChart a={15} b={25} label={"TKO"} />
        </div>
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
