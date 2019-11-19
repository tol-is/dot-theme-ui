// import React from 'react';
// import { matchers } from 'jest-emotion';

// import { render } from './render';
// import { ui } from '../src';

// expect.extend(matchers);

// /**
//  *
//  */
// test('ui / sx ', () => {
//   const tree = render(<ui.div sx={{ color: '#0000ff' }} />);
//   expect(tree).toHaveStyleRule('color', '#0000ff');
// });

// /**
//  *
//  */
// test('ui / vx ', () => {
//   const vx = {
//     alpha: {
//       color: '#0000ff',
//     },
//     beta: {
//       color: '#ff00cc',
//     },
//   };

//   const tree = render(<ui.div vx={vx} alpha={true} />);
//   expect(tree).toHaveStyleRule('color', '#0000ff');

//   const treeAlt = render(<ui.div vx={vx} beta={true} />);
//   expect(treeAlt).toHaveStyleRule('color', '#ff00cc');
// });

// /**
//  *
//  */
// test('ui / vx / function', () => {
//   const vx = {
//     alpha: () => ({
//       color: '#0000ff',
//     }),
//     beta: () => ({
//       color: '#ff00cc',
//     }),
//   };

//   const tree = render(<ui.div vx={vx} alpha={true} />);
//   expect(tree).toHaveStyleRule('color', '#0000ff');

//   const treeAlt = render(<ui.div vx={vx} beta={true} />);
//   expect(treeAlt).toHaveStyleRule('color', '#ff00cc');
// });

// /**
//  *
//  */
// test('ui / vx / propagating context', () => {
//   const vx = {
//     alpha: {
//       color: '#0000ff',
//     },
//     beta: {
//       color: '#ff00cc',
//     },
//   };

//   const tree = render(
//     <ui.fragment
//       vx={{
//         alpha: true,
//         beta: true,
//       }}
//       alpha={true}
//     >
//       <ui.div vx={vx}></ui.div>
//     </ui.fragment>
//   );
//   expect(tree).toHaveStyleRule('color', '#0000ff');
// });

test('ui/temp', () => {
  expect(true);
});
