import React from "react";

// Form children components
import Header from "./Header";
import BrandLogo from "./BrandLogo";
import InputComponent from "./Input";
import PanelComponent from "./Panel";
import ButtonComponent from "./Button";
import DropdownComponent from "./Dropdown";

const FormComponent: FormComponentProps = ({ children, onSubmit }) => {
	return (
		<form
			onSubmit={onSubmit}
			className={`container flex flex-col max-w-xl gap-4 mx-auto bg-slate-100 py-16 px-12 rounded-lg`}
		>
			{children}
		</form>
	);
};

export default FormComponent;

FormComponent.Header = Header;
FormComponent.Logo = BrandLogo;
FormComponent.Input = InputComponent;
FormComponent.Panel = PanelComponent;
FormComponent.Button = ButtonComponent;
FormComponent.Dropdown = DropdownComponent;
