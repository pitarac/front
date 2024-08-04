import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await axios.get('/api/telegram/user');
        setUser(response.data);
      } catch (error) {
        console.error("Erro ao pegar dados do usuário", error);
      }
    };

    getUserData();
  }, []);

  return (
    <div className="App">
      {user ? (
        <div>
          <h1>Bem-vindo, {user.first_name}</h1>
          <p>Seu ID é: {user.id}</p>
          {/* Adicione mais detalhes ou opções para o usuário aqui */}
        </div>
      ) : (
        <h1>Carregando...</h1>
      )}
    </div>
  );
}

export default App;
