import Problemtop from '@/components/Problemtop/Problemtop';
import Workspace from '@/components/Workspace/Workspace';
import React from 'react';

type ProblemPageProps = {
    
};

const ProblemPage:React.FC<ProblemPageProps> = () => {
    
    return <div>
        <Problemtop/>
        <Workspace/>
    </div>
}
export default ProblemPage;