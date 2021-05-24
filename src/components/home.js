import {React , useState} from 'react'
import { Link } from 'react-router-dom'
import firebase from '../firebase/firebase'

const Home = () => {
    const[n , setN] = useState()
    const[ num , setNum ] = useState()
  
  const senData = ()=>{
    firebase.database().ref('/').child('users').push(num)
  }


    return (
        <div>
        <h1>Welcome!!</h1>
        <Link to='/data'>Data</Link>
        <div>
          <p>Please Enter Your Credit card number</p>
          <input type='number' name='number' onChange={(e)=>{const obj = {credit:e.target.value} 
        setNum(obj)}}  />
          <button onClick={senData} >Send</button>
        </div>
        <p>{n}</p>
      </div>
  
    )
}

export default Home