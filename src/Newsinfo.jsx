import React from 'react'

export default function Newsinfo({articles}) {

   
  return (
    <>
     <div className='container'>  
    <div  className='row'>
     {articles.map((article,index)=>(
     <div className='col-md-4' key={index}>
     <div className="card">
<img src={article.image} class="card-img-top" alt="..."/>
<div className="card-body">
 <h5 className="card-title">{article.title}</h5>
 <p className="card-text">{article.descripation}</p>
 <p className="card-subtitle">Published At : {article.publishedAt.slice(0,10)}</p>
 <a href={article.url}  target="_blank"  className="btn btn-primary">Read Full News</a>
</div>
</div>
     </div>
   ))}


    </div>

 </div>

    </>
  )
}
