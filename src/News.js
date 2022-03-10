import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react';
import './News.css'
import Article from './Article';
import { Button } from '@material-ui/core';


const proxyURL = "https://cors-anywhere.herokuapp.com/"

function News() {

  const [news,setNews] = useState([]);
  const [searchTopic,setSearchTopic] = useState('spacex');
  

  useEffect(() => {
    
    const api = axios.create({baseURL:`${proxyURL}https://newsapi.org/v2`})

    const getNews = async () => {
      const results =  await api.get(`/everything?q=${searchTopic}&apiKey=aec2d6e3dea142259d475a1b4f25682c`);
      console.log(results.data.articles)
      setNews(results.data.articles);
    }
    getNews();
  },[searchTopic])

  const searchNews = async (e) => {
    // e.preventDefault();
    // const api = axios.create({baseURL:'https://newsapi.org/v2'})
    // const results = await api.get(`'/everything?q=${searchTopic}&apiKey=${API_KEY}'`)
    // console.log(results.data.articles);
    // setNews(results.data.articles)

    setSearchTopic('');
  }
  
  return (
    <div className='news'>
    <div className="news__header">
      <h1>News</h1>
      <form >
      <input className="news__search" value={searchTopic} onChange = {(e)=>setSearchTopic(e.target.value)} type="text"  placeholder='Keywords'/>
      <Button hidden type='submit' onClick={searchNews}></Button>
      </form>
        

      <div className="categories">
        <h3>Trending</h3>
        <h3>U.S</h3>
        <h3>Popular</h3>
      </div>
    </div>
      
      
      {news.map((article,index)=>{
        return <Article key={index} article={article}/>
      })}
      
    </div>
  )
}

export default News
