import { createBrowserRouter } from "react-router-dom";
//pages
import { Home }                from "./pages/home";
import { Cart }                from "./pages/cart";
//layout 
import { Layout }              from "./components/layout";

const router = createBrowserRouter(

    [
        {
            element: <Layout/>,
            children:[

                {
                    path: '/',
                    element:<Home/>
                },
                {
                    path: '/cart',
                    element:<Cart/>
                }
            ]
        }
    ]
)

export default router