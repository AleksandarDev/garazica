import { Build, Computer, DeveloperBoard } from '@material-ui/icons';
import React from 'react';

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
