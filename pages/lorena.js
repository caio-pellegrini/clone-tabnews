import { useRouter } from 'next/router';
import { useState } from 'react';

export default function LorenaPage() {
  const router = useRouter();
  const [resposta, setResposta] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (resposta === 'caio') {
      router.push('/lorena/opcao-certa');
    } else {
      router.push('/lorena/opcao-errada');
    }
  };

  return (
    <div>
      <h1>Quem é o cara mais legal e bonito do mundo?</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="radio"
            name="resposta"
            value="caio"
            onChange={(e) => setResposta(e.target.value)}
          />
          Caio Pellegrini
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="resposta"
            value="errado"
            onChange={(e) => setResposta(e.target.value)}
          />
          Que pergunta é essa Caio seu amostradinho
        </label>
        <br /><br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
