import { Router,createRootRoute, createRoute } from '@tanstack/react-router'
import {RootLayout,LandingPage,Login,Admin,User,NotFound} from './utils'
import { protectedRouteLoader } from './protectedRoute'
import { loginProtectedRoute } from './loginProtectedRoute'
import About from '../pages/about/About'
const rootRoute = createRootRoute({
  component: RootLayout,
  notFoundComponent: NotFound,
})

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component:LandingPage
})

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'login',
  component: Login,
  beforeLoad: loginProtectedRoute,
})

const adminRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: 'admin',
    component: Admin,
    beforeLoad: protectedRouteLoader('teacher'),
})

const userRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: 'user/$user._id',
    component: User,
    beforeLoad: protectedRouteLoader("student"),
})

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path:'about',
  component:About,
})

const routeTree = rootRoute.addChildren([
  indexRoute,
  loginRoute,
  adminRoute,
  userRoute,
  aboutRoute,
]);

export const router = new Router({ routeTree });