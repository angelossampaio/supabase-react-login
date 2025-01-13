import { useState, FormEvent } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { supabase } from './api/supabaseClient';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setMessage(`Erro: ${error.message}`);
    } else {
      setMessage('Login realizado com sucesso!');
    }
  };

  const handleSignUp = async (e: FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.auth.signUp({ email, password });

    if (error) {
      setMessage(`Erro: ${error.message}`);
    } else {
      setMessage('Conta criada com sucesso! Verifique seu e-mail para confirmar.');
    }
  };

  return (
    <Box
      sx={{
        height: '100vh',
        background: 'linear-gradient(135deg, #4facfe, #00f2fe)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          width: ['90%', '80%', '60%', '40%'], // xs, sm, md, lg
          background: '#fff',
          padding: '30px',
          borderRadius: '10px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
          textAlign: 'center',
        }}
      >
        <Typography variant="h5" gutterBottom>
          Login com Supabase
        </Typography>
        <form onSubmit={handleLogin}>
          <Box mb={2}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Box>
          <Box mb={2}>
            <TextField
              label="Senha"
              type="password"
              variant="outlined"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Box>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ marginBottom: '15px' }}
          >
            Entrar
          </Button>
        </form>
        <Button
          variant="outlined"
          color="primary"
          fullWidth
          onClick={handleSignUp}
        >
          Criar Conta
        </Button>
        <Typography variant="body2" color="textSecondary" sx={{ marginTop: '15px' }}>
          {message}
        </Typography>
      </Box>
    </Box>
  );
}
