import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './component/Home';
import NavBar from './component/NavBar';
import Blog from './component/pages/Blog';
import Experience from './component/pages/Experience';
import Profile from './component/pages/Profile';

function App() {
  return (
    <div style={{ 
      backgroundImage: `url("https://images.unsplash.com/photo-1450133064473-71024230f91b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z3V5JTIwaW4lMjBibGFjayUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80")`,
        height:'100%',
        marginTop:'50px',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        color:'white' 
      }}>
       <BrowserRouter>
          <NavBar/>
         <Routes>
           <Route path='/' element={<Home/>} />
           <Route path='/Home' element={<Home/>} />
           <Route path='/Profile' element={<Profile/>} />
           <Route path='/Experience' element={<Experience/>} />
           <Route path='/Blog' element={<Blog/>} />
         </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
