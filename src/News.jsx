import { useState,useEffect } from "react"
import { useParams } from "react-router-dom";
import axios from "axios"
import { Link } from "react-router-dom"
import Newsinfo from "./Newsinfo";



export default function News() {
  const apiKey= "343422b5f5367f8ff7c6f81f20d2fa62";

  const {category}=useParams();
  const [articles,setArticles] = useState([{publishedAt:''}]);
   
  useEffect(()=>{
    const url=" https://gnews.io/api/v4/top-headlines?lang=en&max=9category="+category+"&apikey="+apiKey

    axios.get(url).then((res)=>{
      console.log(res.data.articles);
      setArticles(res.data.articles)
    })
  },[category])
  return (
   <>
   <Newsinfo articles={articles}/>
   </>
  )
}