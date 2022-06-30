type FormInputProps = {
	inputID: string;
	inputType: string;
	inputLabel: string;
	required?: boolean;
	inputValue: string;
	inputPlaceholder?: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
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

type ChildrenProps = {
	children?: React.ReactNode;
};

interface HeaderProps extends ChildrenProps {
	headingTitle?: string;
}
interface PanelProps extends ChildrenProps {
	className?: string;
}

interface FormProps extends ChildrenProps {
	onSubmit?: (event: React.FormEvent) => void;
}

type FormButtonComponent = React.FunctionComponent<ButtonProps>;
type FormHeaderComponent = React.FunctionComponent<HeaderProps>;
type FormPanelComponent = React.FunctionComponent<PanelProps>;
type BrandLogoComponent = React.FunctionComponent<BrandLogoProps>;
type FormInputComponent = React.FunctionComponent<FormInputProps>;
type FormDropdownComponent = React.FunctionComponent<FormDropdownProps>;

type FormComponentProps = React.FunctionComponent<FormProps> & {
	Input: FormInputComponent;
} & { Dropdown: FormDropdownComponent } & { Button: FormButtonComponent } & {
	Panel: FormPanelComponent;
} & { Logo: BrandLogoComponent } & { Header: FormHeaderComponent };
