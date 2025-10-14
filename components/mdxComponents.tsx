// @ts-nocheck
/* eslint-disable react/jsx-props-no-spreading */
import React, { memo } from 'react';
import { Checkbox } from '@signalco/ui-primitives/Checkbox';
import { Divider } from '@signalco/ui-primitives/Divider';
import { Table } from '@signalco/ui-primitives/Table';
import { Typography } from '@signalco/ui-primitives/Typography';
import Link from 'next/link';

const components = {
    a: Link,
    p: (() => {
        const P = (props) => <Typography {...props} />;
        return memo(P);
    })(),
    h1: (() => {
        const H1 = ({ children, ...props }) => (
            <Typography 
                level="h1" 
                {...props} 
                id={typeof children === 'string' ? children.toLowerCase().replace(' ', '-') : undefined}
            >
                {children}
            </Typography>
        );
        return memo(H1);
    })(),
    h2: (() => {
        const H2 = ({ children, ...props }) => (
            <Typography 
                level="h2" 
                {...props}
                id={typeof children === 'string' ? children.toLowerCase().replace(' ', '-') : undefined}
            >
                {children}
            </Typography>
        );
        return memo(H2);
    })(),
    h3: (() => {
        const H3 = (props) => <Typography level="h3" {...props} />;
        return memo(H3);
    })(),
    h4: (() => {
        const H4 = (props) => <Typography level="h4" {...props} />;
        return memo(H4);
    })(),
    h5: (() => {
        const H5 = (props) => <Typography level="h5" {...props} />;
        return memo(H5);
    })(),
    h6: (() => {
        const H6 = (props) => <Typography level="h6" {...props} />;
        return memo(H6);
    })(),
    blockquote: (() => {
        const Blockquote = (props) => (
            <div className="border-l-4 border-muted p-2" {...props} />
        );
        return memo(Blockquote);
    })(),
    ul: (() => {
        const Ul = (props) => <ul {...props} />;
        return memo(Ul);
    })(),
    ol: (() => {
        const Ol = (props) => <ol {...props} />;
        return memo(Ol);
    })(),
    li: (() => {
        const Li = (props) => <li {...props} />;
        return memo(Li);
    })(),
    table: (() => {
        const TableComponent = (props) => <Table {...props} />;
        return memo(TableComponent);
    })(),
    tr: (() => {
        const Tr = (props) => <tr {...props} />;
        return memo(Tr);
    })(),
    td: (() => {
        const Td = ({ align, ...props }) => (
            <td align={align || undefined} {...props} />
        );
        return memo(Td);
    })(),
    tbody: (() => {
        const TBody = (props) => <tbody {...props} />;
        return memo(TBody);
    })(),
    th: (() => {
        const Th = ({ align, ...props }) => (
            <th align={align || undefined} {...props} />
        );
        return memo(Th);
    })(),
    thead: (() => {
        const THead = (props) => <thead {...props} />;
        return memo(THead);
    })(),
    hr: Divider,
    input: (() => {
        const Input = (props) => {
            const { type } = props;
            if (type === 'checkbox') {
                return <Checkbox {...props} disabled={false} readOnly />;
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
