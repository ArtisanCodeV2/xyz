import { computed as a, createElementBlock as r, openBlock as i, normalizeClass as c, renderSlot as u } from "vue";
const d = {
  __name: "ButtonDefault",
  props: {
    size: {
      type: String,
      default: "",
      validator: (e) => ["", "sm", "lg"].includes(e)
    },
    outline: {
      type: Boolean,
      default: !1
    },
    class: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "primary",
      validator: (e) => [
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
        "light",
        "dark",
        "link"
      ].includes(e)
    }
  },
  setup(e) {
    const t = e, o = a(() => {
      const n = "btn", s = t.size ? `btn-${t.size}` : "", l = t.outline ? `btn-outline-${t.type}` : `btn-${t.type}`;
      return [n, s, l, t.class].filter(Boolean).join(" ");
    });
    return (n, s) => (i(), r("button", {
      class: c(o.value)
    }, [
      u(n.$slots, "default")
    ], 2));
  }
};
export {
  d as ButtonDefault
};
