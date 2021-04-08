import React  from 'react'
import { Formik, Field, Form } from 'formik';
import schema from '../../Schema/schema'
import axios from 'axios'

function CriacaoPlaylist(){
  
 

const criar = (values) =>{
  
  const headers = {
    headers:{
      Authorization:'Adriano Araujo'
    }
  }
 
  const body = {
       name : values.playlistName
    }
 console.log(body)

   axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', body, headers)
   .then(() => {
    alert("Playlist criada com sucesso!!")
    
    
  })
  .catch((erro) => {
    console.log(erro)
    alert('Não foi possivel criar playlist :(')
  })

}
    return(
        <section>
        <Formik
        validationSchema={schema}
        onSubmit={criar}
        validateOnMount
        initialValues={{
          name: '',
        }}
        render={({ values, errors, touched, isValid }) => (
          <Form>
            <div>
              <label>Nome</label>
              <Field name="playlistName" type="text"/>
            </div>
            <button type="submit" disabled={!isValid}>Enviar</button>
          </Form>
        )}
      />
        

        </section>
    )
}

export default CriacaoPlaylist;

