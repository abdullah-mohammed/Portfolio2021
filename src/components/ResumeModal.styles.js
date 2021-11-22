import styled from 'styled-components';

export const ModalWrapper = styled.div`
    position: fixed; 
    display: flex;
    z-index: 11; 
    left: 0; 
    top: 0; 
    width: 100%; 
    height: 100%; 
    background-color: rgba(0, 0, 0, 0.4);
`; 

export const PDFWrapper = styled.div`
    overflow-y: auto;
    max-height: 70vh; 
    max-width: 90vw; 
`;

export const ButtonsWrapper = styled.div`
    display: flex; 
    justify-content: end; 
    padding-right: 15px;
`;