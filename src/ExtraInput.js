import React, { Component, useRef, useEffect, useState } from 'react';
import './ExtraInput.css';

export default class ExtraInput extends Component {
	render() {
		return (
			<div className="extra-input-div">
				<caption>Notes</caption>
				<textarea className="extra-input-textarea" value={this.props.value.value} rows="512" cols="64" onChange={(e)=>{
					this.props.value.value = e.target.value;
					this.props.onUpdate();
				}}>
				</textarea>
			</div>
		);
	}
}