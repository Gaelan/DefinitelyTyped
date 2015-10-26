declare module 'react-markdown' {
  interface Props {
    source: string;
    className?: string;
    containerTagName?: string;
    escapeHtml?: boolean;
    skipHtml?: boolean;
    sourcePos?: boolean;
    softBreak?: string;
  }
  export default class ReactBootstrap extends React.Component<Props, {}> {
    render(): JSX.Element;
  }
}
