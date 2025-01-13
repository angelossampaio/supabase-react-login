import { useEffect, useState } from 'react';
import { supabase } from '../api/supabaseClient';


export default function Home() {
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getSession();
      if (data.session) {
        setUserEmail(data.session.user.email as string);
      }
    };
    getUser();
  }, []);

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      alert('Erro ao sair: ' + error.message);
    } else {
      window.location.reload(); // Redireciona para a página inicial (ou login)
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '50px auto', textAlign: 'center' }}>
      <h1>Bem-vindo!</h1>
      {userEmail ? (
        <>
          <p>Você está logado como: <strong>{userEmail}</strong></p>
          <button onClick={handleLogout} style={{ padding: '10px 20px', margin: '10px 0' }}>
            Sair
          </button>
        </>
      ) : (
        <p>Carregando informações do usuário...</p>
      )}
    </div>
  );
}
