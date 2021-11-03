import React, { useState, useEffect } from 'react'
import { useStopwatch } from 'react-timer-hook';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Timer = ({ fizzBuzz }) => {

    const [count, setCount] = useState(1)

    const {
        seconds, 
        minutes, 
        hours, 
        start, 
        pause, 
        reset 
    } = useStopwatch({ autoStart: false })

    const handlePause = () => {
        setCount(count + 1)
        if (count === 2) {
            reset(0, false)
            setCount(1)
        } else {
            pause()
        }
    }

    useEffect(() => {
        if(seconds === 59 && minutes === 59 && hours === 9){
            pause()
            alert(`GET BACK TO WORK!!!`)
        }
    },[seconds, minutes, hours])

    const renderFizzBuzz = () => {
        const { totalSeconds, fizz, buzz, fizzbuzz } = {
            totalSeconds: seconds + (minutes * 60) + (hours * 60**2),
            fizz: fizzBuzz.fizz,
            buzz: fizzBuzz.buzz,
            fizzbuzz: (fizzBuzz.buzz * fizzBuzz.fizz)
        }

        if (totalSeconds % fizzbuzz === 0 && totalSeconds !== 0) {
            return <h1 className="fizz-text">FIZZBUZZ</h1>
        }

        if(totalSeconds % fizz === 0 && totalSeconds !== 0){
            return <h1 className="fizz-text">FIZZ</h1>
        } else if (totalSeconds % buzz === 0 && totalSeconds !== 0) {
            return <h1 className="fizz-text">BUZZ</h1>
        } else {
            return null
        }

    }
   
    
    return(
        <div className="timer-page-container">
            <Link id="set-times-button" to="/">
            <i class="fas fa-chevron-left"></i>
                Set Times 
            </Link>
            <div className="timer-container">
                <h4 className="timer-box-header">Time Elapsed</h4>
                <div className="timer-box">
                <input 
                placeholder={`${hours}:${minutes < 10 ?`0${minutes}`:`${minutes}`}:${seconds < 10 ?`0${seconds}`:`${seconds}`}`}
                disabled
                />
                <div className="timer-buttons">
                    <button id="timer-btn-start" onClick={start}>
                        Start
                    </button>
                    <button id="timer-btn-stop" onClick={handlePause}>
                        Stop/Reset
                    </button>
                </div>
                </div>
                <div className="text-container">
                    {renderFizzBuzz()}
                </div>
            </div>
            </div>
    )
}

const mapStateToProps = (state) => {
    return {
        fizzBuzz: state.fizzBuzz
    }
}

export default connect(mapStateToProps)(Timer)