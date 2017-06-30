import React, {Component} from 'react'
import ImageUpload from '../ImageUpload/ImageUpload'

export default class Protected extends Component {
  constructor(){
    super()
    this.state = {
      image: '',
      title: '',
      date: '',
      content: '',
    }
    this.saveImage = this.saveImage.bind(this)
  }

  save(){
    const url = 'http://localhost:3000/api/v1/blog'
    fetch(url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({image: this.state.image, title: this.state.title, date: this.state.date, content: this.state.content})
    })
    .then(data => data.json())
    .then(data => console.log(data))
  }

  saveImage(image){
    this.setState({image})
  }

  render(){
    return(
      <div>
        <h1>PROTECTEEEEEED!</h1>
        <ImageUpload saveImage={this.saveImage}/>
        <input placeholder='title' onChange={(e) => this.setState({title: e.target.value})}></input>
        <input type='date' placeholder='date' onChange={(e) => this.setState({date: e.target.value})}></input>
        <textarea placeholder='content' onChange={(e) => this.setState({content: e.target.value})}></textarea>
        <button onClick={() => this.save()}>make that sheeeeiiiitttt!</button>
      </div>
    )
  }
}
