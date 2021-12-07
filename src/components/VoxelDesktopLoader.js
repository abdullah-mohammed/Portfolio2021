import { forwardRef } from 'react'; 

//have window loading animation here, update this 
export const DesktopLoader = () => {
    return (
        <div style = {{width: 300, height: 300}}>
            Loading...
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