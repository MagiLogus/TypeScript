// 8. Faça um programa que receba a idade do usuário, enquanto a
// resposta do usuário for menor que 18 anos continue a solicitar a
// idade e mostre uma mensagem quando a idade do usuário for
// maior que 18.
import PromptSync from "prompt-sync";

export function maioridade() {
    const prompt = PromptSync();

    let idade:number = parseInt(prompt("Digite a sua idade: "));

    while (idade < 18) {
        console.log("Digite uma idade válida! ");
        idade = parseInt(prompt("Digite a sua idade: "));
    }

    console.log("Você é maior que 18 anos.");
}
