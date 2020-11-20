import { Component, OnInit, AfterViewInit, ElementRef, Renderer2, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-expandible',
  templateUrl: './expandible.component.html',
  styleUrls: ['./expandible.component.scss'],
})
export class ExpandibleComponent implements AfterViewInit {

  @ViewChild("expandWrapper", { read: ElementRef }) expandWrapper: ElementRef;
  @Input("expanded") expanded: boolean = false;
  @Input("expandHeight") expandHeight: string = "150px";
  constructor(public renderer: Renderer2) { }

  ngAfterViewInit(): void {
    this.renderer.setStyle(this.expandWrapper.nativeElement, "max-height", this.expandHeight);
  }

}
