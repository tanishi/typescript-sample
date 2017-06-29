import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Hello from './components/Hello.tsx';

ReactDOM.render(<Hello content={'hello world'} />, document.getElementById('app'));
