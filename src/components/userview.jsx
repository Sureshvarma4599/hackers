import axios from 'axios';
import React, { Component } from 'react'
import User from '../assets/user.png'
import '../App.css'
import Welcome from './welcome'
import { Link } from 'react-router-dom';
export default class Userview extends Component {
    constructor(props){
    super(props);
    this.state={
        datas:[],
        id:[],
        reload:false
    }
    }
    componentDidMount(){
        axios.get("https://final-api-varma.herokuapp.com/ranks")
        .then(res=>{
            console.log(res)
            this.setState({datas:res.data})
        const order = this.state.datas.sort((a,b)=>a.name-b.name)
        console.log(order)
            this.setState({datas:order})
        })
        .catch(err=>{
            console.log(err)
        })
    }
    onClickHandler=(id)=>{
        axios.get(`https://final-api-varma.herokuapp.com/ranks/${id}`)
        .then(res=>{
            console.log(res)
            this.setState({id:res.data})
            this.setState({datas:[]})
        })
        .catch(err=>{
            console.log(err)
        })
    }
   
    render() {
        return (
           <React.Fragment>
               <div className="photos">
                   
               </div>
             
               <div className="photos">
                  
               
               {this.state.datas.length>0 && this.state.datas.map(data=>(
              <span key={data.id}>
                
               <div className="id"  onClick={()=>{this.onClickHandler(data._id)}}>
               <img src={User} style={{width:"60px",height:"60px"}}  alt=""/>
                  <h3>{data.name}</h3> 
                   
                    </div>     
            
              </span>
               ))}
               
               </div>
               <div>
               {this.state.id.length>0 && this.state.id.map(id=>(
              <span key={id.id}>
                
               <div className="detail" >
               <img src={User} style={{width:"60px",height:"60px"}}  alt=""/>
                  <h3>{id.name}</h3> 
                  <br/>
                 
                  <div className="info">
                  <div className="content">
                   <p>Profile: {id.profile_link}</p>
                   <p>Location: {id.location}</p>
                   <p>Education: {id.education}</p>
                   <p>Followers: {id.followers}</p>
                   <p>Following: {id.following}</p>
                  
                   <p>Challenges: {id.challenges_Solved}</p>
                   <p>Solutions submitted:{id.solutions_submitted}</p>
                   <p>Solutions accepted:{id.solutions_accepted}</p>
                   </div>
                  <div className="content">
                   <p>Datastructures: {id.datastructures}</p>
                   <p>Algorithms: {id.algorithms}</p>
                   <p>C++ : {id.c_plus_plus}</p>
                   <p>Java : {id.java}</p>
                   <p>Python : {id.python}</p>
                   <p>No.Of.Votes : {id.no_of_votes}</p>
                   <p>timestamp : {id.timestamp}</p>
                   <p>Device : {id.device_type}</p>
                   </div>
                   <h3>Overall Rank:{id.overall_rank}</h3>
                    </div>     
                    </div>
              </span>
               ))} 
               </div>
           </React.Fragment>
        )
               }
}
