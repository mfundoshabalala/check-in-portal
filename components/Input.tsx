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
		<div className='flex items-center justify-between gap-2'>
			<label htmlFor={inputID} className='font-normal capitalize'>
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
