const nomes = [Eliza, Carol, Natali, Vitoria];
export function aleatorio (Lista){
    const posicao = Math.floor(Math.random()* Lista.Length);
    return Lista[posicao];
}