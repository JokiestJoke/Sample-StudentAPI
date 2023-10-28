import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={styles.headerContainer}>
      <h1 style={styles.title}>Proof-Buddy</h1>
      <nav style={styles.nav}>
        <Link style={styles.navLink} to="/">View Students</Link>
        <Link style={styles.navLink} to="/add-student">Add Student</Link>
      </nav>
    </header>
  );
}

const styles = {
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#333',
    color: '#fff'
  },
  title: {
    margin: 0
  },
  nav: {
    display: 'flex',
    gap: '10px'
  },
  navLink: {
    textDecoration: 'none',
    color: '#fff',
    padding: '5px 10px',
    borderRadius: '5px',
    backgroundColor: '#555',
    transition: 'background-color 0.2s',

    '&:hover': {
      backgroundColor: '#777'
    }
  }
};

export default Header;
