import React, { useState } from 'react'
import { navItems } from './NavItems'
import { Link, useNavigate, } from '@tanstack/react-router';
import { useAuthStore } from '../../../store/authStore';
import { ConfirmDialog } from '../../dialogBox/ConfirmDialog';

type Prop = {
    setOpen?: React.Dispatch<React.SetStateAction<boolean>>
}

const Navbar: React.FC<Prop> = ({ setOpen }) => {
    const navigate = useNavigate();
    const [showConfirm, setShowConfirm] = useState(false);
    const name = useAuthStore(state => state.user?.name);
    const role = useAuthStore(state => state.user?.role);
    const logout = useAuthStore(state => state.logout);

    const handleConfirm = () => {
        logout();
        setShowConfirm(false);
        navigate({ to: '/login' });
        setOpen?.(false);
    }

    const handleCancel = () => {
        setShowConfirm(false);
    }

    const handleClick = () => {
        if (role) {
            setShowConfirm(true);
        }
        else if (!role) {
            navigate({ to: '/login' });
        }
    }
    return (
        <nav className='text-[var(--color-text)]'>
            <ul className='flex flex-col lg:flex-row flex-nowrap items-center gap-2 '>
                {
                    navItems.map((item, index) => (
                        <li key={index} className='hover:scale-105 box-border bg-[var(--color-background)] px-2 rounded-lg transition-all duration-150 w-14 md:w-16 lg:w-18'>
                            <Link to={item.path}
                                onClick={() => setOpen?.(false)}
                                activeProps={{ className: 'text-green-500' }}
                                style={{ fontSize: 'var(--font-size-base)' }}
                            >
                                {item.title}
                            </Link>
                        </li>
                    ))
                }
                {role && <li className='hover:scale-105 box-border px-2 rounded-xl bg-[var(--color-background)] transition-all duration-150 w-14 md:w-16 lg:w-18'> <Link to={role === 'teacher' ? '/admin' : `/user/${name}`} activeProps={{ className: 'text-green-500' }} onClick={() => setOpen?.(false)}>{role == 'teacher' ? 'Admin' : 'User'}</Link>
                </li>}
                <li>
                    <button onClick={handleClick} className=' h-full flex items-center justify-center gap-2 hover:scale-105 box-border  px-2 pb-0.5 rounded-xl hover:bg-[var(--color-surface)] transition-all duration-150 hover:cursor-pointer w-14 md:w-16 lg:w-18 text-[var(--color-text-heading)]'
                        style={{ backgroundColor: role ? '#F6644A' : '#7DF600', fontSize: 'var(--font-size-base)' }}>
                        {role ? 'Logout' : 'Login'}
                    </button>
                </li>
            </ul>
            {showConfirm && <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center z-50'>
                <ConfirmDialog onConfirm={handleConfirm} onCancel={handleCancel} message='You will be logged out' />
            </div>}
        </nav>
    )
}
export default Navbar;