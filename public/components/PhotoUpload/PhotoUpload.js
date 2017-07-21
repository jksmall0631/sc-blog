import React, { Component } from 'react'
import Loading from '../Loading/Loading'

export default class PhotoUpload extends Component {
  constructor(){
    super()
    this.state = {
      loading: false,
      success: false,
    }
  }


  initUpload(e) {
    this.setState({ loading: true })
    const files = document.getElementById(this.props.id).files
    const file = files[0]
    let form = new FormData()
    form.append('file', file)
    if (file == null) {
      this.setState({ loading: false })
      return alert('No file  selected.')
    }
    fetch(`http://localhost:3000/api/v1/photo?file-name=${file.name}&file-type=${file.type}`, {
      method: 'POST',
      body: form,
    })
    .then(data => data.json())
    .then(data => {
      this.setState({ loading: false, success: true })
      this.props.savePhoto(data.url)
    })
    .catch(err => {
      console.log(err)
    })
  }

  render() {
    return (
      <div>
        <input
          className='upload'
          type='file' id={this.props.id}
          style={(this.state.success) ? {color: '#6D9EE1'} : {}}
          onChange={(e) => this.initUpload()}>
        </input>
        {this.state.loading ? <Loading /> : ''}
      </div>
    )
  }
}
