import { Link } from 'react-router-dom';

export function Home() {
    return (
        <ul>
            <li><Link to="/"> Home </Link></li>
            <li><Link to="/ServicesForm"> Check our services </Link></li>
        </ul>
    )
}