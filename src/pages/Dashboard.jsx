import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import TaskList from "../components/TaskList";



const Dashboard = () => {
const navigate=useNavigate()
const[tasks,setTask]=useState([])
useEffect(()=>{
  fetchData();
},[])

const fetchData=async() => {
  try{
    const response=await fetch ("http://localhost:3000/task");
    const data=response.json();
    setTask(data);
  }catch(error){
    console.log(error)
  }
}
    const handleLogout=()=>{
         localStorage.removeItem('loginData')
         localStorage.removeItem('authData')
         //localStorage.clear()
         navigate('/login')
    }
  return (
    <div>
      <Navbar title="Task Managemnet" onLogout={handleLogout}/>
      <h1>MY TASK</h1>
      <TaskList/>
      <p>Welcome! You are logged in 🎉</p>
    </div>
  );
};

export default Dashboard;
