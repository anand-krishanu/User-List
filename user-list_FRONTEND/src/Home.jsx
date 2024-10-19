import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Home() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers()
  }, []);

  const getUsers = async () => {
    const result = await axios.get("http://localhost:8080/allusers");
    setUsers(result.data)
  }

  return (
    <div className='container'>
      <table style={{ marginTop: "150px", alignItems: "center", justifyContent: "center" }} className="table border ">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.userName}</td>
                  <td>{user.email}</td>
                  <td>
                    <button className='btn btn-primary mx-2'>View</button>
                    <button className='btn btn-outline-primary mx-2'>Edit</button>
                    <button className='btn btn-danger mx-2'>Delete</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );

}
