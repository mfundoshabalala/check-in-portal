import React, { useState } from "react";
import { supabase } from "utils/supabaseClient";
import Form from "./Form";

const Auth = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);

	const handleLogin = async (email: string, password: string) => {
		try {
			setLoading(true);
			const { error } = await supabase.auth.signIn({
				email: email,
				password: password,
			});
			if (error) throw error;
		} catch (error) {
			if (error instanceof Error) {
				alert(error?.message);
			}
		} finally {
			setLoading(false);
		}
	};

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		if (name === "email") {
			setEmail(value);
		} else if (name === "password") {
			setPassword(value);
		}
	};

	const handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		event.preventDefault();
		handleLogin(email, password);
	};

	if (loading) {
		return <div>Loading...</div>;
	}

	return (
		<Form>
			<Form.BrandLogo href='/' />
			<Form.Input
				inputLabel='Email'
				inputID='email'
				inputType='email'
				inputPlaceholder='Email'
				inputValue={email}
				onChange={handleInputChange}
			/>
			<Form.Input
				inputLabel='Password'
				inputID='password'
				inputType='password'
				inputPlaceholder='Password'
				inputValue={password}
				onChange={handleInputChange}
			/>
			<Form.Button buttonType='submit' buttonLabel='Login' onClick={handleSubmit} />
		</Form>
	);
};

export default Auth;
