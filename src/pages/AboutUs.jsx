import React from 'react'
import Students from '../assets/jpg/Students.jpg'
import Yandex from '../assets/svg/Yandex.svg'
import Ozon from '../assets/svg/Ozon.svg'
import Krok from '../assets/svg/Krok.svg'
import Yryskeldi from '../assets/jpg/Yryskeldi.jpg'
import Erjan from '../assets/jpg/ErjanBaike.jpg'
const AboutUs = () => {
	return (
		<main className='AboutUs'>
			<div className='aboutUsMain'>
				<h2 className='aboutUsH2'>О чем этот проект?</h2>
				<p className='aboutUsP'>
					После окончания курсов у нас стал вопрос как найти работу и при этом
					показать наши способности. Мы поразмыслив пришли к тому, что в
					Кыргызстане нет платформ для поиска работы именно для программистов.
				</p>
				<p className='aboutUsP'>
					Мы загорелись идеей сделать сайт с большим упором для новичков в этой
					сфере. Идеи мы черпали из разных иностранных сайтов и сделали
					собственный продукт.
				</p>
			</div>

			<div className='AboutUs1'>
				<h2 className='aboutUsH2'>О нас</h2>
				<p className='aboutUsP'>
					Мы закончили курсы по Front-End разработке и хотели показать свои
					способности отразив их на этом сайте. В ходе разработки мы столкнулись
					с рядом проблем, которых не встречли ранее и для нас это было неким
					вызовом. Я не скажу что мы были лучшими студентами группы, но
					блогадаря усердному труду мы пришли к поставленной цели.
				</p>
				<img className='aboutUsImg1' src={Students} alt='Students' />
			</div>

			<div className='aboutUs2'>
				<div className='aboutUsCompany'>
					<h2 className='aboutUsH2'>С нами сотрудничают</h2>
					<div className='aboutUsCompanyName'>
						<a href='https://practicum.yandex.ru/' target='_blank'>
							<img src={Yandex} alt='Яндекс' />
						</a>
						<a href='https://www.ozon.ru/' target='_blank'>
							<img src={Ozon} alt='Озон' />
						</a>
						<a href='https://www.croc.ru/' target='_blank'>
							<img src={Krok} alt='Крок' />
						</a>
					</div>
				</div>
				<p className='aboutUsP'>
					Большинство из компаний возвращаются за повторными размещениями
				</p>
			</div>
			<h2 className='aboutUsH2'>Наша команда</h2>
			<div className='Command'>
				<div class='aboutUsCard'>
					<img
						src={Yryskeldi}
						className='Yryskeldi'
						width={367}
						height={503}
						alt='Ырыскелди'
					/>
					<h3 className='aboutUsH3'>Ырыскелди</h3>
				</div>
				<div class='aboutUsCard'>
					<img
						src={Erjan}
						className='Yryskeldi'
						width={367}
						height={503}
						alt='Erjan'
					/>
					<h3 className='aboutUsH3'>Ержан</h3>
				</div>
			</div>
		</main>
	)
}

export default AboutUs
