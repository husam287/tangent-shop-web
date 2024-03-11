import React, { CSSProperties } from 'react';

export interface CustomCSS extends CSSProperties {
    '--height'?: string;
    '--width'?: string;
    '--color'?: string;
    '--fontWeight'?: number;
    '--fontSize'?: string;
    '--top'?: string;
    '--bottom'?: string;
}