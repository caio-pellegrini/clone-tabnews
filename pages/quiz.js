import { useState } from 'react';
import { useRouter } from 'next/router';

export default function LorenaPage() {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push('/lorena');
  };

  return (
    <div>
      <h1>Quiz SUPER MEGA difícil</h1>
      <h2>Está pronta mesmo pra responder?</h2>
      <button onClick={handleSubmit}>Sim</button>
    </div>
  );
}
