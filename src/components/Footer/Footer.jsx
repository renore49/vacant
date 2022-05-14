import { useNavigate } from 'react-router-dom'

const Footer = () => {
	const navigate = useNavigate()
	return (
		<footer className='Footer'>
			<nav className='FooterNav'>
				<div className='FooterDivComponents'>
					<p onClick={() => navigate('/')} className='TextFooter'>
						Vacant.
					</p>
					<div className='FootComponents'>
						<p
							onClick={() => navigate('/vacancy')}
							className='FooterNavigation'
						>
							Вакансии
						</p>
						<p
							onClick={() => navigate('/company')}
							className='FooterNavigation'
						>
							Компании
						</p>
						<p
							onClick={() => navigate('/aboutUs')}
							className='FooterNavigation'
						>
							О проекте
						</p>
					</div>
					<div className='hotLinePrs'>
						<h3 className='hotLine'>Горячая линия: </h3>
						<div className='hotlineDiv'>
							<p className='hotLineP'>+996706002602</p>
							<p className='hotLineP'>+996700265833</p>
						</div>
					</div>
				</div>
			</nav>
		</footer>
	)
}

export default Footer
