# Sistema de Gerenciamento de Estoque

Um sistema completo de gerenciamento de estoque desenvolvido com React e Express, focado na catalogação e organização de produtos.

## 🚀 Funcionalidades

- ✅ Autenticação de usuários (login/registro)
- ✅ Gerenciamento de categorias
- ✅ Cadastro e edição de produtos
- ✅ Pesquisa e filtragem de produtos
- ✅ Exportação de dados para CSV
- ✅ Interface responsiva e moderna

## 🛠️ Tecnologias Utilizadas

- **Frontend:**
  - React
  - TanStack Query (React Query)
  - Shadcn/UI
  - Tailwind CSS
  - TypeScript

- **Backend:**
  - Node.js com Express
  - Drizzle ORM
  - Passport.js para autenticação
  - Zod para validação

## 📦 Instalação

1. Clone o repositório:
```bash
git clone <seu-repositorio>
cd <nome-do-projeto>
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
```bash
SESSION_SECRET=sua_chave_secreta
```

4. Inicie o projeto:
```bash
npm run dev
```

## 💻 Como Usar

1. Acesse a aplicação no navegador (por padrão em `http://localhost:5000`)
2. Crie uma conta ou faça login
3. Comece criando categorias para seus produtos
4. Adicione produtos, associando-os às categorias criadas
5. Use os filtros e a busca para encontrar produtos específicos
6. Exporte seus dados quando necessário usando o botão "Exportar CSV"

## 🔜 Próximas Funcionalidades

- [ ] Integração com QR Code para produtos
- [ ] Upload de imagens
- [ ] Sistema de permissões avançado
- [ ] Integração com banco de dados PostgreSQL

## 📝 Licença

Este projeto está sob a licença MIT.
