import {useState, useEffect, forwardRef} from 'react'; 

import {
    AppBar,
    Toolbar,
    TextField,
    Button,
    List,
    ListItem,
    Panel
} from 'react95';

import winLogo from '../images/winLogo.png';

const getCurrTime = () => {
    let dateObj = new Date(); 
    let hours = dateObj.getHours(); 
    let minutes = dateObj.getMinutes(); 
    let meridiem = (hours >= 12) ? 'pm' : 'am'; 

    hours = hours % 12; 
    hours = (hours === 0) ? 12 : hours; 
    minutes = (minutes < 10) ? '0' + minutes : minutes; 

    return hours + ':' + minutes + ' ' + meridiem; 
}

const scrollToRef = (refVal) => {
    refVal.current.scrollIntoView({behavior: "smooth"}); 
}

const TopToolbar = forwardRef((props, refs) => {
    const refResume = refs.refRes; 
    const refAbout = refs.refAbt; 
    const refProject = refs.refProj; 

    const [open, setOpen] = useState(false);
    const [currTime, setTime] = useState(getCurrTime()); 

    useEffect(() => {
        setInterval(() => {
            setTime(getCurrTime());
        }, 1000);
    }, []);

    return (
        <AppBar style = {{zIndex: 10}}>
            <Toolbar style={{justifyContent: 'space-between' }}>
                <div style={{ position: 'relative', display: 'inline-block' }}>
                    <Button
                        onClick={() => setOpen(!open)}
                        active={open}
                        style={{ fontWeight: 'bold' }}
                    >
                        <img
                            src={winLogo}
                            alt='react95 logo'
                            style={{ height: '20px', marginRight: 4 }}
                        />
                        Start
                    </Button>
                    {open && (
                    <List
                    style={{
                        position: 'absolute',
                        left: '0',
                        top: '100%'
                    }}
                    onClick={() => setOpen(false)}
                    >
                    <ListItem onClick = {() => {scrollToRef(refAbout)}}>
                        <span role='img' aria-label='👨‍💻'>
                        👨‍💻
                        </span>
                        About Me
                    </ListItem>
                    <ListItem onClick = {() => {scrollToRef(refResume)}}>
                        <span role='img' aria-label='📄'>
                        📄
                        </span>
                        Resume
                    </ListItem>
                    <ListItem onClick = {() => {scrollToRef(refProject)}}>
                        <span role='img' aria-label='🛠'>
                        🛠
                        </span>
                        Projects
                    </ListItem>
                    </List>
                    )}
                </div>

                <div style={{ position: 'relative', display: 'inline-block' }}>
                    <Panel variant = 'well'>
                        {currTime} 
                    </Panel>
                </div>
            </Toolbar>
        </AppBar>
    );
})

export default TopToolbar;

