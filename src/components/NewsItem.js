import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, url} = this.props;
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
  <img src= {imageUrl?imageUrl:'https://cdn.24.co.za/files/Cms/General/d/3584/5e6d783b7d514c779ac487512dd9959b.jpg'} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={url}  target = '_blank'className="btn btn-primary">Read more</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem
