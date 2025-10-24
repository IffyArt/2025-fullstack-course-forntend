import { useUser } from '@/context/UserContext';

export default function Home() {
  const { user, setUser } = useUser();

  return (
    <main style={{ padding: '2rem' }}>
      <h1>🎉 Context Hook 範例</h1>
      <p>目前使用者：{user?.name}</p>

      <button onClick={() => setUser({ name: '其他人', role: '角色' })}>
        切換使用者
      </button>
    </main>
  );
}
