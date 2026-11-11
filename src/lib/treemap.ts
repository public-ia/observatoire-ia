export interface Rect {
  x: number;
  y: number;
  w: number;
  h: number;
}

/** Pire rapport largeur/hauteur d'une rangée posée le long d'un côté de longueur `cote`. */
const pireRatio = (rangee: number[], cote: number) => {
  const somme = rangee.reduce((a, b) => a + b, 0);
  const max = Math.max(...rangee);
  const min = Math.min(...rangee);
  return Math.max((cote * cote * max) / (somme * somme), (somme * somme) / (cote * cote * min));
};

/**
 * Disposition « squarified » (Bruls, Huizing, van Wijk) : découpe un rectangle
 * en cases dont la surface est proportionnelle aux valeurs, en gardant des
 * cases aussi carrées que possible. Les valeurs doivent être triées par ordre
 * décroissant ; les rectangles sont renvoyés dans le même ordre.
 */
export const squarify = (valeurs: number[], largeur: number, hauteur: number): Rect[] => {
  const total = valeurs.reduce((a, b) => a + b, 0);
  if (!total || largeur <= 0 || hauteur <= 0) return valeurs.map(() => ({ x: 0, y: 0, w: 0, h: 0 }));

  const aires = valeurs.map((v) => (v / total) * largeur * hauteur);
  const rects: Rect[] = [];
  let x = 0;
  let y = 0;
  let w = largeur;
  let h = hauteur;
  let i = 0;

  while (i < aires.length) {
    const cote = Math.min(w, h);
    const rangee = [aires[i]];
    let j = i + 1;
    while (j < aires.length && pireRatio([...rangee, aires[j]], cote) <= pireRatio(rangee, cote)) {
      rangee.push(aires[j]);
      j++;
    }

    const somme = rangee.reduce((a, b) => a + b, 0);
    const epaisseur = somme / cote;
    let decalage = 0;
    for (const aire of rangee) {
      const longueur = aire / epaisseur;
      // La rangée s'appuie sur le petit côté de l'espace restant.
      rects.push(w >= h ? { x, y: y + decalage, w: epaisseur, h: longueur } : { x: x + decalage, y, w: longueur, h: epaisseur });
      decalage += longueur;
    }
    if (w >= h) {
      x += epaisseur;
      w -= epaisseur;
    } else {
      y += epaisseur;
      h -= epaisseur;
    }
    i = j;
  }
  return rects;
};
