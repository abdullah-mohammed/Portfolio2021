import {
    Window,
    WindowContent,
    WindowHeader,
    Button,
    Toolbar,
    Panel
  } from 'react95';
//images 
import profilePic from '../images/profilePic.jpeg'; 

const AboutMePicture = () => {
    return (
        <Window style={{ width: 300, height: 300, margin: 10}}>
            <WindowHeader>
                <span>profile_picture.png</span>
            </WindowHeader>
            <WindowContent>
                <img
                    src={profilePic}
                    alt = 'Profile Picture'
                    style={{ height: '200px'}}
                />
            </WindowContent>
        </Window>
    );
}

export default AboutMePicture; 
