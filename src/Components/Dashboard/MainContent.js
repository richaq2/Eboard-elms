import React from 'react';
import '../../css/style.css';
import '../../css/feather.css';
import '../../css/themify-icons.css';
import MiddleSidebar from './MiddleSidebar';
import MiddleSidebarBottom from './MiddleSidebarBottom';

function MainContent() {
    return ( 
        <div className="main-content">
            <MiddleSidebar/>
            <MiddleSidebarBottom/>
            
            
        </div>
     );
}

export default MainContent;