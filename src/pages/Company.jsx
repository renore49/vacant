import Yandex from '../assets/svg/Yandex.svg'
import Krok from '../assets/svg/Krok.svg'
import Ozon from '../assets/svg/Ozon.svg'

const Company = () => {
	return (
		<main className='Vacancies'>
			<div className='companyParents'>
				<img src={Yandex} alt='yandex' />
				<div>
					<p className='company'>Яндекс Практикум</p>
					<p className='company'>Сервис онлайн-образования</p>
				</div>
			</div>
			<div className='companyParents'>
				<img src={Krok} alt='yandex' />
				<div>
					<p className='company'>Крок</p>
					<p className='company'>Создавай будущее здесь и сейчас</p>
				</div>
			</div>
			<div className='companyParents'>
				<img src={Ozon} alt='yandex' />
				<div>
					<p className='company'>Озон</p>
					<p className='company'>
						Платформа для развития навыков и подготовки к техническим
						собеседованиям.
					</p>
				</div>
			</div>
		</main>
	)
}

export default Company
