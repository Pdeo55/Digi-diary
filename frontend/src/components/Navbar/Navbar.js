import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout, reset } from '../../features/auth/authSlice'
import classes from './Navbar.module.css'

function Navbar() {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link to='/'>
          <p> E-Diary</p>
        </Link>
      </div>
      <ul>
        {user ? (
          <li>
            <button className={classes.btn} onClick={onLogout}>
              <FaSignOutAlt /> Logout
            </button>
          </li>
        ) : (<>
          <li>
            <Link to='/login'>
              <FaSignInAlt /> Login
            </Link>
          </li>
          <li>
            <Link to='/register'>
              <FaUser /> Register
            </Link>
          </li>
        </>)}
      </ul>
    </header>
  )
}

export default Navbar