import { _ as _export_sfc, a as __nuxt_component_0$1, e as _sfc_main$7 } from './server.mjs';
import { _ as _sfc_main$9, a as _sfc_main$8, b as _sfc_main$4 } from './AppOffers-CVxyD_OS.mjs';
import { mergeProps, withCtx, createTextVNode, openBlock, createBlock, Fragment, renderList, ref, unref, computed, useSSRContext } from 'file://C:/nuxt/lenny2026/nuxt-lenny-art/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'file://C:/nuxt/lenny2026/nuxt-lenny-art/node_modules/vue/server-renderer/index.mjs';
import 'file://C:/nuxt/lenny2026/nuxt-lenny-art/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file://C:/nuxt/lenny2026/nuxt-lenny-art/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/nuxt/lenny2026/nuxt-lenny-art/node_modules/h3/dist/index.mjs';
import 'file://C:/nuxt/lenny2026/nuxt-lenny-art/node_modules/ufo/dist/index.mjs';
import 'file://C:/nuxt/lenny2026/nuxt-lenny-art/node_modules/destr/dist/index.mjs';
import '../_/nitro.mjs';
import 'file://C:/nuxt/lenny2026/nuxt-lenny-art/node_modules/nitropack/node_modules/hookable/dist/index.mjs';
import 'file://C:/nuxt/lenny2026/nuxt-lenny-art/node_modules/node-mock-http/dist/index.mjs';
import 'file://C:/nuxt/lenny2026/nuxt-lenny-art/node_modules/unstorage/dist/index.mjs';
import 'file://C:/nuxt/lenny2026/nuxt-lenny-art/node_modules/unstorage/drivers/fs.mjs';
import 'file:///C:/nuxt/lenny2026/nuxt-lenny-art/node_modules/@nuxt/nitro-server/dist/runtime/utils/cache-driver.js';
import 'file://C:/nuxt/lenny2026/nuxt-lenny-art/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/nuxt/lenny2026/nuxt-lenny-art/node_modules/ohash/dist/index.mjs';
import 'file://C:/nuxt/lenny2026/nuxt-lenny-art/node_modules/klona/dist/index.mjs';
import 'file://C:/nuxt/lenny2026/nuxt-lenny-art/node_modules/defu/dist/defu.mjs';
import 'file://C:/nuxt/lenny2026/nuxt-lenny-art/node_modules/scule/dist/index.mjs';
import 'file://C:/nuxt/lenny2026/nuxt-lenny-art/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/nuxt/lenny2026/nuxt-lenny-art/node_modules/pathe/dist/index.mjs';
import 'file://C:/nuxt/lenny2026/nuxt-lenny-art/node_modules/unhead/dist/server.mjs';
import 'file://C:/nuxt/lenny2026/nuxt-lenny-art/node_modules/devalue/index.js';
import 'file://C:/nuxt/lenny2026/nuxt-lenny-art/node_modules/unhead/dist/utils.mjs';
import 'file://C:/nuxt/lenny2026/nuxt-lenny-art/node_modules/hookable/dist/index.mjs';
import 'file://C:/nuxt/lenny2026/nuxt-lenny-art/node_modules/unctx/dist/index.mjs';
import 'file://C:/nuxt/lenny2026/nuxt-lenny-art/node_modules/pinia/dist/pinia.prod.cjs';
import 'file://C:/nuxt/lenny2026/nuxt-lenny-art/node_modules/vue-router/vue-router.node.mjs';
import 'file://C:/nuxt/lenny2026/nuxt-lenny-art/node_modules/perfect-debounce/dist/index.mjs';
import 'file://C:/nuxt/lenny2026/nuxt-lenny-art/node_modules/@vue/shared/dist/shared.cjs.prod.js';
import 'file://C:/nuxt/lenny2026/nuxt-lenny-art/node_modules/vee-validate/dist/vee-validate.mjs';
import 'file://C:/nuxt/lenny2026/nuxt-lenny-art/node_modules/@vee-validate/rules/dist/vee-validate-rules.mjs';
import 'file://C:/nuxt/lenny2026/nuxt-lenny-art/node_modules/@vee-validate/i18n/dist/vee-validate-i18n.mjs';
import './FieldCheck-CiLyCccF.mjs';

const _sfc_main$3 = {
  __name: "AppTable",
  __ssrInlineRender: true,
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    const props = __props;
    const headers = computed(() => Array.isArray(props.data.headers) ? props.data.headers : []);
    const rows = computed(() => Array.isArray(props.data.data) ? props.data.data : []);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<table${ssrRenderAttrs(mergeProps({ class: "app-table" }, _attrs))}><thead class="app-table__head"><tr class="app-table__head-tr"><th class="app-table__th"></th><!--[-->`);
      ssrRenderList(unref(headers), (th, thIndex) => {
        _push(`<th class="app-table__th">${ssrInterpolate(th)}</th>`);
      });
      _push(`<!--]--></tr></thead><tbody class="app-table__body"><!--[-->`);
      ssrRenderList(unref(rows), (tr, trIndex) => {
        _push(`<tr class="app-table__tr"><th class="app-table__body-th">${ssrInterpolate(tr.header)}</th><!--[-->`);
        ssrRenderList(tr.values, (td, tdIndex) => {
          _push(`<td class="app-table__td">`);
          if (td && typeof td === "boolean") {
            _push(`<span class="app-table__ok"></span>`);
          } else {
            _push(`<!--[-->${ssrInterpolate(td)}<!--]-->`);
          }
          _push(`</td>`);
        });
        _push(`<!--]--></tr>`);
      });
      _push(`<!--]--></tbody><tfoot class="app-table__footer"><tr class="app-table__footer-tr"><!--[-->`);
      ssrRenderList(unref(headers), (th, thIndex) => {
        _push(`<th class="app-table__footer-th">${ssrInterpolate(th)}</th>`);
      });
      _push(`<!--]--></tr></tfoot></table>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/AppTable.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "AppServices",
  __ssrInlineRender: true,
  setup(__props) {
    const tarifs = ref({
      headers: ["\u0422\u0430\u0440\u0438\u0444\xABLight\xBB", "\u0422\u0430\u0440\u0438\u0444 \xABPromo\xBB", "\u0422\u0430\u0440\u0438\u0444 \xABAll stars\xBB"],
      data: [
        {
          header: "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0437\u0430 \u0447\u0430\u0441",
          values: ["1 000 \u20BD", "3 000 \u20BD", "\u043E\u0442 6 000 \u20BD"]
        },
        {
          header: "\u0412\u0435\u0434\u0443\u0449\u0438\u0439 \u043C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u044F",
          values: ["", true, true]
        },
        {
          header: "\u0424\u043E\u0442\u043E\u0441\u044A\u0435\u043C\u043A\u0430",
          values: [true, true, true]
        },
        {
          header: "\u0412\u0438\u0434\u0435\u043E\u0441\u044A\u0435\u043C\u043A\u0430",
          values: ["", "", true]
        },
        {
          header: "\u041E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F \u043F\u0438\u0442\u0430\u043D\u0438\u044F",
          values: ["", true, true]
        },
        {
          header: "\u0414\u0435\u043A\u043E\u0440",
          values: ["", "", true]
        },
        {
          header: "\u0417\u0432\u0443\u043A\u043E\u0432\u043E\u0435 \u0441\u043E\u043F\u0440\u043E\u0432\u043E\u0436\u0434\u0435\u043D\u0438\u0435",
          values: ["", true, true]
        },
        {
          header: "\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043E\u0441\u0432\u0435\u0449\u0435\u043D\u0438\u0435",
          values: ["", "", true]
        },
        {
          header: "\u041A\u043B\u0438\u043D\u0438\u043D\u0433",
          values: ["", "", true]
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppTable = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "app-services" }, _attrs))}><h2 class="app-services__title section-title section-title--sub"> \u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0443\u0441\u043B\u0443\u0433\u0438 </h2><p class="app-services__description"> \u041F\u0435\u0440\u0435\u0434 \u0437\u0430\u043F\u0443\u0441\u043A\u043E\u043C \u043F\u0440\u043E\u0435\u043A\u0442\u0430, \u043C\u044B \u043F\u043E\u0434\u0433\u043E\u0442\u0430\u0432\u043B\u0438\u0432\u0430\u0435\u043C \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u0443\u044E \u0441\u043C\u0435\u0442\u0443 \u0438 \u0441\u043E\u0433\u043B\u0430\u0441\u0443\u0435\u043C \u0435\u0435 \u0441 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u043C. \u0423\u0431\u0435\u0434\u0438\u0432\u0448\u0438\u0441\u044C, \u0447\u0442\u043E \u0432\u0441\u0435 \u043F\u043E\u0436\u0435\u043B\u0430\u043D\u0438\u044F \u0443\u0447\u0442\u0435\u043D\u044B \u0438 \u043C\u044B \u043C\u043E\u0436\u0435\u043C \u043F\u0440\u0438\u0441\u0442\u0443\u043F\u0430\u0442\u044C \u043A \u0440\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438 \u043F\u0440\u043E\u0435\u043A\u0442\u0430, \u043D\u0430\u0447\u0438\u043D\u0430\u0435\u0442\u0441\u044F \u0441\u043B\u043E\u0436\u043D\u0430\u044F, \u043D\u043E \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u0430\u044F \u0440\u0430\u0431\u043E\u0442\u0430, \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u043C \u043A\u043E\u0442\u043E\u0440\u043E\u0439 \u0431\u0443\u0434\u0435\u0442 \u043F\u0440\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u0432\u0430\u0448\u0435\u0433\u043E \u043C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u044F \u043D\u0430 \u0432\u044B\u0441\u0448\u0435\u043C \u0443\u0440\u043E\u0432\u043D\u0435. </p>`);
      _push(ssrRenderComponent(_component_AppTable, {
        data: unref(tarifs),
        class: "app-services__table"
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/AppServices.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_SvgIcon = _sfc_main$7;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "app-info" }, _attrs))}><div class="app-info__wrapper"><ul class="app-info__list"><li class="app-info__item"><div class="app-info__item-mark">`);
  _push(ssrRenderComponent(_component_SvgIcon, {
    class: "app-info__item-icon",
    width: "24",
    height: "24",
    name: "price"
  }, null, _parent));
  _push(`</div><div class="app-info__item-content"><h4 class="app-info__item-title"> \u0426\u0435\u043D\u044B </h4><div class="app-info__item-info"> \u0426\u0435\u043D\u044B, \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u0435 \u043D\u0430 \u0441\u0430\u0439\u0442\u0435 \u043D\u043E\u0441\u044F\u0442 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440. \u041C\u044B \u043F\u0440\u0438\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043C\u0441\u044F \u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043F\u043E\u0434\u0445\u043E\u0434\u0430 \u0432 \u0440\u0430\u0431\u043E\u0442\u0435 \u0441 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u043C. </div></div></li><li class="app-info__item"><div class="app-info__item-mark">`);
  _push(ssrRenderComponent(_component_SvgIcon, {
    class: "app-info__item-icon",
    width: "24",
    height: "24",
    name: "phone"
  }, null, _parent));
  _push(`</div><div class="app-info__item-content"><h4 class="app-info__item-title"> \u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B </h4><div class="app-info__item-info"> \u041E\u0442\u0434\u0435\u043B \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438 \u043C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u0439 </div><a href="tel:+73822907256" class="app-info__item-info">8(3822) 90-72-56</a><a href="mailto:idat@tusur.ru" class="app-info__item-info"> idat@tusur.ru </a></div></li><li class="app-info__item"><div class="app-info__item-mark">`);
  _push(ssrRenderComponent(_component_SvgIcon, {
    class: "app-info__item-icon",
    width: "24",
    height: "24",
    name: "advantage"
  }, null, _parent));
  _push(`</div><div class="app-info__item-content"><h4 class="app-info__item-title"> \u041F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u043E </h4><div class="app-info__item-info"> \u041C\u044B \u0438\u043C\u0435\u0435\u043C \u0432\u0441\u0435 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438 \u0434\u043B\u044F \u0442\u043E\u0433\u043E, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u043C\u043E\u0447\u044C \u043A\u0430\u043A \u043C\u0430\u043B\u043E\u043C\u0443 \u0431\u0438\u0437\u043D\u0435\u0441\u0443 \u0438 \u043C\u043E\u043B\u043E\u0434\u044B\u043C \u0442\u0430\u043B\u0430\u043D\u0442\u0430\u043C, \u0442\u0430\u043A \u0438 \u0431\u043E\u043B\u044C\u0448\u0438\u043C \u043A\u043E\u0440\u043F\u043E\u0440\u0430\u0446\u0438\u044F\u043C \u0438 \u0445\u043E\u043B\u0434\u0438\u043D\u0433\u0430\u043C. </div></div></li></ul></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/AppInfo.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]), { __name: "AppInfo" });
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  const _component_AppListing = _sfc_main$9;
  const _component_EventCard = _sfc_main$8;
  const _component_AppServices = _sfc_main$2;
  const _component_AppOffers = _sfc_main$4;
  const _component_AppInfo = __nuxt_component_5;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "events" }, _attrs))}><div class="events__breadcrumbs">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "events__link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u0413\u043B\u0430\u0432\u043D\u0430\u044F`);
      } else {
        return [
          createTextVNode("\u0413\u043B\u0430\u0432\u043D\u0430\u044F")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<span class="events__separator">/</span><span class="events__current">\u041C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u044F</span></div>`);
  _push(ssrRenderComponent(_component_AppListing, {
    title: "\u041C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u044F",
    class: "events__listing",
    moreBtn: true,
    url: "http://localhost:3000/json/events.json"
  }, {
    default: withCtx(({ list }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList(list, (card) => {
          _push2(ssrRenderComponent(_component_EventCard, {
            key: card.slug,
            data: card,
            class: "app-listing__card"
          }, null, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList(list, (card) => {
            return openBlock(), createBlock(_component_EventCard, {
              key: card.slug,
              data: card,
              class: "app-listing__card"
            }, null, 8, ["data"]);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_AppServices, { class: "events__services" }, null, _parent));
  _push(ssrRenderComponent(_component_AppOffers, { class: "events__offers" }, null, _parent));
  _push(ssrRenderComponent(_component_AppInfo, { class: "events__info" }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/events/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-VJz-fdRA.mjs.map
