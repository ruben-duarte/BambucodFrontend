import React from 'react';
import { problems } from '../problems/problems';
import { BsCheckCircle } from 'react-icons/bs';
import Link from 'next/link';
import { useEffect, useState } from "react";


const BASE_URL = 'http://localhost:8081/api/v1/puzzle';


type ProblemsListProps = {
    
};

const ProblemsList:React.FC<ProblemsListProps> = () => {
    const [problems, setProblems] = useState([]);
    useEffect(() => {
        const fetchGet = async () => {
            const res = await fetch(`${BASE_URL}/list`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const response = await res.json();
            if (res.ok) {
                
                setProblems(response);
            } else {
                console.log("ERROR INTENTE DE NUEVO");
            }
        };
        fetchGet();
      },[]);

      


    return (
        <tbody className='text-white'>
            {problems.map((problem, index) => {
                const difficulyColor = 
                problem.difficulty === "Fácil"
                ? "text-dark-green-s"
                : problem.difficulty === "Intermedio"
                ? "text-dark-yellow"
                : "text-dark-pink";

                return(
                    <tr className={` ${index % 2 == 1 ? "bg-dark-fill-3" : ""}`} key={problem.id}>
                        <th className='px-2 py-4 font-medium whitespace-nowrap text-dark-green-s'>
                                <BsCheckCircle fontSize={"18"} width='18'/>

                        </th>
                        <td className='px-6 py-4'>
                            <Link className="hover:text-blue-600 cursor-pointer" href={`/problems/${problem.id}`}>
                                {problem.title}
                            </Link>
                        </td>
                        <td className={`px-6 py-4 ${difficulyColor}`}>
                            {problem.difficulty}
                        </td>
                        <td className={`px-6 py-4`}>
                            {problem.category}
                        </td>
                        <td className={`px-6 py-4`}>
                            {problem.hint}
                        </td>
                    </tr>

                )
            })
            
        
            }
        </tbody>
    )
}
export default ProblemsList;