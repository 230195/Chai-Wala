import {Injectable} from '@angular/core'
import {IItems} from './items.model'
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable} from 'rxjs'
import { Items } from './items.data';

@Injectable()

export class ItemService{
    getItems(){
        return Items;
    }
}