import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const Root = () => {
    return (
        <div className='mx-auto max-w-[1480px]'>
            <Navbar></Navbar>
            <div className='mx-auto max-w-7xl'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;