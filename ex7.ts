// 7. Calcular a soma dos números de 1 a 100 utilizando a estrutura
// while.
export function soma() {
    let soma: number = 0;
    let num: number = 1;

    while (num <= 100) {
        soma += num;
        num++;
    }

    console.log("A soma dos números de 1 a 100 é:", soma);
}


