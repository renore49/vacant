import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Spinner from '../components/Spinner/Spinner'
import { toast } from 'react-toastify'
import { db } from '../firebase.config'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { ReactComponent as LogOut } from '../assets/svg/logout.svg'

const CreateVacancy = () => {
	const [loading, setLoading] = useState(false)
	const [formData, setFormData] = useState({
		post: '',
		company: '',
		jobDescription: '',
		location: '',
		position: '',
		busyness: '',
		howRespond: '',
		name: '',
		email: '',
	})

	const {
		post,
		company,
		jobDescription,
		location,
		position,
		busyness,
		howRespond,
		name,
		email,
	} = formData
	const auth = getAuth()
	const navigate = useNavigate()
	const isMounted = useRef(true)

	useEffect(() => {
		if (isMounted) {
			onAuthStateChanged(auth, user => {
				if (user) {
					setFormData({ ...formData, userRef: user.uid })
				} else {
					navigate('/sign-in')
				}
			})
		}
		return () => {
			isMounted.current = false
		}
	}, [isMounted])

	if (loading) {
		return <Spinner />
	}

	const onSubmit = async e => {
		e.preventDefault()
		setLoading(true)
		// CreateVacant
		const formDataCopy = {
			...formData,
			timestamp: serverTimestamp(),
		}
		delete formDataCopy.address

		const docRef = await addDoc(collection(db, 'listings'), formDataCopy)
		toast.success('Success Listing')
		navigate(`/vacancy/${formDataCopy.type}/${docRef.id}`)
		setLoading(false)
	}

	const onVacant = e => {
		if (!e.target.files) {
			setFormData(prevState => ({
				...prevState,
				[e.target.id]: e.target.value,
			}))
		}
	}
	/////////////// Верстка
	return (
		<div>
			<header>
				<h2 className='createTitle1'>Разместить вакансию</h2>
				<p className='createTitle2'>
					Размещение стажировок и джуниор-вакансий на сайте — бесплатное. Если у
					вас возникли трудности — напишите нам в Телеграме.
				</p>
			</header>
			<main className='createContainer'>
				<form onSubmit={onSubmit}>
					<LogOut onClick={() => navigate('/')} className='createLogOut' />
					<h2 className='infoTitle'>1. Информация о вакансии</h2>
					<div className='createInputDiv'>
						<label className='typeLabel'>Должность</label>
						<input
							className='typeInputPost'
							type='text'
							id='post'
							value={post}
							onChange={onVacant}
							min='1'
							max='50'
							required
						/>
						<label className='typeLabel'>Компания</label>
						<input
							className='typeInputPost'
							type='text'
							id='company'
							value={company}
							onChange={onVacant}
							min='1'
							max='50'
							required
						/>
						<label className='typeLabel'>Описание вакансии</label>
						<textarea
							className='typeInputDescription'
							type='text'
							id='jobDescription'
							value={jobDescription}
							onChange={onVacant}
							min='20'
							required
						/>
						<label className='typeLabel'>Локация</label>
						<input
							className='typeInputPost'
							type='text'
							id='location'
							value={location}
							onChange={onVacant}
							min='1'
							max='50'
							required
						/>
						<label className='typeLabel'>Уровень позиции</label>
						<input
							className='typeInputPost'
							type='text'
							id='position'
							value={position}
							onChange={onVacant}
							min='1'
							max='25'
							required
						/>
						<label className='typeLabel'>Занятость</label>
						<input
							className='typeInputPost'
							type='text'
							id='busyness'
							value={busyness}
							onChange={onVacant}
							min='1'
							max='50'
							required
						/>
						<label className='typeLabel'>Как откликнуться</label>
						<input
							className='typeInputPost'
							type='text'
							id='howRespond'
							value={howRespond}
							onChange={onVacant}
							min='1'
							max='50'
							required
						/>
					</div>

					<h2 className='infoTitle'>2. Контактная информация</h2>

					<div className='createInputDiv'>
						<label className='typeLabel'>Имя</label>
						<input
							className='typeInputPost'
							type='text'
							id='name'
							value={name}
							onChange={onVacant}
							min='1'
							max='50'
							required
						/>
						<label className='typeLabel'>Почта</label>
						<input
							className='typeInputPost'
							type='text'
							id='email'
							value={email}
							onChange={onVacant}
							min='1'
							max='50'
							required
						/>
					</div>
					<button type='submit' className='createButton'>
						Опубликовать
					</button>
				</form>
			</main>
		</div>
	)
}

export default CreateVacancy
