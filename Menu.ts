import readlinesync = require('readline-sync');
import { colors } from './src/util/Colors';
import { Conta } from './src/model/Conta';
import { ContaCorrente } from './src/model/ContaCorrente';
import { ContaPoupanca } from './src/model/ContaPoupanca';

export function main () {
    let opcao: number;

    // const conta: Conta = new Conta(1, 123, 1, "Adriana", 10000);
    // conta.visualizar();
    // conta.sacar(10500);
    // conta.visualizar();
    // conta.depositar(5000);
    // conta.visualizar();

   // Objeto da Classe ContaCorrente (Teste)
    const contacorrente: ContaCorrente = new ContaCorrente(2, 123, 1, "Carla", 15000, 1000);
    contacorrente.visualizar();
    contacorrente.sacar(2000);
    contacorrente.visualizar();
    contacorrente.depositar(1000);
    contacorrente.visualizar();

    // Objeto da Classe ContaPoupanca (teste)
    const contapoupanca: ContaPoupanca = new ContaPoupanca(3, 123, 2, "José", 1000, 10);
    contapoupanca.visualizar();
    contapoupanca.sacar(200);
    contapoupanca.visualizar();
    contapoupanca.depositar(1000);
    contapoupanca.visualizar();

    while (true) {

        console.log(colors.bg.black, colors.fg.magenta)
        console.log("\n\n*****************************************************");
        console.log("                                                     ");
        console.log("                    PONEIBANK                        ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Criar Conta                          ");
        console.log("            2 - Listar todas as Contas               ");
        console.log("            3 - Buscar Conta por Numero              ");
        console.log("            4 - Atualizar Dados da Conta             ");
        console.log("            5 - Apagar Conta                         ");
        console.log("            6 - Sacar                                ");
        console.log("            7 - Depositar                            ");
        console.log("            8 - Transferir valores entre Contas      ");
        console.log("            9 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ",
            colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 9) {
            console.log(colors.fg.greenstrong, "\nPoneiBank - Conte com a gente!");
            sobre();
            console.log(colors.reset,"");
            process.exit(0)
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong,
                    "\n\nCriar conta", colors.reset);
            keyPress()
            break;
            case 2:
                console.log(colors.fg.whitestrong,
                    "\n\nListar todas as contas", colors.reset);
            keyPress()
            break;
            case 3:
                console.log(colors.fg.whitestrong,
                    "\n\nBuscar conta por número", colors.reset);
            keyPress()
            break;
            case 4:
                console.log(colors.fg.whitestrong,
                    "\n\nAtualizar dados da conta", colors.reset);
            keyPress()
            break;
            case 5:
                console.log(colors.fg.whitestrong,
                    "\n\nApagar uma conta", colors.reset);
            keyPress()
            break;
            case 6:
                console.log(colors.fg.whitestrong,
                    "\n\nSaque", colors.reset);
            keyPress()
            break;
            case 7:
                console.log(colors.fg.whitestrong,
                    "\n\nDepósito", colors.reset);
            keyPress()
            break;
            case 8:
                console.log(colors.fg.whitestrong,
                    "\n\nTransferência entre contas", colors.reset);
            keyPress()
            break;
            default: 
                console.log(colors.fg.whitestrong,
                    "\nOpção inválida", colors.reset)
            keyPress()
            break;
        }

        function keyPress(): void {
            console.log(colors.reset,"");
            console.log("\nPressione ENTER para continuar...");
            readlinesync.prompt();
        }
    }
}

export function sobre() : void {
        console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: ");
    console.log("Generation Brasil - generation@generation.org");
    console.log("github.com/conteudoGeneration");
    console.log("*****************************************************");
}

main();

