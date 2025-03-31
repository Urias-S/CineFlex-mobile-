# 🎬 Reserva de Assentos para Filmes

Este projeto é uma aplicação web desenvolvida em **React** utilizando **Vite**, que permite aos usuários reservarem assentos para sessões de cinema de forma prática e intuitiva.

Veja a versão demonstrativa do projeto através do **Vercel** [CineFlex demo](https://cine-flex-mobile.vercel.app/).

<img src="https://github.com/user-attachments/assets/f863fa8d-abe2-4649-ae3c-b8f329e1066a" width="200" height="434">
<img src="https://github.com/user-attachments/assets/2b3c5823-ba21-4bcb-86d7-6f46578f57fb" width="200" height="434">
<img src="https://github.com/user-attachments/assets/488a7311-06db-4cae-9d51-b6d1d92d7390" width="200" height="434">
<img src="https://github.com/user-attachments/assets/6d3b28dc-34e3-4cf2-9e93-ed7ce758df4b" width="200" height="434">





## 🚀 Tecnologias Utilizadas

- **React**
- **Vite**
- **HTML5**
- **Styled Components**
- **React Hooks**: `useState`, `useEffect`, `useNavigate`, `useLocation`
- **React Router**
- **Axios**

## 📌 Funcionalidades

1. **Página Inicial**
   - Exibe diversos filmes disponíveis, obtidos através de uma API.
   - Cada filme possui uma imagem clicável que leva à página de seleção de horários.

2. **Seleção de Sessão**
   - Após escolher um filme, são exibidos os dias e horários disponíveis (também vindos da API).

3. **Seleção de Assentos**
   - O usuário pode selecionar assentos disponíveis para a sessão escolhida.
   - A reserva é feita inserindo **Nome** e **CPF**.

4. **Resumo da Reserva**
   - Exibe um resumo da reserva feita com os detalhes do filme, data, horário e assentos escolhidos.
   - Há um botão para voltar à página inicial.

## 🛠️ Como Executar o Projeto

### 1️⃣ Clonar o Repositório

```bash
  git clone https://github.com/seu-usuario/seu-repositorio.git
```
### 2️⃣ Acessar o Diretório do Projeto

```bash
    cd nome-do-projeto
```
### 3️⃣ Instalar as Dependências

```bash
  npm install
```

### 4️⃣ Iniciar o Servidor de Desenvolvimento

```bash
npm run dev
```

## 🌎 API Utilizada
A aplicação consome dados de uma API que fornece informações sobre filmes, horários e assentos disponíveis. Certifique-se de configurar corretamente a URL da API ao utilizar o projeto.
