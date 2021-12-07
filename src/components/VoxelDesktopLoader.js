import { forwardRef } from 'react'; 

//have window loading animation here, update this 
export const DesktopLoader = () => {
    return (
        <div style = {{width: 400, height: 300}}>
        </div>
    )
}


export const DesktopContainer = forwardRef(({children}, ref) => (
    <div
        ref = {ref}
        className = "voxel-desktop"
    >
        {children}
    </div>
))

const Loader = () => {
    return (
        <DesktopContainer>
            <DesktopLoader />
        </DesktopContainer>
    )
}

export default Loader; 