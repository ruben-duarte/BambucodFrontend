import React from 'react';
import Split from 'react-split';
import Problemdescription from './Problemdescription/Problemdescription';
import Playcode from './Playcode/Playcode';

type WorkspaceProps = {
    
};

const Workspace:React.FC<WorkspaceProps> = () => {
    
    return <Split className='split' minSize={0}>
        <Problemdescription/>
        <Playcode/>
    </Split>
}
export default Workspace;