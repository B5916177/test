import { Component, OnInit ,ViewChild,OnChanges,
        DoCheck,AfterContentInit,AfterContentChecked,
        AfterViewInit,AfterViewChecked,OnDestroy} from '@angular/core';
import { ChildComponent } from '../child/child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  @ViewChild(ChildComponent)
  childComponent: ChildComponent;

  parentData: number;
  childData: number;
  textMessage: String;
  status: string;
  public showChild= true;

  constructor() { }

  ngOnInit(): void {
    this.parentData = 0;
    this.childData = 0;
    console.log('ngOnInit Work!');
  }
  ngDoCheck(): void {
    console.log(this.textMessage)  
    console.log('ngDoCheck Work!');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit Work!');
  }
  ngAfterContentChecked(): void {
    if(this.textMessage == "B5916177"){
      this.status = "Your ID is OK";
    }else{
      this.status = "Error";
    }
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

  onClick2Child(){
    this.parentData += 1;
  }
  receiveData($event){
    this.childData = $event;
  }
  onClickViewChild(){
    this.childData += 1;
    this.childComponent.onClick2Parent();
  }

  update(){
    this.showChild = !this.showChild
  }
}
