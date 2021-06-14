import React, { Component } from "react";
import "../left.css";

class Card_covid_left extends Component {
 constructor(props) {
  super(props);
 }
 render() {
  return (
   <>
    <div className="container-fluid mt-3">
     <div className="row row-cols-4 ">
      <div className="col-3 statcard p-0 statcard">
       <div className="card border-0 text-center">
        <div className="card-body_confirmed text-danger">
         <h4 className="card_title card_confirmed mb-4 font-weight-bold">Confirmed</h4>
         <h4 className="card_increase card_confirmed font-weight-normal">
          +
          {this.props.data.cases_time_series[
           Object.keys(this.props.data.cases_time_series).length - 1
          ].dailyconfirmed
           .toString()
           .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
         </h4>
         <h2 className="card_result card_confirmed font-weight-bold">
          {this.props.data.cases_time_series[
           Object.keys(this.props.data.cases_time_series).length - 1
          ].totalconfirmed
           .toString()
           .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
         </h2>
        </div>
       </div>
      </div>
      <div className="col-3 statcard p-0">
       <div className="card border-0 text-center">
        <div className="card-body_active text-primary ">
         <h4 className="card_title card_active mb-4 font-weight-bold">Active</h4>
         <h4 className="card_increase card_active font-weight-normal">&nbsp;</h4>
         <h2 className="card_result card_active font-weight-bold">
          {this.props.data.statewise[0].active.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
         </h2>
        </div>
       </div>
      </div>
      <div className="col-3 statcard p-0">
       <div className="card border-0 text-center">
        <div className="card-body_recovered text-success ">
         <h4 className="card_title card_recovered mb-4 font-weight-bold">Recovered</h4>
         <h4 className="card_increase card_recovered font-weight-normal">
          +
          {this.props.data.cases_time_series[
           Object.keys(this.props.data.cases_time_series).length - 1
          ].dailyrecovered
           .toString()
           .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
         </h4>
         <h2 className="card_result card_recovered font-weight-bold">
          {this.props.data.cases_time_series[
           Object.keys(this.props.data.cases_time_series).length - 1
          ].totalrecovered
           .toString()
           .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
         </h2>
        </div>
       </div>
      </div>
      <div className="col-3 statcard p-0">
       <div className="card border-0 text-center">
        <div className="card-body_deceased text-secondary ">
         <h4 className="card_title card_deceased mb-4 font-weight-bold">Deceased</h4>
         <h4 className="card_increase card_deceased font-weight-normal">
          {this.props.data.cases_time_series[
           Object.keys(this.props.data.cases_time_series).length - 1
          ].dailydeceased
           .toString()
           .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
         </h4>
         <h2 className="card_result card_deceased font-weight-bold">
          {this.props.data.cases_time_series[
           Object.keys(this.props.data.cases_time_series).length - 1
          ].totaldeceased
           .toString()
           .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
         </h2>
        </div>
       </div>
      </div>
     </div>
     <h4 className="vaccineHead">
      {this.props.data.tested[Object.keys(this.props.data.tested).length - 1].totalindividualsvaccinated
       .toString()
       .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
      total individuals vaccinated
     </h4>
    </div>
   </>
  );
 }
}
export default Card_covid_left;
