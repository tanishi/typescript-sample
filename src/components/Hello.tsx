import * as React from 'react';

interface Props {
  content: string;
}

const Hello = (props : Props) => <div>{props.content}</div>;


export default Hello;
