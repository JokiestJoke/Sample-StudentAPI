import React, { useState } from 'react';

function AddStudent() {
  const [student, setStudent] = useState({
    userName: '',
    email: '',
    password: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setStudent(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/api/students', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(student)
      });

      if (response.status === 200) {
        alert('Student added successfully!');
        setStudent({
          userName: '',
          email: '',
          password: ''
        });
      } else {
        alert('Failed to add student. Please try again.');
      }
    } catch (error) {
      console.error("There was an error adding the student:", error);
    }
  };

  return (
    <div style={styles.container}>
      <h2>Add New Student</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label htmlFor="userName">Username:</label>
          <input type="text" id="userName" name="userName" value={student.userName} onChange={handleChange} required />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={student.email} onChange={handleChange} required />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={student.password} onChange={handleChange} required />
        </div>
        <button type="submit" style={styles.submitButton}>Add Student</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    maxWidth: '400px',
    margin: '0 auto'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px'
  },
  submitButton: {
    padding: '10px',
    backgroundColor: '#333',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.2s',

    '&:hover': {
      backgroundColor: '#555'
    }
  }
};

export default AddStudent;
