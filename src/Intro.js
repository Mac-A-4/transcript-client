import React, { Component, useRef, useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, useParams, Link } from 'react-router-dom';
import './Intro.css';
import ex1 from './ex1.png';
import ex2 from './ex2.png';
import ex3 from './ex3.png';
import expdf from './expdf.png';

function Intro() {
	return (
		<div className="intro-div-1">
			<div className="intro-div-2">
				<div className="intro-div-3">
					Rivendell Transcript Generator
				</div>
				<div className="intro-div-3">
					<Link to="/edit">Start Editing</Link>
				</div>
				<div className="intro-div-4">
					Directions:
					<div className="intro-div-5">
						1. Press 'Start Editing' to enter the editor.
					</div>
					<div className="intro-div-5">
						2. Input student related information into the fields under the header labeled 'Student Information'. An example of a completed 'Student Information' section is shown in the figure below.
						<img className="ex-img" src={ex1}/>
					</div>
					<div className="intro-div-5">
						3. Input school related information into the fields under the header labeled 'School Information'. An example of a completed 'School Information' section is shown in the figure below.
						<img className="ex-img" src={ex2}/>
					</div>
					<div className="intro-div-5">
						4. Input course related information into the fields under the header labeled 'Student Coursework'. A brief explanation is shown below.
						<img className="ex-img-big" src={ex3}/>
					</div>
					<div className="intro-div-5">
						5. Select your grading scale. If you use grades with (+/-) included, then check the box labeled 'Extra (+/-)' underneath the header labeled 'Grading Scale'. The fields are already filled, but can be modified.
					</div>
					<div className="intro-div-5">
						6. Input any extra notes into the notes section located at the bottom of the editor.
					</div>
					<div className="intro-div-5">
						7. Press the 'Save' button located at the bottom of the page, it will present you with a link, do not lose this link, it is the only way for you to access and edit your transcript again.
					</div>
					<div className="intro-div-5">
						8. To view your transcript, press the 'View' button at the bottom, next to the 'Save' button, be sure to save before viewing.
					</div>
					<div className="intro-div-5">
						9. To print your transcript, press either Ctrl+P on Windows, or Command+P on a Mac.	
					</div>
					<div className="intro-div-5">
						10. To sign your transcript, either print it and sign it physically, or use a program such as Adobe Reader to sign it.
					</div>
				</div>
				<div className="intro-div-4 id4x">
					<a href="/example.pdf">
						Example Transcript
						<br/>
						<img className="ex-img ex4x" src={expdf}/>
					</a>
				</div>
			</div>
		</div>
	);
}

export default Intro;