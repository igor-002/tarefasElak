# Onde a reestruturação parou — 05/09/2026

A reestruturação **fechou**. Um repositório, um caminho por projeto, e **nenhum caminho
sabe dos outros**.

## O combinado, revisado em 05/09

| Caminho | Projeto | Estado |
|---|---|---|
| `/` | página neutra, sem índice e sem link | ✅ pronta |
| `/elak/` | Elak — PDV para pequeno varejo | ✅ pronta |
| `/gestor/` | Gestor de Vendas — usinagem | ✅ pronta |
| `/mise/` | mise — pedidos online para restaurantes | ✅ pronta |

**A decisão que mudou em 05/09:** a raiz **não lista os projetos**. A versão anterior desta
reestruturação previa um índice dos três, e ele chegou a existir por meia hora. Foi desfeito:
são projetos de pessoas diferentes, e quem trabalha num não tem por que ver o outro —
nem o estado, nem o bloqueio, nem o nome do fornecedor.

Junto com o índice saíram:

- o link `← todos os projetos` do topo das três páginas;
- o link `todos os projetos` do rodapé das três;
- o aviso *"o mesmo padrão dos outros dois projetos"*, que existia no Gestor e no mise e
  citava os outros dois pelo nome e pelo bloqueio;
- as comparações soltas no corpo do texto (o portão da Elak citado no mise, a regra de marca
  "igual à da Elak" nos dois);
- a numeração `A3`/`A4` do Átila no mise, que só fazia sentido continuando a fila do Gestor.
  Voltou a ser `A1`/`A2`: **cada quadro é independente e se explica sozinho.**

## O limite disto, escrito para não ser esquecido

**Isto é separação de conteúdo, não controle de acesso.** O repositório é público e as páginas
são estáticas no GitHub Pages: qualquer pessoa que digite `/elak/` na barra de endereço chega
lá, e qualquer pessoa lê o repositório inteiro pelo GitHub. Tirar os links reduz o encontro por
acidente — não impede o acesso de quem procurar.

Se o requisito for de verdade que uma pessoa **não consiga** ver o quadro da outra, o caminho é
**um repositório privado por projeto**, com o Pages privado ou um host com login. Fica registrado
como decisão em aberto.

## O que já existia, e continua

- **`estilo.css`** — a folha compartilhada. Além dos quatro tokens de cor (`--marca`,
  `--marca-900`, `--acento`, `--acento-forte`), agora também os **três `--topo-*`** do texto
  sobre a barra da marca. Eles entraram em 05/09 porque `nav a`, `.hsub` e `.chip` tinham verde
  fixo no código — e verde fixo deixava a navegação do mise **verde sobre vermelho**.
- **`quadro.js`** — marcar tarefa, contar e destacar a navegação. A chave do `localStorage`
  inclui o caminho da página (`elak-quadro:/mise/`), então os quadros não dividem estado.
  O prazo vem de `data-prazo` no HTML; página sem prazo não mostra contagem.

## Decisões de marca

- **Átila** cuida de nome e identidade visual nos dois projetos que não têm nome comercial —
  Gestor de Vendas e mise. Cada quadro traz o briefing do seu, completo, sem depender do outro.
- A cor das páginas do Gestor (aço) e do mise (tijolo) é **provisória**, e está marcada como tal
  em cada uma. Ela troca quando a identidade fechar.

## Conferido no navegador em 05/09

Servidor estático local, as quatro páginas abertas:

- zero erro e zero aviso no console;
- nenhuma página tem link para `../`, e nem o Gestor nem o mise citam os outros projetos;
- marcar tarefa conta certo e grava na chave do próprio caminho;
- a contagem de dias da Elak bate (6 dias até 11/09);
- os tokens `--topo-*` pegaram: a navegação do Gestor ficou azul-aço e a do mise, terrosa.
