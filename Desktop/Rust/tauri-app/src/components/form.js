import React, { useState } from 'react';
import { invoke } from '@tauri-apps/api/tauri'

export default () => {

    let [ password, updatePassword ] = useState('');
    let [ _file, updateFile ] = useState('');
    let [ user, updateUser ] = useState('');
    let [ success, updateSucess ] = useState(null);


    const submit = (event) => {
        event.preventDefault();
        invoke('my_custom_command', { password: password, file: _file, userhost: user })
        .then(data => {
            if (data === "true") {
                return updateSucess(true);
            }
            return updateSucess(false);
        })
        .catch(err => updateSucess(false));
        return false;
    }

    return (
        <div className='container my-1 max-w-xs m-auto'>
            <form onSubmit={ (event) => submit(event) }>
                <div class="mb-6">
                    <label className="block mb-2 text-sm font-medium dark:text-gray-300 text-white">User@Host</label>
                    <input onChange={event => updateUser(event.target.value)} id="user" className="bg-[#121212] p-1 border bg-[#151515] text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='user123@192.0.0.0'/>
                </div>
                <div class="mb-6">
                    <label className="block mb-2 text-sm font-medium dark:text-gray-300 text-white">Server password</label>
                    <input type="password" onChange={event => updatePassword(event.target.value)} id="password" className="bg-[#121212] p-1 border bg-[#151515] text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                </div>
                <div class="mb-6">
                    <label className="block mb-2 text-sm font-medium dark:text-gray-300 text-white">Remote file name</label>
                    <input onChange={event => updateFile(event.target.value)} id="user" className="bg-[#121212] p-1 border bg-[#151515] text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='cat.gif'/>
                </div>
                <div className='flex'>
                    <button type='submit' className='mx-auto bg-blue-700 text-white rounded p-2 font-bold duration-300 ease-in-out hover:p-2.5'>
                        Download
                    </button>
                </div>
                {
                    success == true ?  <p className='text-green-500 text-xs text-center font-bold'>Success</p> : null
                }
                {
                    success == false ?  <p className='text-red-500 text-xs text-center font-bold'>Failed</p> : null
                }
            </form>
        </div>
    );
}