declare module '*.scss' {
  type IClassNames = Record<string, string>;
  const classnames: IClassNames;
  export = classnames;
}

declare module '*.svg' {
  import React from 'react';
  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG

}
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'

declare const IS_DEV: boolean;
