import { useState } from "react";
import Split from 'react-split';
import Problemdescription from './Problemdescription/Problemdescription';
import Playcode from './Playcode/Playcode';
import Confetti from 'react-confetti';
import { Problem } from '@/utils/types/problem';

type WorkspaceProps = {
    problem: Problem;
};

const Workspace:React.FC<WorkspaceProps> = ({ problem }) => {
    const [success, setSuccess] = useState(false);

    return <Split className='split' minSize={0}>
        <Problemdescription problem={problem}/>
      <div>
            <Playcode problem={problem} setSuccess={setSuccess}/>
            {success && <Confetti  gravity={0.4}  tweenDuration={4000}
            />}
        </div>
    </Split>

}
export default Workspace;