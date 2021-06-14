import React from "react";
import ReactDOM from "react-dom";
import "../table.css";
class Table_covid extends React.Component {
 constructor(props) {
  super(props);

  this.state = {
   caseData: [],
   cdata: [],
  };

  for (let i = 0; i < Object.keys(this.props.data.statewise).length; i++) {
   this.state.caseData[this.props.data.statewise[i].state] = this.props.data.statewise[i];
   this.state.cdata[this.props.data.statewise[i].state] = this.props.data.statewise[i];
  }
  console.log(this.state.cdata);
 }

 render() {
  return (
   <div className="table-responsive container ">
    <table className="table  table-hover ">
     <thead classname="heading text-right">
      <tr>
       <td className="text-left  px-2 pt-4 " id="state-heading">
        State UT
       </td>
       <td className=" heading px-2 pt-4 text-right  confirmed">Confirmed</td>
       <td className="heading px-2 pt-4 p-3 text-right  active">Active</td>
       <td className="heading px-2 pt-4 p-3 text-right  recovered">Recovered</td>
       <td className="heading px-2 pt-4 p-3 text-right  deaths">Deceased</td>
      </tr>
     </thead>
     <tbody className="text-right">
      <tr className="state Maharashtra">
       <td className="Maharashtra table-active text-left p-2">Maharashtra</td>
       <td className="p-2 confirmed">
        {this.state.caseData["Maharashtra"].confirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 active">
        {this.state.caseData["Maharashtra"].active.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 recovered">
        {this.state.caseData["Maharashtra"].recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 deaths">
        {this.state.caseData["Maharashtra"].deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
      </tr>
      <tr className="state Karnataka">
       <td className="Karnataka table-default text-left p-2">Karnataka</td>
       <td className="p-2 confirmed">
        {this.state.caseData["Karnataka"].confirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 active">
        {this.state.caseData["Karnataka"].active.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 recovered">
        {this.state.caseData["Karnataka"].recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 deaths">
        {this.state.caseData["Karnataka"].deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
      </tr>
      <tr className="state Kerala">
       <td className="Kerala table-active text-left p-2">Kerala</td>
       <td className="p-2 confirmed">
        {this.state.caseData["Kerala"].confirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 active">
        {this.state.caseData["Kerala"].active.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 recovered">
        {this.state.caseData["Kerala"].recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 deaths">
        {this.state.caseData["Kerala"].deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
      </tr>
      <tr className="state UttarPradesh">
       <td className="UttarPradesh table-default text-left p-2">Uttar Pradesh</td>
       <td className="p-2 confirmed">
        {this.state.caseData["Uttar Pradesh"].confirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 active">
        {this.state.caseData["Uttar Pradesh"].active.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 recovered">
        {this.state.caseData["Uttar Pradesh"].recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 deaths">
        {this.state.caseData["Uttar Pradesh"].deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
      </tr>
      <tr className="state TamilNadu">
       <td className="TamilNadu table-active text-left p-2">Tamil Nadu</td>
       <td className="p-2 confirmed">
        {this.state.caseData["Tamil Nadu"].confirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 active">
        {this.state.caseData["Tamil Nadu"].active.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 recovered">
        {this.state.caseData["Tamil Nadu"].recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 deaths">
        {this.state.caseData["Tamil Nadu"].deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
      </tr>
      <tr className="state Delhi">
       <td className="Delhi table-default text-left p-2">Delhi</td>
       <td className="p-2 confirmed">
        {this.state.caseData["Delhi"].confirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 active">
        {this.state.caseData["Delhi"].active.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 recovered">
        {this.state.caseData["Delhi"].recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 deaths">
        {this.state.caseData["Delhi"].deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
      </tr>
      <tr className="state AndhraPradesh">
       <td className="AndhraPradesh table-active text-left p-2">Andhra Pradesh</td>
       <td className="p-2 confirmed">
        {this.state.caseData["Andhra Pradesh"].confirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 active">
        {this.state.caseData["Andhra Pradesh"].active.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 recovered">
        {this.state.caseData["Andhra Pradesh"].recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 deaths">
        {this.state.caseData["Andhra Pradesh"].deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
      </tr>
      <tr className="state WestBengal">
       <td className="WestBengal table-default text-left p-2">West Bengal</td>
       <td className="p-2 confirmed">
        {this.state.caseData["West Bengal"].confirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 active">
        {this.state.caseData["West Bengal"].active.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 recovered">
        {this.state.caseData["West Bengal"].recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 deaths">
        {this.state.caseData["West Bengal"].deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
      </tr>
      <tr className="state Chhattisgarh">
       <td className="Chhattisgarh table-active text-left p-2">Chhattisgarh</td>
       <td className="p-2 confirmed">
        {this.state.caseData["Chhattisgarh"].confirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 active">
        {this.state.caseData["Chhattisgarh"].active.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 recovered">
        {this.state.caseData["Chhattisgarh"].recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 deaths">
        {this.state.caseData["Chhattisgarh"].deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
      </tr>
      <tr className="state Rajasthan">
       <td className="Rajasthan table-default text-left p-2">Rajasthan</td>
       <td className="p-2 confirmed">
        {this.state.caseData["Rajasthan"].confirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 active">
        {this.state.caseData["Rajasthan"].active.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 recovered">
        {this.state.caseData["Rajasthan"].recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 deaths">
        {this.state.caseData["Rajasthan"].deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
      </tr>
      <tr className="state Gujarat">
       <td className="Gujarat table-active text-left p-2">Gujarat</td>
       <td className="p-2 confirmed">
        {this.state.caseData["Gujarat"].confirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 active">
        {this.state.caseData["Gujarat"].active.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 recovered">
        {this.state.caseData["Gujarat"].recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 deaths">
        {this.state.caseData["Gujarat"].deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
      </tr>
      <tr className="state MadhyaPradesh">
       <td className="MadhyaPradesh table-default text-left p-2">Madhya Pradesh</td>
       <td className="p-2 confirmed">
        {this.state.caseData["Madhya Pradesh"].confirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 active">
        {this.state.caseData["Madhya Pradesh"].active.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 recovered">
        {this.state.caseData["Madhya Pradesh"].recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 deaths">
        {this.state.caseData["Madhya Pradesh"].deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
      </tr>
      <tr className="state Haryana">
       <td className="Haryana table-active text-left p-2">Haryana</td>
       <td className="p-2 confirmed">
        {this.state.caseData["Haryana"].confirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 active">
        {this.state.caseData["Haryana"].active.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 recovered">
        {this.state.caseData["Haryana"].recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 deaths">
        {this.state.caseData["Haryana"].deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
      </tr>
      <tr className="state Bihar">
       <td className="Bihar table-default text-left p-2">Bihar</td>
       <td className="p-2 confirmed">
        {this.state.caseData["Bihar"].confirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 active">
        {this.state.caseData["Bihar"].active.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 recovered">
        {this.state.caseData["Bihar"].recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 deaths">
        {this.state.caseData["Bihar"].deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
      </tr>
      <tr className="state Odisha">
       <td className="Odisha table-active text-left p-2">Odisha</td>
       <td className="p-2 confirmed">
        {this.state.caseData["Odisha"].confirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 active">
        {this.state.caseData["Odisha"].active.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 recovered">
        {this.state.caseData["Odisha"].recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 deaths">
        {this.state.caseData["Odisha"].deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
      </tr>
      <tr className="state Telangana">
       <td className="Telangana table-default text-left p-2">Telangana</td>
       <td className="p-2 confirmed">
        {this.state.caseData["Telangana"].confirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 active">
        {this.state.caseData["Telangana"].active.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 recovered">
        {this.state.caseData["Telangana"].recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 deaths">
        {this.state.caseData["Telangana"].deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
      </tr>
      <tr className="state Punjab">
       <td className="Punjab table-active text-left p-2">Punjab</td>
       <td className="p-2 confirmed">
        {this.state.caseData["Punjab"].confirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 active">
        {this.state.caseData["Punjab"].active.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 recovered">
        {this.state.caseData["Punjab"].recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 deaths">
        {this.state.caseData["Punjab"].deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
      </tr>
      <tr className="state Assam">
       <td className="Assam table-default text-left p-2">Assam</td>
       <td className="p-2 confirmed">
        {this.state.caseData["Assam"].confirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 active">
        {this.state.caseData["Assam"].active.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 recovered">
        {this.state.caseData["Assam"].recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 deaths">
        {this.state.caseData["Assam"].deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
      </tr>
      <tr className="state Jharkhand">
       <td className="Jharkhand table-active text-left p-2">Jharkhand</td>
       <td className="p-2 confirmed">
        {this.state.caseData["Jharkhand"].confirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 active">
        {this.state.caseData["Jharkhand"].active.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 recovered">
        {this.state.caseData["Jharkhand"].recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 deaths">
        {this.state.caseData["Jharkhand"].deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
      </tr>
      <tr className="state Uttarakhand">
       <td className="Uttarakhand table-default text-left p-2">Uttarakhand</td>
       <td className="p-2 confirmed">
        {this.state.caseData["Uttarakhand"].confirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 active">
        {this.state.caseData["Uttarakhand"].active.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 recovered">
        {this.state.caseData["Uttarakhand"].recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 deaths">
        {this.state.caseData["Uttarakhand"].deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
      </tr>
      <tr className="state jandK">
       <td className="JandK table-active text-left p-2">Jammu and Kashmir</td>
       <td className="p-2 confirmed">
        {this.state.caseData["Jammu and Kashmir"].confirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 active">
        {this.state.caseData["Jammu and Kashmir"].active.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 recovered">
        {this.state.caseData["Jammu and Kashmir"].recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 deaths">
        {this.state.caseData["Jammu and Kashmir"].deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
      </tr>
      <tr className="state HimachalPradesh">
       <td className="HimachalPradesh table-default text-left p-2">Himachal Pradesh</td>
       <td className="p-2 confirmed">
        {this.state.caseData["Himachal Pradesh"].confirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 active">
        {this.state.caseData["Himachal Pradesh"].active.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 recovered">
        {this.state.caseData["Himachal Pradesh"].recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 deaths">
        {this.state.caseData["Himachal Pradesh"].deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
      </tr>
      <tr className="state Goa">
       <td className="Goa table-active text-left p-2">Goa</td>
       <td className="p-2 confirmed">
        {this.state.caseData["Goa"].confirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 active">
        {this.state.caseData["Goa"].active.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 recovered">
        {this.state.caseData["Goa"].recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 deaths">
        {this.state.caseData["Goa"].deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
      </tr>
      <tr className="state Puducherry">
       <td className="Puducherry table-default text-left p-2">Puducherry</td>
       <td className="p-2 confirmed">
        {this.state.caseData["Puducherry"].confirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 active">
        {this.state.caseData["Puducherry"].active.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 recovered">
        {this.state.caseData["Puducherry"].recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 deaths">
        {this.state.caseData["Puducherry"].deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
      </tr>
      <tr className="state Chandigarh">
       <td className="Chandigarh table-active text-left p-2">Chandigarh</td>
       <td className="p-2 confirmed">
        {this.state.caseData["Chandigarh"].confirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 active">
        {this.state.caseData["Chandigarh"].active.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 recovered">
        {this.state.caseData["Chandigarh"].recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 deaths">
        {this.state.caseData["Chandigarh"].deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
      </tr>
      <tr className="state Tripura">
       <td className="Tripura table-default text-left p-2">Tripura</td>
       <td className="p-2 confirmed">
        {this.state.caseData["Tripura"].confirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 active">
        {this.state.caseData["Tripura"].active.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 recovered">
        {this.state.caseData["Tripura"].recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 deaths">
        {this.state.caseData["Tripura"].deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
      </tr>
      <tr className="state Manipur">
       <td className="Manipur table-active text-left p-2">Manipur</td>
       <td className="p-2 confirmed">
        {this.state.caseData["Manipur"].confirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 active">
        {this.state.caseData["Manipur"].active.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 recovered">
        {this.state.caseData["Manipur"].recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 deaths">
        {this.state.caseData["Manipur"].deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
      </tr>
      <tr className="state ArunachalPradesh">
       <td className="ArunachalPradesh table-default text-left p-2">Arunachal Pradesh</td>
       <td className="p-2 confirmed">
        {this.state.caseData["Arunachal Pradesh"].confirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 active">
        {this.state.caseData["Arunachal Pradesh"].active.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 recovered">
        {this.state.caseData["Arunachal Pradesh"].recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 deaths">
        {this.state.caseData["Arunachal Pradesh"].deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
      </tr>
      <tr className="state Meghalaya">
       <td className="Meghalaya table-active text-left p-2">Meghalaya</td>
       <td className="p-2 confirmed">
        {this.state.caseData["Meghalaya"].confirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 active">
        {this.state.caseData["Meghalaya"].active.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 recovered">
        {this.state.caseData["Meghalaya"].recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 deaths">
        {this.state.caseData["Meghalaya"].deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
      </tr>
      <tr className="state Nagaland">
       <td className="Nagaland table-default text-left p-2">Nagaland</td>
       <td className="p-2 confirmed">
        {this.state.caseData["Nagaland"].confirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 active">
        {this.state.caseData["Nagaland"].active.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 recovered">
        {this.state.caseData["Nagaland"].recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 deaths">
        {this.state.caseData["Nagaland"].deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
      </tr>
      <tr className="state Ladakh">
       <td className="Ladakh p-2 table-active text-left">Ladakh</td>
       <td className="p-2 confirmed">
        {this.state.caseData["Ladakh"].confirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 active">
        {this.state.caseData["Ladakh"].active.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 recovered">
        {this.state.caseData["Ladakh"].recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 deaths">
        {this.state.caseData["Ladakh"].deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
      </tr>
      <tr className="state Sikkim">
       <td className="Sikkim p-2 table-default text-left">Sikkim</td>
       <td className="p-2 confirmed">
        {this.state.caseData["Sikkim"].confirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 active">
        {this.state.caseData["Sikkim"].active.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 recovered">
        {this.state.caseData["Sikkim"].recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 deaths">
        {this.state.caseData["Sikkim"].deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
      </tr>
      <tr className="state Dadiu">
       <td className="Dadiu p-2 table-active text-left">Dadra and Nagar Haveli and Daman and Diu</td>
       <td className="p-2 confirmed">
        {this.state.caseData["Dadra and Nagar Haveli and Daman and Diu"].confirmed
         .toString()
         .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 active">
        {this.state.caseData["Dadra and Nagar Haveli and Daman and Diu"].active
         .toString()
         .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 recovered">
        {this.state.caseData["Dadra and Nagar Haveli and Daman and Diu"].recovered
         .toString()
         .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 deaths">
        {this.state.caseData["Dadra and Nagar Haveli and Daman and Diu"].deaths
         .toString()
         .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
      </tr>
      <tr className="state Mizoram">
       <td className="Mizoram p-2 table-default text-left">Mizoram</td>
       <td className="p-2 confirmed">
        {this.state.caseData["Mizoram"].confirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 active">
        {this.state.caseData["Mizoram"].active.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 recovered">
        {this.state.caseData["Mizoram"].recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 deaths">
        {this.state.caseData["Mizoram"].deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
      </tr>
      <tr className="state AndamanNicobar">
       <td className="AndamanNicobar p-2 table-active text-left">Andaman and Nicobar Islands</td>
       <td className="p-2 confirmed">
        {this.state.caseData["Andaman and Nicobar Islands"].confirmed
         .toString()
         .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 active">
        {this.state.caseData["Andaman and Nicobar Islands"].active
         .toString()
         .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 recovered">
        {this.state.caseData["Andaman and Nicobar Islands"].recovered
         .toString()
         .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 deaths">
        {this.state.caseData["Andaman and Nicobar Islands"].deaths
         .toString()
         .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
      </tr>
      <tr className="state Lakshadweep">
       <td className=" Lakshadweep table-default text-left p-2">Lakshadweep</td>
       <td className="p-2 confirmed">
        {this.state.caseData["Lakshadweep"].confirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 active">
        {this.state.caseData["Lakshadweep"].active.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 recovered">
        {this.state.caseData["Lakshadweep"].recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 deaths">
        {this.state.caseData["Lakshadweep"].deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
      </tr>
      <tr className="state India">
       <td className="India table-active text-left p-2">India</td>
       <td className="p-2 confirmed">
        {this.state.caseData["Total"].confirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 active">
        {this.state.caseData["Total"].active.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 recovered">
        {this.state.caseData["Total"].recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
       <td className="p-2 deaths">
        {this.state.caseData["Total"].deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
       </td>
      </tr>
     </tbody>
    </table>
   </div>
  );
 }
}
export default Table_covid;
