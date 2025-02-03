export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({ message: "Olá, bem-vindo à rota /lorena!" });
  } else {
    res.status(405).json({ error: "Método não permitido" });
  }
}