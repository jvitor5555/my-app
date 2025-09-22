# Projeto de Login com Next.js, React e Tailwind CSS

## Descrição

Este projeto é uma **aplicação web de login** construída com **Next.js 15**, **React** e **Tailwind CSS**, projetada para demonstrar autenticação básica usando cookies e navegação condicional.  

O sistema inclui:  
- **Página de Login**: Permite que o usuário informe email e senha para acessar a aplicação.  
- **Credenciais de teste**:  
  - Usuário: `admin`  
  - Senha: `admin123`  
- **Cookies**: Ao realizar o login, um cookie é criado para armazenar a sessão do usuário.  
- **Redirecionamento**:  
  - Se o usuário estiver logado (cookie presente), ele é automaticamente redirecionado para a página Home, mesmo que tente acessar a página de login.  
  - A Home contém **Header**, **três seções** e **Footer** estilizados com Tailwind CSS.  

O projeto é um exemplo funcional de controle de acesso simples e layout responsivo.

---

## Tecnologias Utilizadas

- **Next.js 15**: Framework React moderno com App Router.  
- **React**: Biblioteca para construção de interfaces de usuário.  
- **Tailwind CSS / Twind CSS**: Framework utilitário para estilização rápida e responsiva.  
- **js-cookie**: Biblioteca para manipulação de cookies no navegador.  
- **SweetAlert2**: Biblioteca para exibir alertas bonitos ao usuário.  

---

## Funcionalidades

1. **Login com usuário e senha de teste**  
   - Ao informar `admin` / `admin123`, o usuário é autenticado.  
   - Caso a autenticação falhe, um alerta com ícone de erro é exibido.  

2. **Manutenção de sessão com Cookies**  
   - O cookie `token` é criado ao logar, garantindo que o usuário permaneça logado.  
   - O campo "Lembrar usuário" armazena o email no `localStorage` para preenchimento automático.  

3. **Redirecionamento automático**  
   - Usuários logados são enviados automaticamente para a página **Home**.  
   - Tentar acessar `/login` novamente redireciona para `/home`.  

4. **Página Home**  
   - **Header**: Contém logo e links de navegação.  
   - **Seções**: Três seções com conteúdo Lorem Ipsum para demonstrar layout.  
   - **Footer**: Contém informações da empresa e ícones de redes sociais.  