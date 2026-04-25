import { defineComponent, ref, computed, unref, resolveComponent, withCtx, createVNode, mergeProps, resolveDynamicComponent, openBlock, createBlock, toDisplayString, toRaw, inject, reactive, provide, useSSRContext, getCurrentInstance } from 'file:///home/runner/work/_temp/my-sites-template/node_modules/vue/index.mjs';
import { u as useSeoMeta, a as useHead } from './v3-CMSRWiwF.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrRenderList, ssrInterpolate, ssrRenderStyle, ssrRenderVNode, ssrRenderTeleport } from 'file:///home/runner/work/_temp/my-sites-template/node_modules/vue/server-renderer/index.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-CO1mpgQ6.mjs';
import { u as useRuntimeConfig, _ as _export_sfc } from './server.mjs';
import '../_/renderer.mjs';
import 'file:///home/runner/work/_temp/my-sites-template/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///home/runner/work/_temp/my-sites-template/node_modules/h3/dist/index.mjs';
import 'file:///home/runner/work/_temp/my-sites-template/node_modules/ufo/dist/index.mjs';
import '../nitro/nitro.mjs';
import 'file:///home/runner/work/_temp/my-sites-template/node_modules/destr/dist/index.mjs';
import 'file:///home/runner/work/_temp/my-sites-template/node_modules/nitropack/node_modules/hookable/dist/index.mjs';
import 'file:///home/runner/work/_temp/my-sites-template/node_modules/ofetch/dist/node.mjs';
import 'file:///home/runner/work/_temp/my-sites-template/node_modules/node-mock-http/dist/index.mjs';
import 'file:///home/runner/work/_temp/my-sites-template/node_modules/unstorage/dist/index.mjs';
import 'file:///home/runner/work/_temp/my-sites-template/node_modules/unstorage/drivers/fs.mjs';
import 'node:crypto';
import 'file:///home/runner/work/_temp/my-sites-template/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///home/runner/work/_temp/my-sites-template/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///home/runner/work/_temp/my-sites-template/node_modules/ohash/dist/index.mjs';
import 'file:///home/runner/work/_temp/my-sites-template/node_modules/klona/dist/index.mjs';
import 'file:///home/runner/work/_temp/my-sites-template/node_modules/defu/dist/defu.mjs';
import 'file:///home/runner/work/_temp/my-sites-template/node_modules/scule/dist/index.mjs';
import 'file:///home/runner/work/_temp/my-sites-template/node_modules/unctx/dist/index.mjs';
import 'file:///home/runner/work/_temp/my-sites-template/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///home/runner/work/_temp/my-sites-template/node_modules/pathe/dist/index.mjs';
import 'file:///home/runner/work/_temp/my-sites-template/node_modules/consola/dist/index.mjs';
import 'file:///home/runner/work/_temp/my-sites-template/node_modules/nuxtseo-shared/dist/utils.mjs';
import 'file:///home/runner/work/_temp/my-sites-template/node_modules/fast-xml-parser/src/fxp.js';
import 'file:///home/runner/work/_temp/my-sites-template/node_modules/unhead/dist/server.mjs';
import 'file:///home/runner/work/_temp/my-sites-template/node_modules/devalue/index.js';
import 'file:///home/runner/work/_temp/my-sites-template/node_modules/unhead/dist/plugins.mjs';
import 'file:///home/runner/work/_temp/my-sites-template/node_modules/unhead/dist/utils.mjs';
import 'file:///home/runner/work/_temp/my-sites-template/node_modules/nuxt/node_modules/hookable/dist/index.mjs';
import 'file:///home/runner/work/_temp/my-sites-template/node_modules/vue-router/vue-router.node.mjs';

const HeadComponentCtxSymbol = /* @__PURE__ */ Symbol("head-component");
const TagPositionProps = {
  /**
   * @deprecated Use tagPosition
   */
  body: { type: Boolean, default: void 0 },
  tagPosition: { type: String }
};
function normalizeProps(_props, key) {
  const props = Object.fromEntries(
    Object.entries(_props).filter(([_, value]) => value !== void 0)
  );
  if (typeof props.body !== "undefined") {
    props.tagPosition = props.body ? "bodyClose" : "head";
  }
  if (typeof props.renderPriority !== "undefined") {
    props.tagPriority = props.renderPriority;
  }
  return {
    ...props,
    key
  };
}
function useVNodeStringKey() {
  var _a;
  const vnodeKey = (_a = getCurrentInstance()) == null ? void 0 : _a.vnode.key;
  return vnodeKey != null && typeof vnodeKey !== "symbol" ? String(vnodeKey) : void 0;
}
function useHeadComponentCtx() {
  return inject(HeadComponentCtxSymbol, createHeadComponentCtx, true);
}
function createHeadComponentCtx() {
  const prev = inject(HeadComponentCtxSymbol, null);
  if (prev) {
    return prev;
  }
  const input = reactive({});
  const entry = useHead(input);
  const ctx = { input, entry, update: () => entry.patch(input) };
  provide(HeadComponentCtxSymbol, ctx);
  return ctx;
}
const globalProps = {
  accesskey: String,
  autocapitalize: String,
  autofocus: {
    type: Boolean,
    default: void 0
  },
  class: { type: [String, Object, Array], default: void 0 },
  contenteditable: {
    type: Boolean,
    default: void 0
  },
  contextmenu: String,
  dir: String,
  draggable: {
    type: Boolean,
    default: void 0
  },
  enterkeyhint: String,
  exportparts: String,
  hidden: {
    type: Boolean,
    default: void 0
  },
  id: String,
  inputmode: String,
  is: String,
  itemid: String,
  itemprop: String,
  itemref: String,
  itemscope: String,
  itemtype: String,
  lang: String,
  nonce: String,
  part: String,
  slot: String,
  spellcheck: {
    type: Boolean,
    default: void 0
  },
  style: { type: [String, Object, Array], default: void 0 },
  tabindex: String,
  title: String,
  translate: String,
  /**
   * @deprecated Use tagPriority
   */
  renderPriority: [String, Number],
  /**
   * Unhead prop to modify the priority of the tag.
   */
  tagPriority: { type: [String, Number] }
};
defineComponent({
  name: "NoScript",
  inheritAttrs: false,
  props: {
    ...globalProps,
    ...TagPositionProps,
    title: String
  },
  setup(props, { slots }) {
    const { input, update } = useHeadComponentCtx();
    input.noscript || (input.noscript = []);
    const idx = input.noscript.push({}) - 1;
    const key = useVNodeStringKey();
    return () => {
      var _a;
      const noscript = normalizeProps(props, key);
      const slotVnodes = (_a = slots.default) == null ? void 0 : _a.call(slots);
      const textContent = [];
      if (slotVnodes) {
        for (const vnode of slotVnodes) {
          if (vnode.children) {
            textContent.push(vnode.children);
          }
        }
      }
      if (textContent.length > 0) {
        noscript.innerHTML = textContent.join("");
      }
      input.noscript[idx] = noscript;
      update();
      return null;
    };
  }
});
defineComponent({
  name: "Link",
  inheritAttrs: false,
  props: {
    ...globalProps,
    ...TagPositionProps,
    as: String,
    crossorigin: String,
    disabled: Boolean,
    fetchpriority: String,
    href: String,
    hreflang: String,
    imagesizes: String,
    imagesrcset: String,
    integrity: String,
    media: String,
    prefetch: {
      type: Boolean,
      default: void 0
    },
    referrerpolicy: String,
    rel: String,
    sizes: String,
    title: String,
    type: String,
    /** @deprecated **/
    methods: String,
    /** @deprecated **/
    target: String
  },
  setup(props) {
    const { input, update } = useHeadComponentCtx();
    input.link || (input.link = []);
    const idx = input.link.push({}) - 1;
    const key = useVNodeStringKey();
    return () => {
      input.link[idx] = normalizeProps(props, key);
      update();
      return null;
    };
  }
});
defineComponent({
  name: "Base",
  inheritAttrs: false,
  props: {
    ...globalProps,
    href: String,
    target: String
  },
  setup(props) {
    const { input, update } = useHeadComponentCtx();
    const key = useVNodeStringKey();
    return () => {
      input.base = normalizeProps(props, key);
      update();
      return null;
    };
  }
});
defineComponent({
  name: "Title",
  inheritAttrs: false,
  setup(_, { slots }) {
    const { input, update } = useHeadComponentCtx();
    return () => {
      var _a, _b, _c;
      const defaultSlot = (_a = slots.default) == null ? void 0 : _a.call(slots);
      input.title = ((_b = defaultSlot == null ? void 0 : defaultSlot[0]) == null ? void 0 : _b.children) ? String((_c = defaultSlot == null ? void 0 : defaultSlot[0]) == null ? void 0 : _c.children) : void 0;
      update();
      return null;
    };
  }
});
defineComponent({
  name: "Meta",
  inheritAttrs: false,
  props: {
    ...globalProps,
    charset: String,
    content: String,
    httpEquiv: String,
    name: String,
    property: String
  },
  setup(props) {
    const { input, update } = useHeadComponentCtx();
    const key = useVNodeStringKey();
    input.meta || (input.meta = []);
    const idx = input.meta.push({}) - 1;
    return () => {
      const meta = { "http-equiv": props.httpEquiv, ...normalizeProps(props, key) };
      if ("httpEquiv" in meta) {
        delete meta.httpEquiv;
      }
      input.meta[idx] = meta;
      update();
      return null;
    };
  }
});
defineComponent({
  name: "Style",
  inheritAttrs: false,
  props: {
    ...globalProps,
    ...TagPositionProps,
    type: String,
    media: String,
    nonce: String,
    title: String,
    /** @deprecated **/
    scoped: {
      type: Boolean,
      default: void 0
    }
  },
  setup(props, { slots }) {
    const { input, update } = useHeadComponentCtx();
    const key = useVNodeStringKey();
    input.style || (input.style = []);
    const idx = input.style.push({}) - 1;
    return () => {
      var _a, _b, _c;
      const style = normalizeProps(props, key);
      const textContent = (_c = (_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) == null ? void 0 : _b[0]) == null ? void 0 : _c.children;
      if (textContent) {
        input.style[idx] = style;
        style.textContent = textContent;
      }
      update();
      return null;
    };
  }
});
const Head = defineComponent({
  name: "Head",
  inheritAttrs: false,
  setup: (_props, ctx) => {
    createHeadComponentCtx();
    return () => {
      var _a, _b;
      return (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a);
    };
  }
});
defineComponent({
  name: "Html",
  inheritAttrs: false,
  props: {
    ...globalProps,
    manifest: String,
    version: String,
    xmlns: String
  },
  setup(_props, ctx) {
    const { input, update } = useHeadComponentCtx();
    return () => {
      var _a, _b;
      input.htmlAttrs = { ..._props, ...ctx.attrs };
      update();
      return (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a);
    };
  }
});
defineComponent({
  name: "Body",
  inheritAttrs: false,
  props: globalProps,
  setup(_props, ctx) {
    const { input, update } = useHeadComponentCtx();
    return () => {
      var _a, _b;
      input.bodyAttrs = { ..._props, ...ctx.attrs };
      update();
      return (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a);
    };
  }
});
const title$5 = "ABIT Projetos & Engenharia | Solu\xE7\xF5es em Engenharia";
const description$4 = "ABIT Projetos & Engenharia \u2013 Excel\xEAncia em projetos el\xE9tricos, hidrossanit\xE1rios, estruturais e laudos t\xE9cnicos. Atendimento em todo o Brasil.";
const siteUrl = "https://abitprojetos.com";
const ogImage = "/images/og-image.jpg";
const logoImage$2 = "/logo.png";
const whatsappNumber = "5531992000397";
const whatsappDefaultMessage = "Ol\xE1, vim do site e gostaria de um or\xE7amento!";
const instagramUrl = "https://www.instagram.com/abitprojetos/";
const linkedinUrl = "https://www.linkedin.com/company/abit-projetos/";
const localBusiness = { "name": "ABIT Projetos & Engenharia", "telephone": "+553141130506", "email": "contato@abitprojetos.com", "address": { "streetAddress": "Rua Te\xF3filo Otoni, 379, Sls 1 e 2", "addressLocality": "Sete Lagoas", "addressRegion": "MG", "postalCode": "", "addressCountry": "BR" }, "geo": { "latitude": "-19.4683", "longitude": "-44.2478" }, "openingHours": "Mo-Fr 08:00-18:00", "priceRange": "$$" };
const nav = { "links": [{ "label": "Servi\xE7os", "href": "#servicos" }, { "label": "Sobre", "href": "#sobre" }, { "label": "Clientes", "href": "#clientes" }, { "label": "Instagram", "href": "#instagram" }, { "label": "Contato", "href": "#contato" }], "ctaLabel": "Solicitar Or\xE7amento" };
const siteData = {
  title: title$5,
  description: description$4,
  siteUrl,
  ogImage,
  logoImage: logoImage$2,
  whatsappNumber,
  whatsappDefaultMessage,
  instagramUrl,
  linkedinUrl,
  localBusiness,
  nav
};
const label$4 = "O que fazemos";
const title$4 = "Nossos";
const titleHighlight$4 = "Servi\xE7os";
const subtitle$1 = "Solu\xE7\xF5es t\xE9cnicas completas para empresas e construtoras que exigem excel\xEAncia.";
const items$1 = [{ "icon": "fas fa-drafting-compass", "name": "Projeto Arquitet\xF4nico", "description": "Desenvolvimento de projetos arquitet\xF4nicos residenciais, comerciais e industriais com criatividade, funcionalidade e plena conformidade com as normas t\xE9cnicas vigentes." }, { "icon": "fas fa-building", "name": "Projeto de Estruturas e Funda\xE7\xF5es em Concreto e Met\xE1licas", "description": "C\xE1lculo e detalhamento de estruturas em concreto armado e met\xE1licas, incluindo funda\xE7\xF5es rasas e profundas, garantindo seguran\xE7a, durabilidade e economia de materiais." }, { "icon": "fas fa-water", "name": "Projeto de Instala\xE7\xF5es Hidrossanit\xE1rias e de \xC1guas Pluviais", "description": "Projetos completos de instala\xE7\xF5es hidrossanit\xE1rias e de \xE1guas pluviais para edifica\xE7\xF5es de todos os portes, com memoriais descritivos e pranchas executivas." }, { "icon": "fas fa-bolt", "name": "Projeto de Instala\xE7\xF5es El\xE9tricas", "description": "Projetos el\xE9tricos residenciais, comerciais e industriais em conformidade com as normas ABNT. Dimensionamento de cargas, quadros el\xE9tricos e memoriais descritivos." }, { "icon": "fas fa-file-alt", "name": "Laudos T\xE9cnicos", "description": "Emiss\xE3o de laudos t\xE9cnicos, ARTs, relat\xF3rios de vistoria e per\xEDcias de engenharia com responsabilidade t\xE9cnica registrada no CREA-MG." }, { "icon": "fas fa-hard-hat", "name": "Acompanhamento de Obras", "description": "Fiscaliza\xE7\xE3o t\xE9cnica presencial e remota de obras, garantindo que a execu\xE7\xE3o siga fielmente os projetos aprovados, com controle de qualidade e registro de etapas construtivas." }, { "icon": "fas fa-tasks", "name": "Gerenciamento de Obras", "description": "Gest\xE3o completa de obras: planejamento, cronograma f\xEDsico-financeiro, controle de custos, coordena\xE7\xE3o de equipes e entrega dentro do prazo e do or\xE7amento definido." }, { "icon": "fas fa-search-dollar", "name": "Avalia\xE7\xE3o de Im\xF3veis", "description": "Laudos de avalia\xE7\xE3o mercadol\xF3gica e patrimonial de im\xF3veis residenciais, comerciais e industriais, com metodologia NBR 14.653, para fins de compra, venda, financiamento ou invent\xE1rio." }, { "icon": "fas fa-layer-group", "name": "Compatibiliza\xE7\xE3o de Projetos", "description": "An\xE1lise integrada de todas as disciplinas de projeto \u2014 arquitet\xF4nico, estrutural, el\xE9trico e hidrossanit\xE1rio \u2014 identificando e eliminando interfer\xEAncias antes da execu\xE7\xE3o da obra." }];
const servicesData = {
  label: label$4,
  title: title$4,
  titleHighlight: titleHighlight$4,
  subtitle: subtitle$1,
  items: items$1
};
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "SchemaOrg",
  __ssrInlineRender: true,
  setup(__props) {
    const lb = siteData.localBusiness;
    const schema = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: lb.name,
      url: siteData.siteUrl,
      logo: `${siteData.siteUrl}/images/logo.png`,
      image: `${siteData.siteUrl}${siteData.ogImage}`,
      description: siteData.description,
      telephone: lb.telephone,
      email: lb.email,
      priceRange: lb.priceRange,
      openingHours: lb.openingHours,
      address: {
        "@type": "PostalAddress",
        streetAddress: lb.address.streetAddress,
        addressLocality: lb.address.addressLocality,
        addressRegion: lb.address.addressRegion,
        postalCode: lb.address.postalCode,
        addressCountry: lb.address.addressCountry
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: lb.geo.latitude,
        longitude: lb.geo.longitude
      },
      sameAs: [
        siteData.instagramUrl,
        siteData.linkedinUrl
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Servi\xE7os de Engenharia",
        itemListElement: servicesData.items.map((service, index) => ({
          "@type": "Offer",
          position: index + 1,
          itemOffered: {
            "@type": "Service",
            name: service.name,
            description: service.description
          }
        }))
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = Head;
      const _component_Script = resolveComponent("Script");
      _push(ssrRenderComponent(_component_Head, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Script, {
              type: "application/ld+json",
              children: JSON.stringify(schema)
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Script, {
                type: "application/ld+json",
                children: JSON.stringify(schema)
              }, null, 8, ["children"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SchemaOrg.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "AppNav",
  __ssrInlineRender: true,
  setup(__props) {
    const logoImage2 = siteData.logoImage;
    const scrolled = ref(false);
    const menuOpen = ref(false);
    const whatsappUrl = computed(
      () => `https://api.whatsapp.com/send?phone=${siteData.whatsappNumber}&text=${encodeURIComponent(siteData.whatsappDefaultMessage)}`
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<!--[--><nav class="${ssrRenderClass({ scrolled: unref(scrolled) })}"><div class="nav-logo">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", unref(logoImage2))} alt="ABIT Projetos &amp; Engenharia"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: unref(logoImage2),
                alt: "ABIT Projetos & Engenharia"
              }, null, 8, ["src"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><ul class="nav-links"><!--[-->`);
      ssrRenderList(unref(siteData).nav.links, (link) => {
        _push(`<li><a${ssrRenderAttr("href", link.href)}>${ssrInterpolate(link.label)}</a></li>`);
      });
      _push(`<!--]--></ul><a${ssrRenderAttr("href", unref(whatsappUrl))} class="nav-cta" target="_blank" rel="noopener">${ssrInterpolate(unref(siteData).nav.ctaLabel)}</a><button class="${ssrRenderClass([{ open: unref(menuOpen) }, "hamburger"])}" aria-label="Menu"><span></span><span></span><span></span></button></nav><div class="${ssrRenderClass([{ open: unref(menuOpen) }, "mobile-menu"])}"><!--[-->`);
      ssrRenderList(unref(siteData).nav.links, (link) => {
        _push(`<a${ssrRenderAttr("href", link.href)}>${ssrInterpolate(link.label)}</a>`);
      });
      _push(`<!--]--><a${ssrRenderAttr("href", unref(whatsappUrl))} target="_blank" rel="noopener" style="${ssrRenderStyle({ "color": "var(--gold-light)" })}"> WhatsApp </a></div><!--]-->`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppNav.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const eyebrow = "ABIT Projetos & Engenharia";
const headingLine1 = "Solu\xE7\xF5es em";
const headingHighlight = "Engenharia";
const headingLine2 = "de Alta Performance";
const description$3 = "Projeto Arquitet\xF4nico \xB7 Projeto de Estruturas e Funda\xE7\xF5es em Concreto e Met\xE1licas \xB7 Projeto de Instala\xE7\xF5es Hidrossanit\xE1rias e de \xC1guas Pluviais \xB7 Projeto de Instala\xE7\xF5es El\xE9tricas \xB7 Laudos T\xE9cnicos \xB7 Acompanhamento de Obras \xB7 Gerenciamento de Obras \xB7 Avalia\xE7\xE3o de Im\xF3veis \xB7 Compatibiliza\xE7\xE3o de Projetos.";
const descriptionExtra = "Excel\xEAncia t\xE9cnica e compromisso em cada projeto entregue.";
const primaryBtn = { "label": "Solicitar Or\xE7amento", "icon": "fab fa-whatsapp" };
const secondaryBtn = { "label": "Nossos Servi\xE7os", "href": "#servicos", "icon": "fas fa-arrow-right" };
const stats = [{ "num": "+10", "label": "Anos de Experi\xEAncia" }, { "num": "+2000", "label": "Projetos Entregues" }, { "num": "100%", "label": "Comprometimento" }];
const logoImage$1 = "/logo.png";
const heroData = {
  eyebrow,
  headingLine1,
  headingHighlight,
  headingLine2,
  description: description$3,
  descriptionExtra,
  primaryBtn,
  secondaryBtn,
  stats,
  logoImage: logoImage$1
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "HeroSection",
  __ssrInlineRender: true,
  setup(__props) {
    const whatsappUrl = computed(
      () => `https://api.whatsapp.com/send?phone=${siteData.whatsappNumber}&text=${encodeURIComponent(siteData.whatsappDefaultMessage)}`
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ id: "hero" }, _attrs))}><div class="hero-bg-grid"></div><div class="hero-bg-glow"></div><div class="hero-content"><div class="hero-text"><p class="hero-eyebrow">${ssrInterpolate(unref(heroData).eyebrow)}</p><h1 class="hero-heading">${ssrInterpolate(unref(heroData).headingLine1)}<br><span>${ssrInterpolate(unref(heroData).headingHighlight)}</span><br> ${ssrInterpolate(unref(heroData).headingLine2)}</h1><p class="hero-sub">${ssrInterpolate(unref(heroData).description)} <br><br> ${ssrInterpolate(unref(heroData).descriptionExtra)}</p><div class="hero-buttons"><a${ssrRenderAttr("href", unref(whatsappUrl))} class="btn-primary" target="_blank" rel="noopener"><i class="${ssrRenderClass(unref(heroData).primaryBtn.icon)}"></i> ${ssrInterpolate(unref(heroData).primaryBtn.label)}</a><a${ssrRenderAttr("href", unref(heroData).secondaryBtn.href)} class="btn-outline">${ssrInterpolate(unref(heroData).secondaryBtn.label)} <i class="${ssrRenderClass(unref(heroData).secondaryBtn.icon)}"></i></a></div><div class="hero-stats"><!--[-->`);
      ssrRenderList(unref(heroData).stats, (stat) => {
        _push(`<div class="stat-card fade-in"><div class="stat-num">${ssrInterpolate(stat.num)}</div><div class="stat-label">${ssrInterpolate(stat.label)}</div></div>`);
      });
      _push(`<!--]--></div></div><div class="hero-visual"><div class="hero-logo-wrap"><img${ssrRenderAttr("src", unref(heroData).logoImage)} alt="ABIT Projetos &amp; Engenharia"></div></div></div></section>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeroSection.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
function resolveTags(options) {
  const _options = toRaw(options);
  const tags = _options.tags.filter(Boolean).map((i) => typeof i === "string" ? { id: i } : i);
  if (_options.id) {
    const { id, config, initCommands } = _options;
    tags.unshift({ id, config, initCommands });
  }
  return tags;
}
function useGtag() {
  const options = useRuntimeConfig().public.gtag;
  resolveTags(options);
  let _gtag;
  _gtag = () => {
  };
  const initialize = (id) => {
  };
  function disableAnalytics(id) {
  }
  function enableAnalytics(id) {
  }
  return {
    gtag: _gtag,
    initialize,
    disableAnalytics,
    enableAnalytics
  };
}
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "ServicesSection",
  __ssrInlineRender: true,
  setup(__props) {
    useGtag();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ id: "servicos" }, _attrs))}><div class="services-wrap"><div class="services-header fade-in"><div class="section-label">${ssrInterpolate(unref(servicesData).label)}</div><h2 class="section-title">${ssrInterpolate(unref(servicesData).title)} <span>${ssrInterpolate(unref(servicesData).titleHighlight)}</span></h2><p class="section-subtitle">${ssrInterpolate(unref(servicesData).subtitle)}</p></div><div class="services-grid"><!--[-->`);
      ssrRenderList(unref(servicesData).items, (service, index) => {
        _push(`<div class="service-card fade-in" style="${ssrRenderStyle({ transitionDelay: `${index % 3 * 0.1}s` })}"><div class="service-icon"><i class="${ssrRenderClass(service.icon)}"></i></div><div class="service-name">${ssrInterpolate(service.name)}</div><p class="service-desc">${ssrInterpolate(service.description)}</p></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ServicesSection.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const label$3 = "Quem somos";
const title$3 = "Engenharia com";
const titleHighlight$3 = "Precis\xE3o e Compromisso";
const description$2 = "A ABIT Projetos & Engenharia \xE9 um escrit\xF3rio especializado em solu\xE7\xF5es t\xE9cnicas para o setor da constru\xE7\xE3o civil e industrial. Nossa equipe de engenheiros certificados alia experi\xEAncia t\xE9cnica a tecnologias BIM e CAD de ponta.";
const checklist = ["Projetos entregues dentro do prazo e do or\xE7amento acordado", "Responsabilidade t\xE9cnica com ART em todos os servi\xE7os", "Atendimento a construtoras, ind\xFAstrias e empresas de m\xE9dio e grande porte", "Plataforma BIM para maior precis\xE3o e compatibiliza\xE7\xE3o de projetos", "Equipe multidisciplinar para projetos integrados"];
const ctaLabel = "Fale Conosco";
const teamPhoto = "/images/quemsomos.png";
const aboutData = {
  label: label$3,
  title: title$3,
  titleHighlight: titleHighlight$3,
  description: description$2,
  checklist,
  ctaLabel,
  teamPhoto
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "AboutSection",
  __ssrInlineRender: true,
  setup(__props) {
    const whatsappUrl = computed(
      () => `https://api.whatsapp.com/send?phone=${siteData.whatsappNumber}&text=${encodeURIComponent("Ol\xE1, gostaria de saber mais sobre a ABIT!")}`
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ id: "sobre" }, _attrs))} data-v-404e860b><div class="section" data-v-404e860b><div class="about-grid" data-v-404e860b><div class="about-img-wrap fade-in" data-v-404e860b>`);
      if (unref(aboutData).teamPhoto) {
        _push(`<img${ssrRenderAttr("src", unref(aboutData).teamPhoto)} alt="Equipe ABIT" class="about-img-real about-img-fade" data-v-404e860b>`);
      } else {
        _push(`<div class="about-img-placeholder" data-v-404e860b><i class="fas fa-hard-hat" data-v-404e860b></i><p data-v-404e860b>Adicione uma foto da equipe aqui</p></div>`);
      }
      _push(`<div class="about-accent" data-v-404e860b></div></div><div class="fade-in" style="${ssrRenderStyle({ "transition-delay": "0.15s" })}" data-v-404e860b><div class="section-label" data-v-404e860b>${ssrInterpolate(unref(aboutData).label)}</div><h2 class="section-title" data-v-404e860b>${ssrInterpolate(unref(aboutData).title)} <span data-v-404e860b>${ssrInterpolate(unref(aboutData).titleHighlight)}</span></h2><p style="${ssrRenderStyle({ "font-size": "15px", "line-height": "1.8", "color": "rgba(245,240,232,0.6)", "margin-bottom": "8px" })}" data-v-404e860b>${ssrInterpolate(unref(aboutData).description)}</p><ul class="about-check-list" data-v-404e860b><!--[-->`);
      ssrRenderList(unref(aboutData).checklist, (item) => {
        _push(`<li data-v-404e860b><i class="fas fa-check" data-v-404e860b></i> ${ssrInterpolate(item)}</li>`);
      });
      _push(`<!--]--></ul><a${ssrRenderAttr("href", unref(whatsappUrl))} class="btn-primary" target="_blank" rel="noopener" style="${ssrRenderStyle({ "display": "inline-flex" })}" data-v-404e860b><i class="fab fa-whatsapp" data-v-404e860b></i> ${ssrInterpolate(unref(aboutData).ctaLabel)}</a></div></div></div></section>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AboutSection.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-404e860b"]]);
const label$2 = "Clientes & Parceiros";
const marqueeSpeed = null;
const title$2 = "Clientes que";
const titleHighlight$2 = "Confiam";
const titleEnd$1 = "em N\xF3s";
const subtitle = "Atendemos construtoras, ind\xFAstrias, \xF3rg\xE3os p\xFAblicos e empresas de m\xFAltiplos segmentos com excel\xEAncia t\xE9cnica.";
const logos = [{ "name": "Bradesco", "image": "/images/logos/BRADESCO.jpg", "url": "https://banco.bradesco/html/classic/index.shtm" }, { "name": "Brennand", "image": "/images/logos/bremand.png", "url": "https://cimentonacional.com.br/" }, { "name": "Buildplan", "image": "/images/logos/BUILDPLAN.webp", "url": "https://buildplan.com.br/" }, { "name": "IFTM", "image": "/images/logos/ifmg.png", "url": "https://iftm.edu.br/" }, { "name": "Cliente", "image": "/images/logos/images (3).png", "url": "" }, { "name": "Entre Rios de Minas", "image": "/images/logos/Entreriosdeminas 2.png", "url": "https://www.entreriosdeminas.mg.gov.br/" }, { "name": "Iveco", "image": "/images/logos/iveco.svg", "url": "https://www.iveco.com/brasil/" }, { "name": "Quality \xD3pticas", "image": "/images/logos/quality_opticas.png", "url": "https://qualityopticas.com.br/" }, { "name": "Vida Natus", "image": "/images/logos/NATUS.webp", "url": "https://vidanatus.com.br/" }, { "name": "SICOOB", "image": "/images/logos/LOGO-SICOOB.webp", "url": "https://www.sicoob.com.br/" }, { "name": "Ompi", "image": "/images/logos/ompi.png", "url": "" }, { "name": "Sada", "image": "/images/logos/sada-logo-bg.png", "url": "" }, { "name": "Trevo", "image": "/images/logos/trevo.png", "url": "https://trevolacteos.com.br/" }, { "name": "Railoc", "image": "/images/logos/logorailoc.png", "url": "https://railoc.net/" }];
const clientsData = {
  label: label$2,
  marqueeSpeed,
  title: title$2,
  titleHighlight: titleHighlight$2,
  titleEnd: titleEnd$1,
  subtitle,
  logos
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "ClientsSection",
  __ssrInlineRender: true,
  setup(__props) {
    const doubled = computed(() => [...clientsData.logos, ...clientsData.logos]);
    const autoDuration = clientsData.logos.length * 3.5;
    const speed = clientsData.marqueeSpeed;
    const duration = speed != null && !Number.isNaN(speed) && speed > 0 ? speed : autoDuration;
    const marqueeStyle = { animationDuration: `${duration}s` };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ id: "clientes" }, _attrs))}><div class="clients-wrap"><div class="clients-header fade-in"><div class="section-label">${ssrInterpolate(unref(clientsData).label)}</div><h2 class="section-title">${ssrInterpolate(unref(clientsData).title)} <span>${ssrInterpolate(unref(clientsData).titleHighlight)}</span> ${ssrInterpolate(unref(clientsData).titleEnd)}</h2><p class="section-subtitle">${ssrInterpolate(unref(clientsData).subtitle)}</p></div><div class="clients-marquee-outer fade-in"><div class="clients-marquee" style="${ssrRenderStyle(marqueeStyle)}"><!--[-->`);
      ssrRenderList(unref(doubled), (logo, index) => {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(logo.url ? "a" : "div"), mergeProps({
          key: `${logo.name}-${index}`,
          class: "client-logo-card"
        }, { ref_for: true }, logo.url ? { href: logo.url, target: "_blank", rel: "noopener noreferrer" } : {}), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (logo.image) {
                _push2(`<img${ssrRenderAttr("src", logo.image)}${ssrRenderAttr("alt", logo.name)}${_scopeId}>`);
              } else {
                _push2(`<div class="client-logo-placeholder"${_scopeId}>${ssrInterpolate(logo.name)}</div>`);
              }
            } else {
              return [
                logo.image ? (openBlock(), createBlock("img", {
                  key: 0,
                  src: logo.image,
                  alt: logo.name
                }, null, 8, ["src", "alt"])) : (openBlock(), createBlock("div", {
                  key: 1,
                  class: "client-logo-placeholder"
                }, toDisplayString(logo.name), 1))
              ];
            }
          }),
          _: 2
        }), _parent);
      });
      _push(`<!--]--></div></div></div></section>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ClientsSection.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const label$1 = "Redes Sociais";
const title$1 = "Siga no";
const titleHighlight$1 = "Instagram";
const handle = "@abitprojetos";
const url = "https://www.instagram.com/abitprojetos/";
const posts = [{ "image": "/images/projetos/1.jpg", "url": "https://www.instagram.com/abitprojetos/" }, { "image": "/images/projetos/2.jpg", "url": "https://www.instagram.com/abitprojetos/" }, { "image": "/images/projetos/3.jpg", "url": "https://www.instagram.com/abitprojetos/" }, { "image": "/images/projetos/4.jpg", "url": "https://www.instagram.com/abitprojetos/" }, { "image": "/images/projetos/5.jpg", "url": "https://www.instagram.com/abitprojetos/" }, { "image": "/images/projetos/6.jpg", "url": "https://www.instagram.com/abitprojetos/" }, { "image": "/images/projetos/7.jpg", "url": "https://www.instagram.com/abitprojetos/" }, { "image": "/images/projetos/8.jpg", "url": "https://www.instagram.com/abitprojetos/" }, { "image": "/images/projetos/9.jpg", "url": "https://www.instagram.com/abitprojetos/" }, { "image": "/images/projetos/10.jpg", "url": "https://www.instagram.com/abitprojetos/" }, { "image": "/images/projetos/11.jpg", "url": "https://www.instagram.com/abitprojetos/" }, { "image": "/images/projetos/12.jpg", "url": "https://www.instagram.com/abitprojetos/" }, { "image": "/images/projetos/13.jpg", "url": "https://www.instagram.com/abitprojetos/" }, { "image": "/images/projetos/14.jpg", "url": "https://www.instagram.com/abitprojetos/" }, { "image": "/images/projetos/15.jpg", "url": "https://www.instagram.com/abitprojetos/" }, { "image": "/images/projetos/16.jpg", "url": "https://www.instagram.com/abitprojetos/" }, { "image": "/images/projetos/17.jpg", "url": "https://www.instagram.com/abitprojetos/" }, { "image": "/images/projetos/18.jpg", "url": "https://www.instagram.com/abitprojetos/" }, { "image": "/images/projetos/19.jpg", "url": "https://www.instagram.com/abitprojetos/" }, { "image": "/images/projetos/20.jpg", "url": "https://www.instagram.com/abitprojetos/" }, { "image": "/images/projetos/21.jpg", "url": "https://www.instagram.com/abitprojetos/" }, { "image": "/images/projetos/22.jpg", "url": "https://www.instagram.com/abitprojetos/" }, { "image": "/images/projetos/23.jpg", "url": "https://www.instagram.com/abitprojetos/" }, { "image": "/images/projetos/23.jpg", "url": "https://www.instagram.com/abitprojetos/" }];
const instagramData = {
  label: label$1,
  title: title$1,
  titleHighlight: titleHighlight$1,
  handle,
  url,
  posts
};
const INITIAL_LIMIT = 12;
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "InstagramSection",
  __ssrInlineRender: true,
  setup(__props) {
    const activePosts = computed(() => instagramData.posts.filter((p) => p.image));
    const expanded = ref(false);
    const visiblePosts = computed(
      () => expanded.value ? activePosts.value : activePosts.value.slice(0, INITIAL_LIMIT)
    );
    const hasMore = computed(() => activePosts.value.length > INITIAL_LIMIT);
    const lightboxOpen = ref(false);
    const lightboxIndex = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ id: "instagram" }, _attrs))} data-v-4b4de719><div class="instagram-wrap" data-v-4b4de719><div class="instagram-header fade-in" data-v-4b4de719><div data-v-4b4de719><div class="section-label" data-v-4b4de719>${ssrInterpolate(unref(instagramData).label)}</div><h2 class="section-title" data-v-4b4de719>${ssrInterpolate(unref(instagramData).title)} <span data-v-4b4de719>${ssrInterpolate(unref(instagramData).titleHighlight)}</span></h2></div><a${ssrRenderAttr("href", unref(instagramData).url)} target="_blank" rel="noopener" class="instagram-link" data-v-4b4de719><i class="fab fa-instagram" data-v-4b4de719></i> ${ssrInterpolate(unref(instagramData).handle)}</a></div><div class="instagram-embed-container fade-in" data-v-4b4de719><div class="${ssrRenderClass([{ "ig-grid-wrap--collapsed": unref(hasMore) && !unref(expanded) }, "ig-grid-wrap"])}" data-v-4b4de719>`);
      if (unref(activePosts).length) {
        _push(`<div class="instagram-grid" data-v-4b4de719><!--[-->`);
        ssrRenderList(unref(visiblePosts), (post, index) => {
          _push(`<button class="ig-post" data-v-4b4de719><img${ssrRenderAttr("src", post.image)}${ssrRenderAttr("alt", `Post ${index + 1} \u2014 ${unref(instagramData).handle}`)} loading="lazy" data-v-4b4de719><div class="ig-post-overlay" data-v-4b4de719><i class="fab fa-instagram" data-v-4b4de719></i></div></button>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="instagram-fallback" data-v-4b4de719><!--[-->`);
        ssrRenderList(12, (i) => {
          _push(`<div class="ig-placeholder" data-v-4b4de719><i class="fab fa-instagram" data-v-4b4de719></i></div>`);
        });
        _push(`<!--]--></div>`);
      }
      if (unref(hasMore) && !unref(expanded)) {
        _push(`<button class="ig-expand-trigger" aria-label="Ver mais fotos" data-v-4b4de719><span class="ig-expand-gradient" data-v-4b4de719></span><span class="ig-expand-icon" data-v-4b4de719><i class="fas fa-chevron-down" data-v-4b4de719></i></span></button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      if (unref(hasMore) && unref(expanded)) {
        _push(`<div class="ig-collapse-wrap" data-v-4b4de719><button class="ig-collapse-trigger" aria-label="Ocultar fotos" data-v-4b4de719><span class="ig-expand-icon ig-expand-icon--up" data-v-4b4de719><i class="fas fa-chevron-up" data-v-4b4de719></i></span></button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="instagram-cta fade-in" data-v-4b4de719><a${ssrRenderAttr("href", unref(instagramData).url)} target="_blank" rel="noopener" class="btn-outline" data-v-4b4de719><i class="fab fa-instagram" data-v-4b4de719></i> Veja perfil completo </a></div></div>`);
      ssrRenderTeleport(_push, (_push2) => {
        if (unref(lightboxOpen)) {
          _push2(`<div class="lb-overlay" data-v-4b4de719><button class="lb-close" aria-label="Fechar" data-v-4b4de719><i class="fas fa-times" data-v-4b4de719></i></button>`);
          if (unref(activePosts).length > 1) {
            _push2(`<button class="lb-arrow lb-arrow--prev" aria-label="Anterior" data-v-4b4de719><i class="fas fa-chevron-left" data-v-4b4de719></i></button>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`<div class="lb-content" data-v-4b4de719><img${ssrRenderAttr("src", unref(activePosts)[unref(lightboxIndex)].image)}${ssrRenderAttr("alt", `Post ${unref(lightboxIndex) + 1} \u2014 ${unref(instagramData).handle}`)} data-v-4b4de719></div>`);
          if (unref(activePosts).length > 1) {
            _push2(`<button class="lb-arrow lb-arrow--next" aria-label="Pr\xF3ximo" data-v-4b4de719><i class="fas fa-chevron-right" data-v-4b4de719></i></button>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`<div class="lb-footer" data-v-4b4de719><span class="lb-counter" data-v-4b4de719>${ssrInterpolate(unref(lightboxIndex) + 1)} / ${ssrInterpolate(unref(activePosts).length)}</span>`);
          if (unref(activePosts)[unref(lightboxIndex)].url) {
            _push2(`<a${ssrRenderAttr("href", unref(activePosts)[unref(lightboxIndex)].url)} target="_blank" rel="noopener" class="lb-ig-link" data-v-4b4de719><i class="fab fa-instagram" data-v-4b4de719></i> Ver no Instagram </a>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`</div></div>`);
        } else {
          _push2(`<!---->`);
        }
      }, "body", false, _parent);
      _push(`</section>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/InstagramSection.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-4b4de719"]]);
const label = "Fale conosco";
const title = "Vamos";
const titleHighlight = "Trabalhar";
const titleEnd = "Juntos?";
const description$1 = "Entre em contato para solicitar um or\xE7amento ou esclarecer d\xFAvidas. Nossa equipe responde rapidamente.";
const items = [{ "icon": "fab fa-whatsapp", "label": "Contato", "values": [{ "value": "(31) 4113-0506", "href": "tel:+553141130506" }, { "value": "(31) 99200-0397", "href": "https://api.whatsapp.com/send?phone=5531992000397" }] }, { "icon": "fas fa-envelope", "label": "E-mail", "value": "contato@abitprojetos.com", "href": "mailto:contato@abitprojetos.com" }, { "icon": "fas fa-map-marker-alt", "label": "Localiza\xE7\xE3o", "value": "Rua Te\xF3filo Otoni, 379, Sls 1 e 2, Centro, Sete Lagoas/MG", "href": "" }, { "icon": "fab fa-instagram", "label": "Instagram", "value": "@abitprojetos", "href": "https://www.instagram.com/abitprojetos/" }];
const contactData = {
  label,
  title,
  titleHighlight,
  titleEnd,
  description: description$1,
  items
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ContactSection",
  __ssrInlineRender: true,
  setup(__props) {
    useGtag();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ id: "contato" }, _attrs))}><div class="contact-wrap"><div class="contact-header fade-in"><div class="section-label">${ssrInterpolate(unref(contactData).label)}</div><h2 class="section-title">${ssrInterpolate(unref(contactData).title)} <span>${ssrInterpolate(unref(contactData).titleHighlight)}</span> ${ssrInterpolate(unref(contactData).titleEnd)}</h2><p style="${ssrRenderStyle({ "font-size": "15px", "line-height": "1.8", "color": "rgba(245,240,232,0.55)", "margin-bottom": "48px", "max-width": "560px" })}">${ssrInterpolate(unref(contactData).description)}</p></div><div class="contact-items-grid fade-in" style="${ssrRenderStyle({ "transition-delay": "0.1s" })}"><!--[-->`);
      ssrRenderList(unref(contactData).items, (item) => {
        _push(`<div class="contact-item"><div class="contact-icon"><i class="${ssrRenderClass(item.icon)}"></i></div><div><div class="contact-item-label">${ssrInterpolate(item.label)}</div>`);
        if (item.values) {
          _push(`<!--[-->`);
          ssrRenderList(item.values, (v, i) => {
            _push(`<span>`);
            if (i > 0) {
              _push(`<span class="contact-item-sep"> / </span>`);
            } else {
              _push(`<!---->`);
            }
            if (v.href) {
              _push(`<a${ssrRenderAttr("href", v.href)} class="contact-item-val" target="_blank" rel="noopener">${ssrInterpolate(v.value)}</a>`);
            } else {
              _push(`<span class="contact-item-val">${ssrInterpolate(v.value)}</span>`);
            }
            _push(`</span>`);
          });
          _push(`<!--]-->`);
        } else {
          _push(`<!--[-->`);
          if (item.href) {
            _push(`<a${ssrRenderAttr("href", item.href)} class="contact-item-val" target="_blank" rel="noopener">${ssrInterpolate(item.value)}</a>`);
          } else {
            _push(`<span class="contact-item-val">${ssrInterpolate(item.value)}</span>`);
          }
          _push(`<!--]-->`);
        }
        _push(`</div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ContactSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const description = "ABIT Projetos & Engenharia \u2014 projetos arquitet\xF4nicos, estruturais, el\xE9tricos, hidrossanit\xE1rios e laudos t\xE9cnicos em Sete Lagoas/MG.";
const logoImage = "/logo.png";
const socials = [{ "icon": "fab fa-instagram", "href": "https://www.instagram.com/abitprojetos/", "title": "Instagram" }, { "icon": "fab fa-whatsapp", "href": "https://api.whatsapp.com/send?phone=5531992000397", "title": "WhatsApp" }];
const servicesColumn = { "title": "Servi\xE7os", "links": [{ "label": "Projeto Arquitet\xF4nico", "href": "#servicos" }, { "label": "Estruturas e Funda\xE7\xF5es", "href": "#servicos" }, { "label": "Instala\xE7\xF5es Hidrossanit\xE1rias", "href": "#servicos" }, { "label": "Instala\xE7\xF5es El\xE9tricas", "href": "#servicos" }, { "label": "Laudos T\xE9cnicos", "href": "#servicos" }, { "label": "Acompanhamento de Obras", "href": "#servicos" }, { "label": "Gerenciamento de Obras", "href": "#servicos" }, { "label": "Avalia\xE7\xE3o de Im\xF3veis", "href": "#servicos" }, { "label": "Compatibiliza\xE7\xE3o de Projetos", "href": "#servicos" }] };
const quickLinksColumn = { "title": "Links R\xE1pidos", "links": [{ "label": "Sobre a ABIT", "href": "#sobre" }, { "label": "Nossos Clientes", "href": "#clientes" }, { "label": "Instagram", "href": "#instagram" }, { "label": "Contato", "href": "#contato" }, { "label": "Or\xE7amento", "href": "https://api.whatsapp.com/send?phone=5531992000397", "external": true }] };
const footerData = {
  description,
  logoImage,
  socials,
  servicesColumn,
  quickLinksColumn
};
const code7Url = `https://www.code7.tec.br/?utm_source=abit&utm_medium=referral&utm_campaign=parceiros`;
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AppFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const year = (/* @__PURE__ */ new Date()).getFullYear();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(_attrs)}><div class="footer-inner"><div><div class="footer-logo"><img${ssrRenderAttr("src", unref(footerData).logoImage)} alt="ABIT Projetos &amp; Engenharia"></div><p class="footer-desc">${ssrInterpolate(unref(footerData).description)}</p><div class="footer-socials"><!--[-->`);
      ssrRenderList(unref(footerData).socials, (social) => {
        _push(`<a${ssrRenderAttr("href", social.href)}${ssrRenderAttr("title", social.title)} class="footer-social" target="_blank" rel="noopener"><i class="${ssrRenderClass(social.icon)}"></i></a>`);
      });
      _push(`<!--]--></div></div><div class="footer-col"><h4>${ssrInterpolate(unref(footerData).servicesColumn.title)}</h4><ul><!--[-->`);
      ssrRenderList(unref(footerData).servicesColumn.links, (link) => {
        _push(`<li><a${ssrRenderAttr("href", link.href)}>${ssrInterpolate(link.label)}</a></li>`);
      });
      _push(`<!--]--></ul></div><div class="footer-col"><h4>${ssrInterpolate(unref(footerData).quickLinksColumn.title)}</h4><ul><!--[-->`);
      ssrRenderList(unref(footerData).quickLinksColumn.links, (link) => {
        _push(`<li><a${ssrRenderAttr("href", link.href)}${ssrRenderAttr("target", link.external ? "_blank" : void 0)}${ssrRenderAttr("rel", link.external ? "noopener" : void 0)}>${ssrInterpolate(link.label)}</a></li>`);
      });
      _push(`<!--]--></ul></div></div><div class="footer-bottom"><p>\xA9 ${ssrInterpolate(unref(year))} ABIT Projetos &amp; Engenharia. Todos os direitos reservados.</p><a${ssrRenderAttr("href", code7Url)} target="_blank" rel="noopener" class="footer-credit">Desenvolvido por code7</a></div></footer>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: siteData.title,
      description: siteData.description,
      ogTitle: siteData.title,
      ogDescription: siteData.description,
      ogType: "website",
      ogUrl: siteData.siteUrl,
      ogImage: `${siteData.siteUrl}${siteData.ogImage}`,
      ogImageAlt: siteData.localBusiness.name,
      ogLocale: "pt_BR",
      ogSiteName: siteData.localBusiness.name,
      twitterCard: "summary_large_image",
      twitterTitle: siteData.title,
      twitterDescription: siteData.description,
      twitterImage: `${siteData.siteUrl}${siteData.ogImage}`,
      robots: "index, follow"
    });
    useHead({
      link: [{ rel: "canonical", href: siteData.siteUrl }]
    });
    useGtag();
    const showScrollTop = ref(false);
    const whatsappUrl = computed(
      () => `https://api.whatsapp.com/send?phone=${siteData.whatsappNumber}&text=${encodeURIComponent("Ol\xE1! Vim do site da ABIT Engenharia e gostaria de solicitar um or\xE7amento.")}`
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SchemaOrg = _sfc_main$9;
      const _component_AppNav = _sfc_main$8;
      const _component_HeroSection = _sfc_main$7;
      const _component_ServicesSection = _sfc_main$6;
      const _component_AboutSection = __nuxt_component_4;
      const _component_ClientsSection = _sfc_main$4;
      const _component_InstagramSection = __nuxt_component_6;
      const _component_ContactSection = _sfc_main$2;
      const _component_AppFooter = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_SchemaOrg, null, null, _parent));
      _push(ssrRenderComponent(_component_AppNav, null, null, _parent));
      _push(`<main>`);
      _push(ssrRenderComponent(_component_HeroSection, null, null, _parent));
      _push(`<div class="divider"></div>`);
      _push(ssrRenderComponent(_component_ServicesSection, null, null, _parent));
      _push(`<div class="divider"></div>`);
      _push(ssrRenderComponent(_component_AboutSection, null, null, _parent));
      _push(`<div class="divider"></div>`);
      _push(ssrRenderComponent(_component_ClientsSection, null, null, _parent));
      _push(`<div class="divider"></div>`);
      _push(ssrRenderComponent(_component_InstagramSection, null, null, _parent));
      _push(`<div class="divider"></div>`);
      _push(ssrRenderComponent(_component_ContactSection, null, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(_component_AppFooter, null, null, _parent));
      _push(`<a${ssrRenderAttr("href", unref(whatsappUrl))} class="whatsapp-float" target="_blank" rel="noopener" aria-label="WhatsApp"><i class="fab fa-whatsapp"></i><span class="whatsapp-tooltip">Fale conosco no WhatsApp!</span></a><button class="${ssrRenderClass([{ visible: unref(showScrollTop) }, "scroll-top"])}" aria-label="Topo"><i class="fas fa-chevron-up"></i></button></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Bi0UX5_n.mjs.map
