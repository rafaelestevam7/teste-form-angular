Teste de Frontend Natue
========

Olá, 
nesse teste tentamos simular o que você irá encontrar no dia a dia de trabalho 
como Frontend na Univalle.

### A sua tarefa

Após clonar este repositório, você encontrará um arquivo JSON como a seguir:
```JSON
{
    "credential": {
        "user": "exemplo@exemplo.com",
        "password": "123quatro5678",
        "error_message": "Email ou senha está errado"
    },
    "key": "d6f67bc92bbaf06ec44b828d0da4eda9"
}
```

A sua tarefa é criar uma aplicação responsiva usando AngularJS que  valide 
o login usando as credenciais acima e passe o _hash_ contido em 'key' entre 
_Controllers_, para ser mostrado na última tela, usando _Service_ ou _Factory_.

### As regras

Esses itens são obrigatórios. Não respeitá-los inválida automaticamente a 
sua submissão. Siga a sequência das telas.

- A aplicação deve ser Responsiva, sem usar Frameworks como Bootstrap ou 
Foundation
- Você deve passar os dados entre os _Controllers_ com um _Service_ ou 
_Factory_
- Você deve usar algum lint para o CSS e JS
- Seu Task Runner deve ter uma tarefa de Reloading do Browser se algum arquivo 
for modificado
- Use um Task Runner (Grunt, Gulp, NPM scripts, etc)
- Use um Gerenciador de Pacotes (Bower, NPM, etc)
- Você deve tratar os erros

### Esperamos que você:

Encare esses itens como "Boas Práticas".

- Um README, em inglês, explicando as dependências, comandos que devem ser 
rodados e as tarefas do seu Task Runner
- Use SCSS para o CSS
- Dê suporte aos 2 últimos Browsers
- Organize e otimize seu código e imagens
- Autoprefixr, source maps para CSS e JS, .gitignore e .editorconfig
- Valide os formulários com componentes nativos do AngularJS, sem usar outras
bibliotecas

### Ganhando pontos extras

_Fat L00ts_

- Uma de suas Tasks ser para cache busting
- ES6
- Nos surpreenda (de forma positiva) !


Após finalizar o teste, subir em um repositório git e dar acesso ao usuário "renancarvalhoo".

Boa sorte. ;)
