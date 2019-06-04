import React, {useEffect} from 'react';
import { connect } from "react-redux";
import { getEvents, eventsReducer } from './../../store/EventsReducer'; 

//import { Dispatch } from 'redux';
import { ThunkDispatch } from 'redux-thunk'
const Events: React.FC = (props: any) => {

  useEffect( () => {
    props.getEvents();
  }, []);

  return (
    <div className="page">
        <h1>Events *</h1>
        {
          props.events.length ? <h2>{props.events[0].title}</h2> : <h2>Loading...</h2>
        }
         {
          props.events.error ? <h2>Some error</h2> : null
        }
    </div>
  );
}

const mapStateToProps = (state:any) => ({
    events:  state.events.events
  });

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, any>) => ({
  getEvents: ()=> dispatch(getEvents())
});  
  
export default connect(
    mapStateToProps, mapDispatchToProps
  )(Events);
