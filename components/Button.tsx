import React, { useState } from "react";

const Button: FormButtonComponentProps = ({ buttonType, buttonLabel, buttonClass }) => {
	const [] = useState();

	return (
		<button type={buttonType} className={`${buttonClass} form-button w-full`}>
			{buttonLabel}
		</button>
	);
};

export default Button;
