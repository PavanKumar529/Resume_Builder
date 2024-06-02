import './App.css';

import React, { useEffect } from "react"
import axios from 'axios'
import instance from './config/axios';
import Auth from './Auth';

function App() {
  axios.defaults.baseURL = "http://127.0.0.8:8000"

  async function print() {
    try {
      let result=await instance.post('/auth/v1/signin',{email:"adharsh@gmail.com",password:'BavyaSree@143'})
      let data= result.data;
      console.log('data is',data)
      localStorage.setItem("access", data.access)
      localStorage.setItem("refresh", data.refresh)
    }
    catch(err) {
      console.log(err.message)
    }
  }
  useEffect(() => {
    print()
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Website Under The Maintenance</h1>
        <Auth/>
      </header>
    </div>
  );
}
export default App;
