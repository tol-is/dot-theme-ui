import * as React from 'react';
import * as renderer from 'react-test-renderer';

export const render = (component: React.ReactNode) =>
  renderer.create(<React.Fragment>{component}</React.Fragment>).toJSON();

export default render;
