import Head from "next/head";
import { useState } from "react";
//
import Form from "components/Form";
import Header from "components/Header";
import enforceAuthenticated from "utils/enforceAuthenticated";

const HomePage = () => {
	const [candidateInformation, setCandidateInformation] = useState({
		candidateName: "",
		candidateNumber: "",
		candidateReason: "",
		candidateCohort: "",
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

	return (
		<>
			<Head>
				<title>Home</title>
			</Head>
			<div className='flex flex-col items-center justify-center w-full h-screen gap-6'>
				<Header />
				<Form>
					<Form.Input
						inputID='candidateName'
						inputType='text'
						inputLabel='Candidate Name'
						inputPlaceholder='Mfundo Shabalala'
						onChange={handleInputChange}
						inputValue={candidateInformation?.candidateName}
						required
					/>
					<Form.Input
						inputID='candidateNumber'
						inputType='text'
						inputLabel='Candidate Number'
						inputPlaceholder='SDEV032'
						onChange={handleInputChange}
						inputValue={candidateInformation?.candidateNumber}
						required
					/>
					<Form.Input
						inputID='candidateReason'
						inputType='text'
						inputLabel='Lateness Reason'
						inputPlaceholder='Traffic Congestion'
						onChange={handleInputChange}
						inputValue={candidateInformation?.candidateReason}
					/>
					<Form.Dropdown
						inputID='candidateCohort'
						onChange={handleInputChange}
						inputValue={candidateInformation?.candidateCohort}
					/>
					<Form.Panel>
						<Form.Button
							buttonType='submit'
							buttonLabel='Check in'
							buttonClass='bg-rose-600 hover:bg-rose-800'
							onClick={(event) => {
								event?.preventDefault();
								console.log(candidateInformation);
							}}
						/>
						<Form.Button
							buttonType='submit'
							buttonLabel='Absent'
							buttonClass='bg-slate-600 hover:bg-slate-800'
							onClick={(event) => {
								event?.preventDefault();
								console.log(candidateInformation);
							}}
						/>
					</Form.Panel>
				</Form>
			</div>
		</>
	);
};

export default HomePage;

export const getServerSideProps = enforceAuthenticated();
