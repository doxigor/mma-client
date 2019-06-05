import React, { useEffect } from 'react';
interface ISingleEventProps {
    match:{
        params: {
            id:number
        }
    }
}

const SingleEvent: React.FC<ISingleEventProps> = (props: ISingleEventProps) => {

//   useEffect(() => {
//     props.getEvents();
//   }, []);

  return (
    <div className="page">
        <h1>Single Event</h1>
    </div>
  );
}

export default SingleEvent;