# 📚 Bookstore Frontend (SSO com Keycloak)

Este projeto é o frontend de uma aplicação de exemplo que utiliza **React**, **Vite**, **TailwindCSS** e **Keycloak** para autenticação e autorização com **Single Sign-On (SSO)**.

A proposta é demonstrar de forma clara como estruturar um frontend moderno e seguro, com navegação protegida por papéis (roles) definidos no Keycloak, utilizando uma interface limpa e agradável com o auxílio do TailwindCSS no estilo **shadcn/ui**.

---

## 🚀 Tecnologias Utilizadas

- ⚛️ **React 18**
- ⚡ **Vite**
- 💨 **TailwindCSS v3**
- 🔐 **Keycloak SSO (via keycloak-js)**
- 🌐 **React Router DOM**
- 🧠 **TypeScript**
- 🎨 Estilo baseado em **shadcn/ui**

---

## 🔐 Funcionalidades Principais

- ✅ Login via Keycloak com SSO
- 🔄 Logout automático e manual
- 🔒 Rotas protegidas por papéis (`admin`, `owner`, `grocery`, `maintainer`, `rookie`)
- 🎯 Validação de token via JWT (`tokenParsed`)
- 🧭 Navbar fixa com acesso rápido às áreas autorizadas
- 🎉 Páginas estilizadas com layout responsivo
- ❌ Página de acesso negado (`/unauthorized`)
- ❓ Página de erro 404 para rotas inexistentes

---

## 🧪 Pré-requisitos

- Node.js (>= 18.x)
- NPM ou Yarn
- Keycloak configurado e em execução com:
  - Realm criado
  - Cliente configurado com:
    - `Access Type`: **public**
    - `Valid Redirect URIs`: `http://localhost:5173/*`
    - `Web Origins`: `*`
  - Papéis (`roles`) definidos no realm

---

## ⚙️ Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/bookstore-frontend.git
cd bookstore-frontend
```

2. Instale as dependências:

```bash
npm install
```

3. Configure o Keycloak:

Edite o arquivo `src/auth/keycloak.ts`:

```ts
keycloak.init({
  url: 'http://localhost:8080',
  realm: 'seu-realm',
  clientId: 'seu-cliente',
});
```

---

## 🧭 Scripts Disponíveis

```bash
# Inicia o projeto localmente
npm run dev

# Compila para produção
npm run build

# Visualiza o build localmente
npm run preview
```

---

## 🗂️ Estrutura do Projeto

```
src/
├── auth/                # Configuração do Keycloak
├── components/          # Navbar, Dashboard e componentes reutilizáveis
├── layouts/             # Layout global com Navbar + Outlet
├── pages/               # Páginas por tipo de usuário
├── routes/              # Componente ProtectedRoute.tsx
├── services/            # API com Axios
├── styles/              # Tailwind
└── App.tsx              # Configuração de rotas
```

---

## 👤 Papéis Suportados

Os papéis são definidos diretamente no token JWT do Keycloak e utilizados para proteger o acesso às rotas.

| Rota         | Papel Necessário           |
|--------------|----------------------------|
| `/admin`     | `admin`                    |
| `/owner`     | `owner`                    |
| `/grocery`   | `admin`, `owner`, etc.     |
| `/maintainer`| `maintainer`               |
| `/rookie`    | `rookie`                   |

---

## 📸 Imagens

> Adicione aqui prints das páginas principais (login, dashboard, cada rota com seus papéis).