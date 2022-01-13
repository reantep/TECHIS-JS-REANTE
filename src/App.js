import React, { useState, useRef } from 'react';
import PeopleList from './PeopleList.js';
import { v4 as uuidv4 } from 'uuid';
import './App.css';



function App() {
  const [peoples, setPeoples] = useState([])
  const nameRef = useRef()
  const ageRef = useRef(0)

  function handleAddPeoples(e) {
    const name = nameRef.current.value
    const age = ageRef.current.value
    if (name.length === 0) {
      alert('Please enter a name')
      return;
    }
    if (age < 1) {
      alert('Age must be > 0')
      return;
    }
    setPeoples(prevPeoples => {
      return [...prevPeoples, { id: uuidv4(), name: name, age: age }]
    })
    nameRef.current.value = null
    ageRef.current.value = null
  }

  return (
    <>
      <div className='app'>
        <div className='adduserfield'>

          <div className='user-input'>
            <h4>Username</h4>
            <input placeholder="Name" ref={nameRef} type="text" />
          </div>

          <div className='user-input'>
            <h4>Age (Years)</h4>
            <input placeholder='Age' ref={ageRef} type="number" />
          </div>
          <button className='add-user-btn' onClick={handleAddPeoples}>
            Add user
          </button>

        </div>

        <div className='user-list'>
          <PeopleList peoples={peoples} />
        </div>
      </div>
    </>
  );
}

export default App;
