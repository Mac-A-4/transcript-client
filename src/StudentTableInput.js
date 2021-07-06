import React, { Component, useRef, useEffect, useState } from 'react';
import TableInputEntry from './TableInputEntry.js';

export default function StudentTableInput(props) {
	function handleChange(name, value) {
		props.value[name] = value;
		props.onUpdate();
	}
	return (
		<table className="table-input-table">
			<caption>Student Information</caption>
			<tbody>
				<TableInputEntry name="Name" required={true} placeholder="First Last" value={props.value.name} onChange={(value) => {handleChange("name", value)}}/>
				<TableInputEntry name="Date of Birth" required={true} placeholder="MM/DD/YYYY" value={props.value.dob} onChange={(value) => {handleChange("dob", value)}}/>
				<TableInputEntry name="Graduation Date" required={true} placeholder="MM/DD/YYYY" value={props.value.graduation} onChange={(value) => {handleChange("graduation", value)}}/>
				<TableInputEntry name="Gender" required={false} value={props.value.gender} onChange={(value) => {handleChange("gender", value)}}/>
				<TableInputEntry name="Address Line 1" required={true} value={props.value.address1} onChange={(value) => {handleChange("address1", value)}}/>
				<TableInputEntry name="Address Line 2" required={false} value={props.value.address2} onChange={(value) => {handleChange("address2", value)}}/>
				<TableInputEntry name="City" required={true} value={props.value.city} onChange={(value) => {handleChange("city", value)}}/>
				<TableInputEntry name="State" required={true} value={props.value.state} onChange={(value) => {handleChange("state", value)}}/>
				<TableInputEntry name="Zip Code" required={true} value={props.value.zip} onChange={(value) => {handleChange("zip", value)}}/>
				<TableInputEntry name="Phone" required={false} placeholder="000-000-0000" value={props.value.phone} onChange={(value) => {handleChange("phone", value)}}/>
				<TableInputEntry name="Email" required={false} value={props.value.email} onChange={(value) => {handleChange("email", value)}}/>
				<TableInputEntry name="Parent/Guardian(s)" required={false} value={props.value.parent} onChange={(value) => {handleChange("parent", value)}}/>
			</tbody>
		</table>
	);
}