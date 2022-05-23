import React, { useEffect, useState } from 'react';
import { invoke } from '@tauri-apps/api/tauri'
import './index.css';
import Home from './screens/home';
import System from './screens/system';
import { Routes, Route } from 'react-router-dom'

// invoke = window.__TAURI__.invoke;

function App() {

    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/system' element={<System/>} />
        </Routes>
    );
}

export default App;

{/* <div  onClick={() => invoke('my_custom_command')} className='max-w-sm container max-w-4xl mx-auto flex justify-center'>
            <button  className="text-xl font-bold text-white bg-blue-700 p-2 rounded m-4 duration-500 ease-in-out hover:bg-blue-900">
                Send
            </button>
        </div> */}