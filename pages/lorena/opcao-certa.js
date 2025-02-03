export default function OpcaoCerta() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px', position: 'relative' }}>
      <h1>Parabéns! Você acertou! 🎉</h1>
      <p>Você passou no quiz super mega difícil!!!!</p>
      <p>Agora, como recompensa, assista esse vídeo: </p>

      <a href="https://youtube.com/shorts/bASCQAZZvHo" target="_blank" rel="noopener noreferrer" style={{ position: 'relative', display: 'inline-block' }}>
        <img src="https://i.imgur.com/Q6aztJk.jpeg" style={{ width: '200px', cursor: 'pointer' }} alt="Clique para assistir o vídeo" />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" style={{ width: '50px', height: '50px', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', pointerEvents: 'none' }}>
          <path d="M8 5v14l11-7z" />
        </svg>
      </a>
    </div>
  );
}