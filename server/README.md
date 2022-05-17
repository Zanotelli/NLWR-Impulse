# Manual de inicialização e utilização

## Inicialização

Para começar a rodar o programa, rodar:

### `npm run dev`

## Prisma

Para a inicialização da biblioteca, usamos `npx prisma init`
e criamos as pastas padrões de configuração do hambiente.

O arquivo `.env` guarda variáveis de hambiente, e deve ser modificado
dependendo do hambiente (dev ou produção) esteja sendo usado.

Em `schema.prisma` configuramos a base do BD. As configurações para usar SQLite,
por exemplo, podem ser achadas facilmente na internet.

Após criadas/atualizadas as tabelas em código, deve-se
rodar `npx prisma migrate {hambiente}`, sendo `dev`o
hambiente de desenvolvimento e `deply`o de 
produção. Ao rodar isso, as modificações serão
feitas no BD e será criada a pasta de "Migrations", com
a intrução para a criação de todas as tabelas.

Para a visualização das tabelas de forma dinâmica no 
navegador, utilizar `npx prisma studio`.


## Jest

Ferramenta utilizada para rodar testes. Intalar usando `nom install jast -D` para ser uma dependância
de desenvolvimento.

Inicializar utilizando `npx jest --init`. Para a configutação, será necessário 
responder algumas perguntas (selecionar tudo padrão). Uma pasta de configurações `jest.config.ts`
será criada. 

Adicionar tipagens do Jest com `npm i @types/jest -D`.

Adicionalmente, rodar `npm install ts-node -D`
para usar o Jest com Node, e `npm i -D jest @swc/jest`para adicionar o compilador chamado SWC, para
que o Jest entenda TypeScript.
É importante pegar as configurações para o Jest na página do SWC em https://swc.rs/docs/usage/jest.

### Rodando testes

Os testes são rodados com `npm run test`.

Dentro da pasta `coverage` criada pelo Jest, podemos achar o arquivo `lcov-report/index.html`.
Ao abrir no navegador, teremos um feedback dos nossos testes. A barrinha colorida dirá 
se nós "testamos nosso arquivo o suficiente", e nos mostra quais linhas não foram testadas
ainda.

## CORS

Instalado com `nom i cors` e sua tipagem com `npm i @types/cors -D`. Adiciona uma camada
de segurança para nosso BackEnd, impedindo que Fronts inadequados acessem nosso serviço.