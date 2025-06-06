import { useEffect, useState } from 'react'



const Endpoint="https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";


function App() {

  useEffect(()=>
    {
      async function fetchDetails(){
      try{
        const response=await fetch(Endpoint);
        const data=await response.json();
        console.log(data);
      }
      catch(e)
      {
        alert("failed to fetch data");
      }

      }
     fetchDetails();
    },[])
 
  return (
    <>
      <h1>XPagination</h1>

      <table>
        <thead>
          <th>ID</th>
          <th>NAME</th>
          <th>EMAIL</th>
          <th>ROLE</th>
        </thead>
      </table>
    </>
  )
}

export default App
