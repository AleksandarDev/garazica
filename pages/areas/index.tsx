import { Container, Grid } from '@material-ui/core';
import React from 'react';
import AreaItem from '../../components/Areas/AreaItem';
import areas from '../../src/Areas';

const Areas = () => (
    <Container fixed>
        <Grid container spacing={2}>
            {areas.map((area) => (
                <Grid item key={area.id} xs={12} sm={4}>
                    <AreaItem area={area} />
                </Grid>
            ))}
        </Grid>
    </Container>
);

export default Areas;
