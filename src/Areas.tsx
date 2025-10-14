import React from 'react';

// Simple icon replacements
const DeveloperBoard = () => (
    <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="2" />
        <rect x="7" y="7" width="3" height="3" fill="currentColor" />
        <rect x="7" y="14" width="3" height="3" fill="currentColor" />
        <rect x="14" y="7" width="3" height="3" fill="currentColor" />
    </svg>
);

const Computer = () => (
    <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="2" y="3" width="20" height="14" rx="2" strokeWidth="2" />
        <line x1="8" y1="21" x2="16" y2="21" strokeWidth="2" />
        <line x1="12" y1="17" x2="12" y2="21" strokeWidth="2" />
    </svg>
);

const Build = () => (
    <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" strokeWidth="2" />
    </svg>
);

export interface IAreaMetadata {
    id: string,
    label: string,
    icon: React.ReactNode
  }

const areas: IAreaMetadata[] = [
    { id: 'electronics', label: 'Elektronika', icon: <DeveloperBoard /> },
    { id: 'computers', label: 'Računala', icon: <Computer /> },
    { id: 'tools', label: 'Alati', icon: <Build /> },
];

export default areas;
