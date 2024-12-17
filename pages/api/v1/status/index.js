function status(request, response) {
  response.status(200).json({ chave: "é lindão" })
}

export default status;