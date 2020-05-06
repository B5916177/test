import { Component, OnInit, Input ,Output,EventEmitter,
  DoCheck,AfterContentInit,AfterContentChecked,
  AfterViewInit,AfterViewChecked,OnDestroy,OnChanges} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy,
OnChanges{

  @Input() parentData: number;

  @Output() messageEvent = new EventEmitter<number>();

  childData: number;

  constructor() { }

  ngOnInit(): void {
    this.childData = 0;
    console.log('ngOnInit Work!');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck Work!');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit Work!');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked Work!');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit Work!');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked Work!');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy Work!');
  }
  ngOnChanges(): void {
    console.log('ngOnChanges Work!');
  }

  onClick2Parent(){
    this.childData += 1;
    this.messageEvent.emit(this.childData);
  }

}
