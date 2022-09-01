import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import { ToastContainer } from 'react-toastify';
import Login from './components/Login/Login';
import Registration from './components/Login/Registration';
import RequireAuth from './components/RequireAuth/RequireAuth';
import NotFound from './components/NotFound/NotFound';
import AddTask from './components/Home/AddTask';
import ViewTask from './components/ViewTask/ViewTask';
import auth from './firebase.init';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

function App() {
  const [user] = useAuthState(auth);

    const handleSignOut = () =>{
        signOut(auth);
    }
  return (
    <div className="App bg-white mx-8">
      <div className='flex justify-between items-center'>
                <Link to='/' className='text-3xl font-bold my-10'>To-Do App</Link>
                <button onClick={handleSignOut} className='text-xl text-white bg-[#96be25] hover:bg-[#455b08] py-2 px-4 rounded-lg'>Sign Out</button>
            </div>
      <Routes>
        <Route path='/' element={<RequireAuth><Home></Home></RequireAuth>}></Route>
        <Route path='/Login' element={<Login></Login>}></Route>
        <Route path='/Registration' element={<Registration></Registration>}></Route>
        <Route path='/AddTask' element={<AddTask></AddTask>}></Route>
        <Route path='/ViewTask' element={<ViewTask></ViewTask>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
