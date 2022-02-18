import React from "react";

const DropdownComponent: FormDropdownComponent = () => {
	return (
		<div className='flex items-center justify-between gap-2'>
			<label htmlFor='cohort' className='font-normal capitalize'>
				Cohort
			</label>
			<select name='cohort' id='cohort' className='form-input'>
				<option selected disabled>
					-- Select your cohort --
				</option>
				<option>ICT Kickstarter</option>
				<option>System Development</option>
				<option>MICT System Development</option>
			</select>
		</div>
	);
};

export default DropdownComponent;
