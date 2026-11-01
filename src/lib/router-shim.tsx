import React, { createContext, useContext } from 'react';

export interface RouteParams {
  [key: string]: string | undefined;
}

const RouteParamsContext = createContext<RouteParams>({});

export const RouteParamsProvider: React.FC<{
  params: RouteParams;
  children: React.ReactNode;
}> = ({ params, children }) => (
  <RouteParamsContext.Provider value={params}>{children}</RouteParamsContext.Provider>
);

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string | { pathname?: string; search?: string; hash?: string };
  replace?: boolean;
}

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ to, replace: _replace, children, ...rest }, ref) => {
    const href =
      typeof to === 'string'
        ? to
        : `${to.pathname || ''}${to.search || ''}${to.hash || ''}` || '/';
    return (
      <a ref={ref} href={href} {...rest}>
        {children}
      </a>
    );
  }
);
Link.displayName = 'Link';

export function useLocation() {
  if (typeof window !== 'undefined') {
    return {
      pathname: window.location.pathname,
      search: window.location.search,
      hash: window.location.hash,
      state: null,
      key: 'default',
    };
  }
  return {
    pathname: '/',
    search: '',
    hash: '',
    state: null,
    key: 'default',
  };
}

export function useParams<T extends RouteParams = RouteParams>(): T {
  const ctxParams = useContext(RouteParamsContext);
  if (ctxParams && Object.keys(ctxParams).length > 0) {
    return ctxParams as T;
  }
  if (typeof window !== 'undefined') {
    const match = window.location.pathname.match(/^\/p\/([^/]+)/);
    if (match) {
      return { slug: match[1] } as unknown as T;
    }
  }
  return {} as T;
}

export function useNavigate() {
  return (to: string) => {
    if (typeof window !== 'undefined') {
      window.location.href = to;
    }
  };
}

