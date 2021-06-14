import React, { Component } from "react";
import Chart from "react-apexcharts";

class DeceasedChart extends Component {
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
     .totaldeceased
   );
   smdata.push([a, b]);
  }

  this.state = {
   options: {
    colors: ["rgba(164, 169, 174)"],
    chart: {
     background: "rgba(164, 169, 174,0.15)",
     foreColor: "rgba(164, 169, 174)",
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
     text: "Deceased",
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
     name: "Deceased",
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

export default DeceasedChart;
