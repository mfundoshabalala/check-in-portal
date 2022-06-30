import React from "react";

const InputComponent: FormInputComponent = ({
	inputID,
	inputLabel,
	inputType,
	inputPlaceholder,
	...rest
}) => {
	return (
		<div className='form-group'>
			<label htmlFor={inputID} className='form-label'>
				{inputLabel}
			</label>
			<input
				className='form-input'
				{...rest}
				id={inputID}
				type={inputType}
				placeholder={inputPlaceholder}
			/>
		</div>
	);
};

export default InputComponent;
