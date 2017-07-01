import React, { Component } from 'react'

export default class PhotoUpload extends Component {
  initUpload(e) {
    const files = document.getElementById('file-input').files
    const file = files[0]
    let form = new FormData()
    form.append('file', file)
    if (file == null) {
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
        <input type='file' id='file-input' onChange={(e) => this.initUpload()} />
    )
  }
}
