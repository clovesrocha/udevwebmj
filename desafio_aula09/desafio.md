# Desafio: Construindo um Aplicativo de Tarefas com Integração de API
# Objetivo:
- Desenvolver um aplicativo de gerenciamento de tarefas colaborativo (To-do list) que permita a criação, atualização e exclusão de tarefas.
- O aplicativo deverá consumir uma API externa para salvar os dados de tarefas, e as equipes deverão usar o Git para colaborar e compartilhar o código. Além disso, o projeto deve ser configurado usando um gerenciador de pacotes (npm).

# Requisitos:
Front-end:

Use JavaScript para criar um front-end interativo que permita:
Exibir uma lista de tarefas;
Adicionar novas tarefas;
Atualizar o status das tarefas (concluída ou pendente);
Excluir tarefas.

# API:

Crie uma API simples usando Node.js e Express que será responsável por armazenar e gerenciar as tarefas no back-end. A API deve ter os seguintes endpoints:
GET /tasks: Retorna todas as tarefas;
POST /tasks: Adiciona uma nova tarefa;
PUT /tasks/:id: Atualiza uma tarefa existente;
DELETE /tasks/:id: Remove uma tarefa.

# Git:

Trabalhem em equipe utilizando o Git. Cada membro deve criar sua própria branch para trabalhar em funcionalidades específicas e, depois, fazer merge com a branch principal.
Pratiquem o uso de git pull, git merge, e git push para integrar o código de forma colaborativa.
Utilizem Pull Requests (PRs) no GitHub para revisar o código.
Gerenciador de Pacotes:

Usem npm para gerenciar as dependências do projeto.
Instalem pacotes como express e nodemon (para reiniciar o servidor automaticamente) no back-end.
No front-end, usem o npm para instalar bibliotecas úteis, como axios para requisições HTTP.
Criem scripts no package.json para facilitar a execução do projeto, como npm run start para iniciar o servidor.

# Instruções:
Divisão de Tarefas:

- Cada equipe deve dividir responsabilidades, por exemplo:
- Membro 1: Criação do front-end com HTML, CSS e JavaScript;
- Membro 2: Desenvolvimento da API usando Node.js e Express;
- Membro 3: Integração da API com o front-end usando JavaScript (fetch ou axios);
- Membro 4: Gestão do projeto no Git (branching, PRs, revisão de código).
- Implementação do Front-end:

Crie uma interface de usuário simples em HTML e CSS para exibir e gerenciar a lista de tarefas.
Use JavaScript para fazer requisições à API, exibir as tarefas e permitir que os usuários interajam com elas.
Desenvolvimento da API:

Desenvolvam a API com Node.js e Express.
Simulem o banco de dados usando um array de objetos para armazenar as tarefas ou usem um banco de dados local como SQLite.
Colaboração com Git:

O grupo deve utilizar um repositório Git centralizado no GitHub ou GitLab.
Criem branches diferentes para cada funcionalidade e façam merge usando Pull Requests.

# Critérios de Avaliação:
Funcionamento do Aplicativo: O aplicativo deve permitir adicionar, atualizar e excluir tarefas.
Colaboração com Git: O uso correto de Git para colaboração será avaliado (branches, commits descritivos, pull requests).
Integração com API: O front-end deve se comunicar corretamente com a API para realizar as operações CRUD.
Uso de Ferramentas: O uso adequado de npm para gerenciamento de pacotes e scripts será avaliado.
# Dicas:
Incentive a comunicação clara e constante entre os membros da equipe.
Divida o trabalho em pequenas partes para facilitar o progresso e a revisão.
Pratiquem o uso de git pull e git merge para evitar conflitos de código.

# Entregáveis:
Link para o repositório Git com todo o código.
Um vídeo curto (máximo 5 minutos) onde a equipe demonstra o funcionamento do aplicativo e explica como dividiram as tarefas.
Esse desafio envolve habilidades essenciais e promove o trabalho em equipe, colaboração e resolução de problemas no mundo real do desenvolvimento de software.
