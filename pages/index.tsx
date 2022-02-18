import React from "react";
import Form from "components/Form";
import BrandLogo from "components/BrandLogo";

const HomePage = () => {
	return (
		<div className='flex flex-col items-center justify-center w-full h-screen'>
			<BrandLogo href='/' alt='Capaciti Logo' />
			<Form>
				<Form.Input
					inputID='candidateName'
					inputType='text'
					inputLabel='Candidate Name'
					inputPlaceholder='Mfundo Shabalala'
					required
				/>
				<Form.Input
					inputID='candidateNumber'
					inputType='text'
					inputLabel='Candidate Number'
					inputPlaceholder='SDEV032'
					required
				/>
				<Form.Input
					inputID='reason'
					inputType='text'
					inputLabel='Lateness Reason'
					inputPlaceholder='Traffic Congestion'
				/>
				<Form.Dropdown />
				<Form.Panel>
					<Form.Button buttonType='submit' buttonLabel='Check in' buttonClass='bg-rose-600' />
					<Form.Button buttonType='submit' buttonLabel='Check out' buttonClass='bg-slate-600' />
				</Form.Panel>
			</Form>
		</div>
	);
};

export default HomePage;
