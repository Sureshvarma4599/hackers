import axios from 'axios';
import React, { Component } from 'react'
import '../App.css'


export default class View extends Component {
    constructor(){
    super();
    this.state={
        datas:[],
        reload:false
    }
    }
    componentDidMount(){
        axios.get("https://final-api-varma.herokuapp.com/ranks")
        .then(res=>{
            console.log(res)
            this.setState({datas:res.data})
        })
        .catch(err=>{
            console.log(err)
        })
    }
   /* onClickHandler=(id)=>{
        
        console.log(id)
        axios.delete("https://transitt.herokuapp.com/trip/"+id)
        .then(res=>{
            console.log(res)
            window.location.reload()
        })
        .catch(err=>{
            console.log(err)
        })
  
    }*/
    render() {
        return (
           <React.Fragment>
             
               <div className="views">
                   <h6>Ranks : {this.state.datas.length}</h6>
               <table id="customers">
               <tr>
                   <thead>
                   <th>Name</th>
                  
                   <th>Location</th>
                   <th>Education</th>
                   <th>Challenges Solved</th>
                   <th>Solutions submitted</th>
                   <th>Solutions accepted</th>
                   <th>Overall rank</th>
                   <th>Followers</th>
                   <th>Following</th>
                   <th>Data Structures</th>
                   <th>Algorithms</th>
                   <th>C++</th>
                   <th>Java</th>
                   <th>Python</th>
                   <th>Html</th>
                   <th>Javascript</th>
                   <th>No Of Votes</th>
                   <th>Time stamp</th>
                   <th>Device Type</th>
                   
                   </thead>
                  
                        </tr>
               {this.state.datas.length>0 && this.state.datas.map(data=>(
              <span key={data.id}>
                
               
             
                   <tr>
                   <thead>
                    <td>{data.name}</td>
                    
                     <td>{data.location}</td>
                     <td>{data.education}</td>
                     <td>{data.challenges_Solved}</td>
                     <td>{data.solutions_submitted}</td>
                     <td>{data.solutions_accepted}</td>
                     <td>{data.overall_rank}</td> 
                     <td>{data.followers}</td>
                     <td>{data.following}</td>
                     <td>{data.datastructures}</td>
                     <td>{data.algorithms}</td>
                     <td>{data.c_plus_plus}</td> 
                     <td>{data.java}</td>
                     <td>{data.python}</td>
                     <td>{data.html}</td>
                     <td>{data.javascript}</td>
                     <td>{data.no_of_votes}</td>
                     <td>{data.timestamp}</td>
                     <td>{data.device_type}</td>
                     
                     </thead>
                     </tr>
                 
             
                         
            
              </span>
               ))}
               </table>
            
               <button onClick={() => window.print()}>PRINT</button>
               </div>
               
           </React.Fragment>
        )
               }
}
