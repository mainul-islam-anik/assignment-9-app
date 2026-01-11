import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../../assets/download.png'
import userIcon from '../../assets/user.png'
import { AuthContext } from '../../Provider/AuthProvider';
const Navber = () => {
  const {user, logOut} =use(AuthContext);
  const handleLogOut =()=>{
    logOut().then(() => {
      alert("You Logged Out successfully")
}).catch((error) => {
  console.log(error)
});
  }
    const links = <>
        <NavLink to="/"> <li className='m-2 font-bold'>Home</li></NavLink>
        <NavLink to='/services'> <li className='m-2 font-bold'>Services</li></NavLink>
        <NavLink to='/myProfile'><li className='m-2 font-bold'>My Profile</li></NavLink>
    </>
    return (
        <div className=' bg-base-100 shadow-sm'>
          <div className="navbar  max-w-[1200px] mx-auto">
  <div className="navbar-start ">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <nav>
        <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
      </nav>
    </div>
    <Link to="/">
      <div className='flex items-center'>
        <img className='h-[50px] w-[50px]' src={logo} alt="" />
    <a className=" pl-2 btn btn-ghost text-xl">pet care</a>
    </div>
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
        
    <nav>
      <ul className="menu menu-horizontal px-1">
              {links}
    </ul>
    </nav>
  </div>
  <div className="navbar-end flex gap-5">
      {user? 
    <div className=''>{user && user.email}</div>
      :
    <img  src={userIcon} alt="" />
    }
    {console.log(user)}
    {user ? <button onClick={handleLogOut}  className='btn btn-neutral px-10'>LogOut</button> : <Link to="/auth/login" className="btn btn-neutral px-10">Login</Link>}
    
  </div>
        </div>
        </div>
    );
};

export default Navber;