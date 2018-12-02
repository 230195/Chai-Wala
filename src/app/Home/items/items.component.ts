import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import {ItemService} from '../../services/home/items/items.service'
import {IItems} from '../../services/home/items/items.model'

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items:IItems[]
  @ViewChild('widgetsContent',{read: ElementRef}) public widgetsContent:ElementRef  
  constructor(private itemService:ItemService ) { }

  ngOnInit() {
    this.items = this.itemService.getItems();
    console.log(this.items)
  }
  public scrollRight(): void {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft + 400), behavior: 'smooth' });
    console.log(this.widgetsContent.nativeElement.scrollLeft)
  }

  public scrollLeft(): void {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft - 400), behavior: 'smooth' });
    console.log(this.widgetsContent.nativeElement.scrollLeft)
  }

}
