import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { getEvents } from './../../store/EventsReducer';

import { ThunkDispatch } from 'redux-thunk'
import { Container, Typography } from '@material-ui/core';
import ErrorInfos from '../../Ui/error';
import UfcEventsPlaceholder from '../../Ui/events/events';

const Events: React.FC = (props: any) => {

  useEffect(() => {
    props.getEvents();
  }, []);
  
  return (
    <div className="page">
      <React.Fragment>
        <Container maxWidth="xl">
          <Typography component="div">
            <h1>Events</h1>
            <UfcEventsPlaceholder ufcEvents={props.events} />
            <ErrorInfos genericError={props.error} />
          </Typography>
        </Container>
      </React.Fragment>
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  events: state.events.events,
  eventsError: state.events.error
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, any>) => ({
  getEvents: () => dispatch(getEvents())
});

export default connect(
  mapStateToProps, mapDispatchToProps
)(Events);
