import React from 'react';
import { invoke } from '@tauri-apps/api/tauri'
import SideBar from '../components/sidebar';
import Form from '../components/form';

function System() {

    let height = window.innerHeight;

    return (
        <div className='grid grid-cols-4' style={{ height: height }}>
            <SideBar />
            <div className='col-span-3'>
                <p className='text-white text-xs text-center font-bold bg-blue-700'>Download files from your remote server</p>
                <p className='text-white text-xs text-center font-bold'>Ubuntu 22.04.00</p>
                <Form />
            </div>
        </div>
    );
}

export default System;