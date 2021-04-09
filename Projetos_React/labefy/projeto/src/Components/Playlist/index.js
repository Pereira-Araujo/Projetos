import React, { useState } from 'react'
import {Card} from './style'
import axios from 'axios'
import { BASE_URL, axiosConfig } from '../../Constants/requestsAPI'

function Playlist() {
  const [playlist, setPlaylist] = useState('')

  const onChangeName = (event) => {
    setPlaylist(event.target.value)
  }

  const creation = (event) => {
    event.preventDefault()

    const body = {
      name: playlist,
    }

    axios
      .post(`${BASE_URL}/playlists`, body, axiosConfig)
      .then(() => {
        alert('playslist criada com sucesso')
      })
      .catch(() => {
        alert('Ihh acho que esse nome já existe')
      })
  }

  return (
    <>

      <Card onSubmit={creation}>
        <label>Criar Playlist</label>
        <input type="text" value={playlist} onChange={onChangeName} />
        <button type="submit">go</button>
      </Card>
    
    </>
  )
}

export default Playlist
