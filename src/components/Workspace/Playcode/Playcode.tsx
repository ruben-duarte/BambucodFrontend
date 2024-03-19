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
            <div>Casos de prueba</div>
        </Split>
    </div>
    );
}
export default Playcode;