import { useState } from 'react';
import '../styles/authForms.css';
import { useLogin } from '../../hooks/useLogin';

export default function LoginForm() {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const { login, error, isLoading } = useLogin();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await login(email, password);
	};

	return (
		<div className='auth-container'>
			<form className='login' onSubmit={handleSubmit}>
				<h3>Log In</h3>
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
				<button disabled={isLoading} type='submit'>
					Log In
				</button>
				{error && <div className='error'>{error}</div>}
			</form>
		</div>
	);
}
