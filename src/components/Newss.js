import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class Newss extends Component {

  constructor(){
    super()
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults:0
    }
  }

  async componentDidMount(){
let url = `https://newsapi.org/v2/top-headlines?apiKey=ac4392d97ae74c878866ad5482b11fe7&q=sport&page=1&pageSize=20`;
let data = await fetch(url)
let jsonData = await data.json()
this.setState({articles : jsonData.articles, totalResults: jsonData.totalResults})
  }
  
  previous= async()=>{
    let url = `https://newsapi.org/v2/top-headlines?apiKey=ac4392d97ae74c878866ad5482b11fe7&q=sport&page=${this.state.page-1}&pageSize=20`;
    let data = await fetch(url)
    let jsonData = await data.json()
    this.setState({articles : jsonData.articles,
      page: this.state.page-1
    })
  }

  next= async()=>{
    if (this.state.totalResults> 20*this.state.page) {
      console.log(this.state.totalResults, this.state.page)
      let url = `https://newsapi.org/v2/top-headlines?apiKey=ac4392d97ae74c878866ad5482b11fe7&q=sport&page=${this.state.page+1}&pageSize=20`;
    let data = await fetch(url)
    let jsonData = await data.json()
    this.setState({articles : jsonData.articles,
      page: this.state.page+1
    })
    } else {
      console.log(this.state.totalResults, this.state.page)
    }
    console.log(this.state.page)
  }

  render() {
    return (
      <div className="container my-3">
       <h2>These are the top headlines</h2>
       <div className='row'>
       {this.state.articles.map((element)=>{
        return <div className='col md-3' key = {element.url}>
        <NewsItem  title = {element.title?element.title.slice(0,45):''} description = {element.description? element.description.slice(0,75):''} imageUrl = {element.urlToImage} url = {element.url}/>
        </div>
      })}
        </div>
        <div className="container d-flex justify-content-between my-3">
        <button type="button" className="btn btn-dark" disabled={this.state.page<=1} onClick={this.previous}>Previous</button>
        <button  type="button" className="btn btn-dark"  onClick={this.next} >Next</button>
        </div>
      </div>
    )
  }
}

export default Newss
