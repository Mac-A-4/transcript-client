import React, { useRef, useEffect, useState } from 'react';
import './TableInputEntry.css';
import './SubjectTableInputEntry.css';

export default function SubjectTableInputEntry(props) {
	/*
		{
			name: str,
			provider: str,
			year: str,
			type: str,
			grade: str,
			credit: str
		}
	*/
	return (
		<tr>
			<td className="table-input-entry-td">
				<input className="table-input-entry-input subject-table-input-entry-input-large" type="text" value={props.value.name} onChange={(e) => {
					props.value.name = e.target.value;
					props.onUpdate();
				}}/>
			</td>
			<td className="table-input-entry-td">
				<input className="table-input-entry-input subject-table-input-entry-input-large" type="text" value={props.value.provider} onChange={(e) => {
					props.value.provider = e.target.value;
					props.onUpdate();
				}}/>
			</td>
			<td className="table-input-entry-td">
				<input className="table-input-entry-input subject-table-input-entry-input-medium" type="text" placeholder="YYYY-YYYY" value={props.value.year} onChange={(e) => {
					props.value.year = e.target.value;
					props.onUpdate();
				}}/>
			</td>
			<td className="table-input-entry-td">
				<select className="table-input-entry-input subject-table-input-entry-input-small" type="text" value={props.value.type} onChange={(e) => {
					props.value.type = e.target.value;
					props.onUpdate();
				}}>
					<option value=""></option>
					<option value="AP">AP</option>
					<option value="HR">HR</option>
					<option value="MS">MS</option>
					<option value="DE">DE</option>
				</select>
			</td>
			<td className="table-input-entry-td">
				<select className="table-input-entry-input subject-table-input-entry-input-small" type="text" value={props.value.grade} onChange={(e) => {
					props.value.grade = e.target.value;
					props.onUpdate();
				}}>
					<option value=""></option>
					<option value="A+">A+</option>
					<option value="A">A</option>
					<option value="A-">A-</option>
					<option value="B+">B+</option>
					<option value="B">B</option>
					<option value="B-">B-</option>
					<option value="C+">C+</option>
					<option value="C">C</option>
					<option value="C-">C-</option>
					<option value="D+">D+</option>
					<option value="D">D</option>
					<option value="F">F</option>
					<option value="P">P</option>
					<option value="NP">NP</option>
					<option value="IP">IP</option>
					<option value="PL">PL</option>
				</select>
			</td>
			<td className="table-input-entry-td">
				<input className="table-input-entry-input subject-table-input-entry-input-small" type="text" value={props.value.credit} onChange={(e) => {
					props.value.credit = e.target.value;
					props.onUpdate();
				}}/>
			</td>
			<td className="table-input-entry-td">
				<button className="subject-table-input-entry-button" onClick={(e) => { props.onRemove(); }}>
					Remove
				</button>
			</td>
		</tr>
	);
}