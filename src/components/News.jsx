import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  apiKey = process.env.REACT_APP_NEWS_API;
  titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    return str.join(' ');
  }
  constructor(props){
    super(props);
    this.state = {
      articles : [],
      loading : false,
      page:1,
    }
    document.title = `${this.titleCase(this.props.category)} - Quick News`
  }
async componentDidMount(){
  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.apiKey}&pageSize=6`;
  let data = await fetch(url);
  let parseData = await data.json()
  this.setState({articles : parseData.articles,totalResults:parseData.totalResults})
}


handleNextClick = async () => {
  if(!this.state.page+1>Math.ceil(this.state.totalResults/20)){

  }else{
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=6`;
    let data = await fetch(url);
    let parseData = await data.json()
    this.setState({
    page : this.state.page + 1,
    articles : parseData.articles
  })
  } 
}
 
 handlePrevClick = async () => {
  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page - 1}&pageSize=6`;
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
        <h2 className='text-center p-2'>Quick news</h2>
        <h2 className='text-center'>Top {`${this.titleCase(this.props.category)} `}Headlines</h2>
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
