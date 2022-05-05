import React from "react";
import NewsItem from "./NewsItem";
import { useState } from "react";



function New() {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  

  async function componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=in&&category=general&apiKey=cf6831c1fafd4d08b89320e3b1e60df3&pageSize=6`;
    let data = await fetch(url);
    let parseData = await data.json()
    setArticles([])
  }
  
  return (
      <>
      <div className="container">
      <h1 className="text-center mt-3 mb-3">Top Headline</h1>
      <div className="row justify-content-center">
      <NewsItem title={'Title'} description={'description'} imgUrl={'imgUrl'}/>
      </div>
      </div>
      </>
  );
}

export default New;
