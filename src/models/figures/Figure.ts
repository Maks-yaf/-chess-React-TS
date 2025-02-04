import logo from '../../assets/black-bishop.png'
import {Colors} from "../Colors";
import {Cell} from "../Cell";

export enum FigureNames {
    'FIGURE' = 'Figure',
    'KING' = 'King',
    'KNIGHT' = 'Knight',
    'PAWN' = 'Pawn',
    'QUEEN' = 'Queen',
    'ROOK' = 'Rook',
    'BISHOP' = 'Bishop',
}


export class Figure {
    color: Colors;
    logo:  typeof logo | null;
    cell: Cell;
    name: FigureNames;
    id: number


    constructor(color: Colors, cell: Cell) {
        this.color = color;
        this.cell = cell;
        this.cell.figure = this;
        this.logo = logo;
        this.name = FigureNames.FIGURE;
        this.id = Math.random();
    }

    canMove(target: Cell): boolean {
        return true;
    }

    moveFigure(target: Cell){
    }

}