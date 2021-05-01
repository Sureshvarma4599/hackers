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
    onClickHandler=(id)=>{
        
        console.log(id)
        const element = <Welcome id={id} />;
      
    }
    render() {
        return (
           <React.Fragment>
             
               <div>
                  
               
               {this.state.datas.length>0 && this.state.datas.map(data=>(
              <span key={data.id}>
                
               <div className="id"  onClick={()=>{this.onClickHandler(data._id)}}>
               <img src={User} style={{width:"60px",height:"60px"}}  alt=""/>
                  <Link to="/welcome"><h3>{data.name}</h3></Link>  
                   
                    </div>     
            
              </span>
               ))}
               
            
               <button onClick={() => window.print()}>PRINT</button>
               </div>
               
           </React.Fragment>
        )
               }
}
