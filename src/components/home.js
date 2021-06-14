import React, { Component, useState, useEffect } from "react";
// import "../App.css";
import axios from "axios";

import Card_covid_left from "./covid_left";
import ConfirmedChart from "./ConfirmedChart";
import DeceasedChart from "./DeceasedChart";
import NewCases from "./NewCases";
import RecoveredChart from "./RecoveredChart";
import Map from "./Map";
import Table_covid from "./table_covid";
import Search_bar from "./covid_searchbar";

import { BrowserRouter, Switch, Route } from "react-router-dom";
const useFetch = (url) => {
 const [data, setData] = useState([]);
 const [loading, setLoading] = useState(true);

 useEffect(async () => {
  try {
   const response = await axios.get("https://api.covid19india.org/data.json");
   console.log(response);

   setData(response.data);
   setLoading(false);
  } catch (error) {
   console.error(error);
  }
 }, []);

 return { data, loading };
};
function Home() {
 const { data, loading } = useFetch("https://api.covid19india.org/data.json");
 console.log(data);
 return (
  <>
   <div className="graphContainer container row">
    <div className="col-lg-6 main-container left">
     <Search_bar />
     <h1 className="headMain">Covid Stats</h1>
     {loading ? (
      <h5 className="lastupdate">Last updated on</h5>
     ) : (
      <h5 className="lastupdate">Last updated on {data.statewise[0].lastupdatedtime}</h5>
     )}
     {loading ? <div>Loading...</div> : <Map data={data} />}
    </div>
    <div className="col-lg-6 main-container right">
     {loading ? <div>Loading...</div> : <Card_covid_left data={data} />}
     <h1 className="graphHeading">Spread Trends</h1>
     {loading ? <div>Loading...</div> : <NewCases data={data} />}
     {loading ? <div>Loading...</div> : <ConfirmedChart data={data} />}
     {loading ? <div>Loading...</div> : <RecoveredChart data={data} />}
     {loading ? <div>Loading...</div> : <DeceasedChart data={data} />}
    </div>
    {loading ? <div>Loading...</div> : <Table_covid data={data} />}
   </div>
  </>
 );
}
export default Home;
