import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="bg-slate-900 min-h-screen text-slate-200 font-sans selection:bg-cyan-400 selection:text-slate-900">
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
