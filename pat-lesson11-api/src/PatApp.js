
import './App.css';
import PatListUsers from './components/PatListUsers';
import axios from './api/patApi'
import { useEffect } from 'react';
function PatApp() {

  const [patListUsers,setPatListUsers] = useState([]);

  // đọc dữ liệu từ api
  const patGetAllUsers = async  ()=>{
    const patResponse = await axios.get("patsinhvien");
    console.log("Api Data:",patResponse.data);
    setPatListUsers(patResponse.data)
  }
  

  useEffect(()=>{
    patGetAllUsers();
    console.log("State Data:",patListUsers);
  },[])

  return (
    <div className="container border my-3">
        <h1>Làm việc với MockApi</h1>
        <hr/>
        <PatListUsers  renderPatListUsers={patListUsers}/>
    </div>
  );
}

export default PatApp;
 