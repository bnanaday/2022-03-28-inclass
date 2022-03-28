import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-childcomponent',
  templateUrl: './childcomponent.component.html',
  styleUrls: ['./childcomponent.component.css']
})
export class ChildcomponentComponent implements OnInit {
@Input() inputText: string = '';

@Output() outputEvent: EventEmitter<string> = new EventEmitter<string>();

message: string = '';



  constructor() { }

  ngOnInit() {
  }

  sendMessage(){
    this.outputEvent.emit(this.message);
  }


}
