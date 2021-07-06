import React, { Component, useRef, useEffect, useState } from 'react';
import TableInputEntry from './TableInputEntry.js';
import SubjectTableInputEntry from './SubjectTableInputEntry.js';
import './TableInput.css';
import './TableInputEntry.css';
import './SubjectTableInput.css';

/*
	[
		{
			name: str,
			provider: str,
			year: str,
			type: str,
			grade: str,
			credit: str
		}
	]
*/

export default class SubjectTableInput extends Component {
	render() {
		return (
			<div className="subject-table-input-div">
				<table className="table-input-table">
					<thead>
						<tr>
							<th className="subject-table-input-th" colSpan={7}>
								<div className="subject-table-input-div-center">
									<input className="subject-table-input-input" type="text" value={this.props.value.name} placeholder="Subject Name" onChange={(e) => {
										this.props.value.name = e.target.value;
										this.props.onUpdate();
									}}/>
									&nbsp;&nbsp;
									<button className="subject-table-input-button" onClick={()=>{ this.props.onRemove(); }}>
										Remove
									</button>
								</div>
							</th>
						</tr>
						<tr>
							<th className="subject-table-input-th">
								Course Name
							</th>
							<th className="subject-table-input-th">
								Provider
							</th>
							<th className="subject-table-input-th">
								Year
							</th>
							<th className="subject-table-input-th">
								Type
							</th>
							<th className="subject-table-input-th">
								Grade
							</th>
							<th className="subject-table-input-th">
								Credit
							</th>
							<th className="subject-table-input-th">
							</th>
						</tr>
					</thead>
					<tbody>
						{this.props.value.value.map((x, i) => {
							return (
								<SubjectTableInputEntry value={this.props.value.value[i]} onUpdate={() => { this.props.onUpdate() }} onRemove={()=>{
									this.props.value.value.splice(i, 1);
									this.props.onUpdate();
									if (this.props.value.value.length == 0) {
										this.props.onRemove();
									}
								}}/>
							);
						})}
						<tr>
							<td className="table-input-entry-td" colSpan={7}>
								<div className="subject-table-input-div-center">
									<button className="subject-table-input-button" onClick={()=>{
										this.props.value.value.push({
											name: "",
											provider: "",
											year: "",
											type: "",
											grade: "",
											credit: ""
										});
										this.props.onUpdate();
									}}>
										New Course
									</button>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}