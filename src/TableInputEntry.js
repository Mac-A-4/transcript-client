import React, { useRef, useEffect, useState } from 'react';
import './TableInputEntry.css';

export default function TableInputEntry(props) {
	function handleChange(e) {
		if (props.onChange !== undefined) {
			props.onChange(e.target.value);
		}
	}
	return (
		<tr>
			<td className="table-input-entry-td">
				<span className={(props.required || false) ? "table-input-entry-required" : "table-input-entry-not-required"}>*</span>
				<span className="table-input-entry-label">{props.name}:</span>
			</td>
			<td className="table-input-entry-td">
				<input className="table-input-entry-input" type="text" placeholder={props.placeholder || ""} value={props.value || ""} onChange={handleChange}/>
			</td>
		</tr>
	);
}