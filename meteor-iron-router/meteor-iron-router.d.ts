declare interface Route {
  name: RouteName
}

declare class RouteController<Params> {
  params: Params;
  render(templateName?: string): void;
  ready(): boolean;
  route: Route;
}

interface RouteOptions {
  path: string,
  controller: typeof RouteController
}

declare namespace Router {
  function route(name: RouteName, options: RouteOptions): void;
  function current(): RouteController<{}>;
  function path(name: RouteName, params: More): string;
  function go(name: RouteName, params: More): void;
}
