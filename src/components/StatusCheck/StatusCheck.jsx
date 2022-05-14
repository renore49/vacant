import { Navigate, Outlet } from 'react-router-dom'
import { useAuthStatus } from '../hooks/useAuthStatus'
import Spinner from '../Spinner/Spinner'

const StatusCheck = () => {
	const { loggedIn, checkingStatus } = useAuthStatus()

	if (checkingStatus) {
		return <Spinner />
	}

	return loggedIn ? <Outlet /> : <Navigate to='/sign-up' />
}

export default StatusCheck
