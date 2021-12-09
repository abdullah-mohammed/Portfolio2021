import {useState} from 'react'; 
//components 
import ResumeModal from './ResumeModal'; 
//images 
import resumeClickable from '../images/resumeClickable.png'; 
//styles 
import { Tooltip, Button } from 'react95';

const ResumeFile = () => {
    const [open, setOpen] = useState(false); 
    const resumeLink = 'https://drive.google.com/file/d/1w4LVAuOm9ZIdl1zILhfP3RKk1x5mkVOH/view?usp=sharing'; 

    return (
        <div>
            <Tooltip text='Double Click Me!' enterDelay={100} leaveDelay={300}>
                <img
                    src = {resumeClickable}
                    alt = 'resume clickable'
                    style = {{ height: 150, cursor: 'pointer'}}
                    onDoubleClick = {() => { setOpen(true) }}
                    onTouchStart = {() => { window.open(resumeLink) }}
                />
                <h1 style = {{textAlign: 'center'}}>Resume.pdf</h1>
            </Tooltip>
            {open && <ResumeModal modifyOpen = {setOpen}/>}
        </div>
    );
};

export default ResumeFile; 