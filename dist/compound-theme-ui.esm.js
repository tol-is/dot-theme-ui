import { forwardRef, createElement, useContext, Fragment, createContext } from 'react';
import { jsx } from 'theme-ui';

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var tags = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr', 'webview', 'animate', 'circle', 'clipPath', 'defs', 'desc', 'ellipse', 'feBlend', 'feColorMatrix', 'feComponentTransfer', 'feComposite', 'feConvolveMatrix', 'feDiffuseLighting', 'feDisplacementMap', 'feDistantLight', 'feDropShadow', 'feFlood', 'feFuncA', 'feFuncB', 'feFuncG', 'feFuncR', 'feGaussianBlur', 'feImage', 'feMerge', 'feMergeNode', 'feMorphology', 'feOffset', 'fePointLight', 'feSpecularLighting', 'feSpotLight', 'feTile', 'feTurbulence', 'filter', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'marker', 'mask', 'metadata', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'switch', 'symbol', 'text', 'textPath', 'tspan', 'use', 'view'];

var UIContext =
/*#__PURE__*/
createContext({});
/**
 * Create UI Component Higher order function
 */


function createUIComponent(component) {
  var UiComponent = function UiComponent(props, ref) {
    // const { vx = {}, orphan = false, root = false } = props;
    // const hasVariantsX = isEmptyObject(vx);
    var _useUIContext = useUIContext(props),
        context = _useUIContext.context;
 // populate jsx props


    var jsxProps = _extends({}, props, {
      ref: ref
    });

    return createElement(UIContext.Provider, {
      value: context
    }, jsx(component, jsxProps));
  };

  return forwardRef(UiComponent);
}

var useUIContext = function useUIContext(props) {
  var _props$vx = props.vx,
      vx = _props$vx === void 0 ? {} : _props$vx,
      _props$use = props.use,
      use = _props$use === void 0 ? {} : _props$use,
      _props$root = props.root,
      root = _props$root === void 0 ? false : _props$root; // get parent context

  var parentContext = useContext(UIContext); // don't use parent context if root

  var context = root ? {} : _extends({}, parentContext); // using only its own vx keys,
  // look for applied props and

  Object.keys(vx).forEach(function (k) {
    if (use.hasOwnProperty(k)) {
      context[k] = props[k];
    }
  });
  return {
    context: context,
    parentContext: parentContext
  };
};

var UIFragment =
/*#__PURE__*/
forwardRef(function (props, ref) {
  var _useUIContext2 = useUIContext(props),
      context = _useUIContext2.context;

  return createElement(UIContext.Provider, {
    value: context
  }, createElement(Fragment, null, props.children));
});
var ui =
/*#__PURE__*/
tags.reduce(function (res, tag) {
  res[tag] = createUIComponent(tag);
  return res;
}, {
  as: function as(_ref) {
    var tag = _ref.tag,
        rest = _objectWithoutPropertiesLoose(_ref, ["tag"]);

    var Tag = createUIComponent(tag);
    return createElement(Tag, Object.assign({}, rest));
  },
  custom: createUIComponent,
  fragment: UIFragment
});

export { ui };
//# sourceMappingURL=compound-theme-ui.esm.js.map
