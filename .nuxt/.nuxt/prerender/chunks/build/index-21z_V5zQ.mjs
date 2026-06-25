import { defineComponent, ref, computed, unref, resolveComponent, withCtx, createVNode, mergeProps, resolveDynamicComponent, openBlock, createBlock, toDisplayString, toRaw, useAttrs, useTemplateRef, inject, reactive, provide, useSSRContext, getCurrentInstance } from 'file:///home/runner/work/_temp/my-sites-template/node_modules/vue/index.mjs';
import { d as useSeoMeta, u as useHead, b as useRuntimeConfig, c as useRequestEvent, a as useNuxtApp } from './server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrRenderList, ssrInterpolate, ssrRenderStyle, ssrRenderVNode, ssrRenderSlot, ssrRenderTeleport } from 'file:///home/runner/work/_temp/my-sites-template/node_modules/vue/server-renderer/index.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-CEv_wQ-t.mjs';
import { defu } from 'file:///home/runner/work/_temp/my-sites-template/node_modules/defu/dist/defu.mjs';
import { hasProtocol, withLeadingSlash, joinURL, parseURL } from 'file:///home/runner/work/_temp/my-sites-template/node_modules/ufo/dist/index.mjs';
import { appendHeader } from 'file:///home/runner/work/_temp/my-sites-template/node_modules/h3/dist/index.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import 'file:///home/runner/work/_temp/my-sites-template/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///home/runner/work/_temp/my-sites-template/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import '../nitro/nitro.mjs';
import 'file:///home/runner/work/_temp/my-sites-template/node_modules/destr/dist/index.mjs';
import 'file:///home/runner/work/_temp/my-sites-template/node_modules/nitropack/node_modules/hookable/dist/index.mjs';
import 'file:///home/runner/work/_temp/my-sites-template/node_modules/node-mock-http/dist/index.mjs';
import 'file:///home/runner/work/_temp/my-sites-template/node_modules/unstorage/dist/index.mjs';
import 'file:///home/runner/work/_temp/my-sites-template/node_modules/unstorage/drivers/fs.mjs';
import 'node:crypto';
import 'file:///home/runner/work/_temp/my-sites-template/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///home/runner/work/_temp/my-sites-template/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///home/runner/work/_temp/my-sites-template/node_modules/ohash/dist/index.mjs';
import 'file:///home/runner/work/_temp/my-sites-template/node_modules/klona/dist/index.mjs';
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
const description$4 = "ABIT Projetos & Engenharia \u2013 Excel\xEAncia em projetos arquitet\xF4nicos, estruturais, el\xE9tricos, hidrossanit\xE1rios e laudos t\xE9cnicos em Sete Lagoas/MG. Atendimento em todo o Brasil.";
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
const subtitle$1 = "Engenharia e solu\xE7\xF5es t\xE9cnicas para quem exige excel\xEAncia.";
const items$1 = [{ "icon": "fas fa-drafting-compass", "name": "Projeto Arquitet\xF4nico", "description": "Desenvolvimento de projetos arquitet\xF4nicos residenciais, comerciais e industriais com criatividade, funcionalidade e plena conformidade com as normas t\xE9cnicas vigentes." }, { "icon": "fas fa-building", "name": "Projeto de Estruturas e Funda\xE7\xF5es em Concreto e Met\xE1licas", "description": "C\xE1lculo e detalhamento de estruturas em concreto armado e met\xE1licas, incluindo funda\xE7\xF5es rasas e profundas, garantindo seguran\xE7a, durabilidade e economia de materiais." }, { "icon": "fas fa-water", "name": "Projeto de Instala\xE7\xF5es Hidrossanit\xE1rias e de \xC1guas Pluviais", "description": "Projetos completos de instala\xE7\xF5es hidrossanit\xE1rias e de \xE1guas pluviais para edifica\xE7\xF5es de todos os portes, com memoriais descritivos e pranchas executivas." }, { "icon": "fas fa-bolt", "name": "Projeto de Instala\xE7\xF5es El\xE9tricas", "description": "Projetos el\xE9tricos residenciais, comerciais e industriais em conformidade com as normas ABNT. Dimensionamento de cargas, quadros el\xE9tricos e memoriais descritivos." }, { "icon": "fas fa-file-alt", "name": "Laudos T\xE9cnicos", "description": "Emiss\xE3o de laudos t\xE9cnicos, ARTs, relat\xF3rios de vistoria e per\xEDcias de engenharia com responsabilidade t\xE9cnica registrada no CREA-MG." }, { "icon": "fas fa-hard-hat", "name": "Acompanhamento de Obras", "description": "Fiscaliza\xE7\xE3o t\xE9cnica presencial e remota de obras, garantindo que a execu\xE7\xE3o siga fielmente os projetos aprovados, com controle de qualidade e registro de etapas construtivas." }, { "icon": "fas fa-tasks", "name": "Gerenciamento de Obras", "description": "Gest\xE3o completa de obras: planejamento, cronograma f\xEDsico-financeiro, controle de custos, coordena\xE7\xE3o de equipes e entrega dentro do prazo e do or\xE7amento definido." }, { "icon": "fas fa-search-dollar", "name": "Financiamento de Constru\xE7\xE3o/Reforma", "description": "Assessoria completa em engenharia, com planejamento e preenchimento de Planilhas de Constru\xE7\xE3o Inicial (PCI), controle de custos e acompanhamento f\xEDsico-financeiro da obra com as Planilhas de Levantamento de Servi\xE7os (PLS), garantindo cumprimento do cronograma e adequa\xE7\xE3o aos recursos." }, { "icon": "fas fa-layer-group", "name": "Compatibiliza\xE7\xE3o de Projetos", "description": "An\xE1lise integrada de todas as disciplinas de projeto \u2014 arquitet\xF4nico, estrutural, el\xE9trico e hidrossanit\xE1rio \u2014 identificando e eliminando interfer\xEAncias antes da execu\xE7\xE3o da obra." }];
const servicesData = {
  label: label$4,
  title: title$4,
  titleHighlight: titleHighlight$4,
  subtitle: subtitle$1,
  items: items$1
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
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
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SchemaOrg.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
async function imageMeta(_ctx, url2) {
  const meta = await _imageMeta(url2).catch((err) => {
    console.error("Failed to get image meta for " + url2, err + "");
    return {
      width: 0,
      height: 0,
      ratio: 0
    };
  });
  return meta;
}
async function _imageMeta(url2) {
  {
    const imageMeta2 = await import('file:///home/runner/work/_temp/my-sites-template/node_modules/image-meta/dist/index.mjs').then((r) => r.imageMeta);
    const data = await fetch(url2).then((res) => res.buffer());
    const metadata = imageMeta2(data);
    if (!metadata) {
      throw new Error(`No metadata could be extracted from the image \`${url2}\`.`);
    }
    const { width, height } = metadata;
    const meta = {
      width,
      height,
      ratio: width && height ? width / height : void 0
    };
    return meta;
  }
}
function parseDensities(input = "") {
  if (input === void 0 || !input.length) {
    return [];
  }
  const densities = /* @__PURE__ */ new Set();
  for (const density of input.split(" ")) {
    const d = Number.parseInt(density.replace("x", ""));
    if (d) {
      densities.add(d);
    }
  }
  return Array.from(densities);
}
function checkDensities(densities) {
  if (densities.length === 0) {
    throw new Error("`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)");
  }
}
function parseSize(input = "") {
  if (typeof input === "number") {
    return input;
  }
  if (typeof input === "string") {
    if (input.replace("px", "").match(/^\d+$/g)) {
      return Number.parseInt(input, 10);
    }
  }
}
function parseSizes(input) {
  const sizes = {};
  if (typeof input === "string") {
    for (const entry of input.split(/[\s,]+/).filter((e) => e)) {
      const s = entry.split(":");
      if (s.length !== 2) {
        sizes["1px"] = s[0].trim();
      } else {
        sizes[s[0].trim()] = s[1].trim();
      }
    }
  } else {
    Object.assign(sizes, input);
  }
  return sizes;
}
function prerenderStaticImages(src = "", srcset = "", event) {
  if (!event) {
    return;
  }
  const paths = [
    src,
    ...srcset.split(", ").map((s) => s.trim().split(" ")[0].trim())
  ].filter((s) => s && s.includes("/_ipx/"));
  if (!paths.length) {
    return;
  }
  appendHeader(event, "x-nitro-prerender", paths.map((p) => encodeURIComponent(p)).join(", "));
}
function createImage(globalOptions) {
  const ctx = {
    options: globalOptions
  };
  const getImage = (input, options = {}) => {
    const image = resolveImage(ctx, input, options);
    if (globalOptions.event) {
      prerenderStaticImages(image.url, void 0, globalOptions.event);
    }
    return image;
  };
  const $img = ((input, modifiers, options) => getImage(input, defu({ modifiers }, options)).url);
  for (const presetName in globalOptions.presets) {
    $img[presetName] = ((source, modifiers, options) => $img(source, modifiers, { ...globalOptions.presets[presetName], ...options }));
  }
  $img.options = globalOptions;
  $img.getImage = getImage;
  $img.getMeta = ((input, options) => getMeta(ctx, input, options));
  $img.getSizes = ((input, options) => getSizes(ctx, input, options));
  ctx.$img = $img;
  return $img;
}
async function getMeta(ctx, input, options) {
  const image = resolveImage(ctx, input, { ...options });
  if (typeof image.getMeta === "function") {
    return await image.getMeta();
  } else {
    return await imageMeta(ctx, image.url);
  }
}
function resolveImage(ctx, input, options) {
  var _a, _b;
  if (input && typeof input !== "string") {
    throw new TypeError(`input must be a string (received ${typeof input}: ${JSON.stringify(input)})`);
  }
  if (!input || input.startsWith("data:")) {
    return {
      url: input
    };
  }
  const { setup, defaults } = getProvider(ctx, options.provider || ctx.options.provider);
  const provider = setup();
  const preset = getPreset(ctx, options.preset);
  input = hasProtocol(input) ? input : withLeadingSlash(input);
  if (!provider.supportsAlias) {
    for (const base in ctx.options.alias) {
      if (input.startsWith(base)) {
        const alias = ctx.options.alias[base];
        if (alias) {
          input = joinURL(alias, input.slice(base.length));
        }
      }
    }
  }
  if (provider.validateDomains && hasProtocol(input)) {
    const inputHost = parseURL(input).host;
    if (!ctx.options.domains.find((d) => d === inputHost)) {
      return {
        url: input
      };
    }
  }
  const _options = defu(options, preset, defaults);
  const resolvedOptions = {
    ..._options,
    modifiers: {
      ..._options.modifiers,
      width: ((_a = _options.modifiers) == null ? void 0 : _a.width) ? parseSize(_options.modifiers.width) : void 0,
      height: ((_b = _options.modifiers) == null ? void 0 : _b.height) ? parseSize(_options.modifiers.height) : void 0
    }
  };
  const image = provider.getImage(input, resolvedOptions, ctx);
  image.format || (image.format = resolvedOptions.modifiers.format || "");
  return image;
}
function getProvider(ctx, name) {
  const provider = ctx.options.providers[name];
  if (!provider) {
    throw new Error("Unknown provider: " + name);
  }
  return provider;
}
function getPreset(ctx, name) {
  if (!name) {
    return {};
  }
  if (!ctx.options.presets[name]) {
    throw new Error("Unknown preset: " + name);
  }
  return ctx.options.presets[name];
}
function getSizes(ctx, input, opts) {
  var _a, _b, _c, _d, _e;
  const preset = getPreset(ctx, opts.preset);
  const merged = defu(opts, preset);
  const width = parseSize((_a = merged.modifiers) == null ? void 0 : _a.width);
  const height = parseSize((_b = merged.modifiers) == null ? void 0 : _b.height);
  const sizes = merged.sizes ? parseSizes(merged.sizes) : {};
  const _densities = (_c = merged.densities) == null ? void 0 : _c.trim();
  const densities = _densities ? parseDensities(_densities) : ctx.options.densities;
  checkDensities(densities);
  const hwRatio = width && height ? height / width : 0;
  const sizeVariants = [];
  const srcsetVariants = [];
  if (Object.keys(sizes).length >= 1) {
    for (const key in sizes) {
      const variant = getSizesVariant(key, String(sizes[key]), height, hwRatio, ctx);
      if (variant === void 0) {
        continue;
      }
      sizeVariants.push({
        size: variant.size,
        screenMaxWidth: variant.screenMaxWidth,
        media: `(max-width: ${variant.screenMaxWidth}px)`
      });
      for (const density of densities) {
        srcsetVariants.push({
          width: variant._cWidth * density,
          src: getVariantSrc(ctx, input, opts, variant, density)
        });
      }
    }
    finaliseSizeVariants(sizeVariants);
  } else {
    for (const density of densities) {
      const key = Object.keys(sizes)[0];
      let variant = key ? getSizesVariant(key, String(sizes[key]), height, hwRatio, ctx) : void 0;
      if (variant === void 0) {
        variant = {
          size: "",
          screenMaxWidth: 0,
          _cWidth: (_d = opts.modifiers) == null ? void 0 : _d.width,
          _cHeight: (_e = opts.modifiers) == null ? void 0 : _e.height
        };
      }
      srcsetVariants.push({
        width: density,
        src: getVariantSrc(ctx, input, opts, variant, density)
      });
    }
  }
  finaliseSrcsetVariants(srcsetVariants);
  const defaultVariant = srcsetVariants[srcsetVariants.length - 1];
  const sizesVal = sizeVariants.length ? sizeVariants.map((v) => `${v.media ? v.media + " " : ""}${v.size}`).join(", ") : void 0;
  const suffix = sizesVal ? "w" : "x";
  const srcsetVal = srcsetVariants.map((v) => `${v.src} ${v.width}${suffix}`).join(", ");
  return {
    sizes: sizesVal,
    srcset: srcsetVal,
    src: defaultVariant == null ? void 0 : defaultVariant.src
  };
}
function getSizesVariant(key, size, height, hwRatio, ctx) {
  const screenMaxWidth = ctx.options.screens && ctx.options.screens[key] || Number.parseInt(key);
  const isFluid = size.endsWith("vw");
  if (!isFluid && /^\d+$/.test(size)) {
    size = size + "px";
  }
  if (!isFluid && !size.endsWith("px")) {
    return void 0;
  }
  let _cWidth = Number.parseInt(size);
  if (!screenMaxWidth || !_cWidth) {
    return void 0;
  }
  if (isFluid) {
    _cWidth = Math.round(_cWidth / 100 * screenMaxWidth);
  }
  const _cHeight = hwRatio ? Math.round(_cWidth * hwRatio) : height;
  return {
    size,
    screenMaxWidth,
    _cWidth,
    _cHeight
  };
}
function getVariantSrc(ctx, input, opts, variant, density) {
  return ctx.$img(
    input,
    {
      ...opts.modifiers,
      width: variant._cWidth ? variant._cWidth * density : void 0,
      height: variant._cHeight ? variant._cHeight * density : void 0
    },
    opts
  );
}
function finaliseSizeVariants(sizeVariants) {
  var _a;
  sizeVariants.sort((v1, v2) => v1.screenMaxWidth - v2.screenMaxWidth);
  let previousMedia = null;
  for (let i = sizeVariants.length - 1; i >= 0; i--) {
    const sizeVariant = sizeVariants[i];
    if (sizeVariant.media === previousMedia) {
      sizeVariants.splice(i, 1);
    }
    previousMedia = sizeVariant.media;
  }
  for (let i = 0; i < sizeVariants.length; i++) {
    sizeVariants[i].media = ((_a = sizeVariants[i + 1]) == null ? void 0 : _a.media) || "";
  }
}
function finaliseSrcsetVariants(srcsetVariants) {
  srcsetVariants.sort((v1, v2) => v1.width - v2.width);
  let previousWidth = null;
  for (let i = srcsetVariants.length - 1; i >= 0; i--) {
    const sizeVariant = srcsetVariants[i];
    if (sizeVariant.width === previousWidth) {
      srcsetVariants.splice(i, 1);
    }
    previousWidth = sizeVariant.width;
  }
}
function defineProvider(setup) {
  let result;
  return () => {
    if (result) {
      return result;
    }
    result = typeof setup === "function" ? setup() : setup;
    return result;
  };
}
const noneRuntime$voBtv2Kh_45Ar_45wZITmto4qeGK2gMSOgI8bebcrg2aGN8 = defineProvider({
  getImage: (url2) => ({ url: url2 })
});
const imageOptions = {
  ...{
    "screens": {
      "sm": 640,
      "md": 768,
      "lg": 1024,
      "xl": 1280,
      "2xl": 1536,
      "xs": 320
    },
    "presets": {},
    "provider": "none",
    "domains": [],
    "alias": {},
    "densities": [
      1,
      2
    ],
    "format": [
      "webp",
      "avif",
      "webp"
    ],
    "quality": 80
  },
  /** @type {"none"} */
  provider: "none",
  providers: {
    ["none"]: { setup: noneRuntime$voBtv2Kh_45Ar_45wZITmto4qeGK2gMSOgI8bebcrg2aGN8, defaults: {} }
  }
};
const useImage = (event) => {
  var _a;
  const config = useRuntimeConfig();
  const nuxtApp = useNuxtApp();
  return nuxtApp.$img || nuxtApp._img || (nuxtApp._img = createImage({
    ...imageOptions,
    event: (_a = nuxtApp.ssrContext) == null ? void 0 : _a.event,
    nuxt: {
      baseURL: config.app.baseURL
    },
    runtimeConfig: config
  }));
};
const useImageProps = (props) => {
  const $img = useImage();
  const providerOptions = computed(() => ({
    provider: props.provider,
    preset: props.preset
  }));
  const normalizedAttrs = computed(() => ({
    width: parseSize(props.width),
    height: parseSize(props.height),
    crossorigin: props.crossorigin === true ? "anonymous" : props.crossorigin || void 0,
    nonce: props.nonce
  }));
  const imageModifiers = computed(() => {
    return {
      ...props.modifiers,
      width: props.width,
      height: props.height,
      format: props.format,
      quality: props.quality || $img.options.quality,
      background: props.background,
      fit: props.fit
    };
  });
  return { providerOptions, normalizedAttrs, imageModifiers };
};
const _sfc_main$9 = {
  __name: "NuxtImg",
  __ssrInlineRender: true,
  props: {
    custom: { type: Boolean, required: false },
    placeholder: { type: [Boolean, String, Number, Array], required: false },
    placeholderClass: { type: String, required: false },
    src: { type: String, required: false },
    format: { type: String, required: false },
    quality: { type: [String, Number], required: false },
    background: { type: String, required: false },
    fit: { type: String, required: false },
    modifiers: { type: Object, required: false },
    preset: { type: String, required: false },
    provider: { type: null, required: false },
    sizes: { type: [String, Object], required: false },
    densities: { type: String, required: false },
    preload: { type: [Boolean, Object], required: false },
    width: { type: [String, Number], required: false },
    height: { type: [String, Number], required: false },
    crossorigin: { type: [String, Boolean], required: false },
    nonce: { type: String, required: false }
  },
  emits: ["load", "error"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const $img = useImage();
    const { providerOptions, normalizedAttrs, imageModifiers } = useImageProps(props);
    const sizes = computed(() => $img.getSizes(props.src, {
      ...providerOptions.value,
      sizes: props.sizes,
      densities: props.densities,
      modifiers: imageModifiers.value
    }));
    const placeholderLoaded = ref(false);
    const attrs = useAttrs();
    const imgAttrs = computed(() => ({
      ...normalizedAttrs.value,
      "data-nuxt-img": "",
      ...!props.placeholder || placeholderLoaded.value ? { sizes: sizes.value.sizes, srcset: sizes.value.srcset } : {},
      ...{ onerror: "this.setAttribute('data-error', 1)" },
      ...attrs
    }));
    const placeholder = computed(() => {
      if (placeholderLoaded.value) {
        return false;
      }
      const placeholder2 = props.placeholder === "" ? [10, 10] : props.placeholder;
      if (!placeholder2) {
        return false;
      }
      if (typeof placeholder2 === "string") {
        return placeholder2;
      }
      const [width = 10, height = width, quality = 50, blur = 3] = Array.isArray(placeholder2) ? placeholder2 : typeof placeholder2 === "number" ? [placeholder2] : [];
      return $img(props.src, {
        ...imageModifiers.value,
        width,
        height,
        quality,
        blur
      }, providerOptions.value);
    });
    const mainSrc = computed(
      () => props.sizes ? sizes.value.src : $img(props.src, imageModifiers.value, providerOptions.value)
    );
    const src = computed(() => placeholder.value || mainSrc.value);
    if (props.preload) {
      const hasMultipleDensities = sizes.value.srcset.includes("x, ");
      const isResponsive = hasMultipleDensities || !!sizes.value.sizes;
      useHead({
        link: [{
          rel: "preload",
          as: "image",
          nonce: props.nonce,
          crossorigin: normalizedAttrs.value.crossorigin,
          href: isResponsive ? sizes.value.src : src.value,
          ...sizes.value.sizes && { imagesizes: sizes.value.sizes },
          ...hasMultipleDensities && { imagesrcset: sizes.value.srcset },
          ...typeof props.preload !== "boolean" && props.preload.fetchPriority ? { fetchpriority: props.preload.fetchPriority } : {}
        }]
      });
    }
    {
      prerenderStaticImages(src.value, sizes.value.srcset, useRequestEvent());
    }
    useNuxtApp().isHydrating;
    const imgEl = useTemplateRef("imgEl");
    __expose({ imgEl });
    return (_ctx, _push, _parent, _attrs) => {
      if (!__props.custom) {
        _push(`<img${ssrRenderAttrs(mergeProps({
          ref_key: "imgEl",
          ref: imgEl,
          class: placeholder.value ? __props.placeholderClass : void 0
        }, imgAttrs.value, { src: src.value }, _attrs))}>`);
      } else {
        ssrRenderSlot(_ctx.$slots, "default", {
          imgAttrs: imgAttrs.value,
          isLoaded: placeholderLoaded.value,
          src: src.value
        }, null, _push, _parent);
      }
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue");
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
      const _component_NuxtImg = _sfc_main$9;
      _push(`<!--[--><nav class="${ssrRenderClass({ scrolled: unref(scrolled) })}"><div class="nav-logo">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtImg, {
              src: unref(logoImage2),
              alt: "ABIT Projetos & Engenharia",
              loading: "eager",
              width: "81",
              height: "52"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtImg, {
                src: unref(logoImage2),
                alt: "ABIT Projetos & Engenharia",
                loading: "eager",
                width: "81",
                height: "52"
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
const description$3 = "Projeto Arquitet\xF4nico \xB7 Projeto de Estruturas e Funda\xE7\xF5es em Concreto e Met\xE1licas \xB7 Projeto de Instala\xE7\xF5es Hidrossanit\xE1rias e de \xC1guas Pluviais \xB7 Projeto de Instala\xE7\xF5es El\xE9tricas \xB7 Laudos T\xE9cnicos \xB7 Acompanhamento de Obras \xB7 Gerenciamento de Obras \xB7 Financiamento de Constru\xE7\xE3o \xB7 Compatibiliza\xE7\xE3o de Projetos.";
const descriptionExtra = "Excel\xEAncia t\xE9cnica e compromisso em cada projeto entregue.";
const primaryBtn = { "label": "Solicitar Or\xE7amento", "icon": "fab fa-whatsapp" };
const secondaryBtn = { "label": "Nossos Servi\xE7os", "href": "#servicos", "icon": "fas fa-arrow-right" };
const stats = [{ "num": "+7", "label": "Anos de Experi\xEAncia" }, { "num": "+2000", "label": "Projetos Entregues" }, { "num": "100%", "label": "Comprometimento" }];
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
      const _component_NuxtImg = _sfc_main$9;
      _push(`<section${ssrRenderAttrs(mergeProps({ id: "hero" }, _attrs))}><div class="hero-bg-grid"></div><div class="hero-bg-glow"></div><div class="hero-content"><div class="hero-text"><p class="hero-eyebrow">${ssrInterpolate(unref(heroData).eyebrow)}</p><h1 class="hero-heading">${ssrInterpolate(unref(heroData).headingLine1)}<br><span>${ssrInterpolate(unref(heroData).headingHighlight)}</span><br> ${ssrInterpolate(unref(heroData).headingLine2)}</h1><p class="hero-sub">${ssrInterpolate(unref(heroData).description)} <br><br> ${ssrInterpolate(unref(heroData).descriptionExtra)}</p><div class="hero-buttons"><a${ssrRenderAttr("href", unref(whatsappUrl))} class="btn-primary" target="_blank" rel="noopener"><i class="${ssrRenderClass(unref(heroData).primaryBtn.icon)}"></i> ${ssrInterpolate(unref(heroData).primaryBtn.label)}</a><a${ssrRenderAttr("href", unref(heroData).secondaryBtn.href)} class="btn-outline">${ssrInterpolate(unref(heroData).secondaryBtn.label)} <i class="${ssrRenderClass(unref(heroData).secondaryBtn.icon)}"></i></a></div><div class="hero-stats"><!--[-->`);
      ssrRenderList(unref(heroData).stats, (stat) => {
        _push(`<div class="stat-card fade-in"><div class="stat-num">${ssrInterpolate(stat.num)}</div><div class="stat-label">${ssrInterpolate(stat.label)}</div></div>`);
      });
      _push(`<!--]--></div></div><div class="hero-visual"><div class="hero-logo-wrap">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: unref(heroData).logoImage,
        alt: "ABIT Projetos & Engenharia",
        fetchpriority: "high",
        loading: "eager",
        preload: true,
        width: "500",
        height: "320",
        sizes: "sm:80vw md:40vw lg:500px"
      }, null, _parent));
      _push(`</div></div></div></section>`);
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
const checklist = ["Projetos entregues com excel\xEAncia t\xE9cnica", "Responsabilidade t\xE9cnica com ART em todos os servi\xE7os", "Atendimento a construtoras, ind\xFAstrias e empresas de m\xE9dio e grande porte", "Plataforma BIM para maior precis\xE3o e compatibiliza\xE7\xE3o de projetos", "Equipe multidisciplinar para projetos integrados"];
const ctaLabel = "Fale Conosco";
const teamPhoto = "/images/quem somos ok.png";
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
      const _component_NuxtImg = _sfc_main$9;
      _push(`<section${ssrRenderAttrs(mergeProps({ id: "sobre" }, _attrs))} data-v-5d9e84d0><div class="section" data-v-5d9e84d0><div class="about-grid" data-v-5d9e84d0><div class="about-img-wrap fade-in" data-v-5d9e84d0>`);
      if (unref(aboutData).teamPhoto) {
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: unref(aboutData).teamPhoto,
          alt: "Equipe ABIT",
          loading: "lazy",
          width: "543",
          height: "724",
          sizes: "sm:100vw md:50vw",
          class: "about-img-real about-img-fade"
        }, null, _parent));
      } else {
        _push(`<div class="about-img-placeholder" data-v-5d9e84d0><i class="fas fa-hard-hat" data-v-5d9e84d0></i><p data-v-5d9e84d0>Adicione uma foto da equipe aqui</p></div>`);
      }
      _push(`<div class="about-accent" data-v-5d9e84d0></div></div><div class="fade-in" style="${ssrRenderStyle({ "transition-delay": "0.15s" })}" data-v-5d9e84d0><div class="section-label" data-v-5d9e84d0>${ssrInterpolate(unref(aboutData).label)}</div><h2 class="section-title" data-v-5d9e84d0>${ssrInterpolate(unref(aboutData).title)} <span data-v-5d9e84d0>${ssrInterpolate(unref(aboutData).titleHighlight)}</span></h2><p style="${ssrRenderStyle({ "font-size": "15px", "line-height": "1.8", "color": "rgba(245,240,232,0.6)", "margin-bottom": "8px" })}" data-v-5d9e84d0>${ssrInterpolate(unref(aboutData).description)}</p><ul class="about-check-list" data-v-5d9e84d0><!--[-->`);
      ssrRenderList(unref(aboutData).checklist, (item) => {
        _push(`<li data-v-5d9e84d0><i class="fas fa-check" data-v-5d9e84d0></i> ${ssrInterpolate(item)}</li>`);
      });
      _push(`<!--]--></ul><a${ssrRenderAttr("href", unref(whatsappUrl))} class="btn-primary" target="_blank" rel="noopener" style="${ssrRenderStyle({ "display": "inline-flex" })}" data-v-5d9e84d0><i class="fab fa-whatsapp" data-v-5d9e84d0></i> ${ssrInterpolate(unref(aboutData).ctaLabel)}</a></div></div></div></section>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AboutSection.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-5d9e84d0"]]);
const label$2 = "Clientes & Parceiros";
const marqueeSpeed = null;
const title$2 = "Clientes que";
const titleHighlight$2 = "Confiam";
const titleEnd$1 = "em N\xF3s";
const subtitle = "Atendemos construtoras, ind\xFAstrias, \xF3rg\xE3os p\xFAblicos e empresas de m\xFAltiplos segmentos com excel\xEAncia t\xE9cnica.";
const logos = [{ "name": "Bradesco", "image": "/images/logos/bradesco_WUPYSON.png", "url": "https://banco.bradesco/html/classic/index.shtm" }, { "name": "Brennand", "image": "/images/logos/bremand.png", "url": "https://cimentonacional.com.br/" }, { "name": "OAB", "image": "/images/logos/OAB OK.png", "url": "https://www.oab.org.br/" }, { "name": "Buildplan", "image": "/images/logos/BUILDPLAN.webp", "url": "https://buildplan.com.br/" }, { "name": "IFTM", "image": "/images/logos/ifmg.png", "url": "https://iftm.edu.br/" }, { "name": "ASUSSA", "image": "/images/logos/ASSUSSA.webp", "url": "" }, { "name": "Arabesca", "image": "/images/logos/ARABESCABRANCO2.png", "url": "https://www.instagram.com/lojarabesca/" }, { "name": "Entre Rios de Minas", "image": "/images/logos/Entreriosdeminas 2.png", "url": "https://www.entreriosdeminas.mg.gov.br/" }, { "name": "Iveco", "image": "/images/logos/iveco.svg", "url": "https://www.iveco.com/brasil/" }, { "name": "Oral Lux Odontologia Integrada", "image": "/images/logos/ORALLUX2.png", "url": "https://www.instagram.com/luxodonto/" }, { "name": "Quality \xD3pticas", "image": "/images/logos/QUALITY-Photoroom.png", "url": "https://qualityopticas.com.br/" }, { "name": "Vida Natus", "image": "/images/logos/NATUS.webp", "url": "https://vidanatus.com.br/" }, { "name": "SICOOB", "image": "/images/logos/LOGO-SICOOB.webp", "url": "https://www.sicoob.com.br/" }, { "name": "LACTALIS", "image": "/images/logos/Lactalis_2023_logo.svg.png", "url": "https://www.lactalis.com.br/" }, { "name": "Ompi", "image": "/images/logos/ompi.png", "url": "https://www.stevanatogroup.com/en/" }, { "name": "Sada", "image": "/images/logos/sada-logo-bg.png", "url": "https://www.gruposada.com.br/nossos-negocios/industria/sada-siderurgia" }, { "name": "Trevo", "image": "/images/logos/trevo.png", "url": "https://trevolacteos.com.br/" }, { "name": "Railoc", "image": "/images/logos/logorailoc.png", "url": "https://railoc.net/" }, { "name": "MG ODONTO Especializada", "image": "/images/logos/MGODONTO.png", "url": "https://mgodontoespecializada.com.br/" }, { "name": "Lago Geradores", "image": "/images/logos/7-ANOS-LOGO.png", "url": "https://lagogeradores.com/" }, { "name": "Autoforjas", "image": "/images/logos/autoforjas.png", "url": "https://https://cieautomotive.com/en/-/plant-forjas-minas/" }, { "name": "Teclemidia", "image": "/images/logos/TECLEMIDIA.png", "url": "https://teclemidia.com/" }, { "name": "OMR", "image": "/images/logos/OMR.png", "url": "https://omrautomotive.com/en/omr-group/the-group-today/omr-componentes-automotivos-ltda/" }, { "name": "SUCESSO", "image": "/images/logos/logo-sucessoadm.png", "url": "https://www.sucessoadministradora.com.br/" }, { "name": "ASK", "image": "/images/logos/ask_industries_logo.jpg", "url": "https://www.askgroup.global/it/" }, { "name": "Blue Garden", "image": "/images/logos/Logo-Blue-Garden-Sete-Lagoas-250px.png", "url": "" }];
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
      const _component_NuxtImg = _sfc_main$9;
      _push(`<section${ssrRenderAttrs(mergeProps({ id: "clientes" }, _attrs))}><div class="clients-wrap"><div class="clients-header fade-in"><div class="section-label">${ssrInterpolate(unref(clientsData).label)}</div><h2 class="section-title">${ssrInterpolate(unref(clientsData).title)} <span>${ssrInterpolate(unref(clientsData).titleHighlight)}</span> ${ssrInterpolate(unref(clientsData).titleEnd)}</h2><p class="section-subtitle">${ssrInterpolate(unref(clientsData).subtitle)}</p></div><div class="clients-marquee-outer fade-in"><div class="clients-marquee" style="${ssrRenderStyle(marqueeStyle)}"><!--[-->`);
      ssrRenderList(unref(doubled), (logo, index) => {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(logo.url ? "a" : "div"), mergeProps({
          key: `${logo.name}-${index}`,
          class: "client-logo-card"
        }, { ref_for: true }, logo.url ? { href: logo.url, target: "_blank", rel: "noopener noreferrer" } : {}), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (logo.image) {
                _push2(ssrRenderComponent(_component_NuxtImg, {
                  src: logo.image,
                  alt: logo.name,
                  loading: "lazy",
                  width: "120",
                  height: "60"
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<div class="client-logo-placeholder"${_scopeId}>${ssrInterpolate(logo.name)}</div>`);
              }
            } else {
              return [
                logo.image ? (openBlock(), createBlock(_component_NuxtImg, {
                  key: 0,
                  src: logo.image,
                  alt: logo.name,
                  loading: "lazy",
                  width: "120",
                  height: "60"
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
      const _component_NuxtImg = _sfc_main$9;
      _push(`<section${ssrRenderAttrs(mergeProps({ id: "instagram" }, _attrs))} data-v-f409c7a1><div class="instagram-wrap" data-v-f409c7a1><div class="instagram-header fade-in" data-v-f409c7a1><div data-v-f409c7a1><div class="section-label" data-v-f409c7a1>${ssrInterpolate(unref(instagramData).label)}</div><h2 class="section-title" data-v-f409c7a1>${ssrInterpolate(unref(instagramData).title)} <span data-v-f409c7a1>${ssrInterpolate(unref(instagramData).titleHighlight)}</span></h2></div><a${ssrRenderAttr("href", unref(instagramData).url)} target="_blank" rel="noopener" class="instagram-link" data-v-f409c7a1><i class="fab fa-instagram" data-v-f409c7a1></i> ${ssrInterpolate(unref(instagramData).handle)}</a></div><div class="instagram-embed-container fade-in" data-v-f409c7a1><div class="${ssrRenderClass([{ "ig-grid-wrap--collapsed": unref(hasMore) && !unref(expanded) }, "ig-grid-wrap"])}" data-v-f409c7a1>`);
      if (unref(activePosts).length) {
        _push(`<div class="instagram-grid" data-v-f409c7a1><!--[-->`);
        ssrRenderList(unref(visiblePosts), (post, index) => {
          _push(`<button class="ig-post" data-v-f409c7a1><img${ssrRenderAttr("src", post.image)}${ssrRenderAttr("alt", `Post ${index + 1} \u2014 ${unref(instagramData).handle}`)} loading="lazy" data-v-f409c7a1><div class="ig-post-overlay" data-v-f409c7a1><i class="fab fa-instagram" data-v-f409c7a1></i></div></button>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="instagram-fallback" data-v-f409c7a1><!--[-->`);
        ssrRenderList(12, (i) => {
          _push(`<div class="ig-placeholder" data-v-f409c7a1><i class="fab fa-instagram" data-v-f409c7a1></i></div>`);
        });
        _push(`<!--]--></div>`);
      }
      if (unref(hasMore) && !unref(expanded)) {
        _push(`<button class="ig-expand-trigger" aria-label="Ver mais fotos" data-v-f409c7a1><span class="ig-expand-gradient" data-v-f409c7a1></span><span class="ig-expand-icon" data-v-f409c7a1><i class="fas fa-chevron-down" data-v-f409c7a1></i></span></button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      if (unref(hasMore) && unref(expanded)) {
        _push(`<div class="ig-collapse-wrap" data-v-f409c7a1><button class="ig-collapse-trigger" aria-label="Ocultar fotos" data-v-f409c7a1><span class="ig-expand-icon ig-expand-icon--up" data-v-f409c7a1><i class="fas fa-chevron-up" data-v-f409c7a1></i></span></button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="instagram-cta fade-in" data-v-f409c7a1><a${ssrRenderAttr("href", unref(instagramData).url)} target="_blank" rel="noopener" class="btn-outline" data-v-f409c7a1><i class="fab fa-instagram" data-v-f409c7a1></i> Veja perfil completo </a></div></div>`);
      ssrRenderTeleport(_push, (_push2) => {
        if (unref(lightboxOpen)) {
          _push2(`<div class="lb-overlay" data-v-f409c7a1><button class="lb-close" aria-label="Fechar" data-v-f409c7a1><i class="fas fa-times" data-v-f409c7a1></i></button>`);
          if (unref(activePosts).length > 1) {
            _push2(`<button class="lb-arrow lb-arrow--prev" aria-label="Anterior" data-v-f409c7a1><i class="fas fa-chevron-left" data-v-f409c7a1></i></button>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`<div class="lb-content" data-v-f409c7a1>`);
          _push2(ssrRenderComponent(_component_NuxtImg, {
            src: unref(activePosts)[unref(lightboxIndex)].image,
            alt: `Post ${unref(lightboxIndex) + 1} \u2014 ${unref(instagramData).handle}`,
            loading: "lazy",
            sizes: "90vw"
          }, null, _parent));
          _push2(`</div>`);
          if (unref(activePosts).length > 1) {
            _push2(`<button class="lb-arrow lb-arrow--next" aria-label="Pr\xF3ximo" data-v-f409c7a1><i class="fas fa-chevron-right" data-v-f409c7a1></i></button>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`<div class="lb-footer" data-v-f409c7a1><span class="lb-counter" data-v-f409c7a1>${ssrInterpolate(unref(lightboxIndex) + 1)} / ${ssrInterpolate(unref(activePosts).length)}</span>`);
          if (unref(activePosts)[unref(lightboxIndex)].url) {
            _push2(`<a${ssrRenderAttr("href", unref(activePosts)[unref(lightboxIndex)].url)} target="_blank" rel="noopener" class="lb-ig-link" data-v-f409c7a1><i class="fab fa-instagram" data-v-f409c7a1></i> Ver no Instagram </a>`);
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
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-f409c7a1"]]);
const label = "Fale conosco";
const title = "Vamos";
const titleHighlight = "Trabalhar";
const titleEnd = "Juntos?";
const description$1 = "Entre em contato para solicitar um or\xE7amento. Nossa equipe responde rapidamente.";
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
const servicesColumn = { "title": "Servi\xE7os", "links": [{ "label": "Projeto Arquitet\xF4nico", "href": "#servicos" }, { "label": "Estruturas e Funda\xE7\xF5es", "href": "#servicos" }, { "label": "Instala\xE7\xF5es Hidrossanit\xE1rias", "href": "#servicos" }, { "label": "Instala\xE7\xF5es El\xE9tricas", "href": "#servicos" }, { "label": "Laudos T\xE9cnicos", "href": "#servicos" }, { "label": "Acompanhamento de Obras", "href": "#servicos" }, { "label": "Gerenciamento de Obras", "href": "#servicos" }, { "label": "Financiamento de Constru\xE7\xE3o/Reforma", "href": "#servicos" }, { "label": "Compatibiliza\xE7\xE3o de Projetos", "href": "#servicos" }] };
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
      const _component_NuxtImg = _sfc_main$9;
      _push(`<footer${ssrRenderAttrs(_attrs)}><div class="footer-inner"><div><div class="footer-logo">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: unref(footerData).logoImage,
        alt: "ABIT Projetos & Engenharia",
        loading: "lazy",
        width: "81",
        height: "52"
      }, null, _parent));
      _push(`</div><p class="footer-desc">${ssrInterpolate(unref(footerData).description)}</p><div class="footer-socials"><!--[-->`);
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
      const _component_SchemaOrg = _sfc_main$a;
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
//# sourceMappingURL=index-21z_V5zQ.mjs.map
