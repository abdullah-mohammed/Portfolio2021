import {useState, useEffect} from 'react'; 

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

const TopToolbar = () => {
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
                    <ListItem>
                        <span role='img' aria-label='👨‍💻'>
                        👨‍💻
                        </span>
                        About Me
                    </ListItem>
                    <ListItem>
                        <span role='img' aria-label='📄'>
                        📄
                        </span>
                        Resume
                    </ListItem>
                    <ListItem>
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
}

export default TopToolbar;

