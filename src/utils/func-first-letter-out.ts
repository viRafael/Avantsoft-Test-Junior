export function firstLetterOut(productName: string): string {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  // Remove acentos e converte para minúscula
  const cleanName = productName
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

  // Procura a primeira letra ausente
  for (const letter of alphabet) {
    if (!cleanName.includes(letter)) {
      return letter;
    }
  }

  return '_';
}
