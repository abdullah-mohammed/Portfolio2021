import {useState} from 'react'; 
//style imports 
import {
    Tabs,
    Tab,
    TabBody,
    Window,
    WindowHeader,
    WindowContent,
    Fieldset,
    NumberField,
    Checkbox,
    Anchor
} from 'react95';
import { Wrapper} from './AboutMeWindow.styles'; 
//images
import gitLogo from '../images/gitLogo.png';
import linkedinLogo from '../images/linkedinLogo.png';
import resumeLogo from '../images/resumeLogo.png'; 
import handWave from '../images/wavingHand.png';
import trophy from '../images/trophy.png';
import cursor from '../images/cursor.png'; 
//file imports 
import resumeFile from '../downloadFiles/AbdullahMResume.pdf'; 

const meTab = (meSection) => {
    return (
        <Wrapper>
            <div style = {{marginRight: 'auto'}}>
                {meSection.map((item) => 
                    <p style={{ paddingBottom: 5}}>
                        <span style={{ fontWeight: 'bold'}}>
                            {item.header}
                        </span>
                        {item.body}
                    </p>
                )}
                <p style={{ paddingBottom: 5}}>
                    <span style={{ fontWeight: 'bold' }}>
                        Email: 
                    </span> <a style = {{color: 'blue'}} href = "mailto:aimohammed@ucdavis.edu">aimohammed@ucdavis.edu</a>
                </p>
            </div>
            <img
                src={handWave}
                alt = 'waving hand'
                style={{ height: '75px', marginLeft: 'auto', marginRight: 'auto', marginTop: 30}}
            />
        </Wrapper>
    ); 
}; 

const awardsTab = (awardsSection) => {
    return (
        <Wrapper>
            <div style = {{marginRight: 'auto'}}>
                {awardsSection.map((item) =>
                    <div style={{ paddingBottom: 5}}>
                        <p style={{ fontWeight: 'bold' }}>{item.award}</p>
                        <p style={{ fontStyle: 'italic' }}>{item.date}</p>
                    </div>
                )}
            </div>
            <img
                src={trophy}
                alt = 'trophy'
                style={{ height: '75px', marginLeft: 'auto', marginRight: 'auto'}}
            />
        </Wrapper>
    ); 
};

const linksTab = (linkSection) => {
    return (
        <Wrapper>
            <div style = {{marginRight: 'auto'}}>
                {linkSection.map((item) => 
                    <div style={{ paddingBottom: 10 }}>
                        <img
                            src={item.src}
                            alt = {item.header}
                            style={{ height: '20px', marginRight: 5 }}
                        />
                        {(item.header === 'Resume.pdf') ? 
                            <a 
                                style={{ fontWeight: 'bold' }}
                                href = {item.link}
                                target= "_blank"
                            >
                                {item.header}
                            </a>
                        :
                            <a 
                            style={{ fontWeight: 'bold' }}
                            href = {item.link}
                            download
                            >
                                {item.header}
                            </a>
                        }
                    </div>
                )}
            </div>
            <img
                src={cursor}
                alt = 'cursor'
                style={{ height: '50px', marginLeft: 'auto', marginRight: 'auto', marginTop: 50}}
            />
        </Wrapper>
    );
};

const AboutMeWindow = () => {
    const meSection = [
        {header: 'Name: ', body: 'Abdullah Mohammed'},
        {header: 'Origin: ', body: 'Santa Clara, CA'},
        {header: 'Education: ', body: 'UC Davis'}
    ];

    const awardsSection  = [
        {award: 'Regents Scholarship', date: 'Sept. 2017 - July 2021'},
        {award: 'University Honors Program', date: 'Sept. 2017 - June 2019'},
        {award: 'Dean\'s Honor List', date: 'Spring 2021'}
    ];

    const linkSection = [
        {header: 'Linkedin', link: 'https://www.linkedin.com/in/abdullah-mohammed-547b25176/', src: linkedinLogo},
        {header: 'Github', link: 'https://github.com/abdullah-mohammed', src: gitLogo},
        {header: 'Resume.pdf', link: resumeFile, src: resumeLogo} 
    ];

    const [state, setState] = useState({
        activeTab: 0
    });

    const handleChange = (e, value) => setState({ activeTab: value });
    const { activeTab } = state;

    return (
        <Window style={{ width: 350, margin: 10}}>
            <WindowHeader>About Me</WindowHeader>
            <WindowContent>
                <Tabs value={activeTab} onChange={handleChange}>
                    <Tab value={0}>Me</Tab>
                    <Tab value={1}>Awards</Tab>
                    <Tab value={2}>Links</Tab>
                </Tabs>

                <TabBody style={{ height: 300 }}>
                    {activeTab === 0 && meTab(meSection)}
                    {activeTab === 1 && awardsTab(awardsSection)}
                    {activeTab === 2 && linksTab(linkSection)}
                </TabBody>
            </WindowContent>
        </Window>
    );
}

export default AboutMeWindow; 