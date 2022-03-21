import React from 'react';
import { CircularProgress } from '@mui/material'

type Props = React.PropsWithChildren<{
    isLoading: boolean
}>

const LoadingWrapper = (props: Props) => {
    if (props.isLoading) {
        return <CircularProgress/>
    }
    return <>
        {props.children}
    </>;
}

export default LoadingWrapper;