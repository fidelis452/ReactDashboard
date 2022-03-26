import "./UserList.css"
import { DataGrid } from "@material-ui/data-grid";
import { Delete  } from "@material-ui/icons";
import { userRows } from "../../Data";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function UserList() {
    const [data, setData] = useState(userRows);
    const handleDelete = (id) =>{
        setData(data.filter((item) => item.id!==id));
    };
    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'user', headerName: 'User', width: 200, renderCell: (params)=>{
            return(
                <div className="userListUser">
                    <img className="UserImage" src={params.row.avatar} alt=""/>
                    {params.row.userName}
                </div>
            )
        }},
        { field: 'email', headerName: 'Email',width: 250},
        { field: 'status', headerName: 'Status',width: 120},
        {field: 'transaction', headerName: 'Transactions',width: 150},
        {field: 'action', headerName: 'Action',width: 150, renderCell: (params) => {
            return(
                <>
                <Link to={"/users/"+params.row.id}>
                <button className="UserListEdit">Edit</button>
                </Link>
                <Delete className="UserListDelete" onClick={()=>handleDelete(params.row.id)}/>
                </>
            )
        }},
      ];
      
  return (
    <div className="userList">
         <DataGrid
        rows={userRows}
        disableSelectionOnClick
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}
