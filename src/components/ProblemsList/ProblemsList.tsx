import React from 'react';
import { problems } from '../problems/problems';
import { BsCheckCircle } from 'react-icons/bs';
import Link from 'next/link';

type ProblemsListProps = {
    
};

const ProblemsList:React.FC<ProblemsListProps> = () => {
    
    return (
        <tbody className='text-white'>
            {problems.map((problem, index) => {
                const difficulyColor = 
                problem.difficulty === "Easy"
                ? "text-dark-green-s"
                : problem.difficulty === "Medium"
                ? "text-dark-yellow"
                : "text-dark-pink";

                return(
                    <tr className={` ${index % 2 == 1 ? "bg-light-blue" : ""}`} key={problem.id}>
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
                    </tr>

                )
            })
            
        
            }
        </tbody>
    )
}
export default ProblemsList;