//images 
import resumeClickable from '../images/resumeClickable.png'; 
//styles 
import { Tooltip, Button } from 'react95';

const ResumeFile = () => {
    return (
        <div>
            <Tooltip text='Double Click Me!' enterDelay={100} leaveDelay={300}>
                <img
                    src={resumeClickable}
                    alt = 'resume clickable'
                    style={{ height: 150}}
                />
                <h1 style = {{textAlign: 'center'}}>Resume.pdf</h1>
            </Tooltip>
        </div>
    );
};

export default ResumeFile; 