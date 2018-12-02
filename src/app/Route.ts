import { Routes } from "@angular/router";
import {
    ItemsComponent
} from './index'

export const AppRoute: Routes = [
    {
        path:'home',
        component:ItemsComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
]