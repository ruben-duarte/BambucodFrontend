import React from 'react';
import { problems } from '../problems/problems';
import { BsCheckCircle } from 'react-icons/bs';
import Link from 'next/link';
import { useEffect, useState } from "react";
import { useSession } from 'next-auth/react';


type ProblemsListProps = {
    
};

const ProblemsList:React.FC<ProblemsListProps> = () => {
    const { data:session, status } = useSession();

    const [problems, setProblems] = useState([]);
    
    useEffect(() => {
        if(status === "authenticated"){
            console.log("esta loggueado");
        } else {
            console.log("no esta logg");
        }
        const fetchGet = async () => {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/puzzle/list`, {
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

      const redirectAuth = () => {
        event.preventDefault()
        console.log("click");
      }


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
                            <Link href={`/problems/${problem.id}`} className="hover:text-blue-600 cursor-pointer">
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