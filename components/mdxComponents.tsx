// @ts-nocheck
/* eslint-disable react/jsx-props-no-spreading */
import React, { memo } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import MuiTable from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import Link from 'next/link';

const components = {
    a: Link,
    p: (() => {
        const P = (props) => <Typography gutterBottom {...props} component="p" variant="body1" />;
        return memo(P);
    })(),
    h1: (() => {
        const H1 = (props) => <Typography gutterBottom {...props} component="h1" variant="h1" id={typeof props.children === 'string' ? (props.children as string).toLowerCase().replace(' ', '-') : undefined} />;
        return memo(H1);
    })(),
    h2: (() => {
        const H2 = (props) => <Typography gutterBottom {...props} component="h2" variant="h2" id={typeof props.children === 'string' ? (props.children as string).toLowerCase().replace(' ', '-') : undefined} />;
        return memo(H2);
    })(),
    h3: (() => {
        const H3 = (props) => <Typography gutterBottom {...props} component="h3" variant="h3" />;
        return memo(H3);
    })(),
    h4: (() => {
        const H4 = (props) => <Typography gutterBottom {...props} component="h4" variant="h4" />;
        return memo(H4);
    })(),
    h5: (() => {
        const H5 = (props) => <Typography gutterBottom {...props} component="h5" variant="h5" />;
        return memo(H5);
    })(),
    h6: (() => {
        const H6 = (props) => <Typography gutterBottom {...props} component="h6" variant="h6" />;
        return memo(H6);
    })(),
    blockquote: (() => {
        const Blockquote = (props) => (
            <Paper style={{ borderLeft: '4px solid grey', padding: 8 }} {...props} />
        );
        return memo(Blockquote);
    })(),
    ul: (() => {
        const Ul = (props) => <Typography {...props} component="ul" />;
        return memo(Ul);
    })(),
    ol: (() => {
        const Ol = (props) => <Typography {...props} component="ol" />;
        return memo(Ol);
    })(),
    li: (() => {
        const Li = (props) => <Typography {...props} component="li" />;
        return memo(Li);
    })(),
    table: (() => {
        const Table = (props) => <MuiTable {...props} />;
        return memo(Table);
    })(),
    tr: (() => {
        const Tr = (props) => <TableRow {...props} />;
        return memo(Tr);
    })(),
    td: (() => {
        const Td = ({ align, ...props }) => (
            <TableCell align={align || undefined} {...props} />
        );
        return memo(Td);
    })(),
    tbody: (() => {
        const TBody = (props) => <TableBody {...props} />;
        return memo(TBody);
    })(),
    th: (() => {
        const Th = ({ align, ...props }) => (
            <TableCell align={align || undefined} {...props} />
        );
        return memo(Th);
    })(),
    thead: (() => {
        const THead = (props) => <TableHead {...props} />;
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
        const Wrapper = (props) => <Container maxWidth="md" {...props} className="markdown-body" />;
        return memo(Wrapper);
    })(),
};

export default components;
