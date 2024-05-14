import { Backarrow } from '@/icons'
import React from 'react'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'

const Profile = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    return (
        <>
            <button onClick={toggleDrawer}>Show</button>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='left'
                size="249px"
                className='bla bla bla rounded-r-3xl'
            >
                <div>
                    <Backarrow className="ml-5 mt-8" />
                </div>
            </Drawer>
        </>
    )
}

export default Profile