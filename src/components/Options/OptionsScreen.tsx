import React from 'react';
// import s from './Screen.module.css'

const OptionsScreen: React.FC = ({children}) => {

    return (
        <div className="screen options_screen">
            {children}
        </div>
    )
}

export default OptionsScreen;