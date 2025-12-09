import { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import UserFormModal, { type User } from '../components/UserFormModal';

const API_URL = 'http://localhost:5000/api/users';

const emptyUser: User = { name: '', email: '', role: 'User' };

const MernOperation = () => {
  const { theme } = useContext(ThemeContext);
  const [users, setUsers] = useState<User[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [currentUser, setCurrentUser] = useState<User>(emptyUser);
  const [serverError, setServerError] = useState<string | null>(null);

  const fetchUsers = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        // If response is not OK, throw an error to be caught by the catch block
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Failed to fetch users:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleAddUser = () => {
    setCurrentUser(emptyUser);
    setServerError(null); // Clear previous errors
    setShowModal(true);
  };

  const handleEditUser = (user: User) => {
    setCurrentUser(user);
    setServerError(null); // Clear previous errors
    setShowModal(true);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setCurrentUser(prev => ({ ...prev, [name]: value }));
  };

  const handleDelete = async (userId: string) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        await fetch(`${API_URL}/${userId}`, { method: 'DELETE' });
        fetchUsers(); // Refetch users to update the list
      } catch (error) {
        console.error('Failed to delete user:', error);
      }
    }
  };

  const handleSaveUser = async (user: User) => {
    console.log('>>>Saving user:', user);
    setServerError(null); // Reset error on new submission
    try {
      const method = user._id ? 'PUT' : 'POST';
      const url = user._id ? `${API_URL}/${user._id}` : API_URL;

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to save user');
      }

      setShowModal(false);
      fetchUsers(); // Refetch users to reflect changes
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
      setServerError(errorMessage);
      console.error('Failed to save user:', errorMessage);
    }
  };

  return (
    <>
      <UserFormModal
        key={currentUser._id || 'new-user'}
        show={showModal}
        onHide={() => setShowModal(false)}
        onSave={handleSaveUser}
        user={currentUser}
        onChange={handleFormChange}
        serverError={serverError}
      />
      <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-dark text-white' : 'bg-light text-dark'}`}>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold">User Management</h2>
        <button className="btn btn-primary" onClick={handleAddUser}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle-fill me-2" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
          </svg>
          Add User
        </button>
      </div>

      <div className="table-responsive">
        <table className={`table table-hover ${theme === 'dark' ? 'table-dark' : 'table-light'}`}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Role</th>
              <th scope="col" className="text-end">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <span className={`badge ${user.role === 'Admin' ? 'bg-success' : 'bg-info'}`}>{user.role}</span>
                </td>
                <td className="text-end">
                  <button className="btn btn-sm btn-outline-primary me-2" onClick={() => handleEditUser(user)}>Edit</button>
                  {user._id && (
                    <button className="btn btn-sm btn-outline-danger" onClick={() => handleDelete(user._id!)}>Delete</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div></>
  );
};

export default MernOperation;