import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <header style={{ backgroundColor: '#1e3a8a', color: 'white', padding: '14px 20px' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Polytech Portal -- MERN S7</h1>
          <p style={{ fontSize: '0.8rem', color: '#93c5fd' }}>React Router SPA & Communication Axios</p>
        </div>

        <nav style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            Accueil
          </NavLink>

          <NavLink
            to="/articles"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            Articles (API)
          </NavLink>

          <NavLink
            to="/nouveau"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            + Publier
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
