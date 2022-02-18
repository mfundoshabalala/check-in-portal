import React from "react";

// Form children components
import BrandLogo from "./BrandLogo";
import InputComponent from "./Input";
import PanelComponent from "./Panel";
import ButtonComponent from "./Button";
import DropdownComponent from "./Dropdown";

const FormComponent: FormComponentProps = ({ children }) => {
	return <form className='container flex flex-col max-w-lg gap-4 mx-auto'>{children}</form>;
};

export default FormComponent;

FormComponent.BrandLogo = BrandLogo;
FormComponent.Input = InputComponent;
FormComponent.Panel = PanelComponent;
FormComponent.Button = ButtonComponent;
FormComponent.Dropdown = DropdownComponent;
