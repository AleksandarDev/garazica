import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/dist/client/router';
import { Typography } from '@material-ui/core';

const AreaPage = () => {
    const router = useRouter();
    const [area, setArea] = useState<string>('');

    useEffect(() => {
        setArea(router.asPath);
    }, [router.route]);

    return (
        <Typography>
            Area:
            {' '}
            {area}
        </Typography>
    );
};

export default AreaPage;
