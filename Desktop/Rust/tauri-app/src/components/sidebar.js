import React from 'react';
import { invoke } from '@tauri-apps/api/tauri'

function SideBar() {

    let height = window.innerHeight;

    return (
        <div className='bg-[#151515] shadow-lg'>
            <div className='flex flex-col'>
                <a href='/'>
                    <div className='m-2 flex group hover:bg-blue-700 rounded py-1 hover:cursor-pointer'>
                        <i class="mx-2 fa-solid fa-house-chimney text-white"></i>
                        <h4 className='text-white font-bold'>
                            Home
                        </h4>
                    </div>
                </a>
                <a href='/system'>
                    <div className='m-2 flex group hover:bg-blue-700 rounded py-1 hover:cursor-pointer'>
                        <i class="fa-solid fa-cube text-white mx-2"></i>
                        <h4 className='text-white font-bold'>
                            System
                        </h4>
                    </div>
                </a>
            </div>

        </div>
    );
}

export default SideBar;