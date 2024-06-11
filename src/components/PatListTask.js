import React from 'react'

export default function PatListTask({renderPatListTasks,onPatTaskEdit,onPatTaskDelete}) {
    console.log(renderPatListTasks);
    // Hàm xử lý khi sửa
    const patHandleEdit = (param)=>{
        console.log("Click edit:", param);
        onPatTaskEdit(param) //Đẩy lên App thông qua props (onPatTaskEdit)
    }
    // Hàm xử lý khi xóa
    const patHandleDelete = (param)=>{
        if(window.confirm('Bạn có chắc chắn xóa không')){
            onPatTaskDelete(param) // Đẩy dữ liệu xóa lên trên App.js
        }
    }
    //render data
    let patElementTask = renderPatListTasks.map((task, index)=>{
        return(
            <>
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>{task.pat_taskId}</td>
                    <td>{task.pat_taskName}</td>
                    <td>{task.pat_level}</td>
                    <td>
                        <button className='btn btn-success'
                        onClick={()=>patHandleEdit(task)}
                        >Edit</button>
                        <button className='btn btn-danger'
                        onClick={()=>patHandleDelete(task)}
                        >Remove</button>
                    </td>
                </tr>
            </>
        )
    })
  return (
    <div>
        <h2>Danh sách các nhiệm vụ</h2>
        <table className='table table-bordered'>
            <thead>
                <th>STT</th>
                <th>Task Id</th>
                <th>Task Name</th>
                <th>Task Level</th>
            </thead>
            <tbody>
                {patElementTask}
            </tbody>
        </table>
    </div>
  )
}
