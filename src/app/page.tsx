import {App} from '@/app/app';
import React from 'react';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-12 py-12 font-light bg-gradient-radial from-slate-200 to-gray-50">
      <div className="container">
        <App />
      </div>
    </main>
  );
}
