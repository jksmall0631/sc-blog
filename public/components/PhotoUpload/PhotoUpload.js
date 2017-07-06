import React, { Component } from 'react'

export default class PhotoUpload extends Component {
  initUpload(e) {
    const files = document.getElementById(this.props.id).files
    const file = files[0]
    let form = new FormData()
    form.append('file', file)
    if (file == null) {
      console.log(file)
      return alert('No file  selected.')
    }
    fetch(`http://localhost:3000/api/v1/photo?file-name=${file.name}&file-type=${file.type}`, {
      method: 'POST',
      body: form,
    })
    .then(data => data.json())
    .then(data => this.props.savePhoto(data.url))
    .catch(err => console.log(err))
  }

  render() {
    return (
        <input type='file' id={this.props.id} onChange={(e) => this.initUpload()} />
    )
  }
}
