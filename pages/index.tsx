import { useEffect } from "react";
import * as Yup from "yup";
// hooks
import { FieldValues, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import BrandLogo from "components/BrandLogo";
import BasicLayout from "layouts/BasicLayout";

const HomePage = () => {
	const YupForm = Yup.object().shape({
		firstName: Yup.string().required("First name is required"),
		lastName: Yup.string().required("Last name is required"),
		candidateNumber: Yup.string()
			.required("Candidate number is required")
			.uppercase()
			.min(7, "Candidate number is too short")
			.matches(/^[A-Z]{4}[0][0-9]{2}$/, "Candidate number is invalid"),
		cohortName: Yup.string().required("Cohort name is required"),
		message: Yup.string(),
	});
	const resolverForm = { resolver: yupResolver(YupForm) };

	const {
		register,
		handleSubmit,
		reset,
		formState,
		formState: { isSubmitSuccessful, errors },
	} = useForm(resolverForm);

	const onSubmit = (data: FieldValues) => {
		console.log(data);
		return false;
	};

	useEffect(() => {
		if (isSubmitSuccessful) {
			reset({ firstName: "", lastName: "", candidateNumber: "", cohortName: "", message: "" });
		}
	}, [formState, isSubmitSuccessful, reset]);

	return (
		<BasicLayout>
			<form onSubmit={handleSubmit(onSubmit)}>
				<BrandLogo href='/' alt='Capaciti Logo' />
				<h1 className='text-2xl font-black tracking-tight text-center text-slate-800 upper'>
					Candidate Attendance Tracker
				</h1>
				<section className='form-wrapper'>
					<div className='form-group-container'>
						<div className='form-group'>
							<label className='form-label required' htmlFor='firstName'>
								First Name
							</label>
							<input
								type='text'
								placeholder='John'
								{...register("firstName")}
								className={`form-control ${errors.firstName ? "is-invalid" : ""}`}
							/>
							<span className='invalid-input'>{errors.firstName?.message}</span>
						</div>
						<div className='form-group'>
							<label className='form-label required' htmlFor='lastName'>
								Last Name
							</label>
							<input
								type='text'
								placeholder='Doe'
								{...register("lastName")}
								className={`form-control ${errors.lastName ? "is-invalid" : ""}`}
							/>
							<span className='invalid-input'>{errors.lastName?.message}</span>
						</div>
					</div>
					<div className='form-group-container'>
						<div className='form-group'>
							<label className='form-label required' htmlFor='candidateNumber'>
								Candidate Number
							</label>
							<input
								type='text'
								placeholder='CITI022'
								{...register("candidateNumber", {
									pattern: /^[A-Z]{4}[0-9]{3}$/,
								})}
								className={`form-control uppercase ${errors.candidateNumber ? "is-invalid" : ""}`}
							/>
							<span className='invalid-input'>{errors.candidateNumber?.message}</span>
						</div>
						<div className='form-group'>
							<label className='form-label required' htmlFor='cohortName'>
								Cohort Name
							</label>
							<input
								type='text'
								placeholder='CitiDev'
								{...register("cohortName")}
								className={`form-control ${errors.cohortName ? "is-invalid" : ""}`}
							/>
							<span className='invalid-input'>{errors.cohortName?.message}</span>
						</div>
					</div>
					<div className='form-group'>
						<label className='form-label' htmlFor='message'>
							Message
						</label>
						<textarea
							{...register("message")}
							placeholder='Reason for lateness/absence'
							className={`form-control ${errors.message ? "is-invalid" : ""}`}
						/>
						<span className='invalid-input'>{errors.message?.message}</span>
					</div>
					<div className='btn-group'>
						<button type='submit' className='btn btn-primary'>
							In
						</button>
						<button type='submit' className='btn btn-success'>
							Out
						</button>
						<button
							type='button'
							className='btn btn-secondary'
							onClick={() =>
								reset({
									firstName: "",
									lastName: "",
									candidateNumber: "",
									cohortName: "",
									message: "",
								})
							}
						>
							Reset
						</button>
					</div>
				</section>
			</form>
		</BasicLayout>
	);
};

export default HomePage;
