import React from 'react';
import { AiFillDislike, AiFillLike } from 'react-icons/ai';
import { BsCheck2Circle } from 'react-icons/bs';
import { TiStarOutline } from 'react-icons/ti';
import { Problem } from "@/utils/types/problem"

type ProblemdescriptionProps = {
    problem: Problem;
};

const Problemdescription:React.FC<ProblemdescriptionProps> = ({ problem }) => {
    
    return  (
		<div className='bg-problems-blue'>
			{/* TAB */}
			<div className='flex h-11 w-full items-center pt-2 bg-dark-layer-2 text-white overflow-x-hidden'>
				<div className={"bg-dark-layer-1 rounded-t-[5px] px-5 py-[10px] text-xs cursor-pointer"}>
					Descripción
				</div>
			</div>

			<div className='flex px-0 py-4 h-[calc(100vh-94px)] overflow-y-auto'>
				<div className='px-5'>
					{/* Problem heading */}
					<div className='w-full'>
						<div className='flex space-x-4'>
							<div className='flex-1 mr-2 text-lg text-white font-medium'>{problem.title}</div>
						</div>
						<div className='flex items-center mt-3'>
							<div
								className={`text-olive bg-olive inline-block rounded-[21px] bg-opacity-[.15] px-2.5 py-1 text-xs font-medium capitalize `}
							>
								Fácil
							</div>
							<div className='rounded p-[3px] ml-4 text-lg transition-colors duration-200 text-green-s text-dark-green-s'>
								<BsCheck2Circle />
							</div>
							<div className='flex items-center cursor-pointer hover:bg-dark-fill-3 space-x-1 rounded p-[3px]  ml-4 text-lg transition-colors duration-200 text-dark-gray-6'>
								<AiFillLike />
								<span className='text-xs'>120</span>
							</div>
							<div className='flex items-center cursor-pointer hover:bg-dark-fill-3 space-x-1 rounded p-[3px]  ml-4 text-lg transition-colors duration-200 text-green-s text-dark-gray-6'>
								<AiFillDislike />
								<span className='text-xs'>2</span>
							</div>
							<div className='cursor-pointer hover:bg-dark-fill-3  rounded p-[3px]  ml-4 text-xl transition-colors duration-200 text-green-s text-dark-gray-6 '>
								<TiStarOutline />
							</div>
						</div>

						{/* Problem Statement(paragraphs) */}
						<div className='text-white text-sm'>
						     <div dangerouslySetInnerHTML= {{ __html: problem.problemStatement }} />
{/* 							 
								<p className='mt-3'>
									Dado un arreglo de enteros <code>nums</code> y un entero <code>target</code>, devuelve los <em>índices de los dos números</em> tales que sumen <code>target</code>.
								</p>
								<p className='mt-3'>
									Puedes asumir que cada entrada tendría <strong>exactamente una solución</strong>, y no puedes usar el mismo elemento dos veces.
								</p>
								<p className='mt-3'>Puedes devolver la respuesta en cualquier orden.</p> */}
							</div>
				


						{/* Examples */}
						<div className='mt-4 bg-dark-fill-3'>
							{problem.examples.map((example, index) => (
								<div key={example.id}>
									<p className='font-medium text-white '>Ejemplo {index + 1}: </p>
									
									<div className='example-card'>
										<pre>
											<strong className='text-white'>Entrada: </strong> {example.inputText}
											<br />
											<strong>Salida:</strong>
											{example.outputText} <br />
											{example.explanation && (
												<>
													<strong>Explicacion:</strong> {example.explanation}
												</>
											)}
										</pre>
									</div>
								</div>
							))}

						</div>



						{/* Constraints */}
						<div className='my-5 pb-2'>
							<div className='text-white text-sm font-medium'>Restricciones:</div>
							<ul className='text-white ml-5 list-disc '>
								<div dangerouslySetInnerHTML={{ __html: problem.constraints }} />
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Problemdescription;