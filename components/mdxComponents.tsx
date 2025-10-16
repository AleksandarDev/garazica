// @ts-nocheck
/* eslint-disable react/jsx-props-no-spreading */
import React, { memo } from 'react';
import Link from 'next/link';

const components = {
    a: Link,
    p: (() => {
        const P = (props) => <p {...props} />;
        return memo(P);
    })(),
    h1: (() => {
        const H1 = ({ children, ...props }) => (
            <h1 
                className="text-4xl font-bold mb-4"
                {...props} 
                id={typeof children === 'string' ? children.toLowerCase().replace(' ', '-') : undefined}
            >
                {children}
            </h1>
        );
        return memo(H1);
    })(),
    h2: (() => {
        const H2 = ({ children, ...props }) => (
            <h2 
                className="text-3xl font-bold mb-3"
                {...props}
                id={typeof children === 'string' ? children.toLowerCase().replace(' ', '-') : undefined}
            >
                {children}
            </h2>
        );
        return memo(H2);
    })(),
    h3: (() => {
        const H3 = (props) => <h3 className="text-2xl font-semibold mb-2" {...props} />;
        return memo(H3);
    })(),
    h4: (() => {
        const H4 = (props) => <h4 className="text-xl font-semibold mb-2" {...props} />;
        return memo(H4);
    })(),
    h5: (() => {
        const H5 = (props) => <h5 className="text-lg font-semibold mb-1" {...props} />;
        return memo(H5);
    })(),
    h6: (() => {
        const H6 = (props) => <h6 className="text-base font-semibold mb-1" {...props} />;
        return memo(H6);
    })(),
    blockquote: (() => {
        const Blockquote = (props) => (
            <div className="border-l-4 border-gray-300 dark:border-gray-600 pl-4 py-2 my-4" {...props} />
        );
        return memo(Blockquote);
    })(),
    ul: (() => {
        const Ul = (props) => <ul className="list-disc list-inside mb-4" {...props} />;
        return memo(Ul);
    })(),
    ol: (() => {
        const Ol = (props) => <ol className="list-decimal list-inside mb-4" {...props} />;
        return memo(Ol);
    })(),
    li: (() => {
        const Li = (props) => <li className="mb-1" {...props} />;
        return memo(Li);
    })(),
    table: (() => {
        const TableComponent = (props) => <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700 my-4" {...props} />;
        return memo(TableComponent);
    })(),
    tr: (() => {
        const Tr = (props) => <tr className="border-b border-gray-200 dark:border-gray-700" {...props} />;
        return memo(Tr);
    })(),
    td: (() => {
        const Td = ({ align, ...props }) => (
            <td className="border border-gray-300 dark:border-gray-700 px-4 py-2" align={align || undefined} {...props} />
        );
        return memo(Td);
    })(),
    tbody: (() => {
        const TBody = (props) => <tbody {...props} />;
        return memo(TBody);
    })(),
    th: (() => {
        const Th = ({ align, ...props }) => (
            <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 bg-gray-100 dark:bg-gray-800 font-semibold" align={align || undefined} {...props} />
        );
        return memo(Th);
    })(),
    thead: (() => {
        const THead = (props) => <thead {...props} />;
        return memo(THead);
    })(),
    hr: (() => {
        const Hr = (props) => <hr className="my-4 border-gray-300 dark:border-gray-600" {...props} />;
        return memo(Hr);
    })(),
    input: (() => {
        const Input = (props) => {
            const { type } = props;
            if (type === 'checkbox') {
                return <input type="checkbox" className="mr-2" {...props} disabled={false} readOnly />;
            }
            return <input {...props} />;
        };
        return memo(Input);
    })(),
    wrapper: (() => {
        const Wrapper = (props) => <div className="max-w-3xl mx-auto px-4 markdown-body" {...props} />;
        return memo(Wrapper);
    })(),
};

export default components;
