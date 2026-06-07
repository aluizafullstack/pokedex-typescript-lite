import { CatalogoPokemon } from './services/CatalogoPokemon.js';
import { TerminalController } from './controllers/TerminalController.js';
import { PokemonResumo } from './models/Pokemon.js';

// Garantindo a tipagem explícita do retorno
async function main(): Promise<void> {
    const catalogo = new CatalogoPokemon<PokemonResumo>();
    const controller = new TerminalController(catalogo);

    // Execução da demonstração completa
    await controller.demonstracaoAutomatica();
    
    // Execuçao do menu interativo
    await controller.iniciarMenu();
}

// Tratando possível rejeição da Promise
main().catch((err) => {
    console.error("[ERRO FATAL] Falha na execução da aplicação:", err);
});