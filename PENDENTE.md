# Onde a reestruturação parou — 04/09/2026

Interrompida no meio, de propósito e a pedido. **Nada do que está no ar quebrou:** a raiz
continua servindo a página da Elak como sempre serviu.

## O combinado

Um repositório só, uma página por projeto, cada uma no seu caminho:

| Caminho | Projeto | Estado |
|---|---|---|
| `/` | índice dos três | ⬜ **falta** — hoje ainda é a página da Elak antiga |
| `/elak/` | Elak — PDV para pequeno varejo | ✅ pronta |
| `/gestor/` | Gestor de Vendas — usinagem | ✅ pronta |
| `/mise/` | mise — pedidos online para restaurantes | ⬜ **falta** — a pasta está vazia |

## O que já foi feito

- **`estilo.css`** — a folha que era `<style>` embutido na página da Elak, agora compartilhada.
  Os tokens de cor foram renomeados de `--green`/`--dot`/`--wash` para
  `--marca`/`--acento`/`--lavado`, porque nome de token não pode dizer "verde" quando o mise é
  vermelho. Cada página redefine os quatro tokens no próprio `<style>`.
- **`quadro.js`** — o script que era embutido. Marcar tarefa, contar e destacar a navegação.
  A chave do `localStorage` passou a incluir o caminho da página: sem isso os três quadros
  dividiriam o mesmo estado, e marcar tarefa da Elak marcaria a do Gestor.
  O prazo saiu do código e virou `data-prazo` no HTML — página sem prazo simplesmente não mostra.
- **`elak/index.html`** — a mesma página, agora consumindo os dois arquivos acima, com link de
  volta para o índice. **Não foi conferida no navegador depois da cirurgia.**
- **`gestor/index.html`** — nova, escrita a partir do `ROADMAP.md` do projeto.

## O que falta

1. **`mise/index.html`.** O material já está levantado: `docs/REQUISITOS.md` do projeto tem o
   roadmap por fase, o estado da F2 e da F3, as dívidas conhecidas e a seção 10 "Em aberto" —
   cujo **primeiro item é "Nome e domínio"**.
2. **`index.html` da raiz**, o índice dos três. Hoje a raiz ainda é a página antiga da Elak,
   com o CSS e o script embutidos. Ela funciona; só está duplicada com `/elak/`.
3. **Conferir as duas páginas prontas no navegador.** A da Elak passou por extração de `<style>`
   e `<script>`, e isso não foi visto rodando.

## Decisões já tomadas nesta rodada

- **Átila** cuida de nome e identidade visual, **nos dois** projetos novos — Gestor de Vendas e
  mise. Os dois precisam de nome comercial: "Gestor de Vendas" descreve mas não nomeia, e o
  `mise` é codinome declarado no próprio `CLAUDE.md` do projeto.
- Um repositório só, com um caminho por projeto.
- A cor das páginas do Gestor e do mise é **provisória**, e está marcada como tal em cada uma.
  Ela troca quando a identidade fechar.
