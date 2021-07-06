import React, { Component, useRef, useEffect, useState } from 'react';
import TableInputEntry from './TableInputEntry.js';
import SubjectTableInputEntry from './SubjectTableInputEntry.js';
import SubjectTableInput from './SubjectTableInput.js';
import './TableInput.css';
import './TableInputEntry.css';
import './SubjectTableInput.css';
import './SubjectTableGroup.css';

export default class SubjectTableGroup extends Component {
	render() {
		return (
			<div className="subject-table-group-div">
				<caption>Student Coursework</caption>
				{this.props.value.map((x, i) => {
					return (
						<SubjectTableInput name={x.name} value={x} onUpdate={()=>{this.props.onUpdate();}} onRemove={() => {
							this.props.value.splice(i, 1);
							this.props.onUpdate();
						}}/>
					);
				})}
				<button onClick={() => {
					this.props.value.push({
						name: "",
						value: [
							{
								name: "",
								provider: "",
								year: "",
								type: "",
								grade: "",
								credit: ""
							}
						]
					});
					this.props.onUpdate();
				}}>
					New Subject
				</button>
			</div>
		);
	}
}