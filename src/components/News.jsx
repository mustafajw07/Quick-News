import React from "react";
import {useEffect,useState} from "react";
import NewsItem from "./NewsItem";


const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [totalResults,setTotalResult] = useState(0);

  const titleCase = (str) => {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    return str.join(' ');
  }
    document.title = `${titleCase(props.category)} - Quick News`

  const updateNews = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&pageSize=${100}`;
    let data = await fetch(url);
    let parseData = await data.json()
    setArticles(parseData.articles);
    setTotalResult(parseData.totalResults)
  }
useEffect(() => {
  updateNews();
}, []);

    return (
      <div className="container">
        <h2 className='text-center p-2'>Quick news</h2>
        <h2 className='text-center'>Top {`${titleCase(props.category)} `}Headlines</h2>
        <div className="row mt-3">
        {articles.map((e) => {
          return <div className="col-md-4" key={e.url} >
          <NewsItem title ={e.title} description={e.description} imageUrl={e.urlToImage} newsUrl = {e.url}/>
        </div>
        })}
        </div>
      </div>
    );
}

export default News;
