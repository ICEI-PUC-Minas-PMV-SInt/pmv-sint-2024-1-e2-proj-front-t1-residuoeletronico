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
  - **Páginas Web** - o software contará com 15 páginas, que serão construídas através das tecnologias HTML, CSS, JavaScript e ReactJS.
   - **Local Storage** - armazenamento mantido no Navegador, onde são implementados bancos de dados baseados em JSON. São eles: 
     - **Cadastro** - dados informados na hora do cadastro; 
     - **Login** - dados cadastrados utilizados na hora do Login.
 - **Hospedagem** - local na Internet onde as páginas são mantidas e acessadas pelo navegador, no caso, será utilizado o Vercel. 

O diagrama ilustra o relacionamento entre os componentes: as páginas web, estruturadas através das tecnologias anteriormente citadas, dependem da Internet e são acessadas no Navegador, que possui a funcionalidade de LocalStorage, utilizada no cadastro e no login. O software, por sua vez, será hospedado através do Vercel.

A imagem a seguir ilustra a o fluxo do usuário em nossa solução. Assim
que o usuário entra no website, ele pode navegar pelas notícias disponibilizadas no site e pode também visualizar os dados sobre coleta de descartes eletrônicos disponibilizados na página inicial. Também é possível, através de qualquer página do site, acessar o "Fale Conosco", um espaço destinado a tirar dúvidas frequentes e que possibilita o envio de um email para o contato com os responsáveis pelo projeto "ReciclaMais". Na página "Fale Conosco" também é apresentada uma breve descrição sobre o projeto ReciclaMais.

Para acessar as demais funcionalidades do site, como o agendamento de coleta e a visualização de perfil, é necessário possuir um conta e estar logado no site, portanto, ao tentar acessar a área de perfil ou de agendamento, o usuário é encaminhado para a área de login. Se o usuário não possuir uma conta, ele é encaminhado para a área de cadastro, mas se eles possuir uma conta e efetuar o login ele é direcionado para a área de perfil. Após logado, é possível fazer um agendamento para coleta de descartes eletrônicos e, também, é possível acessar o perfil do usuário, onde estão dispostos os dados do usuário, as informações dos agendamentos e a quantidade de pontos acumulados de agendamentos passados. Através do perfil, é possível alterar os dados do usuário, cancelar um agendamento e acessar a área de troca de pontos, onde pode-se trocar os pontos acumulados por créditos em lojas parceiras.

<img width="2512" alt="Userflow" src="https://github.com/ICEI-PUC-Minas-PMV-SInt/pmv-sint-2024-1-e2-proj-front-t1-residuoeletronico/assets/131212075/604b6d10-5c49-433e-a159-5a0b06ba1905">



## Tecnologias Utilizadas

As tecnologias utilizadas como parte da solução serão as seguintes: 
- HTML
- CSS
- JavaScript
- ReactJS
- LocalStorage

<img width="2112" alt="Interacaotecnologias" src="https://github.com/ICEI-PUC-Minas-PMV-SInt/pmv-sint-2024-1-e2-proj-front-t1-residuoeletronico/assets/131212075/58123f78-7deb-400d-b454-e4212cd94351">



O site é aberto no navegador, o navegador interpreta e renderiza o HTML, criando a estrutura da página. O CSS é aplicado ao HTML, definindo o estilo e a aparência da página. O JavaScript é executado no navegador, fornecendo interatividade e dinamismo à página. Já o ReactJS é uma biblioteca JavaScript utilizada para construir interfaces de usuário componentizadas, gerenciamento de estado e outras funcionalidades avançadas. Essas tecnologias trabalham juntas para criar uma experiência de usuário interativa e responsiva no frontend do site. O LocalStorage, por sua vez, é uma API do navegador que permite armazenar dados localmente no dispositivo do usuário, sem a necessidade de um servidor backend. É útil para armazenar informações temporárias ou preferências do usuário, como configurações ou tokens de autenticação.

A interação do usuário com o sistema funciona da seguinte maneira: 

1. O usuário interage com a interface do usuário no navegador.
2. Os eventos são capturados pelo HTML e JavaScript.
3. O JavaScript manipula o DOM, executa lógica e pode realizar ações de armazenamento e recuperação de dados usando o LocalStorage.
4. O ReactJS gerencia componentes e estado da aplicação.
5. Dados são armazenados e manipulados localmente no navegador usando o LocalStorage.
6. A interface do usuário é atualizada conforme necessário para refletir os dados armazenados no LocalStorage.
7. O usuário visualiza e interage com a interface atualizada.


## Hospedagem

O site será hospedado no Vercel, uma plataforma de hospedagem e implantação de aplicativos que se integra diretamente com plataformas de versão baseadas em Git, que permite a implantação de  sites estáticos, aplicativos da web estáticos e dinâmicos, API e funções sem servidor de forma rápida e fácil.
