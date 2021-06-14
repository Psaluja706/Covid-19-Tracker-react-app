import React, { Component } from "react";
import Chart from "react-apexcharts";

class NewCases extends Component {
 constructor(props) {
  super(props);
  let smdata = [];

  for (let i = 1; i < 30; i++) {
   var a = Date.parse(
    this.props.data.cases_time_series[Object.keys(this.props.data.cases_time_series).length - (30 - i)]
     .dateymd
   );
   var b = parseInt(
    this.props.data.cases_time_series[Object.keys(this.props.data.cases_time_series).length - (30 - i)]
     .dailyconfirmed
   );
   smdata.push([a, b]);
  }

  this.state = {
   options: {
    colors: ["rgba(96, 173, 255)"],
    chart: {
     background: "rgba(96, 173, 255,0.15)",
     foreColor: "rgba(96, 173, 255)",
     toolbar: {
      show: false,
     },
    },
    dataLabels: {
     enabled: false,
    },
    stroke: {
     curve: "smooth",
    },
    xaxis: {
     type: "datetime",
     tickAmount: 3,
     axisTicks: {
      show: true,
     },
    },
    yaxis: {
     opposite: true,

     labels: {
      show: false,
     },
     tickAmount: 10,
    },
    title: {
     text: "New Cases",
     align: "left",
     style: {
      fontSize: "14px",
     },
    },
    grid: {
     show: false,
    },
    fill: {
     type: "gradient",
     gradient: {
      opacityFrom: 0,
      opacityTo: 0.01,
     },
    },
   },
   series: [
    {
     name: "New cases",
     data: smdata,
    },
   ],
  };
 }
 componentWillMount() {}
 render() {
  console.log(this.props.data);
  return (
   <Chart options={this.state.options} series={this.state.series} type="area" height="200px" width="100%" />
  );
 }
}

export default NewCases;
