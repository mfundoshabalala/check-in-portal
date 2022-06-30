type FormInputProps = {
	inputID: string;
	inputType: string;
	inputLabel: string;
	inputPlaceholder?: string;
};

type ButtonProps = {
	buttonType: "button" | "submit" | "reset" | undefined;
	buttonLabel: string;
	buttonClass?: string;
	onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

type BrandLogoProps = {
	href: string;
	src?: string;
	alt?: string;
	width?: number;
	height?: number;
};

type FormDropdownProps = {
	inputID: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement, MouseEvent>) => void;
	inputValue: string;
};

type BrandLogoComponent = React.FunctionComponent<BrandLogoProps>;

type FormInputComponent = React.FunctionComponent<FormInputProps>;

type FormDropdownComponent = React.FunctionComponent<FormDropdownProps>;

type FormButtonComponentProps = React.FunctionComponent<ButtonProps>;

type FormPanelComponent = React.FunctionComponent<{ children: React.ReactNode }>;

type FormComponentProps = React.FunctionComponent<{
	children: React.ReactNode;
	formClass?: string;
}> & {
	Input: FormInputComponent;
} & { Dropdown: FormDropdownComponent } & { Button: FormButtonComponentProps } & {
	Panel: FormPanelComponent;
} & { BrandLogo: BrandLogoComponent };
