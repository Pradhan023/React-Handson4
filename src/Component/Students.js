import React from 'react'

export default function Students() {
  return (
    <>
    <div className='head'>
      <h1>Students Details</h1>
      <button>Add New Student</button>
    </div>
    <table rules='rows'>
      <tbody>
        <tr>
          <td>Name</td>
          <td>Age</td>
          <td>Course</td>
          <td>Batch</td>
          <td>Edit</td>
        </tr>
        <tr>
          <td>John</td>
          <td>24</td>
          <td>Mern</td>
          <td>October</td>
          <td>Edit</td>
        </tr>
        
        <tr>
          <td>Doe</td>
          <td>25</td>
          <td>Mern</td>
          <td>November</td>
          <td>Edit</td>
        </tr>
        <tr>
          <td>Biden</td>
          <td>24</td>
          <td>MERN</td>
          <td>January</td>
          <td>Edit</td>
        </tr>
        <tr>
          <td>Anish</td>
          <td>24</td>
          <td>MERN</td>
          <td>Febuary</td>
          <td>Edit</td>
        </tr>
        <tr>
          <td>Chris</td>
          <td>35</td>
          <td>MERN</td>
          <td>August</td>
          <td>Edit</td>
        </tr>
        <tr>
          <td>Anya</td>
          <td>22</td>
          <td>MERN</td>
          <td>March</td>
          <td>Edit</td>
        </tr>
      </tbody>
    </table>
    </>
  )
}
