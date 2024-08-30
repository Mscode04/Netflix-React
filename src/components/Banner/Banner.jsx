import React,{useEffect} from 'react'
import './Banner.css'
import axios from '../../axios'
import { API_KEY } from '../../Constants/COnstants'
import { useState } from 'react'
import { imageUrl } from '../../Constants/COnstants'

function Banner() {
    const [movie,setMovie]=useState()
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((responce)=>{
           var rand= Math.floor(Math.random() * 21)
           setMovie(responce.data.results[rand])
            
        })
    }, [])
    return (
        <div style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ""})`}} className='banner'>
            <div className='content'>
                <h1 className='title'>{movie ? movie.title:""}</h1>
                
                <div className="banner-buttons">
                    <h1 className='descrition'>{movie ? movie.overview : ""}</h1>
                    <button className='button'>Play</button>
                    <button className='button'>My List</button>
                </div>
            </div>
            <div className='fade-bottom'>
                
            </div>
        </div>
    )
}

export default Banner
