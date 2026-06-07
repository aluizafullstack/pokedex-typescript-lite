import * as readline from 'readline';
import { CatalogoPokemon } from '../services/CatalogoPokemon.js';
import { buscarPokemon } from '../services/PokeApiService.js';
import { PokemonResumo } from '../models/Pokemon.js';

export class TerminalController {
    private rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    
    // Estado temporário para armazenar o último pokémon buscado antes de adicionar
    private ultimoPokemonBuscado: PokemonResumo | null = null;

    constructor(private catalogo: CatalogoPokemon<PokemonResumo>) {}

    private perguntar(texto: string): Promise<string> {
        return new Promise((resolve) => this.rl.question(texto, resolve));
    }

    // ================================================ Demonstração automática ================================================
    public async demonstracaoAutomatica(): Promise<void> {
        console.log("\n=== INICIANDO DEMONSTRAÇÃO DO SISTEMA ===");

        console.log("\n[INFO] Listando catálogo:");
        this.catalogo.listar();

        // 1. Busca válida
        console.log("\n[INFO] Buscando e adicionando Pikachu...");
        const p1 = await buscarPokemon("pikachu");
        if (p1) {
            console.log(`[OK] Pokémon encontrado: ${p1.nome}`);
            console.log(`#${p1.id} - ${p1.nome} | Tipos: ${p1.tipos.join(", ")} | Altura: ${p1.altura} | Peso: ${p1.peso}`);
            this.catalogo.adicionar(p1);
        }

        // 2. Busca inválida
        console.log("\n[INFO] Buscando Pokémon inexistente (exemplo de erro):");
        await buscarPokemon("pokemon-invalido");

        // 3. Teste de duplicidade
        console.log("\n[INFO] Tentando adicionar Pikachu novamente:");
        if (p1) this.catalogo.adicionar(p1);
        console.log(" ");

        // 4. Adicionando mais Pokémon para a lista
        console.log("\n[INFO] Adicionando mais Pokémon para a lista:")
        const p2 = await buscarPokemon("charmander");
        if (p2) this.catalogo.adicionar(p2);

        const p3 = await buscarPokemon("bulbasaur");
        if (p3) this.catalogo.adicionar(p3);

        // 5. Listagem do catálogo
        console.log("\n[INFO] Catálogo atual:");
        this.catalogo.listar();

        // 6. Remoção
        console.log("\n[INFO] Removendo Pikachu (ID 25):");
        this.catalogo.remover(25);

        // 7. Listagem do catálogo
        console.log("\n[INFO] Listagem final:");
        this.catalogo.listar();

        console.log("\n=== FIM DA DEMONSTRAÇÃO ===");
    }

    //================================================ Menu iterativo ================================================
    public async iniciarMenu(): Promise<void> {
        let continuar = true;
        while (continuar) {
            console.log("\n=================== MENU POKÉDEX ===================");
            console.log("1. Buscar Pokémon na API");
            console.log("2. Adicionar Pokémon buscado ao Catálogo");
            console.log("3. Listar Catálogo");
            console.log("4. Remover Pokémon do Catálogo");
            console.log("0. Sair");
            console.log("====================================================");

            const opcao = await this.perguntar("Escolha uma opção: ");

            switch (opcao.trim()) {
                case "1":
                    const nome = await this.perguntar("\nDigite o nome ou ID do Pokémon: ");
                    this.ultimoPokemonBuscado = await buscarPokemon(nome);
                    
                    if (this.ultimoPokemonBuscado) {
                        console.log(`[OK] Pokémon encontrado: ${this.ultimoPokemonBuscado.nome}`);
                        console.log(`#${this.ultimoPokemonBuscado.id} - ${this.ultimoPokemonBuscado.nome} | Tipos: ${this.ultimoPokemonBuscado.tipos.join(", ")} | Altura: ${this.ultimoPokemonBuscado.altura} | Peso: ${this.ultimoPokemonBuscado.peso}`);
                    }
                    break;

                case "2":
                    if (this.ultimoPokemonBuscado) {
                        this.catalogo.adicionar(this.ultimoPokemonBuscado);
                        this.ultimoPokemonBuscado = null; // Limpa o buffer após adicionar
                    } else {
                        console.log("[AVISO] Nenhum Pokémon buscado ou já adicionado.");
                    }
                    break;

                case "3":
                    this.catalogo.listar();
                    break;

                case "4":
                    const idStr = await this.perguntar("\nDigite o ID do Pokémon para remover: ");
                    const id = parseInt(idStr.trim(), 10);
                    if (!isNaN(id)) {
                        this.catalogo.remover(id);
                    } else {
                        console.log("[ERRO] Por favor, insira um ID numérico válido.");
                    }
                    break;

                case "0":
                    console.log("\nObrigado por usar a Pokédex! Até mais.");
                    continuar = false;
                    this.rl.close();
                    break;

                default:
                    console.log("\n[ERRO] Opção inválida!");
            }
        }
    }
}