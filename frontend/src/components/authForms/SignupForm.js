import { useState } from 'react';
import '../styles/authForms.css';
import { useSignup } from '../../hooks/useSignup';

export default function SignupForm() {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const { signup, error, isLoading } = useSignup();

	const handleSubmit = async (e) => {
		e.preventDefault();

		await signup(email, password);
	};

	return (
		<div className='auth-container'>
			<form className='signup' onSubmit={handleSubmit}>
				<h3>Sign up</h3>
				<div>
					<input
						placeholder='Email'
						type='email'
						onChange={(e) => {
							setEmail(e.target.value);
						}}
						value={email}
					/>
				</div>

				<div>
					<input
						placeholder='Password'
						type='password'
						onChange={(e) => {
							setPassword(e.target.value);
						}}
						value={password}
					/>
				</div>
				<button type='submit' disabled={isLoading}>
					Sign Up
				</button>
				{error && <div className='error'>{error}</div>}
			</form>
		</div>
	);
}
