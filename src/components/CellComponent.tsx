import React, {FC} from 'react';
import '../App.css';
import {Cell} from "../models/Cell";


interface CellProps {
    cell: Cell;
}

const CellComponent: FC<CellProps> = ({cell}) => {
    return (
        <div className={['cell', cell.color].join (' ')}>
            {cell.figure?.logo && <img src={cell.figure.logo} alt=''/>}
        </div>
    );
};

export default CellComponent;