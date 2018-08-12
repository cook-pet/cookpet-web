import React, { Component } from 'react';
import logo from './logo.svg';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './App.css';
import firebase from './firebase';

var storageRef = firebase.storage().ref();

class ControlledEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uploadedImages: [],
      editorState: EditorState.createEmpty()
    };
  }

  uploadImageCallBack(file) {
    let uploadedImages = this.state.uploadedImages;

    const imageObject = {
      file: file,
      localSrc: URL.createObjectURL(file)
    }

    uploadedImages.push(imageObject);

    this.setState({uploadedImages: uploadedImages});

    return new Promise((resolve, reject) => {
      resolve({data: {link: imageObject.localSrc}});
    });
  }


  onEditorStateChange: Function = (editorState) => {
    this.setState({
      editorState,
    });
  };

  render() {
    const { editorState } = this.state;
    return (
      <Editor
        editorState={editorState}
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        onEditorStateChange={this.onEditorStateChange}
        toolbar={{
          image: {
            urlEnabled: false,
            uploadEnabled: true,
            uploadCallback: (file) => this.uploadImageCallBack(file),
            previewImage: true,
            inputAccept: 'image/jpeg,image/jpg,image/png',
          },
        }}
      />
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <ControlledEditor />
    );
  }
}

export default App;
