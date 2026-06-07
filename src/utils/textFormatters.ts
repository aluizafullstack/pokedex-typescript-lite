export const formatarNome = (nome: string): string => {
    return nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase();
};

export const formatarTipos = (tipos: string[]): string => {
    return tipos.map(t => t.toUpperCase()).join(', ');
}