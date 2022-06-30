import React from "react";

const InputComponent: FormInputComponent = ({
	inputID,
	inputLabel,
	inputType,
	inputPlaceholder,
	...rest
}) => {
	return (
		<div className='flex items-center justify-between gap-2'>
			<label htmlFor={inputID} className='font-normal capitalize'>
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
