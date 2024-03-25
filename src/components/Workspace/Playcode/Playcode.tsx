import  { useState } from 'react';
import PreferenceNavbar from './PreferenceNavbar/PreferenceNavbar';
import Split from 'react-split';
import CodeMirror from "@uiw/react-codemirror";
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import { javascript } from '@codemirror/lang-javascript';
import EditorButtons from './EditorButtons';
import { problems } from '@/utils/problems';
import { useRouter } from 'next/router';
import { Problem } from "@/utils/types/problem";
import Swal from "sweetalert2";

type PlaycodeProps = {
    problem: Problem;
    setSuccess : React.Dispatch<React.SetStateAction<boolean>>;
};

const Playcode:React.FC<PlaycodeProps> = ({ problem, setSuccess }) => {
    const [activeTestCaseId, setActiveTestCaseId] = useState<number>(0);
    const [userCode, setUserCode ] = useState<string>(problem.starterCode);
    const { query : { problemid } }= useRouter(); 
        
    const handleSubmit = async () => {
      //  alert(problem);
        try {
            const callb = new Function(`return ${userCode}`)();
            const success = problems[problemid as string].handlerFunction(callb);
            if(success) {
                Swal.fire({
                    title: "Muy bien!",
                    text: "Pasaste todos los casos de prueba!",
                    icon: "success"
                  });
                  setSuccess(true);
                  setTimeout(() =>{
                    setSuccess(false);
                  },5000)
            }

        } catch (error:any) {
            if(error.message.startsWith("Error: AssertionError [ERR_ASSERTION]: Expected values to be strictly deep-equal:")){                      
                    Swal.fire({
                    icon: "error",
                    title: "Intentalo de nuevo",
                    text: "No pasaste todos los casos de prueba!",
                    footer: '<a href="#">Why do I have this issue?</a>'
                    });
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops... tienes un error",
                    text: "No pasaste todos los casos de prueba!",
                    footer: '<a href="#">Why do I have this issue?</a>'
                    });
            }
        }
    };

    const onChange = (value:string) => {
       // console.log(value);
        //console.log(problem);
        setUserCode(value);
    }; 


    return (
    <div className='flex flex-col  bg-dark-layer-1  relative'>
        <PreferenceNavbar/>
        <Split className='h-[calc(100vh-94px)]' direction='vertical' sizes={[60,40]} minSize={60}>
            <div className='w-full overflow-auto'>
                <CodeMirror
                    value={problem.starterCode}
                    theme={vscodeDark}
                    onChange={onChange}
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

                    {problem.examples.map((example, index) => (
                        <div className="mr-2 items-start  mt-2 text-white" key={example.id} 
                        onClick={() => setActiveTestCaseId(index)}>
                        <div className='flex flex-wrap items-center gap-y-4'>
                            <div className='font-medium items-center transition-all focus:outline-none inline-flex bg-dark-fill-3 hover:bg-dark-fill-2 rounded-lg px-4 py-1 cursor-pointer whitespace-nowrap'>
                                caso {index + 1}
                            </div>
                        </div>
                    </div>
						))}

                    </div>

                    <div className="font-semibold">
                        <p className="text-sm font-medium mt-4 text-white ">
                            Entrada: 
                        </p>
                        <div className='w-full cursor-text rounded-lg border px-3 py-[10px] bg-dark-fill-3 border-transparent text-white mt-2'>
                            {problem.examples[activeTestCaseId].inputText}
                        </div>
                        <p className="text-sm font-medium mt-4 text-white ">
                            Salida: 
                        </p>
                        <div className='w-full cursor-text rounded-lg border px-3 py-[10px] bg-dark-fill-3 border-transparent text-white mt-2'>
                            {problem.examples[activeTestCaseId].outputText}
                        </div>

                    </div>
				</div>
        </Split>
        <EditorButtons handleSubmit={handleSubmit}/>
    </div>
    );
}
export default Playcode;