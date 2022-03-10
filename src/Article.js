
import React from 'react'
// import { Link } from 'react-router-dom'
import './Article.css'

function Article({article}) {
  return (
    <div className='article'>
      <div className="article__info">
        <h1>{article.title}</h1>
        <h5>{article.description}</h5>
        <span>{article.publishedAt}</span>
      </div>
        
        {<img src={article.urlToImage} alt=''/>}
    </div>
  )
}

export default Article
