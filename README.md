# Boas-vindas ao repositório do projeto MongoDB Commerce!

 <strong>🐳 Como usar o Docker para este projeto</strong>
<br>

  - Para quem não possui o MongoDB instalado e está utilizando o docker, é necessário executar os testes localmente usando os seguintes passos:

  1. Acesse o terminal na raiz da pasta do projeto;
  2. Crie um container com um volume apontando para a pasta do projeto `docker run -d --name=nomeDoContainer -v "$PWD:/app" -p 27017:27017 mongo:5.0`;
  3. Com o container em execução, acesse o terminal do container `docker exec -it nomeDoContainer bash`;
  4. No terminal do container, acesse o diretório `/app` mapeado no volume conforme o passo 2;
  > Para restaurar o banco de dados é necessário que você esteja dentro do diretório `/app`. Para mais detalhes, veja o tópico: "♻️ Restaurando o banco de dados `commerce`".
  5. Por fim, execute o script de testes do projeto: `./scripts/evaluate.sh`.
  Se por algum motivo a execução do container for finalizada, basta iniciá-lo novamente com o comando `docker start nomeDoContainer` e seguir a partir do passo 3.

<strong>♻️ Restaurando o banco de dados `commerce`</strong>
<br>

  > ⚠️ **Aviso:** Caso esteja utilizando Docker, certifique-se que tenha seguido os passos do tópico: "🐳 Como usar o Docker para este projeto", pois eles são determinantes para que siga as orientações abaixo.

  1. Abra o terminal e conecte-se à sua instância local do **MongoDB**. Se você receber uma mensagem de erro como **_Connection refused_**, tente reiniciar sua instância [seguindo as orientações desse link](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/d2b16462-a889-47fc-aa04-92517825b186/day/da82d65f-2261-4bcb-87bb-71e6a7e565f5/lesson/8ff7e7c4-1748-4725-8f82-647f77d04830).

  2. Quando sua instância estiver no ar e você estiver conectado a ela, digite `exit`. Com isso, você voltará ao terminal para iniciar a importação dos dados.

  3. Na raiz do diretório do projeto, execute o seguinte comando para restaurar a base de dados `commerce`:

  ```sh
  DBNAME=commerce ./scripts/resetdb.sh assets/produtos
  ```

  - A execução desse script criará um banco de dados chamado `commerce` e importará os dados para a coleção `produtos`.

  ⚠️ **Importante**: tanto o script executado anteriormente quanto o script de execução local dos testes, restauram a base de dados `commerce`, portanto sempre salve seu progresso nos arquivos de desafio! Veja a orientação ➡️ 🛠 Testes ⚠️
