import * as React from 'react';
import { jsx } from 'theme-ui';

import { tags } from './tags';

const UIContext = React.createContext({});

const isEmptyObject = obj =>
  Object.entries(obj).length === 0 && obj.constructor === Object;

const getVariants = vx => use => {
  if (!vx) return ``;
  let sx = {};

  // for (const key in vx) {
  //   const variant = vx[key];
  //   const propsValue = props[key];
  //   if (is.array(variant)) {
  //     const arrayIndexValue = is.exists(propsValue)
  //       ? propsValue
  //       : variant.findIndex(f => f.initial);
  //     if (is.exists(arrayIndexValue)) {
  //       let sx = get(variant, arrayIndexValue, undefined);
  //       let styles: any = typeof sx === 'function' ? sx(theme) : sx;
  //       rules = deepmerge(rules, styles);
  //     }
  //   } else {
  //     if (is.truthy(propsValue) || key === 'initial') {
  //       let sx = vx[key];
  //       let styles: any = typeof sx === 'function' ? sx(theme) : sx;
  //       rules = deepmerge(rules, styles);
  //     }
  //   }
  // }
  return sx;
};

/**
 * Create UI Component Higher order function
 */
function createUIComponent(component) {
  const UiComponent = (props, ref) => {
    // const { vx = {}, orphan = false, root = false } = props;
    // const hasVariantsX = isEmptyObject(vx);

    const { context, parentContext } = useUIContext(props);

    // populate jsx props
    const jsxProps = {
      // don't use context props if orphan or root
      // ...(!orphan && !root && hasVariantsX ? parentContext : null),
      ...props,
      ref,
    };

    return (
      <UIContext.Provider value={context}>
        {jsx(component, jsxProps)}
      </UIContext.Provider>
    );
  };

  return React.forwardRef(UiComponent);
}

const useUIContext = props => {
  const { vx = {}, use = {}, root = false } = props;

  // get parent context
  const parentContext = React.useContext(UIContext);

  // don't use parent context if root
  const context = root ? {} : { ...parentContext };

  // using only its own vx keys,
  // look for applied props and
  Object.keys(vx).forEach(k => {
    if (use.hasOwnProperty(k)) {
      context[k] = props[k];
    }
  });
  return { context, parentContext };
};

const UIFragment = React.forwardRef((props, ref) => {
  const { context } = useUIContext(props);

  return (
    <UIContext.Provider value={context}>
      <React.Fragment>{props.children}</React.Fragment>
    </UIContext.Provider>
  );
});

export const ui = tags.reduce(
  (res, tag) => {
    res[tag] = createUIComponent(tag);
    return res;
  },
  {
    as: ({ tag, ...rest }) => {
      const Tag = createUIComponent(tag);
      return <Tag {...rest} />;
    },
    custom: createUIComponent,
    fragment: UIFragment,
  }
);
