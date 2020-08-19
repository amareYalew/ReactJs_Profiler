import React, { Component, Profiler } from 'react'
import NewAccount from './NewAccount';
import LoneRep from './LoneRep';
export default class ReportDash extends Component {
    callbackFunction=(id,phase,actualDuration,baseDuration, startTime, 

        commitTime, interaction)=>{
    
          console.log('Id is : '+id+', Phase is : '+phase);
    
          console.log('Actual Duration is : '+actualDuration+' and Base Duration is :'+
    
          baseDuration);
    
      }
    render(){
     
        return (
    
          <React.Fragment>
    
                <h2>Welcome to Reports Dashboard...</h2>
                <Profiler id="newAccounts" onRender={this.callbackFunction}>
                <NewAccount></NewAccount>
                </Profiler>
                <Profiler id="lonerep" onRender={this.callbackFunction}>
                <LoneRep></LoneRep>
                </Profiler>
         
          </React.Fragment>
    
        );
    
      }
}
