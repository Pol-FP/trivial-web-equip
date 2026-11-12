function preparaPartida(banc, categoria) {
  if (!Object.prototype.hasOwnProperty.call(banc, categoria)) {
    return null;
  }

  const preguntesCategoria = banc[categoria];
  if (!Array.isArray(preguntesCategoria) || preguntesCategoria.length === 0) {
    return null;
  }

  // Barregem una còpia per conservar l'ordre original del banc de preguntes.
  const ronda = [...preguntesCategoria];
  for (let i = ronda.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [ronda[i], ronda[j]] = [ronda[j], ronda[i]];
  }

  return { preguntes: ronda, index: 0, encerts: 0, respostaDonada: false };
}
