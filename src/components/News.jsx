import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor(){
    super();
    this.state = {
      articles : [],
      loading : false,
      page:1,
    }
  }
async componentDidMount(){
  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5dd2521d30eb4b3981419cf4157ff6f0&pageSize=6`;
  let data = await fetch(url);
  let parseData = await data.json()
  this.setState({articles : parseData.articles,totalResults:parseData.totalResults})
}


handleNextClick = async () => {
  if(!this.state.page+1>Math.ceil(this.state.totalResults/20)){

  }else{
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5dd2521d30eb4b3981419cf4157ff6f0&page=${this.state.page + 1}&pageSize=6`;
    let data = await fetch(url);
    let parseData = await data.json()
    this.setState({
    page : this.state.page + 1,
    articles : parseData.articles
  })
  } 
}
 
 handlePrevClick = async () => {
  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5dd2521d30eb4b3981419cf4157ff6f0&page=${this.state.page - 1}&pageSize=6`;
  let data = await fetch(url);
  let parseData = await data.json()
  this.setState({
    page : this.state.page - 1,
    articles : parseData.articles
  })
}

  render() {
    return (
      <div className="container">
        <h2 className='text-center'>Top Headlines</h2>
        <div className="row mt-3">
        {this.state.articles.map((e) => {
          return <div className="col-md-4" key={e.url} >
          <NewsItem title ={e.title} description={e.description} imageUrl={e.urlToImage} newsUrl = {e.url}/>
        </div>
        })}
        </div>
        <div className="container d-flex justify-content-between m-3">
          <button disabled={this.state.page<=1} type="button" onClick={this.handlePrevClick} className="btn btn-dark">Previous</button>
          <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/6)} type="button" onClick={this.handleNextClick} className="btn btn-dark">Next</button>

        </div>
      </div>
    );
  }
}

export default News;
