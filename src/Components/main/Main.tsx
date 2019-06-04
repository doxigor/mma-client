import React from 'react';
import Header from '../../Ui/header/Header';
import { connect } from "react-redux";

const Main: React.FC = (props) => {

  return (
    <div className="promo page">
        <Header promoImg="https://ufc-video.s3.amazonaws.com/styles/background_image_xl/s3/2019-05/UFC_238_EVENT_HERO.jpg?GwDl.BDm2N77Jl0roOk9knmqzUuj2UiD&itok=R4AipfvC" />
        <h1>main Page!!!</h1>
    </div>
  );
}

//export default Main;

const mapStateToProps = (state:any) => ({
  events: state.events
});

const mapDispatchToProps = (state:any) => ({
  getData: () =>{alert('dfg')}
});

export default connect(
  mapStateToProps, mapDispatchToProps
)(Main);
