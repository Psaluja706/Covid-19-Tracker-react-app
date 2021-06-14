import React, { Component } from "react";
import Chart from "react-apexcharts";

class RecoveredChart extends Component {
 constructor(props) {
  let smdata = [];

  super(props);

  for (let i = 1; i < 30; i++) {
   var a = Date.parse(
    this.props.data.cases_time_series[Object.keys(this.props.data.cases_time_series).length - (30 - i)]
     .dateymd
   );
   var b = parseInt(
    this.props.data.cases_time_series[Object.keys(this.props.data.cases_time_series).length - (30 - i)]
     .totalrecovered
   );
   smdata.push([a, b]);
  }

  this.state = {
   options: {
    colors: ["rgba(115, 197, 134)"],
    chart: {
     background: "rgba(115, 197, 134,0.15)",
     foreColor: "rgba(115, 197, 134)",
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
     text: "Recovered",
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
     name: "Recovered cases",
     data: smdata,
    },
   ],
  };
 }
 render() {
  return (
   <Chart options={this.state.options} series={this.state.series} type="area" height="200px" width="100%" />
  );
 }
}

export default RecoveredChart;
