import React, { useState, useEffect } from 'react';

function ViewStudents() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/students');
      const data = await response.json();
      setStudents(data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  const handleDelete = async (userName) => {
    try {
      const response = await fetch(`http://localhost:3001/api/students/${userName}`, {
        method: 'DELETE'
      });

      if (response.status === 200) {
        alert('Student deleted successfully!');
        fetchStudents();
      } else {
        alert('Failed to delete student. Please try again.');
      }
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  return (
    <div style={styles.container}>
      <h2>View Students</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.userName}>
              <td>{student.userName}</td>
              <td>{student.email}</td>
              <td>
                <button onClick={() => handleDelete(student.userName)} style={styles.deleteButton}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    maxWidth: '600px',
    margin: '0 auto'
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse'
  },
  deleteButton: {
    padding: '5px 10px',
    backgroundColor: '#f44336',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.2s',

    '&:hover': {
      backgroundColor: '#d32f2f'
    }
  }
};

export default ViewStudents;
