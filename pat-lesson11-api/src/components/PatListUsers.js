import React from 'react'

export default function PatListUsers({renderPatListUsers}) {
    console.log("PatListUsers:",renderPatListUsers);
    // hiển thị dữ liệu
    let patElementUser = renderPatListUsers.map((patUser,index)=>{
        return(
            <>
                <tr>
                    <td>{patUser.id}</td>
                    <td>{patUser.HoSv}</td>
                    <td>{patUser.TenSv}</td>
                    <td>{patUser.Phai}</td>
                    <td>{patUser.NgaySinh}</td>
                    <td>{patUser.NoiSinh}</td>
                    <td>{patUser.MaKH}</td>
                    <td>{patUser.HocBong}</td>
                    <td>{patUser.DiemTrungBinh}</td>
                    <td>...</td>
                </tr>
            </>
        )
    })
  return (
    <div className='row'>
        <div className='col-md-12'>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>HoSv</th>
                        <th>TenSv</th>
                        <th>Phai</th>
                        <th>NgaySinh</th>
                        <th>NoiSinh</th>
                        <th>MaKH</th>
                        <th>HocBong</th>
                        <th>DiemTrungBinh</th>
                    </tr>
                </thead>
                <tbody>
                {patElementUser}
                </tbody>

            </table>
        </div>
    </div>
  )
}
