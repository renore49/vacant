import { ToastContainer } from 'react-toastify'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import MainPage from './pages/MainPage.jsx'
import Vacancy from './pages/Vacancy.jsx'
import Company from './pages/Company.jsx'
import AboutUs from './pages/AboutUs.jsx'
import SignIn from './pages/SignIn.jsx'
import SignUp from './pages/SignUp.jsx'
import CreateVacancy from './pages/CreateVacancy.jsx'
import StatusCheck from './components/StatusCheck/StatusCheck'
import Profile from './pages/Profile'
import 'react-toastify/dist/ReactToastify.css'
import Footer from './components/Footer/Footer'

function App() {
	return (
		<>
			<Router>
				<NavBar />
				<Routes>
					<Route path='/' element={<MainPage />} />
					<Route path='/profile' element={<StatusCheck />}>
						<Route path='/profile' element={<Profile />} />
					</Route>
					<Route path='/vacancy' element={<Vacancy />} />
					<Route path='/company' element={<Company />} />
					<Route path='/aboutUs' element={<AboutUs />} />
					<Route path='/sign-in' element={<SignIn />} />
					<Route path='/sign-up' element={<SignUp />} />
					<Route path='/create-vacancy' element={<CreateVacancy />} />
				</Routes>
				<Footer path='/footer' element={<Footer />} />
			</Router>
			<ToastContainer />
		</>
	)
}

export default App
