
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import * as SandDanceReact from '@msrvida/sanddance-react';
import * as vega from 'vega';
import * as fluentui from '@fluentui/react';
import { Explorer, use } from '@msrvida/sanddance-explorer';

import "@msrvida/sanddance-explorer/dist/css/sanddance-explorer.css";
import "./style.css";



function App() {
  SandDanceReact.use(React, ReactDOM, vega);
  fluentui.initializeIcons();
  use(fluentui, React, ReactDOM, vega);
  const data = [
    { a: 1, b: "c1" },
    { a: 1, b: "c2" },
    { a: 2, b: "c3" },
    { a: 3, b: "c4" }
  ];

  const explorerProps = {
    logoClickUrl: 'https://microsoft.github.io/SandDance/',
    mounted: explorer => {
      explorer.load(data);
    }
  };

  return (
    <div>
      <h1>Main App Component</h1>
      <div id="innerContainer">
        <Explorer {...explorerProps} />
      </div>
    </div>
  );
}

export default App;
