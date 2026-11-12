function validaNom(nom, maxim) {
  const nomNet = nom.trim();

  if (!nomNet) {
    return { error: "Escriu el teu nom per començar." };
  }

  if (nomNet.length > maxim) {
    return { error: `El nom pot tenir com a màxim ${maxim} caràcters.` };
  }

  return { nom: nomNet };
}
