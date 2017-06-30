import * as React from 'react';
import { Container } from 'flux/utils';


interface Props {
  content: string;
}

export default class App extends React.Component<Props, {}> {
  constructor(props : Props) {
    super(props);
  }

  static getStores() {
    return [];
  }

  render() {
    return (
      <div>{this.props.content}</div>
    );
  }
}

//const AppContainer = Container.create(App);
