import { Component, Input, ViewChild, ElementRef, Inject } from '@angular/core';
import { JQ_TOKEN } from './jQuery.service' 

@Component({
    selector: "simple-modal",
    templateUrl:'./simpleModal.component.html',
    styles:[`
    .modal-body{height: 250px; overflow-y: scroll;}
    `]
})
 export class SimpleModalComponent{
     @Input() title:string;
     @Input() elementId:string;
     @ViewChild('modalcontainer',{static: false}) containerEl: ElementRef ;
     @Input() closeOnBodyClick:string;

     constructor(@Inject(JQ_TOKEN)private $:any){}

     close(){
         if(this.closeOnBodyClick.toLocaleLowerCase()==="true"){
            this.$(this.containerEl.nativeElement).modal('hide');
         }
      
     }
 }