import React from "react";

const Button: FormButtonComponentProps = ({ buttonType, buttonLabel, buttonClass, onClick }) => {
	return (
		<button type={buttonType} onClick={onClick} className={`${buttonClass} form-button w-full`}>
			{buttonLabel}
		</button>
	);
};

export default Button;
