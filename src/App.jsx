import { useEffect, useState } from 'react'
import "./App.css";



const Endpoint="https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";






function App() {

  const [data,setData]=useState([]);
  const [currentPage,setCurrentPage]= useState(1);
  const recordsPerPage=10;
  const lastIndex=currentPage*recordsPerPage;
  const firstIndex=lastIndex-recordsPerPage;
  const records=data.slice(firstIndex,lastIndex);
  const nPages=Math.ceil(data.length/recordsPerPage);
  const numbers=[...Array(nPages+1).keys()].slice(1);


  useEffect(()=>
    {
      async function fetchDetails(){
      try{
        const response=await fetch(Endpoint);
        const data=await response.json();
        setData(data);
        console.log(data);
        console.log(data.id);
      }
      catch(e)
      {
        alert("failed to fetch data");
      }

      }
     fetchDetails();
    },[])
 
  return (
    <div className="Container">
      <h1>Employee Data Table</h1>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>ROLE</th>
          </tr>
        </thead>

        <tbody>
          {records.map((d,i)=>(
            <tr key={i}>
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.email}</td>
                <td>{d.role}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <nav>
        <ul>
          <button>
            <a href="#"
            onClick={prePage}
            >
              Previous
            </a>
          </button>
          {
            numbers.map((n,i)=>(
              <button className={`${currentPage === n ? 'active' :'unactive'}`} key={i}>
                  <a href="#" onClick={()=>ChangeCPage(n)}>{n}</a>
              </button>
            ))
          }
          <button>
            <a href="#"
            onClick={nextPage}
            >
              Next
            </a>
          </button>
        </ul>
      </nav>
    </div>
  )

function prePage(){
  if(currentPage!==1)
  {
    setCurrentPage(currentPage-1);
  }
}

function nextPage(){
  if(currentPage!==nPages)
  {
    setCurrentPage(currentPage+1);
  }
}
function ChangeCPage(id){
  setCurrentPage(id);
}

}

export default App
