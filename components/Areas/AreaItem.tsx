import Link from 'next/link';
import React from 'react';
import { Card, CardContent } from '@signalco/ui-primitives/Card';
import { Row } from '@signalco/ui-primitives/Row';
import { Typography } from '@signalco/ui-primitives/Typography';
import { IAreaMetadata } from '../../src/Areas';

const AreaItem = ({ area }: { area: IAreaMetadata }) => (
    <Link href={`/areas/${area.id}`}>
        <Card className="cursor-pointer hover:bg-muted/50 transition-colors">
            <CardContent>
                <Row spacing={2} alignItems="center">
                    <div className="flex items-center justify-center w-10 h-10 rounded bg-primary/10 text-primary">
                        {area.icon}
                    </div>
                    <Typography level="h3">{area.label}</Typography>
                </Row>
            </CardContent>
        </Card>
    </Link>
);

export default AreaItem;
