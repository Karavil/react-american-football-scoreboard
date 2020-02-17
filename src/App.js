//TODO: STEP 1 - Import the useState hook.
import React from "react";

import "./App.css";
import Scoreboard from "./components/Scoreboard";
import Buttons from "./components/Buttons";





class App extends React.Component {
   //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
   constructor() {
      super();
      this.state = {
         home: {
            name: "Lions",
            score: 0
         },
         away: {
            name: "Tigers",
            score: 0
         }
      }
   }

   increaseHomeScore = (amount) => {
      this.setState({
         home: {
            name: this.state.home.name,
            score: this.state.home.score + amount
         }
      });
   }

   increaseAwayScore = (amount) => {
      this.setState({
         away: {
            name: this.state.away.name,
            score: this.state.away.score + amount
         }
      });
   }



   render() {
      return (
         <div className="container">
            <Scoreboard home={this.state.home} away={this.state.away}></Scoreboard>
            <Buttons increaseHomeScore={this.increaseHomeScore} increaseAwayScore={this.increaseAwayScore}></Buttons>
         </div>
      );
   }

}

export default App;
