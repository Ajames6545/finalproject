import React, { Component } from 'react';

class Planner extends Component {

  constructor() {
    super();

  }

  clicked(data) {
    var element = document.getElementById(data);
    element.setAttribute("style", "background-color:#E8E8E8;");

  }

  





  render() {
    return (
      <div>
        <div class="bgimage"></div>
        <div class="bgstrip"></div>
        <center>
          <table border="1">
           <tr>
             <td class="date">Sunday</td>
             <td class="date">Monday</td>
             <td class="date">Tuesday</td>
             <td class="date">Wednesday</td>
             <td class="date">Thursday</td>
             <td class="date">Friday</td>
             <td class="date">Saturday</td>
           </tr> 
            <tr>
              <td id="cell1"></td>
              <td id="cell2"></td>
              <td id="cell3"></td>
              <td id="cell4">1<input class="inputfields" onClick={() => this.clicked("cell4")} /></td>
              <td id="cell5">2<input class="inputfields" onClick={() => this.clicked("cell5")} /></td>
              <td id="cell6">3<input class="inputfields" onClick={() => this.clicked("cell6")} /></td>
              <td id="cell7">4<input class="inputfields" onClick={() => this.clicked("cell7")} /></td>
              </tr>
            <tr>
              <td id="cell8">5<input class="inputfields" onClick={() => this.clicked("cell8")} /></td>
              <td id="cell9">6<input class="inputfields" onClick={() => this.clicked("cell9")} /></td>
              <td id="cell10">7<input class="inputfields" onClick={() => this.clicked("cell10")} /></td>
              <td id="cell11">8<input class="inputfields" onClick={() => this.clicked("cell11")} /></td>
              <td id="cell12">9<input class="inputfields" onClick={() => this.clicked("cell12")} /></td>
              <td id="cell13">10<input class="inputfields" onClick={() => this.clicked("cell13")} /></td>
              <td id="cell14">11<input class="inputfields" onClick={() => this.clicked("cell14")} /></td>
            </tr>
            <tr>
            <td id="cell15">12<input class="inputfields" onClick={() => this.clicked("cell15")} /></td>
            <td id="cell16">13<input class="inputfields" onClick={() => this.clicked("cell16")} /></td>
            <td id="cell17">14<input class="inputfields" onClick={() => this.clicked("cell17")} /></td>
            <td id="cell18">15<input class="inputfields" onClick={() => this.clicked("cell18")} /></td>
            <td id="cell19">16<input class="inputfields" onClick={() => this.clicked("cell19")} /></td>
            <td id="cell20">17<input class="inputfields" onClick={() => this.clicked("cell20")} /></td>
            <td id="cell21">18<input class="inputfields" onClick={() => this.clicked("cell21")} /></td>
            </tr>
            <tr>
            <td id="cell22">19<input class="inputfields" onClick={() => this.clicked("cell22")} /></td>
            <td id="cell23">20<input class="inputfields" onClick={() => this.clicked("cell23")} /></td>
            <td id="cell24">21<input class="inputfields" onClick={() => this.clicked("cell24")} /></td>
            <td id="cell25">22<input class="inputfields" onClick={() => this.clicked("cell25")} /></td>
            <td id="cell26">23<input class="inputfields" onClick={() => this.clicked("cell26")} /></td>
            <td id="cell27">24<input class="inputfields" onClick={() => this.clicked("cell27")} /></td>
            <td id="cell28">25<input class="inputfields" onClick={() => this.clicked("cell28")} /></td>
            </tr>
            <tr>
            <td id="cell29">26<input class="inputfields" onClick={() => this.clicked("cell29")} /></td>
            <td id="cell30">27<input class="inputfields" onClick={() => this.clicked("cell30")} /></td>
            <td id="cell31">28<input class="inputfields" onClick={() => this.clicked("cell31")} /></td>
            <td id="cell32">29<input class="inputfields" onClick={() => this.clicked("cell32")} /></td>
            <td id="cell33">30<input class="inputfields" onClick={() => this.clicked("cell33")} /></td>
            <td id="cell34">31<input class="inputfields" onClick={() => this.clicked("cell34")} /></td>
            <td id="cell35"></td>
            </tr>
          </table>
        </center>
        <div class="bskew"></div>
      </div>
    );
  }
}



export default Planner;