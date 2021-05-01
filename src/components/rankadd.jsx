import React,{useState} from 'react'
import { useHistory } from 'react-router-dom';
import axios from 'axios'
export default function Rankadd() {
    const [name,setName]=useState("");
    const [profile_link,setProfile_link]=useState("");
    const [location,setLocation]=useState("");
    const [education,setEducation]=useState("");
    const [challenges_solved,setChallenges_solved]=useState("");
    const [solutions_submitted,setSolutions_submitted]=useState("");
    const [solutions_accepted,setSolutions_accepted]=useState("");
    const [overall_rank,setOverall_rank]=useState("");
    const [followers,setFollowers]=useState("");
    const [following,setFollowing]=useState("");
    const [datastructures,setDatastructures]=useState("");
    const [algorithms,setAlgorithms]=useState("");
    const [c_plus_plus,setC_plus_plus]=useState("");
    const [java,setJava]=useState("");
    const [python,setPython]=useState("");
    const [html,setHtml]=useState("");
    const [javascript,setJavascript]=useState("");
    const [no_of_votes,setNo_of_votes]=useState("");
    const [timestamp,setTimestamp]=useState("");
    const [device_type,setDevice_type]=useState("");
    
    const history = useHistory();

    const onNameHandler = (e) =>{
        setName(e.currentTarget.value);
    }
    const onProfileHandler = (e) =>{
        setProfile_link(e.currentTarget.value);
    }
    const onLocationHandler = (e) =>{
        setLocation(e.currentTarget.value);
    }
    const onEducationHandler = (e) =>{
        setEducation(e.currentTarget.value);
    }
    const onChallengesHandler = (e) =>{
        setChallenges_solved(e.currentTarget.value);
    }
    const onSolutionsHandler = (e) =>{
        setSolutions_submitted(e.currentTarget.value);
    }
    const onAcceptedHandler = (e) =>{
        setSolutions_accepted(e.currentTarget.value);
    }
    const onOverallHandler = (e) =>{
        setOverall_rank(e.currentTarget.value);
    }
    const onFollowersHandler = (e) =>{
        setFollowers(e.currentTarget.value);
    }
    const onFollowingHandler = (e) =>{
        setFollowing(e.currentTarget.value);
    }
    const onDataHandler = (e) =>{
        setDatastructures(e.currentTarget.value);
    }
    const onAlgorithmsHandler = (e) =>{
        setAlgorithms(e.currentTarget.value);
    }
    const onCHandler = (e) =>{
        setC_plus_plus(e.currentTarget.value);
    }
    const onJavaHandler = (e) =>{
        setJava(e.currentTarget.value);
    }
    const onPythonHandler = (e) =>{
        setPython(e.currentTarget.value);
    }
    const onJavascriptHandler = (e) =>{
        setJavascript(e.currentTarget.value);
    }
    const onHtmlHandler = (e) =>{
        setHtml(e.currentTarget.value);
    }
   
    const onVotesHandler = (e) =>{
        setNo_of_votes(e.currentTarget.value);
    }
    const onTimeHandler = (e) =>{
        setTimestamp(e.currentTarget.value);
    }
    const onDeviceHandler = (e) =>{
        setDevice_type(e.currentTarget.value);
    }
    const onSubmitHandler=(e)=>{
        e.preventDefault();
        const user = {
            name:name,
            profile_link:profile_link,
            location: location,
            education: education,
            challenges_Solved:challenges_solved,
            solutions_submitted: solutions_submitted,
            solutions_accepted:solutions_accepted,
            overall_rank: overall_rank,
            followers:followers,
            following:following,
            datastructures:datastructures,
            algorithms:algorithms,
            c_plus_plus:c_plus_plus,
            java:java,
            python:python,
            html:html,
            javascript:javascript,
            no_of_votes:no_of_votes,
            timestamp:timestamp,
            device_type:device_type
        }
        //console.log("user",user)
        axios.post('https://final-api-varma.herokuapp.com/ranks',user)
        
        .then(res=>{
            console.log(res)
           
         if(res.status===200){
           // props.history.push('/')
          // history.push("/d");
            alert(res.data)
         }   
         else{
             alert("login failed")
            // history.push("/");
         }

        })
        .catch(err=>{
            console.log(err)
        })
       
    }
   

    return (
        <div>
              <form onSubmit={onSubmitHandler}>
             
             <input type="name" placeholder="enter name" id="email" value={name} onChange={onNameHandler}/>
           
             <input type="text" placeholder="enter  profile" id="profile" value={profile_link} onChange={onProfileHandler}/>

             <input type="text" placeholder="enter location" id="location" value={location} onChange={onLocationHandler}/>
           
             <input type="education" placeholder="education" id="education" value={education} onChange={onEducationHandler}/>
             <input type="number" placeholder="challenges solved" id="challenges" value={challenges_solved} onChange={onChallengesHandler}/>
           
             <input type="number" placeholder="solutions submitted" id="solutions" value={solutions_submitted} onChange={onSolutionsHandler}/>
             <input type="number" placeholder="solutions accepted" id="e" value={solutions_accepted} onChange={onAcceptedHandler}/>
           
             <input type="number" placeholder="overall rank" id="password" value={overall_rank} onChange={onOverallHandler}/>
             <input type="number" placeholder="followers" id="email" value={followers} onChange={onFollowersHandler}/>
           
             <input type="number" placeholder="enter following" id="password" value={following} onChange={onFollowingHandler}/>
             <input type="number" placeholder="enter datastructures" id="email" value={datastructures} onChange={onDataHandler}/>
           
             <input type="number" placeholder="enter algo" id="password" value={algorithms} onChange={onAlgorithmsHandler}/>
             <input type="number" placeholder="enter c+" id="email" value={c_plus_plus} onChange={onCHandler}/>
           
             <input type="number" placeholder="enter java" id="password" value={java} onChange={onJavaHandler}/>
             <input type="number" placeholder="enter python" id="email" value={python} onChange={onPythonHandler}/>
           
             <input type="number" placeholder="enter html" id="password" value={html} onChange={onHtmlHandler}/>
             <input type="number" placeholder="enter javascript" id="email" value={javascript} onChange={onJavascriptHandler}/>
           
             <input type="number" placeholder="enter votes" id="password" value={no_of_votes} onChange={onVotesHandler}/>
             <input type="number" placeholder="enter timestamp" id="email" value={timestamp} onChange={onTimeHandler}/>
           
             <input type="text" placeholder="enter device" id="password" value={device_type} onChange={onDeviceHandler}/>
           
             <button type="submit" >ADD HACKER</button>
            
          
         </form>
         
        </div>
    )
}
