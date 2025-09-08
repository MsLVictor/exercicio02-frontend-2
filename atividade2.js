const prompt = require('prompt-sync')();

function mediaFrequencia() {
    let aulas = parseInt(prompt('Qual número de aulas no semestre? '));
    let faltas = parseInt(prompt('Qual a quantidade de faltas do aluno? '));
    let nota1 = parseFloat(prompt('Qual a primeira nota? '));
    let nota2 = parseFloat(prompt('Qual a segunda nota? '));
    let situacao_aluno = '';
    let percentualFaltas = (faltas / aulas) * 100
    let recuperacao = 0;
    let percentualFrequencia = 100 - percentualFaltas;

    let media = (nota1 + nota2) / 2;
    
    if (percentualFaltas > 25){
        situacao_aluno = 'Reprovado por falta';
    } else if (media >= 7) {
        situacao_aluno = 'Aprovado!';
    } else if (media < 7 && media >= 5){
        recuperacao = parseFloat(prompt('Digite sua nota de recuperação: '));
        let mediaFinal = (media + recuperacao) / 2;
        situacao_aluno = mediaFinal >= 5 ? 'Aprovado após a recuperação' : 'Reprovado após a recuperação';
    } else if (media < 5) {
        situacao_aluno = 'Reprovado por nota';
    }
    
    console.log('Número de aulas do semestre: ', aulas);
    console.log('Número de faltas do aluno: ', faltas);
    console.log('Percentual de presença do aluno: ', percentualFrequencia.toFixed(2) + '%');
    console.log('A primeira nota: ', nota1);
    console.log('Segunda nota: ', nota2);
    console.log('Nota complementar (recuperação): ', recuperacao === 0 ? '-' : recuperacao);
    console.log('Situação final do aluno: ', situacao_aluno);

}

mediaFrequencia()

