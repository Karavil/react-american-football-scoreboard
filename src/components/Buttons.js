import React from "react";

export class Buttons extends React.Component {
   render() {
      return (<section className="buttons">
         <div className="homeButtons">
            <button className="homeButtons__touchdown" onClick={() => this.props.increaseHomeScore(7)}>Home Touchdown</button>
            <button className="homeButtons__fieldGoal" onClick={() => this.props.increaseHomeScore(3)}>Home Field Goal</button>
         </div>
         <div className="awayButtons">
            <button className="awayButtons__touchdown" onClick={() => this.props.increaseAwayScore(7)}>Away Touchdown</button>
            <button className="awayButtons__fieldGoal" onClick={() => this.props.increaseAwayScore(3)}>Away Field Goal</button>
         </div>
      </section>);
   }
}

