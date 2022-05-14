import { Link, Outlet, useNavigate } from 'react-router-dom'
import { ReactComponent as UserAdd } from '../../assets/svg/user-add.svg'
import { ReactComponent as User } from '../../assets/svg/user.svg'

import { useAuthStatus } from '../hooks/useAuthStatus'
import Spinner from '../Spinner/Spinner'
const NavBar = () => {
	const navigate = useNavigate()
	const { loggedIn, checkingStatus } = useAuthStatus()

	if (checkingStatus) {
		return <Spinner />
	}
	return (
		<footer className='NavBar'>
			<nav className='NavbarNav'>
				<div className='NavBarDiv'>
					<p onClick={() => navigate('/')} className='TextHeader'>
						Vacant.
					</p>
					<div className='NavBarComponents'>
						<p
							onClick={() => navigate('/vacancy')}
							className='NavBarNavigation'
						>
							Вакансии
						</p>
						<p
							onClick={() => navigate('/company')}
							className='NavBarNavigation'
						>
							Компании
						</p>
						<p
							onClick={() => navigate('/aboutUs')}
							className='NavBarNavigation'
						>
							О проекте
						</p>
						<input
							type='text'
							placeholder='Поиск'
							// value={search}
							className='NavBarInput'
						/>
						{/* <UserAdd className='userAdd' 	loggedIn ? <Outlet /> : <Navigate to='/sign-up' /> /> */}

						{loggedIn ? (
							<Link to={'/profile'}>
								<User />
							</Link>
						) : (
							<Link to={'/sign-up'}>
								<UserAdd />
							</Link>
						)}
					</div>
				</div>
			</nav>
		</footer>
	)
}

export default NavBar
