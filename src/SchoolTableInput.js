import React, { Component, useRef, useEffect, useState } from 'react';
import TableInputEntry from './TableInputEntry.js';
import './TableInput.css';

export default function StudentTableInput(props) {
	function handleChange(name, value) {
		props.value[name] = value;
		props.onUpdate();
	}
	return (
		<table className="table-input-table">
			<caption>School Information</caption>
			<tbody>
				<TableInputEntry name="School Name" required={true} value={props.value.name} onChange={(value) => {handleChange("name", value)}}/>
				<TableInputEntry name="Address Line 1" required={true} value={props.value.address1} onChange={(value) => {handleChange("address1", value)}}/>
				<TableInputEntry name="Address Line 2" required={false} value={props.value.address2} onChange={(value) => {handleChange("address2", value)}}/>
				<TableInputEntry name="City" required={true} value={props.value.city} onChange={(value) => {handleChange("city", value)}}/>
				<TableInputEntry name="State" required={true} value={props.value.state} onChange={(value) => {handleChange("state", value)}}/>
				<TableInputEntry name="Zip Code" required={true} value={props.value.zip} onChange={(value) => {handleChange("zip", value)}}/>
				<TableInputEntry name="School Phone" required={true} placeholder="000-000-0000" value={props.value.phone} onChange={(value) => {handleChange("phone", value)}}/>
				<TableInputEntry name="School Email" required={true} value={props.value.email} onChange={(value) => {handleChange("email", value)}}/>
				<TableInputEntry name="Administrator Name" required={false} placeholder="First Last" value={props.value.admin} onChange={(value) => {handleChange("admin", value)}}/>
			</tbody>
		</table>
	);
}