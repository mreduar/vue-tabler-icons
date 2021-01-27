import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'CurrencyBahrainiIcon',
  props: {
    size: {
      type: String,
      default: '24'
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        "stroke-width": "2",
        stroke: "currentColor",
        fill: "none",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "icon icon-tabler icon-tabler-currency-bahraini"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M3 10v1a4 4 0 0 0 4 4h2a2 2 0 0 0 2 -2v-3"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M7 19.01v-.01"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M14 15.01v-.01"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M17 15h2.004a2 2 0 0 0 1.649 -3.131l-2.653 -3.869"
      }
    }), " "]);
  }
};