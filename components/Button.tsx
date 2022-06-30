import React from "react";

const Button: FormButtonComponent = ({ buttonType, buttonLabel, buttonClass, onClick }) => {
	return (
		<button type={buttonType} onClick={onClick} className={`${buttonClass} form-button`}>
			{buttonLabel}
		</button>
	);
};

export default Button;
