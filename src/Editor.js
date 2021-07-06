import React, { Component, useRef, useEffect, useState } from 'react';
import './Editor.css';
import StudentTableInput from './StudentTableInput.js';
import SchoolTableInput from './SchoolTableInput.js';
import SubjectTableInput from './SubjectTableInput.js';
import SubjectTableGroup from './SubjectTableGroup.js';
import GradeScaleInput from './GradeScaleInput.js';
import ExtraInput from './ExtraInput.js';

function Instructions() {
	return (
		<div className="instructions-div">
			Instructions:<br/><br/>
			1. Input information into required fields.<br/>
			2. Press the Save button at the bottom of the page to receive a link to your saved work.<br/>
			*DO NOT LOSE THIS LINK, IT IS YOUR ONLY WAY TO ACCESS YOUR WORK AGAIN.<br/>
			3. To view your transcript, press the View button at the bottom of the page.<br/>
			4. When working on your transcript, it will automatically save every 5 seconds.<br/>
			5. You can also save by pressing the Save button.<br/>
		</div>
	);
}

export default class Editor extends Component {
	render() {
		return (
			<div className="editor">
				<div className="editor-div">
					<div className="editor-group">
						<Instructions/>
					</div>
					<div className="editor-group">
						<StudentTableInput value={this.props.value.value.studentInfo} onUpdate={()=>{this.props.onUpdate();}}/>
				        <SchoolTableInput value={this.props.value.value.schoolInfo} onUpdate={()=>{this.props.onUpdate();}}/>
			        </div>
			        <div className="editor-group">
			        	<SubjectTableGroup value={this.props.value.value.subjectInfo} onUpdate={()=>{this.props.onUpdate();}}/>
			        	<GradeScaleInput value={this.props.value.value.gradeInfo} onUpdate={()=>{this.props.onUpdate();}}/>
			        </div>
			        <div className="editor-group">
				        <ExtraInput value={this.props.value.value.extraInfo} onUpdate={()=>{this.props.onUpdate();}}/>
			        </div>
			        <button className="editor-save" onClick={()=>{this.props.onSave();}}>
			        	Save
			        </button>
			        &nbsp;&nbsp;
			        <button className="editor-save" onClick={()=>{this.props.onView();}}>
			        	View
			        </button>
				</div>
			</div>
		);
	}
}