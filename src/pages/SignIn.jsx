import { toast } from 'react-toastify'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import Eye from '../assets/svg/eye.svg'
import GoogleAuth from '../components/GoogleAuth/GoogleAuth'

const SignIn = () => {
	const [showPassword, setShowPassword] = useState(false)
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	})
	const { email, password } = formData
	const navigate = useNavigate()

	const onChange = e => {
		setFormData(prevState => ({
			...prevState,
			[e.target.id]: e.target.value,
		}))
	}

	const onSubmit = async e => {
		e.preventDefault()
		try {
			const auth = getAuth()
			const userCredential = await signInWithEmailAndPassword(
				auth,
				email,
				password
			)
			if (userCredential.user) {
				navigate('/')
				toast.success('С возвращением!', { theme: 'dark' })
			}
		} catch (error) {
			toast.error('Проверьте правильно ли введены email и пароль', {
				theme: 'dark',
			})
		}
	}

	return (
		<>
			<div className='signUpContainer'>
				<header className='signUpHeader'>
					<p className='signUpHeaderText'>С возвращением!</p>
				</header>
				<main className='signUpPage'>
					<form onSubmit={onSubmit}>
						<div className='inputEmailDiv'>
							<p className='signUpComponents'>Email</p>
							<input
								id='email'
								type='email'
								className='emailInput'
								value={email}
								onChange={onChange}
							/>
						</div>
						<div className='passwordInputDiv'>
							<p className='signUpComponents'>Пароль</p>
							<input
								id='password'
								type={showPassword ? 'text' : 'password'}
								className='passwordInput'
								value={password}
								onChange={onChange}
							/>
							<img
								src={Eye}
								alt='showPassword'
								className='showPassword'
								onClick={() => setShowPassword(prevState => !prevState)}
							/>
						</div>
						<div className='signUpButtonDiv'>
							<button className='signUpButton'>Войти</button>
						</div>
					</form>
					<GoogleAuth />
					<Link className='signUpLink' to='/sign-up'>
						Зарегистрироваться
					</Link>
				</main>
			</div>
		</>
	)
}

export default SignIn
