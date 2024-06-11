import React, { useEffect, useState } from 'react'

export default function PatTaskAddOrEdit({renderPatTask,renderPatIsAddOrEdit,patOnSubmit}) {
    //đối tượng task
    // const patTaskObj={
    //     pat_taskId:0, 
    //     pat_taskName:"",
    //     pat_level:""
    // }
    const [patTask,setPatTask] = useState(renderPatTask);
    useEffect(()=>{
        setPatTask(renderPatTask)
    },[renderPatTask])

     // tạo tiêu đề form
     const patTieuDe = renderPatIsAddOrEdit==true?"Thêm mới task":"Sửa thông tin task";
    //hàm xử lý sự kiện thay đổi trên điều khiển
    const patHandleChange = (patEvent) => {
        let name = patEvent.target.name;
        let value = patEvent.target.value;
        setPatTask(prev=>{
            return{
                ...prev,
                [name]: value,
            }
            
        })
    }
    console.log(patTask);
    const patHandleSubmit =(patEvent)=>{
        patEvent.preventDefault();
        patOnSubmit(patTask);
    }
  return (
    <div>
        <h2>{patTieuDe}</h2>
        <form>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Task ID</span>
                <input 
                name='pat_taskId' value={patTask.pat_taskId} onChange={patHandleChange} 
                type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon2">Task Name</span>
                <input 
                name='pat_taskName' value={patTask.pat_taskName} onChange={patHandleChange} 
                type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon2" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon3">Task Level</span>
                <select name='pat_level' value={patTask.pat_level} onChange={patHandleChange} className="form-control" 
                placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon3"> 
                <option value={'Small'}>Small</option>
                <option value={'Medium'}>Medium</option>
                <option value={'High'}>High</option>
                </select>
            </div>
            <button onClick={patHandleSubmit} classNameName='btn btn-primary'>Ghi Lại</button>
        </form>
    </div>
  )
}
