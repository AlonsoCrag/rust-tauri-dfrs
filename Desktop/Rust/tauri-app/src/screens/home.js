import React from 'react';
import { invoke } from '@tauri-apps/api/tauri'
import SideBar from '../components/sidebar';

function Home() {

    let height = window.innerHeight;

    return (
        <div className='grid grid-cols-4' style={{ height: height }}>
            <SideBar />
            <div className='col-span-3'>
                <p className='text-white text-xs text-center font-bold bg-blue-700'>Download files from your remote server</p>
                <p className='text-white text-xs text-center font-bold'>This project was developed by Bearz</p>
            </div>
        </div>
    );
}

export default Home;