import React from "react";

const DropdownComponent: FormDropdownComponent = ({ onChange, inputID, inputValue }) => {
	const cohortList = [
		{ value: "", label: "-- Select your cohort --", disabled: true, selected: true },
		{ value: "ICT Kickstarter", label: "Kickstarter" },
		{ value: "System Development", label: "System Dev" },
		{ value: "SASS Cloud Computing", label: "SASS Cloud" },
		{ value: "MICT System Development", label: "MICT Dev" },
	];

	return (
		<div className='form-group'>
			<label htmlFor='cohort' className='form-label'>
				Cohort
			</label>
			<select
				name='cohort'
				className='form-select'
				id={inputID}
				value={inputValue}
				onChange={onChange}
			>
				{cohortList.map((cohort) => {
					return (
						<option key={cohort.value} value={cohort.value}>
							{cohort.label}
						</option>
					);
				})}
			</select>
		</div>
	);
};

export default DropdownComponent;
