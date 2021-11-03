import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { sendState } from '../../actions'

const Home = (props) => {

   const [fizzBuzz, setFizzBuzz] = useState({
       fizz: null,
       buzz: null
   })

    const setFizz = (event) => {
        setFizzBuzz({ ...fizzBuzz, fizz: event.target.value })
    }

    const setBuzz = (event) => {
        setFizzBuzz({ ...fizzBuzz, buzz: event.target.value })
    }

    const sendState = () => {
        props.sendState(fizzBuzz)
    }

    return(
        <div className="home-container">
            <h4 className="home-header">Please enter a time in seconds.<strong>Values should be 2 to 10 inclusive</strong></h4>
            <div className="form-container">
                <div className="inputs">
                    <label>Fizz:
                        <input className="input-home" type="number"
                        min="2" max="10" placeholder="2"
                        onChange={setFizz}  
                        />
                    </label>
                    <label>Buzz:
                        <input className="input-home" type="number"
                        min="2" max="10" placeholder="2"
                        onChange={setBuzz}
                        />
                    </label>
                </div>
                <Link id="goto-timer-button" onClick={sendState} to="/timer">
                    Go to Timer <i class="fas fa-chevron-right"></i>
                </Link>
             </div>
        </div>
    )
}



export default connect(null, { sendState })(Home)