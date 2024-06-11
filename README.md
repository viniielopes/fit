TESTE SE FIT
---

Neste teste foi proposto criar uma aplicação de cadastro e consulta de livros, com front-end e back-end seguindo este prototipo no [Figma](https://www.figma.com/design/5vCRuFgi19dSYUOmpIYQCt/FIT-SE-Test---Web-full-stack?node-id=0-1&t=F4VWfC4TSeX2wVBf-0).

[Projeto](https://fit-fawn.vercel.app/) - Front-end hospedado na Vercel.

[API](https://fit-qkzp.onrender.com/api/books/?page=1&size=20) - Back-end hospedado no Render.

# Front-End

---

Bibliotecas e tecnologias que utilizei no projeto **Front-End**.

- Vite
- React Router DOM
- TanStack Query (React Query)
- React-hook-form
- Zustand
- TailwindCSS
- Vitest/React Testing library

Para rodar local é apenas necessario clonar o repositorio e seguir os seguintes passos:

Entrar na pasta do front-end

```jsx
cd frontend
```

Instalar as dependências

```jsx
npm install
yarn install
```

Rodar o ambiente de dev do projeto:

```jsx
npm run dev
yarn dev
```

Rodar os testes do front-end:

```jsx
npm run test
yarn test
```

# Back-End

Bibliotecas e tecnologias que utilizei no projeto **Front-End**.

- Express
- Multer
- Zod
- Supabase
   
Para rodar local é apenas necessario clonar o repositorio e seguir os seguintes passos:

Entrar na pasta do backend

```jsx
cd backend
```

Rodar o projeto via docker-compose

```jsx
docker-compose up -d
```

ou rodar em dev mode

```jsx
yarn dev
```
