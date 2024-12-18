import React from 'react';
import LogoSmall from '../components/logoSmall';
import LogBlock from '../components/log-block.jsx';

const Auth = () => {
    return (
        <div className = "bg-black">
        <div className = "h-screen grid sm:grid-cols-2 lg:grid-cols-12 gap-x-10 mx-24 px-1 text-white">
            <LogoSmall/>
            <LogBlock/>
        </div>
        </div>
    );
};

export default Auth;