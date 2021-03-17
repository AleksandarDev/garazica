import {
    Avatar, Card, CardActionArea, CardContent, Grid, Typography
} from '@material-ui/core';
import Link from 'next/link';
import React from 'react';
import { IAreaMetadata } from '../../src/Areas';

const AreaItem = ({ area }: { area: IAreaMetadata }) => (
    <Link href={`/areas/${area.id}`}>
        <Card variant="elevation" elevation={0}>
            <CardActionArea>
                <CardContent>
                    <Grid container spacing={2} wrap="nowrap" alignItems="center">
                        <Grid item>
                            <Avatar variant="square">{area.icon}</Avatar>
                        </Grid>
                        <Grid item>
                            <Typography variant="h3">{area.label}</Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </CardActionArea>
        </Card>
    </Link>
);

export default AreaItem;
