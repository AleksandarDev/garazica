import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/dist/client/router';

const AreaPage = () => {
    const router = useRouter();
    const [area, setArea] = useState<string>('');

    useEffect(() => {
        setArea(router.asPath);
    }, [router.route]);

    return (
        <p>
            Area:
            {' '}
            {area}
        </p>
    );
};

export default AreaPage;
