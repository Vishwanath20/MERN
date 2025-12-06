import { useContext, useState } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import UserFormModal, { type User } from '../components/UserFormModal';

const mockUsers = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'Admin' },
  { id:2, name: 'Jane Smith', email: 'jane.smith@example.com', role: 'User' },
  { id: 3, name: 'Peter Jones', email: 'peter.jones@example.com', role: 'User' },
  { id: 4, name: 'Susan Williams', email: 'susan.w@example.com', role: 'Editor' },
];

const emptyUser: User = { id: null, name: '', email: '', role: 'User' };

const MernOperation = () => {
  const { theme } = useContext(ThemeContext);
  const [users, setUsers] = useState<User[]>(mockUsers);
  const [showModal, setShowModal] = useState(false);
  const [currentUser, setCurrentUser] = useState<User>(emptyUser);

  const handleAddUser = () => {
    setCurrentUser(emptyUser);
    setShowModal(true);
  };

  const handleEditUser = (user: User) => {
    setCurrentUser(user);
    setShowModal(true);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setCurrentUser(prev => ({ ...prev, [name]: value }));
  };

  const handleDelete = (userId: number) => {
    setUsers(users.filter(user => user.id !== userId && user.id !== null));
  };

  const handleSaveUser = (user: User) => {
    if (user.id) {
      // Update existing user
      setUsers(users.map(u => (u.id === user.id ? user : u)));
    } else {
      // Add new user
      const newUser = { ...user, id: new Date().getTime() }; // Use timestamp for unique ID
      setUsers([...users, newUser]);
    }
    setShowModal(false);
  };

  return (
    <>
      <UserFormModal
        show={showModal}
        onHide={() => setShowModal(false)}
        onSave={handleSaveUser}
        user={currentUser}
        onChange={handleFormChange}
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
              <tr key={user.id}>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <span className={`badge ${user.role === 'Admin' ? 'bg-success' : 'bg-info'}`}>{user.role}</span>
                </td>
                <td className="text-end">
                  <button className="btn btn-sm btn-outline-primary me-2" onClick={() => handleEditUser(user)}>Edit</button>
                  {user.id !== null && (
                    <button className="btn btn-sm btn-outline-danger" onClick={() => handleDelete(user.id!)}>Delete</button>
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