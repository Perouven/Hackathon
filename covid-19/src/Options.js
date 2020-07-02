import React from 'react';
import {DropdownButton, MenuItem} from 'react-bootstrap';
const path1 =require('../src/Screenshot (40).png');
const path2 =require('../src/Screenshot (41).png');
const path3 = require('../src/Screenshot (43).png');
class Option extends React.Component{
   constructor(props){
       super(props);
       this.state={
           src: ""
       }
       this.handleClick =this.handleClick.bind(this);
   }
handleClick(e){
console.log(`button 1 clicked`);

const value= `${e.target.name}`;
console.log(value);
this.setState((currentState,CurrentProps)=>{
        return{
            src:value
        }
})
}
 
render(){
    return (
      <div>

        <div class="container">
          <div class="row">
            <div class="col-md-11">
              <h1>Graphs for COVID-19</h1>
              <hr/>
              <br></br>
              <DropdownButton bsStyle="info" key="Info" title="Info">
                <MenuItem
                  eventKey="1"
                  name= {Image}
                  onClick={this.handleClick}
                  name= {path1}
                >
                  Graph1
                </MenuItem>
                <MenuItem eventKey="2" name= {path2} onClick={this.handleClick}>Graph2</MenuItem>
                <MenuItem eventKey="3" name= {path3}  onClick={this.handleClick}>
                 Graph3
                </MenuItem>
                <MenuItem divider />
                <MenuItem eventKey="4">More options...</MenuItem>
              </DropdownButton>
              <br /> <br /> <br />

              <div>
                <img src={this.state.src}/>
              </div>
            </div>
            <div class="col-md-1">
            <br /> <br /> <br />

            <label>  
                Label 1
                <input></input>
            </label>
          <br/><br/>
            <label>  
                Label 2
                <input></input>
            </label>
            <br/><br/>
            <label>  
                Label 3
                <input></input>
            </label>
                <br/><br/>
                <button type="submit">Submit</button>
            </div>
          </div>
        </div>

      </div>
    );
}
}

export default Option;