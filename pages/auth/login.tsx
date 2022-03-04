import React, { useState } from "react";
// import Form from "components/Form";
import Head from "next/head";
import { NextPage } from "next";
//
import Form from "components/Form";
import Header from "components/Header";
import { supabase } from "utils/supabaseClient";

const LoginPage: NextPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = async (e: React.FormEvent<HTMLButtonElement>) => {
		e.preventDefault();

		try {
			const { error } = await supabase.auth.signIn({
				email,
				password,
			});

			if (error) throw error;
		} catch (error) {
			console.log(error);
		} finally {
			console.log("User login!");
		}
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { id, value } = e.target;
		if (id === "email") {
			setEmail(value);
		} else if (id === "password") {
			setPassword(value);
		}
	};

	return (
		<>
			<Head>
				<title>Login</title>
			</Head>
			<div className='flex flex-col items-center justify-center w-full h-screen gap-6 '>
				<div className='bg-slate-100 min-w-[550px] px-14 py-16 rounded-xl'>
					<Header title='User Login' />
					<Form formClass='max-w-md mt-4'>
						<Form.Input
							inputLabel='Email'
							inputID='email'
							inputType='email'
							inputPlaceholder='mfundo@capaciti.org.za'
							inputValue={email}
							onChange={handleInputChange}
						/>
						<Form.Input
							inputLabel='Password'
							inputID='password'
							inputType='password'
							inputPlaceholder='*************'
							inputValue={password}
							onChange={handleInputChange}
						/>
						<Form.Button
							buttonType='submit'
							buttonLabel='Login'
							buttonClass='self-center mt-4'
							onClick={handleLogin}
						/>
					</Form>
				</div>
			</div>
		</>
	);
};

export default LoginPage;
