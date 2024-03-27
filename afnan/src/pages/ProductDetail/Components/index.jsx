import React from 'react';
import '../../../stayled/global.css';
import Detail from './Detail/Detail';
import SuccessionProducts from './SuccessionProducts/SuccessionProducts';
import ReecentlyView from './ReecentlyView/ReecentlyView';
const index = ({ id }) => {
    return (
        <>
            <Detail id={id} />
            <SuccessionProducts />
            <ReecentlyView />
        </>
    )
}

export default index
