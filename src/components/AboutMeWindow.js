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

const AboutMeWindow = () => {
    const [state, setState] = useState({
        activeTab: 0
    });

    const handleChange = (e, value) => setState({ activeTab: value });
    const { activeTab } = state;

    return (
        <Window style={{ width: 350}}>
            <WindowHeader>About Me</WindowHeader>
            <WindowContent>
                <Tabs value={activeTab} onChange={handleChange}>
                    <Tab value={0}>Me</Tab>
                    <Tab value={1}>Awards</Tab>
                    <Tab value={2}>Links</Tab>
                </Tabs>

                <TabBody style={{ height: 300 }}>
                {activeTab === 0 && (
                    <div>
                        <div>
                            <p>
                                <span style={{ fontWeight: 'bold' }}>
                                    Name: 
                                </span> Abdullah Mohammed
                            </p>
                            <p>
                                <span style={{ fontWeight: 'bold' }}>
                                    Origin: 
                                </span> Santa Clara, CA
                            </p>
                            <p>
                                <span style={{ fontWeight: 'bold' }}>
                                    Education: 
                                </span> UC Davis
                            </p>
                            <p>
                                <span style={{ fontWeight: 'bold' }}>
                                    Email: 
                                </span> <a style = {{color: 'blue'}} href = "mailto:aimohammed@ucdavis.edu">aimohammed@ucdavis.edu</a>
                            </p>
                        </div>
                    </div>
                )}
                {activeTab === 1 && (
                    <div>
                        <div>Awards I recieved</div>
                    </div>
                )}
                {activeTab === 2 && (
                    <div>
                        <div>Links to github,etc.</div>
                    </div>
                )}
                </TabBody>
            </WindowContent>
        </Window>
    );
}

export default AboutMeWindow; 