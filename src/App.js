import './App.css';
import {React,useState} from 'react'
import PatListTask from './components/PatListTask';
import PatTaskAddOrEdit from './components/PatTaskAddOrEdit';

function App() {
    //mock data
    const pat_listTasks = [
      { pat_taskId:2210900097,pat_taskName:"Phạm Anh Tuấn", pat_level:"Small" },
      { pat_taskId:2, pat_taskName:"Học lập trình reactjs",pat_level:"Medium"},
      { pat_taskId:3, pat_taskName:"Lập trình với Frontend - Reactjs",pat_level:"High"},
      { pat_taskId:4, pat_taskName:"Lập trình Fullstack (PHP, Java, NetCore)",pat_level:"Small"},
    ]
    //sử dụng hàm usestate của hook để lưu trữ trạng thái dữ liệu
    const [patListTasks,setPatListTasks] = useState(pat_listTasks);
    
    //tạo state dữ liệu cho form(add, edit)
    const patTaksObj={
      pat_taskId:0, 
      pat_taskName:"",
      pat_level:""
  };
    //taoj state
    const [patTask,setPatTask] = useState(patTaksObj);//dữ liệu trên form
      // state đê phân biệt trạng thái là thêm mới hay sửa
  const [patIsAddOrEdit, setPatIsAddOrEdit ] = useState(true); // mặc định ban đầu là form thêm mới

    //nhận dữ liệu khi sửa
    const patHandleEdit =(param)=>{
      console.log("App-Edit:",param);
      //cập nhật lại patTask
      setPatTask(param);
      // Cập nhật trạng thái form là sửa
    setPatIsAddOrEdit(false);
    };

    const patHandleSubmit = (patParam)=>{
      console.log("App:",patParam);
      if(patIsAddOrEdit===true){ // trường hợp thêm mới dữ liệu
        setPatListTasks((prev) => {
          return [...prev, patParam];
        });
      }else{ // Trường hợp sử dữ liệu
        for (let i = 0; i < patListTasks.length; i++) {
            if(patListTasks[i].pat_taskId == patParam.pat_taskId){
              patListTasks[i] = patParam;
              break;
            }
        }
        // Cập nhật lại state (tddListTasks)
      setPatListTasks(prev=>{
        return[
          ...prev,
          patParam
        ]
    })
    }
    // Hàm xóa
  const patHandleDelete = (param)=>{
    let patResult = patListTasks.filter(x=>x.pat_taskId != param.pat_taskId);
    setPatListTasks(patResult);
  }
    
    return (
      <div className="container border">
        <h1>Phạm Anh Tuấn</h1>
        <hr/>
        <div>
          {/* {danh sách list task} */}
          <PatListTask renderPatListTasks ={patListTasks} 
                      onPatTaskEdit = {patHandleEdit}
                      onPatTaskDelete={patHandleDelete}
          />
        </div>
        <div>
          <PatTaskAddOrEdit 
           renderPatIsAddOrEdit = {patIsAddOrEdit}
            renderPatTask = {patTask}
            patOnSubmit={patHandleSubmit} />
        </div>
      </div>
      
    );
}
}
export default App;
