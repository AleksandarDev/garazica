import type { MDXComponents } from 'mdx/types';
import components from './components/mdxComponents';

export function useMDXComponents(componentOverrides: MDXComponents): MDXComponents {
    return {
        ...components,
        ...componentOverrides,
    };
}
