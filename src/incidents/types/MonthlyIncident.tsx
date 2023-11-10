import {Incident} from "./Incident";

export interface MonthlyIncident {
    month: string;
    incidents?: Incident[];
}