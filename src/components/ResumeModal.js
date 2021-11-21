//styles related 
import {
    Window,
    WindowHeader,
    WindowContent,
    Cutout,
    Button, 
    Toolbar
} from 'react95';
import {ModalWrapper} from './ResumeModal.styles'; 

const ResumeModal = (props) => {
    return (
        <ModalWrapper>
            <Window style = {{marginLeft: 'auto', marginRight: 'auto', marginTop: '25vw', height: 'max-content'}}>
                <WindowHeader>
                    <span>Resume.pdf</span>
                    <Button onClick = {() => { props.modifyOpen(false)}}>
                        <span role='img' aria-label='close'>
                            ✖️
                        </span>
                    </Button>
                </WindowHeader>
                <WindowContent>

                </WindowContent>
            </Window>
        </ModalWrapper>
    ); 
};

export default ResumeModal; 