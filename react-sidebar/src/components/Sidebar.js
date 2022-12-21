import React from 'react';
import { NavLink } from 'react-router-dom';
import { sidebarData } from './Data';
import Logo from './iconsImages/work-logo.png'

 const Sidebar = () =>  {
    return (
        <React.Fragment>
            <section>   
            <img className='logo' src={Logo} alt="Work5 Logo"/>
                    {sidebarData.map((item,index) => {
                        return(
                            <div key={index} className='bar-container'>
                                <NavLink to={item.path} className={ ({ isActive }) => 
                                isActive ? 'active-bar' : 'bar'}>
                                    <span>{item.icon}</span>
                                    <span>{item.name}</span>
                                </NavLink>
                            </div>
                        )
                    })}
            </section>
        </React.Fragment>
    )
}

export default Sidebar
