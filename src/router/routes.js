import Index from '../views/Index'
import Details from '../views/Details'

const routes = [
    {
        name: 'index',
        path: '/',
        component: Index
    },
    {
        name: 'details',
        path: '/:id/',
        component: Details
    }
]

export default routes
