import React from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Vacancy from '../pages/Vacancy'
import { Link } from 'react-router-dom'
const MainPage = () => {
	const navigate = useNavigate()

	// let height = 15
	// let attempt = 4
	// let intS = 0
	// function scrollToEndPage() {
	// 	console.log(
	// 		'hight:' +
	// 			height +
	// 			' scrollHeight:' +
	// 			document.body.scrollHeight +
	// 			' att:' +
	// 			attempt
	// 	)

	// 	if (height < document.body.scrollHeight) {
	// 		//height = document.body.scrollHeight;
	// 		window.scrollTo(0, height)
	// 		attempt++
	// 		height = parseInt(height) + attempt
	// 	} else {
	// 		clearInterval(intS)
	// 	}
	// }
	// intS = setInterval(scrollToEndPage, 100)
	const notify = () => toast('Wow so easy!')
	return (
		<main>
			<div className='mainPage'>
				<p className='mainText'>Начни свою карьеру вместе с нами</p>
				<p onClick={notify} className='mainP'>
					Vacant - проект, помогающий студентам и молодым специалистам найти
					свою первую работу в сфере IT - технологий
				</p>
				<button
					onClick={() => navigate('/create-vacancy')}
					className='mainButton'
				>
					Разместить вакансию
				</button>
			</div>
			<hr />
		</main>
	)
}

export default MainPage
