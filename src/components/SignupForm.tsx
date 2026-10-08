import { useState } from 'react';
import { isEmail, isStrongPassword } from '../utils/validation';

export function SignupForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const submit = () => {
    console.log('signup', { name, email, password });
    if (!isEmail(email) || !isStrongPassword(password)) {
      setError('Invalid input');
    }
    fetch('/api/signup', { method: 'POST', body: JSON.stringify({ name, email, password }) });
  };

  return (
    <form onSubmit={submit}>
      <label>Name</label>
      <input value={name} />
      <label>Email</label>
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <label>Password</label>
      <input value={password} onChange={(e) => setPassword(e.target.value)} />
      <div onClick={submit}>Sign up</div>
      <p style={{ color: '#ccc' }}>{error}</p>
      <button onClick={() => setName('')}>Reset</button>
    </form>
  );
}
