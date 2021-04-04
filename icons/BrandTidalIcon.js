import _mergeJSXProps from "@vue/babel-helper-vue-jsx-merge-props";
export default {
  name: 'BrandTidalIcon',
  props: {
    size: {
      type: String,
      default: '24'
    }
  },
  functional: true,

  render(h, ctx) {
    const size = parseInt(ctx.props.size) + 'px';
    const attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      "attrs": {
        "xmlns": "http://www.w3.org/2000/svg",
        "width": "24",
        "height": "24",
        "viewBox": "0 0 24 24",
        "stroke-width": "2",
        "stroke": "currentColor",
        "fill": "none",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "icon icon-tabler icon-tabler-brand-tidal"
    }, ctx.data]), ["   ", h("path", {
      "attrs": {
        "stroke": "none",
        "d": "M0 0h24v24H0z",
        "fill": "none"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M12 7l-2.5 2.5l2.5 2.5l2.5 -2.5z"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M12 14l-2.5 2.5l2.5 2.5l2.5 -2.5z"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M19 7l-2.5 2.5l2.5 2.5l2.5 -2.5z"
      }
    }), "   ", h("path", {
      "attrs": {
        "d": "M5 7l-2.5 2.5l2.5 2.5l2.5 -2.5z"
      }
    }), " "]);
  }

};