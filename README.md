<h1 align="center">
  Beer Garden
</h1>
<div align="center" display="inline-block">
  <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"/>
  <img src="https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&logo=json&logoColor=white"/>
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"/>
  <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/>
  <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"/>
  <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white"/>
</div>

<h2>Principais features</h2>
<ul>
  <li>Tratando os dados que vem direto da API, removendo informação que não podem ser utilizadas, removendo dados "null"</li>
  <li>Criado filtros por primeira letra, nome do drink e categoria</li>
  <li>Criado visualizador de drink, que o usuario deseja saber mais, com as Informações: é ou não alcoólico, como preparar e ingredientes</li>
  <li>Criado lista de drinks favoritos do usuario, armazenando os dados no localStorage, podendo adicionar a lista ou remover da mesma</li>
</ul>

<h2>Oque foi feito?</h2>
<p>O primeiro passo foi abstrair a ideia ver os pontos principais que o projeto deveria se constituir. Logo em seguida parti para a criação do layout utilizando ReactJS e Styled-Components, utilizando cores que conversam e criando algo intuitivo para o cliente, apos a criação de toda a estrutura base fui consumir a API, dando logo de inicio alguns drinks para o usuario, dando o direito do usuario pesquisar e filtrar dentro do banco quais drinks ele gostaria, vi que a API retornava muitos valores quebrado, os ingredientes por exemplo era um deles, assim resolvi tratar os dados que chegava tirando os dados que não seria utilizados em determinados drinks, fazendo assim com que nenhum dado se perdece e facilitando o consumo e a abordagem de como eu iria utilizar.</p>
<p>Criando os Providers e a logica bruta separada, fazendo assim distinção e organizando o projeto, separando as interfaces e as configurações padrões dos contextos</p>
<p>Criado tambem o tratamento de rotas, não pre estabelecidas dando assim o erro 404.</p>

<h2>Iniciar a aplicação</h2>
<p>Clone o repositorio e insira o comando Yarn, ou acesse utilizando o link do deploy -> https://teste-ubi-five.vercel.app/</p>
