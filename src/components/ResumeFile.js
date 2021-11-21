import {useState} from 'react'; 
//components 
import ResumeModal from './ResumeModal'; 
//images 
import resumeClickable from '../images/resumeClickable.png'; 
//styles 
import { Tooltip, Button } from 'react95';

const ResumeFile = () => {
    const [open, setOpen] = useState(false); 

    return (
        <div>
            <Tooltip text='Double Click Me!' enterDelay={100} leaveDelay={300}>
                <img
                    src={resumeClickable}
                    alt = 'resume clickable'
                    style={{ height: 150}}
                    onDoubleClick = {() => { setOpen(true) }}
                />
                <h1 style = {{textAlign: 'center'}}>Resume.pdf</h1>
            </Tooltip>
            {open && <ResumeModal modifyOpen = {setOpen}/>}
        </div>
    );
};

export default ResumeFile; 