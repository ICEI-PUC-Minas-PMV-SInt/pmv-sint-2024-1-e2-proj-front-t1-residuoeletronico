# Arquitetura da Solução

O software será estruturado visando a utilização do mesmo através do Navegador Web. As tecnologias utilizadas para a construção do software são as seguintes: 
- HTML
- CSS
- JavaScript
- ReactJS

O ambiente de hospedagem utilizado será o Vercel.


## Diagrama de componentes

Os componentes que fazem parte da solução são apresentados na imagem a seguir:

![DiagramaComponentes](https://github.com/ICEI-PUC-Minas-PMV-SInt/pmv-sint-2024-1-e2-proj-front-t1-residuoeletronico/assets/131212075/3831bcc4-8493-49ca-a1db-c0d9ef2b73ba)


A solução implementada conta com os seguintes módulos:
- **Navegador** - Interface básica do sistema.  
  - **Páginas Web** - o software contará com 16 páginas, que serão construídas através das tecnologias HTML, CSS, JavaScript e ReactJS.
   - **Local Storage** - armazenamento mantido no Navegador, onde são implementados bancos de dados baseados em JSON. São eles: 
     - **Cadastro** - dados informados na hora do cadastro; 
     - **Login** - dados cadastrados utilizados na hora do Login.
 - **Hospedagem** - local na Internet onde as páginas são mantidas e acessadas pelo navegador, no caso, será utilizado o Vercel. 

O diagrama ilustra o relacionamento entre os componentes: as páginas web, estruturadas através das tecnologias anteriormente citadas, dependem da Internet e são acessadas no Navegador, que possui a funcionalidade de LocalStorage, utilizada no cadastro e no login. O software, por sua vez, será hospedado através do Vercel.

Inclua um diagrama da solução e descreva os módulos e as tecnologias que fazem parte da solução. Discorra sobre o diagrama.

A imagem a seguir ilustra a o fluxo do usuário em nossa solução. Assim
que o usuário entra na plataforma, ele é apresentado à tela inicial
(Tela 1) onde ele é confrontado com as opões de editar seu perfil ou
então visualizar sua galeria.

Caso ele opte por seguir pelo primeiro caminho (Editar Perfil), ele é
redirecionado para a tela de edição de perfil (Tela 2), onde pode
atualizar seus dados cadastrais. Nessa tela, o usuário também pode
escolher para editar sua foto de perfil. Ao selecionar essa opção, ele é
redirecionado para a Tela 3, onde ele a imagem expandida do perfil do
usuário é mostrado. Ao selecionar a opção para atualizar a imagem, uma
nova janela abre pedindo para o usuário fazer o upload da nova foto.
Assim que o processo termina um pop-up exibe o status para o usuário
(Tela 4) e o usuário é redirecionado para a Tela 2.

Caso o usuário opte seguir pelo segundo caminho (Visualizar Galeria) ele
é redirecionado para a Tela 5 com todas as fotos que o usuário possui. O
usuário pode clicar em um post qualquer para visualizar os detalhes do
post (Tela 6). Nessa tela, ele pode então escolher editar o post, sendo
redirecionado para a Tela 7. Ao editar as informações, o usuário pode
escolher salvar ou deletar o post. Em ambos os casos o status é
notificado para o usuário (Tela 8) e em seguida ele é redirecionado
para a Tela 2.

![Exemplo de UserFlow](img/userflow.jpg)


## Tecnologias Utilizadas

Descreva aqui qual(is) tecnologias você vai usar para resolver o seu problema, ou seja, implementar a sua solução. Liste todas as tecnologias envolvidas, linguagens a serem utilizadas, serviços web, frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas.

Apresente também uma figura explicando como as tecnologias estão relacionadas ou como uma interação do usuário com o sistema vai ser conduzida, por onde ela passa até retornar uma resposta ao usuário.


## Hospedagem

Explique como a hospedagem e o lançamento da plataforma foi feita.

> **Links Úteis**:
>
> - [Website com GitHub Pages](https://pages.github.com/)
> - [Programação colaborativa com Repl.it](https://repl.it/)
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Publicando Seu Site No Heroku](http://pythonclub.com.br/publicando-seu-hello-world-no-heroku.html)
