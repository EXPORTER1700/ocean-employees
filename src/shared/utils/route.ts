import { Routes } from '@src/shared/routes/routes';

type ExtractParams<T extends string> =
  T extends `${string}:${infer Param}/${infer Rest}`
    ? Param | ExtractParams<`/${Rest}`>
    : T extends `${string}:${infer Param}`
      ? Param
      : never;

type Params<T extends string> = { [K in ExtractParams<T>]: string | number };

/**
 * Laravel analog: route("order-details.search", { hash: "ABC123" })
 * Returns a ready URL: "/order-details/search/ABC123"
 *
 * @param name   Route name (key from ROUTES_MAP)
 * @param params Object with parameters to replace :slug, :id, :hash, etc.
 */
export function route<T extends Routes>(
  name: T,
  params: Params<T> = {} as Params<T>,
): string {
  let path: string = name;

  Object.keys(params).forEach((key) => {
    path = path.replace(`:${key}`, String(params[key as keyof Params<T>]));
  });

  return path;
}
