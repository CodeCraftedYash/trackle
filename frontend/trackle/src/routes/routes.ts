import { Router,createRootRoute, createRoute } from '@tanstack/react-router'
import {RootLayout,LandingPage,Login,Admin,User} from './utils'

const rootRoute = createRootRoute({
  component: RootLayout,
})

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component:LandingPage
})

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'login',
  component: Login
})

const adminRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: 'admin',
    component: Admin
})

const userRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: 'user/$user',
    component: User
})
const routeTree = rootRoute.addChildren([
  indexRoute,
  loginRoute,
  adminRoute,
  userRoute,
]);

export const router = new Router({ routeTree });