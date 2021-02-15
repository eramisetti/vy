import { Control } from "./Control";

export interface Program {
    id: string;
    date: string;
    title: string;
    description: string;
    controls: Control[];
}
