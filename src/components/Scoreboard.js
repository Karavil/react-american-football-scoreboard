import React from "react";
import Clock from 'react-live-clock';
import BottomRow from "./BottomRow";

class Scoreboard extends React.Component {
   render() {
      return (<section className="scoreboard">
         <div className="topRow">
            <div className="home">
               <h2 className="home__name">{this.props.home.name}</h2>
               <div className="home__score">{this.props.home.score}</div>
            </div>
            <div className="timer"><Clock format={'mm:ss'} ticking={true} date={'0'} /></div>
            <div className="away">
               <h2 className="away__name">{this.props.away.name}</h2>
               <div className="away__score">{this.props.away.score}</div>
            </div>
         </div>
         <BottomRow />
      </section>);
   }
}

export default Scoreboard;
