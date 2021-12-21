import React from 'react';
import {ReactUi, ReactUiProps} from './react-ui';

export default {
    component: ReactUi,
    title: 'ReactUi',
};

export const primary = () => {
    /* eslint-disable-next-line */
    const props: ReactUiProps = {};

    return <ReactUi />;
};
