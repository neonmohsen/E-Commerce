import { useRoutes } from 'react-router-dom';
import HomePage from './pages/Homepage';
import Shoppage from "./pages/Shoppage";
import SignPage from './pages/SignPage';
import Checkout from './pages/Checkout';
import CollectionOverView from './components/collection-overview/collectionOverView';
import CollectionPage from './pages/CollectionPage';

export default function Router(){
return useRoutes([
    {
        path:"/",
        element : <HomePage />
    },
    {
        path:"/shop",
        element : <Shoppage />,
        children :[
            {path : '/shop' , element : <CollectionOverView />},
            {path : ':collectionId' , element : <CollectionPage />}
        ]
    },
    {
        path:'/signin',
        element : <SignPage />
       
    },
    {
        path:'/checkout',
        element : <Checkout />
    }
])
}