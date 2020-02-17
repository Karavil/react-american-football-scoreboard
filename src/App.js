//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

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
         },
         timer: 0
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
            <section className="scoreboard">
               <div className="topRow">
                  <div className="home">
                     <h2 className="home__name">{this.state.home.name}</h2>
                     <div className="home__score">{this.state.home.score}</div>
                  </div>
                  <div className="timer">00:03</div>
                  <div className="away">
                     <h2 className="away__name">{this.state.away.name}</h2>
                     <div className="away__score">{this.state.away.score}</div>
                  </div>
               </div>
               <BottomRow />
            </section>
            <section className="buttons">
               <div className="homeButtons">
                  {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
                  <button className="homeButtons__touchdown" onClick={() => this.increaseHomeScore(7)}>Home Touchdown</button>
                  <button className="homeButtons__fieldGoal" onClick={() => this.increaseHomeScore(3)}>Home Field Goal</button>
               </div>
               <div className="awayButtons">
                  <button className="awayButtons__touchdown" onClick={() => this.increaseAwayScore(7)}>Away Touchdown</button>
                  <button className="awayButtons__fieldGoal" onClick={() => this.increaseAwayScore(3)}>Away Field Goal</button>
               </div>
            </section>
         </div>
      );
   }

}

export default App;
