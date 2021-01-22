import React from 'react'
import {Link} from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import './header.styles.scss'
import { auth } from '../../firebase/firebase.utils'
const Header = ({currentUser}) => (
    <div className="header">
        <div className="logo-container">
            <Link to="/">
                <Logo></Logo>
            </Link>
        </div>
        <div className="options">
            <Link className="option" to="/shop">
                SHOP
            </Link>
            <Link className="option" to="/shop">
                CONTACT
            </Link>
            {
                currentUser?
                <div className="option" onClick={()=>auth.signOut()}>SIGN OUT</div>
                :
                <Link to="/signin" className="option">SIGN IN</Link>
            }
        </div>
    </div>
)

export default Header;