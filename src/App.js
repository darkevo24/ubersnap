import React,{useState,useCallback,useEffect} from "react";
import "./App.css"; 
import axios from "axios";
import { Component } from "react/cjs/react.production.min";

function App(){
  const [data,setData] = useState([]);
  const [fName,setFname] = useState([]);
  const [lName,setLname] = useState([]);

  function click(){
  axios.get("https://reqres.in/api/users").then(function(res){
    setData(res.data.data);
    console.log(res);
  })
}
  return (
    <div>
      <button onClick={click}>
        Click
      </button>
      <h1>ID</h1>
      <p>{data.map(function(data){
        return data.id;
      })}</p>
      <h1>First name</h1>
      <p>
      {data.map(function(data){
        return data.first_name + ", ";
      })}
      </p>
      <h1>Last name</h1>
      <p>
        {data.map(function(data){
        return data.last_name + ", ";
      })

        }
      </p>
    </div>
  )
}

export default App;
