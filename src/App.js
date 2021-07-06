import React, { Component, useRef, useEffect, useState } from 'react';
import './App.css';
import Editor from './Editor.js';
import View from './View.js';
import { BrowserRouter as Router, Switch, Route, Redirect, useParams } from 'react-router-dom';
import axios from 'axios';
import Server from './Server.js';
//import StudentTableInput from './StudentTableInput.js';
//import SchoolTableInput from './SchoolTableInput.js';
//import SubjectTableInput from './SubjectTableInput.js';

class App extends Component {
  editorState = {
    value: {
      studentInfo: {
        "name": "",
        "dob": "",
        "gender": "",
        "address1": "",
        "address2": "",
        "city": "",
        "state": "",
        "zip": "",
        "phone": "",
        "email": "",
        "parent": "",
        "graduation": ""
      },
      schoolInfo: {
        "name": "",
        "address1": "",
        "address2": "",
        "city": "",
        "state": "",
        "zip": "",
        "phone": "",
        "email": "",
        "admin": ""
      },
      subjectInfo: [
      ],
      gradeInfo: {
        extended: false,
        "A": {
          name: "A",
          value: "4.0"
        },
        "A+": {
          name: "A+",
          value: "4.3"
        },
        "A-": {
          name: "A-",
          value: "3.7"
        },
        "B": {
          name: "B",
          value: "3.0"
        },
        "B+": {
          name: "B+",
          value: "3.3"
        },
        "B-": {
          name: "B-",
          value: "2.7"
        },
        "C": {
          name: "C",
          value: "2.0"
        },
        "C+": {
          name: "C+",
          value: "2.3"
        },
        "C-": {
          name: "C-",
          value: "1.7"
        },
        "D": {
          name: "D",
          value: "1.0"
        },
        "D+": {
          name: "D+",
          value: "1.3"
        }
      },
      extraInfo: {
        value: ""
      }
    }
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/edit"/>
          </Route>
          <Route exact path="/edit">
            <BlankEditor value={this.editorState} onUpdate={this.forceUpdate.bind(this)}/>
          </Route>
          <Route path="/edit/:id">
            <NormalEditor value={this.editorState} onUpdate={this.forceUpdate.bind(this)}/>
          </Route>
          <Route path="/view/:id">
            <View/>
          </Route>
        </Switch>
      </Router>
    );
  }
}

function useInterval(callback, delay) {
  const savedCallback = useRef();
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

function BlankEditor(props) {
    const [changed, setChanged] = useState(false);
    const [saved, setSaved] = useState(false);
    const [id, setId] = useState("");
    if (changed) {
        Server.save(props.value.value).then((res)=>{
            setId(res);
            setSaved(true);
        }).catch((err)=>{
            alert("FAILED TO SAVE");
        });
        /*axios.post(`http://${SERVER}/save`, props.value.value).then((res)=>{
            setId(res.data.id);
            setSaved(true);
        }).catch((err) => {
            alert("FAILED TO SAVE");
        });*/
    }
    if (saved) {
        return (
            <Redirect to={`/edit/${id}`}/>
        );
    }
    else {
        return (
            <Editor value={props.value} onUpdate={()=>{props.onUpdate(); setChanged(true);}} onSave={()=>{
                /*Server.save(props.value.value).then((res)=>{
                    setId(res);
                    setSaved(true);
                }).catch((err)=>{
                    alert("FAILED TO SAVE");
                });*/
                alert("CANNOT SAVE EMPTY TRANSCRIPT");
            }} onView={()=>{
              alert("CANNOT VIEW EMPTY TRANSCRIPT");
            }}/>
        );
    }
}

function SaveOverlay(props) {
    if (props.show) {
        return (
          <div className="save-overlay-div">
              <div className="save-overlay-div-1">
                  <button onClick={()=>{props.onClose();}}>Close</button>
                  &nbsp;&nbsp;Link:&nbsp;&nbsp;&nbsp;
                  {`http://localhost:3000/edit/${props.value}`}
              </div>
          </div>
      );
    }
    else {
        return (null);
    }
}

function NormalEditor(props) {
    const { id } = useParams();
    const [loaded, setLoaded] = useState(false);
    const [view, setView] = useState(false);
    const [show, setShow] = useState(false);
    if (!loaded) {
        Server.load(id).then((res)=>{
            props.value.value = res;
            setLoaded(true);
        }).catch((err)=>{
            alert("FAILED TO LOAD");
        });
        /*axios.get(`http://${SERVER}/load/${id}`).then((res)=>{
            props.value.value = res.data;
            setLoaded(true);
        }).catch((err)=>{
            alert("FAILED TO LOAD");
        });*/
    }
    useInterval(()=>{
        if (loaded) {
            Server.save(props.value.value, id).catch((err)=>{
                alert("FAILED TO SAVE");
            });
            /*axios.put(`http://${SERVER}/save/${id}`, props.value.value).catch((err) => {
                alert("FAILED TO SAVE");
            });*/
        }
    }, 5000);
    if (view) {
        return (
            <Redirect to={`/view/${id}`}/>
        );
    }
    return (
        <div className="normal-editor-div">
          <SaveOverlay show={show} value={id} onClose={ ()=>{setShow(false)} }/>
          <Editor value={props.value} onUpdate={()=>{props.onUpdate();}} onSave={()=>{
              Server.save(props.value.value, id).then(()=>{
                  setShow(true);
              }).catch((err)=>{
                  alert("FAILED TO SAVE");
              });
              /*axios.put(`http://${SERVER}/save/${id}`, props.value.value).catch((err) => {
                  alert("FAILED TO SAVE");
              });*/
          }} onView={()=>{
              setView(true);
          }}/>
        </div>
    );
}

export default App;
