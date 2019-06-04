import React from 'react';
import { connect } from "react-redux";

const Events: React.FC = (props) => {
    console.log(props);
  return (
    <div className="page">
        <h1>Events!!!</h1>
    </div>
  );
}

const mapStateToProps = (state:any) => ({
    events: state.events
  });
  
  export default connect(
    mapStateToProps, 
  )(Events);
