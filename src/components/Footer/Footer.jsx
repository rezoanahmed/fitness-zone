
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='mt-10'>
            <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
                <nav className="grid md:grid-flow-col gap-4">
                    <Link to='/services'>Services</Link>
                    <Link to='/trainers'>Trainers</Link>
                    <Link to='/plans'>Supplements Plans</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/contact'>Contact</Link>
                </nav>
                <nav>
                    <div className="grid grid-flow-col gap-4">
                       <Logo></Logo>
                    </div>
                </nav>
                <aside>
                    <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;