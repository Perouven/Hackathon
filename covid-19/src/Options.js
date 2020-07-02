import React from 'react';
import './Options.css';
import {DropdownButton, MenuItem} from 'react-bootstrap';
const path1 =require('../src/ICU_graph.JPG');
const path2 =require('../src/Screenshot (41).png');
const path3 = require('../src/Screenshot (43).png');
const path1b = require('../src/ICU_graph_ML.JPG.png');
const path2b = require('../src/Screenshot (50).png');
const path3b = require('../src/Screenshot (52).png');


class Option extends React.Component{
   constructor(props){
       super(props);
       this.state={
           src: "",
           graph: ""
       }
      this.handleClick =this.handleClick.bind(this);
      this.changeGraph = this.changeGraph.bind(this);
   }



handleClick(e){
console.log(`button 1 clicked`);
const target = e.target;
const value= target.name;
const number= e.currentTarget.id;
//console.log(number);
this.setState((currentState,CurrentProps)=>{
        return{
            src:value,
            graph:number
        }
        
})

}

changeGraph(e){
  const value = this.state.graph;
  this.setState((currentState,curretProps)=>{
    console.log(value);
    if(value==='1')
    return{
      src:path1b
    }
    else if(value==='2')
    return{
      src:path2b
    }
    else if(value==='3')
    return{
      src:path3b
    }
    
  })
}
 

render(){
    return (
      <div>

        <div class="container">
          <div class="row">
            <div class="col-md-11" id="dropdown">
              <h1>Graphs for COVID-19</h1>
              <h3>Select a graph:</h3>
              <DropdownButton class="dropdown" bsStyle="info" key="Info" title="City" >
                <MenuItem
                  id="1"
                  number="1"
               
                  name= {path1}
                >
                  Toronto
                </MenuItem>
                <MenuItem id="2" >RichmondHill</MenuItem>
                <MenuItem id="3">Markkham</MenuItem>
                <MenuItem id="4">Mississauga</MenuItem>

                <MenuItem divider />

                <MenuItem eventKey="5">More options...</MenuItem>
              
              </DropdownButton>
              
              <DropdownButton class="dropdown" bsStyle="info" key="Info" title="Business field:"  >
                <MenuItem
                  id="1"
                >
                  HealthCare
                </MenuItem>
                <MenuItem id="2"  >Finance</MenuItem>
                <MenuItem id="3">Education</MenuItem>
                <MenuItem eventKey="4">Commercial Store</MenuItem>
                <MenuItem eventKey="5">More options...</MenuItem>
              </DropdownButton>
             
             

              <DropdownButton class="dropdown" bsStyle="info" key="Info" title="graph options:"  >
                <MenuItem
                  id="1"
                  onClick={this.handleClick}
                  name= {path1}
                >
                  Icu Beds
                </MenuItem>
                <MenuItem id="2" name= {path2} onClick={this.handleClick} >Hospitalized</MenuItem>
                <MenuItem id="3" name= {path3}  onClick={this.handleClick}> Positive cases</MenuItem>

                <MenuItem divider />
          
                <MenuItem eventKey="5">More options...</MenuItem>
                <MenuItem eventKey="6">More options...</MenuItem>
              </DropdownButton>

        
             
              <hr/>
              <br></br>
              <div>
                <img src={this.state.src}/>
              </div>
            </div>
            <div class="col-md-1">
            <br /> <br /> <br />

            <label>  
                 Total population on the region:
                <input></input>
            </label>
          <br/><br/>
            <label>  
                Total infected on the region:
                <input></input>
            </label>
            <br/><br/>
            <label>  
            Average number of patients:
                <input></input>
            </label>
            
                <br/><br/>
                <button type="submit" onClick={this.changeGraph}>Update Graph</button>
            </div>
          </div>
        </div>

      </div>
    );
}
}

export default Option;