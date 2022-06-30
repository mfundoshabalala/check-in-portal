import Head from "next/head";
import React, { useState } from "react";
//
import Form from "components/Form";

const HomePage = () => {
	const [candidateInformation, setCandidateInformation] = useState({
		candidateName: "",
		candidateNumber: "",
		candidateReason: "",
		candidateCohort: "",
		formErrors: { email: "", password: "" },
		candidateNameValid: false,
		candidateNumberValid: false,
		candidateReasonValid: false,
		candidateCohortValid: false,
		formValid: false,
	});

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.id === "candidateName") {
			setCandidateInformation({
				...candidateInformation,
				candidateName: event.target.value,
			});
		} else if (event.target.id === "candidateNumber") {
			setCandidateInformation({
				...candidateInformation,
				candidateNumber: event.target.value,
			});
		} else if (event.target.id === "candidateReason") {
			setCandidateInformation({
				...candidateInformation,
				candidateReason: event.target.value,
			});
		} else if (event.target.id === "candidateCohort") {
			setCandidateInformation({
				...candidateInformation,
				candidateCohort: event.target.value,
			});
		}
	};

	const handleFormValidation = (event: React.FormEvent) => {
		event?.preventDefault();
		if (candidateInformation.candidateName === "") {
			alert("Candidate name is empty.");
		}
	};

	return (
		<>
			<Head>
				<title>Home</title>
			</Head>
			<div className='flex items-center justify-center w-full h-screen'>
				<Form onSubmit={handleFormValidation}>
					<Form.Header headingTitle='Candidate Attendance Tracker' />
					<Form.Input
						inputID='candidateName'
						inputType='text'
						inputLabel='Candidate Name'
						inputPlaceholder='John Doe'
						onChange={handleInputChange}
						inputValue={candidateInformation?.candidateName}
						required
					/>
					<Form.Input
						inputID='candidateNumber'
						inputType='text'
						inputLabel='Candidate Number'
						inputPlaceholder='CITI022'
						onChange={handleInputChange}
						inputValue={candidateInformation?.candidateNumber}
						required
					/>
					<Form.Input
						inputID='candidateReason'
						inputType='text'
						inputLabel='Reason'
						inputPlaceholder='Traffic Congestion'
						onChange={handleInputChange}
						inputValue={candidateInformation?.candidateReason}
					/>
					<Form.Dropdown
						inputID='candidateCohort'
						onChange={handleInputChange}
						inputValue={candidateInformation?.candidateCohort}
					/>
					<Form.Panel className='justify-center mt-5'>
						<Form.Button
							buttonType='submit'
							buttonLabel='Check in'
							buttonClass='bg-teal-700 hover:bg-teal-800'
							onClick={(event) => {
								event?.preventDefault();
								console.log(candidateInformation);
								handleFormValidation(event);
							}}
						/>
						<Form.Button
							buttonType='submit'
							buttonLabel='Check out'
							buttonClass='bg-rose-600 hover:bg-rose-800'
							onClick={(event) => {
								event?.preventDefault();
								console.log(candidateInformation);
								handleFormValidation(event);
							}}
						/>
					</Form.Panel>
				</Form>
			</div>
		</>
	);
};

export default HomePage;

// export const getServerSideProps = enforceAuthenticated();
