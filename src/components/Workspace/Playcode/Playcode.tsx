import React from 'react';
import PreferenceNavbar from './PreferenceNavbar/PreferenceNavbar';
import Split from 'react-split';
import CodeMirror from "@uiw/react-codemirror";
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import { javascript } from '@codemirror/lang-javascript';

type PlaycodeProps = {
    
};

const Playcode:React.FC<PlaycodeProps> = () => {
    
    return (
    <div className='flex flex-col  bg-dark-layer-1  relative'>
        <PreferenceNavbar/>
        <Split className='h-[calc(100vh-94px)]' direction='vertical' sizes={[60,40]} minSize={60}>
            <div className='w-full overflow-auto'>
                <CodeMirror
                    value='const temperature = 27;'
                    theme={vscodeDark}
                    extensions={[javascript()]}
                    style={{fontSize: 14}}
                />
            </div>
            <div className='w-full px-5 overflow-auto'>
					{/* caso de prueba encabezado */}
					<div className='flex h-10 items-center space-x-6'>
						<div className='relative flex h-full flex-col justify-center cursor-pointer'>
							<div className='text-sm font-medium leading-5 text-white'>Casos de prueba</div>
							<hr className='absolute bottom-0 h-0.5 w-full rounded-full border-none bg-white' />
						</div>
					</div>

                    <div className="flex">

                        <div className="mr-2 items-start  mt-2 text-white">
                            <div className='flex flex-wrap items-center gap-y-4'>
                                <div className='font-medium items-center transition-all focus:outline-none inline-flex bg-dark-fill-3 hover:bg-dark-fill-2 rounded-lg px-4 py-1 cursor-pointer whitespace-nowrap'>
                                    caso 1
                                </div>
                            </div>
                        </div>
                        
                        <div className="mr-2 items-start  mt-2 text-white">
                            <div className='flex flex-wrap items-center gap-y-4'>
                                <div className='font-medium items-center transition-all focus:outline-none inline-flex bg-dark-fill-3 hover:bg-dark-fill-2 rounded-lg px-4 py-1 cursor-pointer whitespace-nowrap'>
                                    caso 2
                                </div>
                            </div>
                        </div>

                        <div className="mr-2 items-start  mt-2 text-white">
                            <div className='flex flex-wrap items-center gap-y-4'>
                                <div className='font-medium items-center transition-all focus:outline-none inline-flex bg-dark-fill-3 hover:bg-dark-fill-2 rounded-lg px-4 py-1 cursor-pointer whitespace-nowrap'>
                                    caso 3
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="font-semibold">
                        <p className="text-sm font-medium mt-4 text-white ">
                            Entrada: 
                        </p>
                        <div className='w-full cursor-text rounded-lg border px-3 py-[10px] bg-dark-fill-3 border-transparent text-white mt-2'>
                            nums : [2,4,7,8,9,10], targets : 9
                        </div>
                        <p className="text-sm font-medium mt-4 text-white ">
                            Salida: 
                        </p>
                        <div className='w-full cursor-text rounded-lg border px-3 py-[10px] bg-dark-fill-3 border-transparent text-white mt-2'>
                            [0,1] 
                        </div>

                    </div>

				</div>
        </Split>
    </div>
    );
}
export default Playcode;