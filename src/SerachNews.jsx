
import { useState,useEffect } from "react"
import { useParams } from "react-router-dom";
import axios from "axios"
import Newsinfo from "./Newsinfo";

 

export default function SearchNews() {
  const apiKey= "343422b5f5367f8ff7c6f81f20d2fa62";

  const {q}=useParams();
  const [articles,setArticles] = useState([{publishedAt:''}]);
   
  useEffect(()=>{
    const url=" https://gnews.io/api/v4/search?lang=en&max=9&q="+q+"&apikey="+apiKey

    axios.get(url).then((res)=>{
      console.log(res.data.articles);
      setArticles(res.data.articles)
    })
  },[q])
  return (
   <>
   <Newsinfo articles={articles}/>
   </>
  )
}