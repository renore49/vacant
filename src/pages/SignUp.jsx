import { useState } from 'react'
import { toast } from 'react-toastify'
import { useNavigate, Link } from 'react-router-dom'
import {
	getAuth,
	createUserWithEmailAndPassword,
	updateProfile,
} from 'firebase/auth'
import { db } from '../firebase.config.js'
import { setDoc, doc, serverTimestamp } from 'firebase/firestore'
import Eye from '../assets/svg/eye.svg'
import GoogleAuth from '../components/GoogleAuth/GoogleAuth.jsx'

const SignUp = ({ active, setActive }) => {
	const [showPassword, setShowPassword] = useState(false)
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
	})
	const { name, email, password } = formData
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
			const userCredential = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			)
			const user = userCredential.user
			updateProfile(auth.currentUser, {
				displayName: name,
			})
			const formDataCopy = { ...formData }
			delete formDataCopy.password
			formDataCopy.timestamp = serverTimestamp()
			await setDoc(doc(db, 'users', user.uid), formDataCopy)
			navigate('/')
			toast.success('Профиль успешно зарегистрирован', { theme: 'dark' })
		} catch (error) {
			toast.error('Проверьте введенные данные', { theme: 'dark' })
		}
	}

	return (
		<>
			{/* <div className='modal' onClick={() => setActive(false)}> */}
			<div className='signUpContainer'>
				<header className='signUpHeader'>
					<p className='signUpHeaderText'>Авторизуйтесь, пожалуйста</p>
					<p className='signUpHeaderText2'>Это не займет и 5 секунд</p>
				</header>
				<main className='signUpPage'>
					<form onSubmit={onSubmit}>
						<div className='inputNameDiv'>
							<p className='signUpComponents'>Имя</p>
							<input
								id='name'
								type='name'
								className='nameInput'
								value={name}
								onChange={onChange}
							/>
						</div>
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
							<button className='signUpButton'>Зарегистрироваться</button>
						</div>
					</form>
					<GoogleAuth />
					<Link className='signUpLink' to='/sign-in'>
						Войти в существующий аккаунт
					</Link>
				</main>
			</div>
			{/* </div> */}
		</>
	)
}

export default SignUp
