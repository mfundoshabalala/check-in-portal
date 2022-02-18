type FormInputProps = {
	inputID: string;
	inputType: string;
	inputLabel: string;
	required?: boolean;
	inputPlaceholder?: string;
};

type ButtonProps = {
	buttonType: "button" | "submit" | "reset" | undefined;
	buttonLabel: string;
	buttonClass?: string;
};

type BrandLogoProps = {
	href: string;
	src?: string;
	alt?: string;
	width?: number;
	height?: number;
};

type BrandLogoComponent = React.FunctionComponent<BrandLogoProps>;

type FormInputComponent = React.FunctionComponent<FormInputProps>;

type FormDropdownComponent = React.FunctionComponent;

type FormButtonComponentProps = React.FunctionComponent<ButtonProps>;

type FormPanelComponent = React.FunctionComponent<{ children: React.ReactNode }>;

type FormComponentProps = React.FunctionComponent<{ children: React.ReactNode }> & {
	Input: FormInputComponent;
} & { Dropdown: FormDropdownComponent } & { Button: FormButtonComponentProps } & {
	Panel: FormPanelComponent;
} & { BrandLogo: BrandLogoComponent };
