import { BaseService } from './BaseService.js';
import { PokemonResumo } from '../models/Pokemon.js'; 
import { formatarNome } from '../utils/textFormatters.js';

export class CatalogoPokemon<T extends PokemonResumo> extends BaseService {
    private pokemons: T[] = [];

    constructor() {
        super("BoxService");
    }

    adicionar(pokemon: T): void {
        const jaExiste = this.pokemons.some((item) => item.id === pokemon.id);
        if (jaExiste) {
            console.log(`[AVISO] ${formatarNome(pokemon.nome)} já está no catálogo.`);
            return;
        }
        this.pokemons.push(pokemon);
        this.registrarEvento(`${formatarNome(pokemon.nome)} adicionado ao catálogo.`);
    }

    listar(): void {
        if (this.pokemons.length === 0) {
            console.log("[AVISO] Catálogo vazio.");
            return;
        }
        console.log("Catálogo atual:");
        this.pokemons.forEach((p) => {
            console.log(`#${p.id} - ${p.nome} | Tipos: ${p.tipos.join(", ")} | Altura: ${p.altura} | Peso: ${p.peso}`);
        });
    }

    remover(id: number): void {
        const existe = this.pokemons.some((p) => p.id === id);
        if (!existe) {
            console.log("[AVISO] Nenhum Pokémon encontrado com esse ID.");
            return;
        }
        this.pokemons = this.pokemons.filter((p) => p.id !== id);
        this.registrarEvento(`Pokémon ID ${id} removido do catálogo.`);
    }
}