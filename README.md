# Pokédex TypeScript Lite

## Sobre o projeto
O Pokédex TypeScript Lite é um sistema via terminal para buscar e salvar Pokémon. O projeto utiliza recursos avançados do TypeScript, como Generics, Herança e Union Types, para manter o código organizado, robusto e eficiente na gestão do catálogo local.

## Objetivo

O objetivo deste projeto é colocar a mão na massa e aplicar na prática tudo o que aprendemos sobre desenvolvimento back-end, consolidando as competências essenciais para criar aplicações sólidas. As práticas incluem:

- Node.js;
- JavaScript no back-end;
- TypeScript;
- Interfaces;
- Funções tipadas;
- Arrays;
- Objetos;
- JSON;
- Métodos de array;
- Classes;
- Async/await;
- Fetch;
- Tratamento de erros;
- Uso de Generics;
- Uso de Herança;
- Uso de Union Types;
- GitHub;
- GitFlow;
- Kanban.

## Tecnologias utilizadas   
Node.js | TypeScript | TSX | PokeAPI | Git/GitHub

## Pré-requisitos

Para o correto funcionamento e execução deste projeto, é necessário atender aos seguintes requisitos:

- Ter o Node.js instalado (versão LTS recomendada);

- Ter o npm (Node Package Manager) ou yarn configurado;

- Possuir uma conta no GitHub para versionamento;

- Ter o Git instalado e configurado na máquina para o uso do fluxo de trabalho (GitFlow).

## Como instalar

1. Clone o repositório:
   git clone https://github.com/aluizafullstack/pokedex-typescript-lite.git

2. Acesse a pasta do projeto:
   cd pokedex-typescript-lite

3. Instale as dependências:
   npm install

4. Inicie o servidor em modo de desenvolvimento:
   npm run dev

## Estrutura do Projeto

```text
pokedex-typescript-lite/
├── src/
│   ├── controllers/
│   │   └── TerminalController.ts    # Orquestra a interação com o terminal e o menu.
│   ├── models/
│   │   └── Pokemon.ts               # Define as interfaces e modelos de dados do Pokémon.
│   ├── services/
│   │   ├── BaseService.ts           # Classe base abstrata para padronização de serviços.
│   │   ├── CatalogoPokemon.ts       # Gerencia o catálogo local (adicionar, listar, remover).
│   │   └── PokeApiService.ts        # Responsável pela comunicação com a PokeAPI.
│   ├── utils/
│   │   └── textFormatters.ts        # Funções utilitárias para formatação de strings.
│   └── main.ts                      # Ponto de entrada: executa a demonstração e o menu.
├── .gitignore                       # Arquivos ignorados pelo Git.
├── package.json                     # Dependências e scripts do projeto.
├── package-lock.json                # Travamento das versões das dependências.
├── tsconfig.json                    # Configurações do compilador TypeScript.
└── README.md                        # Documentação do projeto.
```

## Funcionalidades

1. **Buscar Pokémon por nome ou ID**: Integração assíncrona com a PokeAPI utilizando `fetch` para consulta dinâmica.
2. **Tratar erro de Pokémon inexistente**: Implementação de `try/catch` para capturar falhas e evitar interrupção do sistema.
3. **Arquitetura com Herança**: Implementação de `BaseService` para padronização de serviços e reuso de comportamentos.
4. **Tipagem com Generics**: Uso de `Generics` na classe `CatalogoPokemon<T>` para garantir flexibilidade e segurança na manipulação de tipos.
5. **Uso de Union Types**: Aplicação de `Union Types` para assegurar a consistência dos dados que podem variar em formato.
6. **Demonstração automática**: O `main.ts` gerencia a execução do projeto, disparando automaticamente a demonstração de funcionalidades e, na sequência, habilitando o menu interativo para o usuário.
7. **Menu iterativo**: Estrutura lógica preparada para interações via terminal através do `TerminalController`.
8. **Transformar resposta da API em objeto simplificado**: Mapeamento dos dados brutos recebidos para o formato `PokemonResumo`.
9. **Adicionar Pokémon ao catálogo local**: Inclusão de novos Pokémon na estrutura de memória da aplicação.
10. **Impedir Pokémon duplicado**: Validação de integridade para evitar registros repetidos pelo ID.
11. **Listar catálogo**: Exibição dos itens armazenados no catálogo local.
12. **Remover Pokémon por ID**: Funcionalidade para exclusão de itens do catálogo.
13. **Exibir mensagens no terminal**: Interface que fornece feedback claro (como `[OK]`, `[AVISO]`, `[ERRO]`) ao usuário.
14. **Exemplos de execução**: Registro prático do fluxo da aplicação.
15. **Busca válida**: Demonstração de sucesso na consulta de um Pokémon.

## Exemplos de execução

### Busca por nome válido
![Busca por nome](./assets/teste%20-%20nome.png)

### Busca por ID válido
![Busca por ID](./assets/teste%20-%20ID.png)

### Busca inválida
![Busca inválida](./assets/teste%20-%20invalido.png)

### Duplicidade bloqueada

![Catálogo](./assets/teste%20-%20catalogo.png)

![Duplicidade](./assets/teste%20-%20duplo.png)

### Catálogo listado
![Catálogo](./assets/teste%20-%20catalogo.png)

### Remoção por ID
![Remoção](./assets/teste%20-%20removendo.png)

### ID inexistente
![ID inexistente](./assets/teste%20-%20ID%20enexistente.png)

## Branches utilizadas

- `main` — versão final
- `develop` — integração
- `feat/pokedex` — código
- `docs/readme` — documentação

## Link do Trello

https://trello.com/invite/b/6a1c56646e2448e9aca247d8/ATTI3d3ba0529aff693d076d9b96a90b6ab9C5B9AB58/pokedex-typescript-lite

## Melhorias Futuras

1. **Menu Interativo Avançado**: Substituir a entrada de comandos simples por uma interface de menu mais intuitiva com bibliotecas como `Inquirer.js`.
2. **Persistência em Arquivo**: Implementar a escrita e leitura no arquivo `pc_box.json` para que os Pokémon salvos persistam mesmo após o encerramento do programa.
3. **Dados Detalhados**: Incluir a exibição de atributos como HP, Attack e Defense, mapeando dados adicionais da PokeAPI.
4. **Filtros de Busca**: Adicionar funcionalidades de filtragem do catálogo por tipo de Pokémon (ex: listar apenas pokémon de fogo).