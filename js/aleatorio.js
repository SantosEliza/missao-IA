const nome = [ Carol, Natali, Eliza, Apollo];
export function aleatorio (lista){ 
   const posicao = Math.floor ( Math.randon ()* lista.length);
   retrun lista[posicao];
}
