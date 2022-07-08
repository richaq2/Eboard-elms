import React from 'react';
import Header from './Header';
import Main from './Main';
import '../../css/style.css';
import '../../css/feather.css';
import '../../css/themify-icons.css';
import Content from './Content';
import Content1 from './Content1';
const Home =() => {
    return ( 
        <div class="main-wrap">
        <Header/>
        <Main/>
        <Content/>
        <Content1/>
        </div>
        
     );
}

export default Home;