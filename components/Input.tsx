import React from "react";

const InputComponent: FormInputComponent = ({
	inputID,
	inputLabel,
	inputType,
	inputPlaceholder,
	onChange,
	inputValue,
	required,
}) => {
	return (
		<div className='form-group'>
			<label htmlFor={inputID} className='form-label'>
				{inputLabel}
			</label>
			<input
				className='form-input'
				id={inputID}
				type={inputType}
				value={inputValue}
				onChange={onChange}
				required={required}
				placeholder={inputPlaceholder}
			/>
		</div>
	);
};

export default InputComponent;
