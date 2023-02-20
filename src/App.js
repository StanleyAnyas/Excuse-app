import "./App.css"
import React, {useState} from "react"
import Axios from "axios";
function App (){
    const [excuse, setExcuse] = useState(" ")
    const [error, setError] = useState(" ")

    const fetchFamilyExcuse = () => {
        setError(" ")
        setExcuse(" ")
        Axios.get("https://excuser-three.vercel.app/v1/excuse/family/")
        .then((res) => {
            setExcuse(res.data[0].excuse)
        })
        .catch((error) => {
            setError(`An error occured while fetching`)
        });
    }
    const fetchPartyExcuse = () => {
        setError(" ")
        setExcuse(" ")
        Axios.get("https://excuser-three.vercel.app/v1/excuse/party/")
        .then((res) => {
            setExcuse(res.data[0].excuse)
        })
        .catch((error) => {
            setError(`An error occured while fetching`)
        });
    }
    const fetchOfficeExcuse = () => {
        setError(" ")
        setExcuse(" ")
        Axios.get("https://excuser-three.vercel.app/v1/excuse/office/")
        .then((res) => {
            setExcuse(res.data[0].excuse)
        })
        .catch((error) => {
            setError(`An error occured while fetching`)
        });
    }
    
    return(
        <div className="App">
            <h1> Generate An Excuse</h1>
            <button onClick={fetchPartyExcuse}> Party</button>
            <button onClick={fetchFamilyExcuse}> Family </button>
            <button onClick={fetchOfficeExcuse}> Office </button>
            {error && <p style={{color: "red"}}>{error}</p>}
            <p style={{color: "red"}}>{excuse}</p>
        </div>
    )
}

export default App
