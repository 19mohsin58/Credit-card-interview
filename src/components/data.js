import React, { useState,useEffect } from 'react'
import {Link} from 'react-router-dom'
import firebase from '../firebase/firebase'
function Data() {
  const [dt , setDt] = useState([])


    useEffect(() =>  firebase.database().ref(`users/`).on('value',snapshot => { 
        let responselist = Object.values(snapshot.val())
        setDt(responselist)
          }), []);

console.log(dt)

    return (
        <div>
            <h1>Data</h1>
            <Link to='/'>home</Link>
            <h1>All credit cards numbers in databse</h1>
            {
                dt.map((v,i)=>{
                    return <p>{v.credit}</p>
                })
            }

        </div>
    )
}

export default Data
