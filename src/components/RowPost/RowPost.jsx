import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from '../../axios'
import { imageUrl } from '../../Constants/COnstants'
import YouTube from 'react-youtube'
import { API_KEY } from '../../Constants/COnstants'
function RowPost(props) {
    const [urlId, seturlId] = useState('')
    const [movie, setMovie] = useState([])
    useEffect(() => {
        axios.get(props.url).then(response=>{
            console.log(response.data)
            setMovie(response.data.results)
        }).catch(err=>{
            // alert('NetWork Error')
        })
    }, [])

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
      const handleMovie=(id)=>{
        console.log(id)
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(responce=>{
            if(responce.data.results.length!==0){
                seturlId(responce.data.results[0])
            }
            else{
                console.log("Not Data")
            }
        })
      }
    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className="posters">
                {movie.map((obj)=>{
                    return(
                        <img onClick={()=>handleMovie(obj.id)} className={ props.isSmall ? 'smallPoster':'Poster'} src={`${imageUrl+obj.backdrop_path}`} alt="Poster" />

                    )
                })}
            </div>
            { urlId && <YouTube videoId={urlId.key} opts={opts}/>}
        </div>
    )
}

export default RowPost
