# Inglês 28 Dias — como publicar (grátis) e instalar no iPhone

O app é um site estático (só HTML/CSS/JS). Funciona offline depois do primeiro acesso
e salva o progresso no próprio iPhone.

## Opção A — GitHub Pages (recomendado, grátis e permanente)

1. Abra o **GitHub Desktop** → `File › Add local repository…` → escolha `D:\Obsi\ingles-28-dias`.
   Ele vai perguntar se quer criar um repositório: clique **create a repository** → **Create repository**.
2. Clique **Publish repository**. **Desmarque** "Keep this code private" (o Pages grátis exige repositório público).
3. No navegador, abra o repositório no github.com → **Settings › Pages**.
   Em *Source* escolha **Deploy from a branch**, branch **main**, pasta **/ (root)** → **Save**.
4. Em 1–2 minutos o site fica em: `https://SEU-USUARIO.github.io/ingles-28-dias/`

**Atualizar depois:** edite os arquivos, aumente a versão em `sw.js` (`ingles28-v1` → `v2`),
faça *Commit* + *Push* no GitHub Desktop.

## Opção B — Netlify Drop (arrastar e soltar)

1. Acesse https://app.netlify.com/drop e entre com uma conta grátis.
2. Arraste a pasta `ingles-28-dias` inteira para a página.
3. Pronto: ele gera um endereço `https://algum-nome.netlify.app` (dá para renomear em *Site settings*).

## Instalar no iPhone

1. Abra o endereço no **Safari** (tem que ser o Safari).
2. Toque em **Compartilhar** (quadrado com a seta ↑).
3. **Adicionar à Tela de Início** → **Adicionar**.
4. O ícone "Inglês 28" abre como app, em tela cheia e até sem internet.

**Voz melhor no iPhone:** Ajustes › Acessibilidade › Conteúdo Falado › Vozes › Inglês →
baixe "Ava (Aprimorada)" ou "Samantha". Depois escolha na aba **Mais** do app.

**Backup:** aba **Mais › Copiar código** — guarde no Notes. Serve para restaurar ou passar para outro aparelho.

## Testar no PC

```
python -m http.server 8828 --directory D:\Obsi\ingles-28-dias
```
e abra http://localhost:8828

## Estrutura

- `index.html`, `css/style.css`, `js/app.js` — o app
- `js/content-w1.js` … `content-w4.js` — as 28 lições (uma semana por arquivo)
- `sw.js` — cache offline · `manifest.webmanifest` + `icons/` — ícone e modo app
