import { Link, NavLink } from 'react-router-dom';


export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark px-3">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                COVID
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className="nav-item nav-link" 
                        to="/historic"
                    >
                        Historic
                    </NavLink>

                    <NavLink 
                        className="nav-item nav-link" 
                        to="/state"
                    >
                        Filter by State
                    </NavLink>
                    <NavLink 
                        className="nav-item nav-link" 
                        to="/date"
                    >
                        Filter by Date
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}