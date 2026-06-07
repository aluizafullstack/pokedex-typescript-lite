import { PokemonResumo, PokemonApiResponse } from "../models/Pokemon";

export async function buscarPokemon(nomeOuId: string | number): Promise<PokemonResumo | null> {
    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${nomeOuId}`;
        const resposta = await fetch(url);

        if (!resposta.ok) {
            console.log(`[ERRO] Pokémon não encontrado: ${nomeOuId}`);
            return null;
        }

        const dados: PokemonApiResponse = await resposta.json();

        // Retorno da API em um objeto simples
        return {
            id: dados.id,
            nome: dados.name,
            tipos: dados.types.map((item) => item.type.name), // Transforma o array complexo em um array simples de strins
            altura: dados.height,
            peso: dados.weight
        };
    } catch (erro) {
        console.log(`[ERRO] Não foi possível buscar o Pokémon: ${erro}`);
        return null;
    }
}