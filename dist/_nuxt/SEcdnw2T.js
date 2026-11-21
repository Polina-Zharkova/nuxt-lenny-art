import { o as openBlock, c as createElementBlock, a as createBaseVNode, F as Fragment, r as renderList, t as toDisplayString, i as unref, d as createTextVNode, j as computed, b as createVNode, l as ref, _ as _export_sfc, v as _sfc_main$4, h as createStaticVNode, w as withCtx, e as __nuxt_component_0, f as createBlock } from "./BD28x2iU.js";
import { _ as _sfc_main$5, a as _sfc_main$6, b as _sfc_main$7 } from "./iNiJ8d-C.js";
import "./CUmg6egw.js";
import "./DE1g-VdT.js";
const _hoisted_1$3 = { class: "app-table" };
const _hoisted_2$2 = { class: "app-table__head" };
const _hoisted_3$1 = { class: "app-table__head-tr" };
const _hoisted_4$1 = { class: "app-table__body" };
const _hoisted_5$1 = { class: "app-table__body-th" };
const _hoisted_6$1 = {
  key: 0,
  class: "app-table__ok"
};
const _hoisted_7$1 = { class: "app-table__footer" };
const _hoisted_8$1 = { class: "app-table__footer-tr" };
const _sfc_main$3 = {
  __name: "AppTable",
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
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("table", _hoisted_1$3, [
        createBaseVNode("thead", _hoisted_2$2, [
          createBaseVNode("tr", _hoisted_3$1, [
            _cache[0] || (_cache[0] = createBaseVNode("th", { class: "app-table__th" }, null, -1)),
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(headers), (th, thIndex) => {
              return openBlock(), createElementBlock("th", {
                key: thIndex,
                class: "app-table__th"
              }, toDisplayString(th), 1);
            }), 128))
          ])
        ]),
        createBaseVNode("tbody", _hoisted_4$1, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(rows), (tr, trIndex) => {
            return openBlock(), createElementBlock("tr", {
              key: trIndex,
              class: "app-table__tr"
            }, [
              createBaseVNode("th", _hoisted_5$1, toDisplayString(tr.header), 1),
              (openBlock(true), createElementBlock(Fragment, null, renderList(tr.values, (td, tdIndex) => {
                return openBlock(), createElementBlock("td", {
                  key: tdIndex,
                  class: "app-table__td"
                }, [
                  td && typeof td === "boolean" ? (openBlock(), createElementBlock("span", _hoisted_6$1)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                    createTextVNode(toDisplayString(td), 1)
                  ], 64))
                ]);
              }), 128))
            ]);
          }), 128))
        ]),
        createBaseVNode("tfoot", _hoisted_7$1, [
          createBaseVNode("tr", _hoisted_8$1, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(headers), (th, thIndex) => {
              return openBlock(), createElementBlock("th", {
                key: thIndex,
                class: "app-table__footer-th"
              }, toDisplayString(th), 1);
            }), 128))
          ])
        ])
      ]);
    };
  }
};
const _hoisted_1$2 = { class: "app-services" };
const _sfc_main$2 = {
  __name: "AppServices",
  setup(__props) {
    const tarifs = ref({
      headers: ["Тариф«Light»", "Тариф «Promo»", "Тариф «All stars»"],
      data: [
        {
          header: "Стоимость за час",
          values: ["1 000 ₽", "3 000 ₽", "от 6 000 ₽"]
        },
        {
          header: "Ведущий мероприятия",
          values: ["", true, true]
        },
        {
          header: "Фотосъемка",
          values: [true, true, true]
        },
        {
          header: "Видеосъемка",
          values: ["", "", true]
        },
        {
          header: "Организация питания",
          values: ["", true, true]
        },
        {
          header: "Декор",
          values: ["", "", true]
        },
        {
          header: "Звуковое сопровождение",
          values: ["", true, true]
        },
        {
          header: "Дополнительное освещение",
          values: ["", "", true]
        },
        {
          header: "Клининг",
          values: ["", "", true]
        }
      ]
    });
    return (_ctx, _cache) => {
      const _component_AppTable = _sfc_main$3;
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        _cache[0] || (_cache[0] = createBaseVNode("h2", { class: "app-services__title section-title section-title--sub" }, " Дополнительные услуги ", -1)),
        _cache[1] || (_cache[1] = createBaseVNode("p", { class: "app-services__description" }, " Перед запуском проекта, мы подготавливаем подробную смету и согласуем ее с клиентом. Убедившись, что все пожелания учтены и мы можем приступать к реализации проекта, начинается сложная, но интересная работа, результатом которой будет проведение вашего мероприятия на высшем уровне. ", -1)),
        createVNode(_component_AppTable, {
          data: unref(tarifs),
          class: "app-services__table"
        }, null, 8, ["data"])
      ]);
    };
  }
};
const _sfc_main$1 = {};
const _hoisted_1$1 = { class: "app-info" };
const _hoisted_2$1 = { class: "app-info__wrapper" };
const _hoisted_3 = { class: "app-info__list" };
const _hoisted_4 = { class: "app-info__item" };
const _hoisted_5 = { class: "app-info__item-mark" };
const _hoisted_6 = { class: "app-info__item" };
const _hoisted_7 = { class: "app-info__item-mark" };
const _hoisted_8 = { class: "app-info__item" };
const _hoisted_9 = { class: "app-info__item-mark" };
function _sfc_render$1(_ctx, _cache) {
  const _component_SvgIcon = _sfc_main$4;
  return openBlock(), createElementBlock("section", _hoisted_1$1, [
    createBaseVNode("div", _hoisted_2$1, [
      createBaseVNode("ul", _hoisted_3, [
        createBaseVNode("li", _hoisted_4, [
          createBaseVNode("div", _hoisted_5, [
            createVNode(_component_SvgIcon, {
              class: "app-info__item-icon",
              width: "24",
              height: "24",
              name: "price"
            })
          ]),
          _cache[0] || (_cache[0] = createBaseVNode("div", { class: "app-info__item-content" }, [
            createBaseVNode("h4", { class: "app-info__item-title" }, " Цены "),
            createBaseVNode("div", { class: "app-info__item-info" }, " Цены, указанные на сайте носят информационный характер. Мы придерживаемся индивидуального подхода в работе с клиентом. ")
          ], -1))
        ]),
        createBaseVNode("li", _hoisted_6, [
          createBaseVNode("div", _hoisted_7, [
            createVNode(_component_SvgIcon, {
              class: "app-info__item-icon",
              width: "24",
              height: "24",
              name: "phone"
            })
          ]),
          _cache[1] || (_cache[1] = createStaticVNode('<div class="app-info__item-content"><h4 class="app-info__item-title"> Контакты </h4><div class="app-info__item-info"> Отдел организации мероприятий </div><a href="tel:+73822907256" class="app-info__item-info">8(3822) 90-72-56</a><a href="mailto:idat@tusur.ru" class="app-info__item-info"> idat@tusur.ru </a></div>', 1))
        ]),
        createBaseVNode("li", _hoisted_8, [
          createBaseVNode("div", _hoisted_9, [
            createVNode(_component_SvgIcon, {
              class: "app-info__item-icon",
              width: "24",
              height: "24",
              name: "advantage"
            })
          ]),
          _cache[2] || (_cache[2] = createBaseVNode("div", { class: "app-info__item-content" }, [
            createBaseVNode("h4", { class: "app-info__item-title" }, " Преимущество "),
            createBaseVNode("div", { class: "app-info__item-info" }, " Мы имеем все возможности для того, чтобы помочь как малому бизнесу и молодым талантам, так и большим корпорациям и холдингам. ")
          ], -1))
        ])
      ])
    ])
  ]);
}
const __nuxt_component_5 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["render", _sfc_render$1]]), { __name: "AppInfo" });
const _sfc_main = {};
const _hoisted_1 = { class: "events" };
const _hoisted_2 = { class: "events__breadcrumbs" };
function _sfc_render(_ctx, _cache) {
  const _component_NuxtLink = __nuxt_component_0;
  const _component_EventCard = _sfc_main$6;
  const _component_AppListing = _sfc_main$5;
  const _component_AppServices = _sfc_main$2;
  const _component_AppOffers = _sfc_main$7;
  const _component_AppInfo = __nuxt_component_5;
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      createVNode(_component_NuxtLink, {
        to: "/",
        class: "events__link"
      }, {
        default: withCtx(() => [..._cache[0] || (_cache[0] = [
          createTextVNode("Главная", -1)
        ])]),
        _: 1
      }),
      _cache[1] || (_cache[1] = createBaseVNode("span", { class: "events__separator" }, "/", -1)),
      _cache[2] || (_cache[2] = createBaseVNode("span", { class: "events__current" }, "Мероприятия", -1))
    ]),
    createVNode(_component_AppListing, {
      title: "Мероприятия",
      class: "events__listing",
      moreBtn: true,
      url: "http://localhost:3000/json/events.json"
    }, {
      default: withCtx(({ list }) => [
        (openBlock(true), createElementBlock(Fragment, null, renderList(list, (card) => {
          return openBlock(), createBlock(_component_EventCard, {
            key: card.slug,
            data: card,
            class: "app-listing__card"
          }, null, 8, ["data"]);
        }), 128))
      ]),
      _: 1
    }),
    createVNode(_component_AppServices, { class: "events__services" }),
    createVNode(_component_AppOffers, { class: "events__offers" }),
    createVNode(_component_AppInfo, { class: "events__info" })
  ]);
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  index as default
};
//# sourceMappingURL=SEcdnw2T.js.map
