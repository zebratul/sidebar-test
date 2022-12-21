import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Balance } from './pages/Balance';
import { Exit } from './pages/Exit';
import { FAQ } from './pages/Faq';
import { Main } from './pages/Main';
import { MyShops } from './pages/MyShops';
import { NoMatch } from './pages/NoMatch';
import { Personal } from './pages/Personal';
import { Promos } from './pages/Promos';
import { Stats } from './pages/Stats';
import { Support } from './pages/Support';
import { User } from  './User';

 const NavPage = () =>  {
    return (
        <React.Fragment>
            <section className='page'>   
                Главная {'>'} 
                <Routes>
                    <Route path="/balance" element={<p> Баланс</p>}/> 
                    <Route path="/exit" element={<p> Выход</p>}/> 
                    <Route path="/faq" element={<p> FAQ</p>}/> 
                    <Route path="/" element={<p>    </p>}/> 
                    <Route path="/myshops" element={<p> Мои магазины</p>}/> 
                    <Route path="/nomatch" element={<p> Ошибка!</p>}/> 
                    <Route path="/personal" element={<p> Персональные данные</p>}/> 
                    <Route path="/promos" element={<p> Промоматериалы</p>}/> 
                    <Route path="/stats" element={<p> Статистика</p>}/>
                    <Route path="/support" element={<p> Техподдержка</p>}/>  
                </Routes>
                <User/>
                <Routes>
                    <Route path="/balance" element={<Balance/>}/> 
                    <Route path="/exit" element={<Exit/>}/> 
                    <Route path="/faq" element={<FAQ/>}/> 
                    <Route path="/" element={<Main/>}/> 
                    <Route path="/myshops" element={<MyShops/>}/> 
                    <Route path="/nomatch" element={<NoMatch/>}/> 
                    <Route path="/personal" element={<Personal/>}/> 
                    <Route path="/promos" element={<Promos/>}/> 
                    <Route path="/stats" element={<Stats/>}/>
                    <Route path="/support" element={<Support/>}/>  
                </Routes>
            </section>
        </React.Fragment>
    )
}

export default NavPage;
