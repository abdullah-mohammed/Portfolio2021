import { useEffect, useState } from 'react';
//styles import 
import {
    Window,
    WindowHeader,
    WindowContent,
    Button,
    Tooltip,
    Panel
} from 'react95'; 

const frontContent = (observedItem) => {
    return (
        <Tooltip text='Click Me!' enterDelay={100} leaveDelay={300} style = {{left: '20%'}} >
            <img
                    src = {observedItem.image}
                    alt = {observedItem.name + 'image'}
                    style = {{ height: 250, width: 250, maxWidth: 250}}
                    onClick = {() => { window.open(observedItem.link) }}
                    onTouchStart = {() => { window.open(observedItem.link) }}
            />
        </Tooltip>
    );
};

const backContent = (observedItem) => {
    return (
        <div style= {{display: 'flex', flexDirection: 'column', width: '250px', alignItems: 'center'}}>
            <Panel variant = 'well' style = {{maxWidth: "250px", margin: "5px"}}>
                <p style = {{margin: '5px'}}>{observedItem.description}</p>
            </Panel>
            <Panel variant = 'well' style = {{maxWidth: "250px", margin: "5px"}}>
                <p style = {{margin: '5px'}}>
                    <span style = {{fontWeight: 'bold'}}>Stack: </span>
                    {observedItem.stack}
                </p>
            </Panel>
        </div>
    );
};

const cardTemplate = (observedItem, toggleBack, updateToggle) => {
    return (
        <Window style = {{margin: 10}}>
            <WindowHeader style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span>{observedItem.name}</span>
            </WindowHeader>
            <div style = {{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <WindowContent style = {{width: '250px', height: '250px'}}>
                {toggleBack ? backContent(observedItem) : frontContent(observedItem)}
            </WindowContent>
            <Button 
                style = {{marginBottom: 10}}
                onClick = {() => updateToggle()}
            >
                {toggleBack ? 'Back' : 'More Info'}
            </Button>
            </div>
        </Window>
    );
};


const ProjectCard = (props) => {
    let observedItem = props.projectItem; 
    const [toggleBack, setToggleBack] = useState(false); 

    const updateToggle = () => {
        let currToggle = toggleBack; 
        setToggleBack(!currToggle); 
    }

    return (
        <div >{cardTemplate(observedItem, toggleBack, updateToggle)}</div>

    );
};

export default ProjectCard; 