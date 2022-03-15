import Head from "next/head";
import { GetServerSideProps, NextPage, PreviewData } from "next";
import { useState } from "react";
// components
import Form from "components/Form";
// utility functions
import { supabase } from "utils/supabaseClient";
import Header from "components/Header";
import { ParsedUrlQuery } from "querystring";

const RegisterPage: NextPage = () => {
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [password, setPassword] = useState("");

	const handleRegister = async (e: React.FormEvent<HTMLButtonElement>) => {
		e.preventDefault();

		try {
			const { error } = await supabase.auth.signUp(
				{
					email,
					password,
				},
				{ redirectTo: "/auth/login" }
			);

			if (error) throw error;
		} catch (error) {
			console.log(error);
		} finally {
			setEmail("");
			setPassword("");
			setPhone("");
			console.log("User registered!");
		}
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { id, value } = e.target;
		if (id === "email") {
			setEmail(value);
		} else if (id === "phone") {
			setPhone(value);
		} else if (id === "password") {
			setPassword(value);
		}
	};

	return (
		<>
			<Head>
				<title>Register</title>
			</Head>
			<div className='flex flex-col items-center justify-center w-full h-screen gap-6'>
				<div className='bg-slate-100 min-w-[550px] px-14 py-16 rounded-xl'>
					<Header title='User Registration' />
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
							inputLabel='Phone'
							inputID='phone'
							inputType='tel'
							inputPlaceholder='060 484 3666'
							inputValue={phone}
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
							buttonLabel='Register'
							buttonClass='self-center mt-4'
							onClick={handleRegister}
						/>
					</Form>
				</div>
			</div>
		</>
	);
};

export default RegisterPage;

type ServerProps = GetServerSideProps<{ [key: string]: unknown }, ParsedUrlQuery, PreviewData>;

export const getServerSideProps: ServerProps = async ({ req }) => {
	const { user } = await supabase.auth.api.getUserByCookie(req);

	if (user) {
		return { props: { user }, redirect: { destination: "/" } };
	}

	return { props: { user: null } };
};
