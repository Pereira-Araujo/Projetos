import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL, axiosConfig } from '../../Constants/requestsAPI'

function Details(){

       const [playlistName, setPlaylistName] = useState(null)
      
         const namePlaylist = () => {
                axios
            .get(`${BASE_URL}/playlists`, axiosConfig)
            .then((answer) => {
                setPlaylistName(answer.data.result.list)
                console.log(playlistName)
            })
            
        }
        useEffect(()=>{
            namePlaylist()
        },[playlistName])

   
      
return (
   
     <section>
     <button onClick={namePlaylist}>go</button>
     {playlistName}
     </section>


)

}

export default Details