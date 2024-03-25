import Problemtop from '@/components/Problemtop/Problemtop';
import Workspace from '@/components/Workspace/Workspace';
import React from 'react';
import { problems } from "@/utils/problems";
import { Problem } from "@/utils/types/problem";

type ProblemPageProps = {
    problem: Problem;
};

const ProblemPage:React.FC<ProblemPageProps> = ({ problem }) => {
    console.log(problem);
    return <div>
        <Problemtop  />
        <Workspace problem={problem}/>
    </div> 
}
export default ProblemPage;

// fetch local data
//  SSG static side generation

 export async function getStaticPaths() {
 	const paths = Object.keys(problems).map((key) => ({
 		params: { problemid: key },
 	}));

	return {
		paths,
		fallback: false,
	};
 }

//  fetch the data

export async function getStaticProps({ params }: { params: { problemid: string } }) {
	const { problemid } = params;
	const problem = problems[problemid];

	if (!problem) {
		return {
			notFound: true,
		};
	}
	problem.handlerFunction = problem.handlerFunction.toString();
	return {
		props: {
			problem,
		},
	};
}