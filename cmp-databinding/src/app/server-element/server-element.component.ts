import { ElementRef, ContentChild } from '@angular/core';
// import { element } from 'protractor';
import { 
  Component, 
  OnInit, 
  Input, 
  OnChanges,
  SimpleChanges, 
  DoCheck, 
  AfterContentChecked, 
  AfterContentInit, 
  AfterViewInit, 
  AfterViewChecked, 
  OnDestroy,
  ViewChild} from '@angular/core';
// import { ViewEncapsulation } from '@angular/core/src/metadata/view';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // encapsulation: ViewEncapsulation.Emulated // None, Native. By this params you can change behavior of styles 
})
export class ServerElementComponent implements 
  // OnInit, 
  // OnChanges, 
  // DoCheck,
  AfterContentInit, 
  // AfterContentChecked, 
  AfterViewInit, 
  // AfterViewChecked, 
  // OnDestroy,
  OnInit {
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef; 

  constructor() {
    console.log('Constructor called!');
   }
  //  ngOnChanges(changes: SimpleChanges) {
  //   console.log('ngOnChanges called!');
  //   console.log(changes);
  // }

  ngOnInit() {
    console.log('ngOnInit called!');
    console.log(this.header.nativeElement.textContent);
    console.log('Text Content of Paragraph', this.paragraph.nativeElement.textContent);
  }

  // ngDoCheck() {
  //   console.log('ngDoCheck called');
  // }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
    console.log('Text Content of Paragraph', this.paragraph.nativeElement.textContent);
  }


  // ngAfterContentChecked() {
  //   console.log('ngAfterContentChecked');
  // }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
    console.log(this.header.nativeElement.textContent);
    console.log('Text Content of Paragraph', this.paragraph.nativeElement.textContent);
  }

  // ngAfterViewChecked() {
  //   console.log('ngAfterViewChecked');
  // }

  // ngOnDestroy(){
  //   console.log('ngOnDestroy')
  // }
}
