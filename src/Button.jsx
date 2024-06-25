import React from "react";
import { useState } from "react";

function InstanceButton({ type, onClick, isCompleted }) {
    /* 'complete'/'edit', 'remove', 'add new' buttons */
	let text;
	switch (type) {
		case 'complete':
			text = (isCompleted) ? 'Edit' : 'Complete';
			break;
		case 'remove':
			text = 'Remove';
			break;
		case 'addNew':
			text = 'Add New';
			break;
	};
	return (
		<button onClick={onClick}>{text}</button>
	);
}

function SectionButton() {}

function Button()
export { InstanceButton, SectionButton };
