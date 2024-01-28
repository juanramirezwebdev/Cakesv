import { Route as rootRoute } from './routes/__root'
import { Route as OrderImport } from './routes/order'
import { Route as IndexImport } from './routes/index'
import { Route as AboutImport } from './routes/about'

const OrderRoute = OrderImport.update({
  path: '/order',
  getParentRoute: () => rootRoute,
} as any)

const AboutRoute = AboutImport.update({
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)



declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/order': {
      preLoaderRoute: typeof OrderImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
  }
}
export const routeTree = rootRoute.addChildren([IndexRoute, OrderRoute, AboutRoute])