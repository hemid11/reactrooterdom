import AddProducts from "../Admin/AddProducts";
import AdminLayout from "../pages/Admin/AdminLayout";
import UserLayout from "../pages/User/UserLayout";
import AdminProducts from "../Admin/AdminProducts";
import Home from "../pages/User/Home";
import Basket from "../Pages/User/Basket";
import NotFound from "../pages/User/NotFound";
import ProductDetail from "../User/ProductDetail";
import EditProduct from "../Admin/EditProduct";
import UserProducts from "../User/UserProducts";

export const ROUTES = [
    {
        path: '/admin',
        element: <AdminLayout/>,
        children: [
            {
                index: true,
                element: <AdminProducts/>
            },
            {
                path: 'add-products',
                element: <AddProducts/>
            },
            {
                path: 'edit-product',
                element: <EditProduct/>
            }
        ]
    },
    {
        path: '/',
        element: <UserLayout/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: 'Products',
                element: <UserProducts/>
            },
            {
                path: 'basket',
                element: <Basket/>
            },
            {
                path: '/product/:id',
                element: <ProductDetail/>
            },
            {
                path: '*',
                element: <NotFound/>
            }
        ]
    },
];
