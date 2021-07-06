import React, { Component, useRef, useEffect, useState } from 'react';
import './GradeScaleInput.css';

/*
{
	extended: false,
	"A": {
		name: "A",
		value: 4.0
	}
}
*/

class GradeScaleInputEntry extends Component {
	render() {
		return (
			<div className="grade-scale-input-entry-div">
				<span className="grade-scale-input-entry-span">
					{this.props.value.name}
				</span>
				= &nbsp;
				<input type="text" value={this.props.value.value} onChange={(e) => {
					this.props.value.value = e.target.value;
					this.props.onUpdate();
				}}/>
			</div>
		);
	}
}

export default class GradeScaleInput extends Component {
	render() {
		if (this.props.value.extended) {
			return (
				<div className="grade-scale-input-div">
					<caption>Grading Scale</caption>
					<GradeScaleInputEntry value={this.props.value["A+"]} onUpdate={() => { this.props.onUpdate(); }}/>
					<GradeScaleInputEntry value={this.props.value["A"]} onUpdate={() => { this.props.onUpdate(); }}/>
					<GradeScaleInputEntry value={this.props.value["A-"]} onUpdate={() => { this.props.onUpdate(); }}/>
					<GradeScaleInputEntry value={this.props.value["B+"]} onUpdate={() => { this.props.onUpdate(); }}/>
					<GradeScaleInputEntry value={this.props.value["B"]} onUpdate={() => { this.props.onUpdate(); }}/>
					<GradeScaleInputEntry value={this.props.value["B-"]} onUpdate={() => { this.props.onUpdate(); }}/>
					<GradeScaleInputEntry value={this.props.value["C+"]} onUpdate={() => { this.props.onUpdate(); }}/>
					<GradeScaleInputEntry value={this.props.value["C"]} onUpdate={() => { this.props.onUpdate(); }}/>
					<GradeScaleInputEntry value={this.props.value["C-"]} onUpdate={() => { this.props.onUpdate(); }}/>
					<GradeScaleInputEntry value={this.props.value["D+"]} onUpdate={() => { this.props.onUpdate(); }}/>
					<GradeScaleInputEntry value={this.props.value["D"]} onUpdate={() => { this.props.onUpdate(); }}/>
					<div className="grade-scale-input-check">
						<span>Extra (+&#x2F;-)</span>
						<input type="checkbox" checked={this.props.value.extended} onChange={(e) => {
							this.props.value.extended = e.target.checked;
							this.props.onUpdate();
						}}/>
					</div>
				</div>
			);
		}
		else {
			return (
				<div className="grade-scale-input-div">
					<caption>Grading Scale</caption>
					<GradeScaleInputEntry value={this.props.value["A"]} onUpdate={() => { this.props.onUpdate(); }}/>
					<GradeScaleInputEntry value={this.props.value["B"]} onUpdate={() => { this.props.onUpdate(); }}/>
					<GradeScaleInputEntry value={this.props.value["C"]} onUpdate={() => { this.props.onUpdate(); }}/>
					<GradeScaleInputEntry value={this.props.value["D"]} onUpdate={() => { this.props.onUpdate(); }}/>
					<div className="grade-scale-input-check">
						<span>Extra (+&#x2F;-)</span>
						<input type="checkbox" checked={this.props.value.extended} onChange={(e) => {
							this.props.value.extended = e.target.checked;
							this.props.onUpdate();
						}}/>
					</div>
				</div>
			);
		}
	}
}