![Code7](https://img.shields.io/badge/Code7%20My--Sites-V1.1-red?style=flat&logo=github&logoColor=white)

# ABIT Projetos & Engenharia — Guia de Edição do Site

Este guia explica como editar todos os textos e imagens do site sem precisar mexer no código.

---

## Onde ficam os arquivos de conteúdo

Todos os textos ficam na pasta `content/`. Cada seção do site tem seu próprio arquivo JSON:

```
content/
  site.json        → configurações gerais (SEO, WhatsApp, Analytics)
  hero.json        → seção principal (topo da página)
  services.json    → cards de serviços
  about.json       → seção "Sobre"
  clients.json     → logos de clientes
  instagram.json   → seção Instagram
  contact.json     → informações de contato
  footer.json      → rodapé
  analytics.json   → Google Analytics e Cloudflare Insights
```

Imagens ficam em `public/images/`.

---

## Seção por seção

---

### Configurações Gerais (`content/site.json`)

| Campo | O que muda |
|---|---|
| `title` | Título da aba do navegador e Google |
| `description` | Descrição nos resultados do Google |
| `siteUrl` | URL do site (ex: `https://abitprojetos.com`) |
| `ogImage` | Imagem ao compartilhar o link no WhatsApp/redes sociais |
| `logoImage` | Caminho do logo (ex: `/logo.png`) |
| `whatsappNumber` | Número do WhatsApp (só números, com DDI: `5531992000397`) |
| `whatsappDefaultMessage` | Mensagem pré-preenchida ao clicar no botão |
| `instagramUrl` | Link do perfil do Instagram |
| `linkedinUrl` | Link do perfil do LinkedIn |

**Endereço para o Google** (aparece nos resultados de busca):
```json
"localBusiness": {
  "telephone": "+553141130506",
  "email": "contato@abitprojetos.com",
  "address": {
    "streetAddress": "Rua Teófilo Otoni, 379, Sls 1 e 2",
    "addressLocality": "Sete Lagoas",
    "addressRegion": "MG"
  }
}
```

---

### Analytics (`content/analytics.json`)

```json
{
  "gaId": "G-XXXXXXXXXX",
  "cfToken": ""
}
```

- `gaId` — ID do Google Analytics 4 (ex: `G-XXXXXXXXXX`)
- `cfToken` — Token do Cloudflare Web Analytics (opcional)

---

### Seção Hero — Topo da Página (`content/hero.json`)

```json
{
  "eyebrow": "ABIT Projetos & Engenharia",
  "headingLine1": "Soluções em",
  "headingHighlight": "Engenharia",
  "headingLine2": "de Alta Performance",
  "description": "Texto descritivo...",
  "descriptionExtra": "Subtexto complementar.",
  "stats": [
    { "num": "+10",  "label": "Anos de Experiência" },
    { "num": "+200", "label": "Projetos Entregues" },
    { "num": "100%", "label": "Comprometimento" }
  ],
  "logoImage": "/logo.png"
}
```

- `headingHighlight` é a palavra em dourado no título
- `stats` são os 3 blocos de números abaixo dos botões — edite os valores e rótulos à vontade
- `logoImage` é a imagem grande animada à direita do hero

---

### Serviços (`content/services.json`)

```json
{
  "label": "O que fazemos",
  "title": "Nossos",
  "titleHighlight": "Serviços",
  "subtitle": "Texto...",
  "items": [
    {
      "icon": "fas fa-drafting-compass",
      "name": "Nome do Serviço",
      "description": "Descrição do serviço..."
    }
  ]
}
```

Para **adicionar um serviço**, copie um bloco `{}` dentro de `items` e cole no final (antes do `]`).

Para **remover um serviço**, apague o bloco `{}` correspondente.

Para **mudar o ícone**, use qualquer ícone do [Font Awesome 6](https://fontawesome.com/icons) — copie a classe (ex: `fas fa-bolt`).

---

### Sobre (`content/about.json`)

```json
{
  "label": "Quem somos",
  "title": "Engenharia com",
  "titleHighlight": "Precisão e Compromisso",
  "description": "Texto principal...",
  "checklist": [
    "Item 1 da lista",
    "Item 2 da lista"
  ],
  "ctaLabel": "Fale Conosco",
  "teamPhoto": "/images/foto-equipe.jpg"
}
```

- `checklist` são os itens com ícone de ✓ dourado — adicione ou remova linhas à vontade
- `teamPhoto` — quando vazio (`""`), exibe um placeholder. Coloque o caminho da foto da equipe para exibi-la

---

### Clientes (`content/clients.json`)

```json
{
  "marqueeSpeed": null,
  "logos": [
    { "name": "Nome da Empresa", "image": "/images/logo-empresa.png", "url": "https://site-da-empresa.com.br" },
    { "name": "Sem logo ainda", "image": "", "url": "" }
  ]
}
```

- Quando `image` está vazio (`""`), exibe o `name` como texto placeholder
- Para **adicionar um cliente real**: coloque o arquivo PNG/SVG em `public/images/` e preencha o campo `image`
- O carrossel cresce automaticamente com a quantidade de logos
- `marqueeSpeed` controla a velocidade em segundos — deixe `null` para velocidade automática (calculada pelo número de logos). Exemplo para carrossel mais lento: `"marqueeSpeed": 60`
- `url` — site da empresa. Quando preenchido, a logo vira um link clicável que abre em nova aba. Deixe `""` para logos sem link

---

### Instagram (`content/instagram.json`)

```json
{
  "handle": "@abitprojetos",
  "url": "https://www.instagram.com/abitprojetos/",
  "posts": [
    { "image": "https://link-da-imagem.jpg", "url": "https://www.instagram.com/p/..." }
  ]
}
```

- Adicione até 12 posts no array `posts`
- `image` é a URL da imagem, `url` é o link do post
- Posts com `image` vazio são ignorados automaticamente

---

### Contato (`content/contact.json`)

```json
{
  "items": [
    {
      "icon": "fab fa-whatsapp",
      "label": "Contato",
      "values": [
        { "value": "(31) 4113-0506", "href": "tel:+553141130506" },
        { "value": "(31) 99200-0397", "href": "https://api.whatsapp.com/send?phone=5531992000397" }
      ]
    },
    {
      "icon": "fas fa-envelope",
      "label": "E-mail",
      "value": "contato@abitprojetos.com",
      "href": "mailto:contato@abitprojetos.com"
    }
  ],
  "formAction": "https://formspree.io/f/SEU_FORMSPREE_ID"
}
```

- Cada item pode ter `value` (texto único) ou `values` (lista separada por `/`)
- Para ativar o formulário: crie uma conta grátis no [Formspree](https://formspree.io) e substitua `SEU_FORMSPREE_ID` pelo ID gerado

---

### Rodapé (`content/footer.json`)

```json
{
  "description": "Texto descritivo no rodapé...",
  "logoImage": "/logo.png",
  "socials": [
    { "icon": "fab fa-instagram", "href": "https://...", "title": "Instagram" }
  ],
  "servicesColumn": { "title": "Serviços", "links": [...] },
  "quickLinksColumn": { "title": "Links Rápidos", "links": [...] }
}
```

---

## Como trocar imagens

### Logo principal
1. Salve o arquivo como `logo.png` (fundo transparente recomendado)
2. Coloque em `public/logo.png`
3. Pronto — aparece na navbar, no hero e no rodapé

### Favicon
1. Salve o arquivo como `favicon.ico`
2. Coloque em `public/favicon.ico`

### Imagem de compartilhamento (WhatsApp, redes sociais)
1. Crie uma imagem de **1200 × 630 pixels**
2. Salve como `public/images/og-image.jpg`
3. Verifique que `content/site.json > ogImage` está como `/images/og-image.jpg`

### Foto da equipe (seção Sobre)
1. Coloque a foto em `public/images/foto-equipe.jpg`
2. Em `content/about.json`, altere `teamPhoto` para `/images/foto-equipe.jpg`

### Logos de clientes
1. Coloque cada logo em `public/images/` (ex: `public/images/construtora-xyz.png`)
2. Em `content/clients.json`, preencha os campos do cliente correspondente:
   ```json
   { "name": "Construtora XYZ", "image": "/images/construtora-xyz.png", "url": "https://construtoraxyz.com.br" }
   ```
   Deixe `"url": ""` se a empresa não tiver site

---

## Rastreamento de campanhas e influencers

Ao contratar um influencer (ou rodar qualquer campanha paga), use uma URL com parâmetros UTM. O Google Analytics captura esses parâmetros automaticamente e associa cada visita e lead à origem correta.

### Como montar a URL

```
https://abitprojetos.com.br?utm_source=instagram&utm_medium=influencer&utm_campaign=NOME_DO_INFLUENCER
```

| Parâmetro | O que preencher |
|---|---|
| `utm_source` | Plataforma onde o link foi postado (`instagram`, `youtube`, `tiktok`) |
| `utm_medium` | Tipo de mídia (`influencer`, `pago`, `organico`) |
| `utm_campaign` | Nome da campanha ou do influencer (ex: `joao-silva-abril25`) |
| `utm_content` | Opcional — diferencia onde o link apareceu (`bio`, `stories`, `reels`) |

**Exemplo real:**
```
https://abitprojetos.com.br?utm_source=instagram&utm_medium=influencer&utm_campaign=joao-silva-abril25&utm_content=bio
```

Passe essa URL para o influencer publicar. Não mude o endereço base do site — só acrescente os parâmetros após `?`.

> **Bio do Instagram da própria empresa**
> O link fixo na bio também deve ter UTM para separar esses leads dos acessos diretos:
> ```
> https://abitprojetos.com.br?utm_source=instagram&utm_medium=social&utm_campaign=bio
> ```
> Coloque esse link no campo "Site" do perfil `@abitprojetos`. Assim qualquer lead vindo da bio aparece agrupado no GA4 em `instagram / social / bio`, separado de influencers e acessos orgânicos.

---

### O que é rastreado automaticamente

O site já dispara os eventos abaixo sem nenhuma configuração adicional:

| Ação do visitante | Evento GA4 | Onde ver no GA4 |
|---|---|---|
| Clica em um card de serviço | `select_item` | Relatórios → Engajamento → Eventos |
| Clica em qualquer link de contato (WhatsApp, telefone, e-mail) | `generate_lead` | Relatórios → Engajamento → Eventos |
| Clica no botão flutuante do WhatsApp | `generate_lead` (method: `whatsapp_float`) | idem |

---

### Marcar `generate_lead` como conversão no GA4

1. Acesse [analytics.google.com](https://analytics.google.com)
2. **Admin → Conversões → Nova conversão de evento**
3. Nome do evento: `generate_lead`
4. Salve

A partir daí o relatório mostra a taxa de conversão por origem.

---

### Ver resultado da campanha

**Relatórios → Aquisição → Aquisição de tráfego**

Filtre por `Campanha` e você verá, por influencer:
- Sessões
- Cliques no WhatsApp / e-mail (conversões)
- Taxa de conversão

---

## Dicas

- Sempre use aspas duplas nos valores JSON e vírgula no final de cada linha (exceto a última)
- Ao adicionar itens em uma lista, copie um bloco existente para manter o formato correto
- Após salvar, o site recarrega automaticamente em desenvolvimento (`bun dev`)
