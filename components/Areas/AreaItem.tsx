import Link from 'next/link';
import React from 'react';
import { IAreaMetadata } from '../../src/Areas';

const AreaItem = ({ area }: { area: IAreaMetadata }) => (
    <Link href={`/areas/${area.id}`}>
        <div className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-10 h-10 rounded bg-gray-100 dark:bg-gray-800">
                    {area.icon}
                </div>
                <h3 className="text-xl font-semibold">{area.label}</h3>
            </div>
        </div>
    </Link>
);

export default AreaItem;
