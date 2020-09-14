/* eslint @typescript-eslint/no-empty-interface: "off" */

import 'styled-components';

import theme from './theme';

export type Theme = typeof theme;

declare module 'style-components' {
  interface DefaultTheme extends Theme {}
}
export default DefaultTheme;
