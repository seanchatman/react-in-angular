/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}
