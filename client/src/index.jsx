import React from 'react';
import { createRoot } from 'react-dom/client';


const App = () => {
  return (
    <>
      Hello World!
    </>
  )
}

const root = createRoot(document.getElementById('app'));
root.render(<App />);