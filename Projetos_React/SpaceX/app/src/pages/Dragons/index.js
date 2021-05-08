import {useState,useEffect} from 'react'
import axios from 'axios'


function Dragons() {

const [information,setInformation] = useState([])

const getDragons = ()=>{
  axios.get('https://api.spacexdata.com/v4/dragons').then((response)=>{
    setInformation(response.data)
  })
}

useEffect(()=>{
  getDragons()
})

    return (
      <main>
      <h2>Dragons</h2>
      {information.map((each)=>{
        return(
          <div>
            <p>Nome: {each.name}</p>
            <p>Peso: {each.launch_payload_mass.kg} kg</p>
            <img src={each.flickr_images}/>
            <p>{each.description}</p>
          </div>
        )
      })}
      </main>
    
    );
  }
  
  export default Dragons