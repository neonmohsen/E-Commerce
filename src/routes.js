import { useRoutes } from 'react-router-dom';
import HomePage from './pages/Homepage';
import Shoppage from "./pages/Shoppage";
import SignPage from './pages/SignPage';

export default function Router(){
return useRoutes([
    {
        path:"/",
        element : <HomePage />
    },
    {
        path:"/shop",
        element : <Shoppage />
    },
    {
        path:'/signin',
        element : <SignPage />
    }
])
}