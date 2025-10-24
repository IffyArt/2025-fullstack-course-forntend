import TodoProject from '@/components/Todo';
import { useAuth } from '@/hooks/useAuth';

export default function Home() {
  const { login, access, logout } = useAuth();

  return (
    <main style={{ padding: '2rem' }}>
      {access ? <p>Logged in</p> : <p>Logged out</p>}
      <button onClick={() => login('admin', 'admin')}>Login</button>
      <button onClick={() => logout()}>Logout</button>
      <TodoProject />
    </main>
  );
}
