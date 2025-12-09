import { useContext, useState } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

export interface User {
  _id?: string;
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
  serverError?: string | null;
}

interface FormErrors {
  name?: string;
  email?: string;
}

const UserFormModal = ({ show, onHide, onSave, user, onChange, serverError }: UserFormModalProps) => {
  const { theme } = useContext(ThemeContext);
  const [errors, setErrors] = useState<FormErrors>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the default form submission (page reload)
    const newErrors: FormErrors = {};
    if (!user.name.trim()) newErrors.name = 'Name is required.';
    if (!user.email.trim()) newErrors.email = 'Email is required.';

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

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
              <h5 className="modal-title">{user._id ? 'Edit User' : 'Add User'}</h5>
              <button type="button" className={`btn-close ${theme === 'dark' ? 'btn-close-white' : ''}`} onClick={onHide} aria-label="Close"></button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="modal-body">
                {serverError && (
                  <div className="alert alert-danger">{serverError}</div>
                )}
                <div className="mb-3">
                  <label htmlFor="formUserName" className="form-label">Name</label>
                  <input type="text" id="formUserName" className={`form-control ${errors.name ? 'is-invalid' : ''} ${theme === 'dark' ? 'bg-secondary text-white' : ''}`} name="name" value={user.name} onChange={onChange} placeholder="Enter name" />
                  {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                </div>
                <div className="mb-3">
                  <label htmlFor="formUserEmail" className="form-label">Email address</label>
                  <input type="email" id="formUserEmail" className={`form-control ${errors.email ? 'is-invalid' : ''} ${theme === 'dark' ? 'bg-secondary text-white' : ''}`} name="email" value={user.email} onChange={onChange} placeholder="Enter email" />
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>
                <div className="mb-3">
                  <label htmlFor="formUserRole" className="form-label">Role</label>
                  <select id="formUserRole" className={`form-select ${theme === 'dark' ? 'bg-secondary text-white' : ''}`} name="role" value={user.role} onChange={onChange}>
                    <option>User</option>
                    <option>Editor</option>
                    <option>Admin</option>
                  </select>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={onHide}>Cancel</button>
                <button type="submit" className="btn btn-primary" disabled={!user.name || !user.email}>Save Changes</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserFormModal;