import type {
  Router
} from 'vue-router';
import routingConfig from './config.ts';
import { createRoutesLUT, handleRouteChange } from './router-handler.ts';
import type { RoutingConfig } from './types.ts';

/**
 * Registers the router with the library. 
 * Necessary to create the route bindings.
 * 
 * @param router 
 * @param options 
 * @returns the router object
 */
export function registerRouter(router: Router, options : RoutingConfig = { defaultMatchTarget : 'name'}): Router {
  const routes = router.getRoutes();
  Object.assign(routingConfig, options);
  createRoutesLUT(router);

  router.beforeEach(handleRouteChange);
  return router;
}

export function registerRoutableClasses(...classes: Array<any>) {
  for (const clazz of classes) clazz.prototype; //just poke the class in order to be loaded
}

export {routableObjectIsActive} from './router-handler.ts'

export * from './decorators.ts';
