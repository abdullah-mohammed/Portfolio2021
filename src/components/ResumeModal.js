import { useState } from 'react';
//styles related 
import {
    Window,
    WindowHeader,
    WindowContent,
    Cutout,
    Button, 
    Toolbar,
    LoadingIndicator,
    Panel
} from 'react95';
import { ModalWrapper, PDFWrapper, ButtonsWrapper } from './ResumeModal.styles'; 
//components 
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
//files
import pdfFile from '../downloadFiles/AbdullahMResume.pdf'; 


const ResumeModal = (props) => {
    const [scale, setScale] = useState(1.5); 
    const [loading, setLoading] = useState(false); 

    const incScale = () => {
        let currScale = scale; 
        setScale(currScale + 0.1); 
    }
    const decScale = () => {
        let currScale = scale; 
        setScale(currScale - 0.1); 
    }

    return (
        <ModalWrapper>
            <Window style = {{marginLeft: 'auto', marginRight: 'auto', marginTop: '10vh', height: 'max-content'}}>
                <WindowHeader style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span>Resume.pdf</span>
                    <Button onClick = {() => { props.modifyOpen(false)}}>
                        <span role='img' aria-label='close'>
                            ✖️
                        </span>
                    </Button>
                </WindowHeader>
                <WindowContent style = {{height: 'max-content'}}>
                    <PDFWrapper>
                        <Document
                            file = {pdfFile}
                            loading = {() => {
                                setLoading(true); 
                                return (
                                    <div style = {{width: '25vw'}}>
                                        <p style={{ textAlign: 'center', marginBottom: '0.5rem' }}>Loading...</p>
                                        <LoadingIndicator isLoading />
                                    </div>
                                );
                            }}
                            onLoadSuccess = {() => { setLoading(false) }}
                        >
                            <Page pageNumber = {1} scale = {scale}/>
                        </Document>
                    </PDFWrapper>
                </WindowContent>
                {!loading && 
                    <ButtonsWrapper>
                        <Button onClick = {() => { decScale()} } style = {{marginRight: '5px'}}>
                            <span role='img' aria-label='decrease'>
                                ➖
                            </span>
                        </Button>
                        <Button onClick = {() => {incScale()}}>
                            <span role='img' aria-label='increase'>
                                ➕
                            </span>
                        </Button>
                    </ButtonsWrapper>
                }
            </Window>
        </ModalWrapper>
    ); 
};

export default ResumeModal; 