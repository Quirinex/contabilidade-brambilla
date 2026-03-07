# Brambilla Contabilidade & Consultoria

Landing page moderna e responsiva desenvolvida para um escritório de contabilidade e consultoria. O projeto foi construído com as melhores práticas de desenvolvimento web, focando em performance, acessibilidade e design elegante.

## 🚀 Tecnologias Utilizadas

- **[React 19](https://react.dev/)**: Biblioteca JavaScript para construção de interfaces de usuário.
- **[Vite](https://vitejs.dev/)**: Ferramenta de build super rápida para projetos web modernos.
- **[Tailwind CSS v4](https://tailwindcss.com/)**: Framework CSS utilitário para estilização rápida e responsiva.
- **[TypeScript](https://www.typescriptlang.org/)**: Superset tipado do JavaScript para maior segurança no código.
- **[Lucide React](https://lucide.dev/)**: Conjunto de ícones bonitos e consistentes.
- **[Motion](https://motion.dev/)**: Biblioteca de animações para React.

## 📂 Estrutura do Projeto

A estrutura do projeto segue o padrão recomendado para aplicações React com Vite:

```text
├── .github/
│   └── workflows/
│       └── deploy.yml      # Configuração de deploy automático (GitHub Actions)
├── src/
│   ├── components/         # Componentes reutilizáveis da interface
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── Industries.tsx
│   │   ├── HowWeWork.tsx
│   │   ├── Team.tsx
│   │   ├── FAQ.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Blog.tsx
│   │   ├── CTA.tsx
│   │   └── Footer.tsx
│   ├── App.tsx             # Componente principal que une todas as seções
│   ├── index.css           # Estilos globais e configurações do Tailwind
│   └── main.tsx            # Ponto de entrada da aplicação React
├── .gitignore              # Arquivos e pastas ignorados pelo Git
├── index.html              # Template HTML principal
├── package.json            # Dependências e scripts do projeto
├── tsconfig.json           # Configurações do TypeScript
└── vite.config.ts          # Configurações do Vite
```

## 🛠️ Como Executar Localmente

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/contabilidade-brambilla.git
   cd contabilidade-brambilla
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

4. Acesse `http://localhost:3000` no seu navegador.

## 🌐 Deploy no GitHub Pages

Este repositório já está configurado com um fluxo do **GitHub Actions** para publicar o site automaticamente no GitHub Pages.

### Passo a Passo para Ativar o Deploy:

1. Suba este código para um repositório no seu GitHub.
2. Vá até a aba **Settings** (Configurações) do seu repositório no GitHub.
3. No menu lateral esquerdo, clique em **Pages**.
4. Na seção **Build and deployment**, em **Source**, selecione **GitHub Actions**.
5. O GitHub Actions fará o build e a publicação automaticamente toda vez que você fizer um `push` na branch `main`.

> **Nota:** O arquivo `vite.config.ts` está configurado com `base: './'` para garantir que os caminhos dos arquivos (CSS, JS, Imagens) funcionem corretamente independentemente do nome do repositório.

## 📄 Licença

Este projeto está sob a licença MIT. Sinta-se à vontade para usá-lo e modificá-lo.
