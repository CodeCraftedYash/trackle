import { Router,createRootRoute, createRoute } from '@tanstack/react-router'
import {RootLayout,LandingPage,Login,Admin,User,NotFound} from './utils'
import { protectedRouteLoader } from './protectedRoute'
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
  component: Login
})

const adminRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: 'admin',
    component: Admin,
    loader: protectedRouteLoader,
})

const userRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: 'user/$user',
    component: User,
    loader: protectedRouteLoader,
})

const routeTree = rootRoute.addChildren([
  indexRoute,
  loginRoute,
  adminRoute,
  userRoute,
]);

export const router = new Router({ routeTree });