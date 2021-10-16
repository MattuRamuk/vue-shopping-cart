import Home from './components/Home/Home.vue'
import ProductList from './components/ProductList/ProductList.vue'
import Cart from './components/Cart/Cart.vue'
import NotFound from './components/404/404NotFound.vue'

export const routes = [
    {
        path: '/',
        component : Home
    },
    {
        path : '/ProductList',
        component : ProductList
    },
    {
        path : '/Cart',
        component : Cart
    },
    { 
        path: '*', 
        component: NotFound 
    }
]