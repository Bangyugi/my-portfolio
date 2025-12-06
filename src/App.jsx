import React from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Cursor from './components/Cursor';

function App() {
  return (
    <>
      <Cursor />
      <Layout>
        <Home />
      </Layout>
    </>
  );
}

export default App;
