declare namespace GeoPattern {
  function generate(string: string): Pattern
  interface Pattern {
    color: string
    toDataUrl(): string
    toString(): string
    toSvg(): string
    svg: SVG; // Internal API
  }
  // Code below is internal API.
  interface SVG {
    svg: XMLNode
  }
  interface XMLNode {
    children: XMLNode[]
    attributes: Object
  }
}
