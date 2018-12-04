import { Component, OnInit,ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import {ItemService} from '../../services/home/items/items.service'
import {IItems} from '../../services/home/items/items.model'

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit{

  items:IItems[]
  mostImportant: IItems[]
  @ViewChild('widgetsContent',{read: ElementRef}) public widgetsContent:ElementRef  
  constructor(private itemService:ItemService ) { }

  ngOnInit() {
    this.items = this.itemService.getItems();
    this.mostImportant = this.itemService.getImportantItems();
    console.log(this.items)
  }
  public scrollRight(): void {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft + (this.widgetsContent.nativeElement.children[0].clientWidth +10)), behavior: 'smooth' });
    console.log(this.widgetsContent.nativeElement.scrollLeft)
  }

  public scrollLeft(): void {
    this.widgetsContent.nativeElement
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft - (this.widgetsContent.nativeElement.children[0].clientWidth +10)), behavior: 'smooth' });
    console.log(this.widgetsContent.nativeElement.scrollLeft)
  }
}
