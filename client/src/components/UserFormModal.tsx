import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

export interface User {
  id: number | null;
  name: string;
  email: string;
  role: string;
}

interface UserFormModalProps {
  show: boolean;
  onHide: () => void;
  onSave: (user: User) => void;
  user: User;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const UserFormModal = ({ show, onHide, onSave, user, onChange }: UserFormModalProps) => {
  const { theme } = useContext(ThemeContext);

  const handleSave = () => {
    onSave(user);
  };

  if (!show) {
    return null;
  }

  return (
    <>
      <div className="modal-backdrop fade show"></div>
      <div className="modal fade show d-block" tabIndex={-1} role="dialog">
        <div className="modal-dialog modal-dialog-centered">
          <div className={`modal-content ${theme === 'dark' ? 'bg-dark text-white' : ''}`}>
            <div className="modal-header">
              <h5 className="modal-title">{user.id ? 'Edit User' : 'Add User'}</h5>
              <button type="button" className={`btn-close ${theme === 'dark' ? 'btn-close-white' : ''}`} onClick={onHide} aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="formUserName" className="form-label">Name</label>
                  <input type="text" id="formUserName" className={`form-control ${theme === 'dark' ? 'bg-secondary text-white' : ''}`} name="name" value={user.name} onChange={onChange} placeholder="Enter name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="formUserEmail" className="form-label">Email address</label>
                  <input type="email" id="formUserEmail" className={`form-control ${theme === 'dark' ? 'bg-secondary text-white' : ''}`} name="email" value={user.email} onChange={onChange} placeholder="Enter email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="formUserRole" className="form-label">Role</label>
                  <select id="formUserRole" className={`form-select ${theme === 'dark' ? 'bg-secondary text-white' : ''}`} name="role" value={user.role} onChange={onChange}>
                    <option>User</option>
                    <option>Editor</option>
                    <option>Admin</option>
                  </select>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={onHide}>Cancel</button>
              <button type="button" className="btn btn-primary" onClick={handleSave}>Save Changes</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserFormModal;