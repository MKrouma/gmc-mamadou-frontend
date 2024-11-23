import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { hideArrow } from '../redux/actions/arrow-actions'

const Header = () => {
    const showArrow = useSelector(state => state.arrow.isShow)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handgleHomePage = (e) => {
        e.preventDefault()
        dispatch(hideArrow())
        navigate("/")
    }

    return (
        <div className='header'>
            <div className='h-arrow'>
                {showArrow && (
                    <i className="fa-solid fa-arrow-left fa-xl arrowI" onClick={handgleHomePage}></i>
                )}
            </div>
            
            <div className='h-title' onClick={handgleHomePage}>
                <h1>Todo App Redux</h1>
            </div>
        </div>
    )
}

export default Header
