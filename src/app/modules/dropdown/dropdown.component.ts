import {Component, OnInit, Input, ElementRef, AfterContentInit, Renderer2} from '@angular/core';
import {NgModel} from "@angular/forms";

@Component({
  selector: 'dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  host: {
    '(document:click)': 'onDocumentClick($event)',
  },
  providers: [NgModel],
})
export class DropdownComponent implements OnInit {

  @Input() public title = '';
  @Input() public expanded = <boolean> false;
  @Input() public items = <string[]> [];
  @Input() public activeIndex = <number> null;


  constructor(
    public elementRef: ElementRef,
    public renderer: Renderer2
  ) {

  }

  // ====================================
  // Lifecycle Hooks
  // ====================================


  ngOnInit() {


  }

  onDocumentClick(event) {

    // if click outside element
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.expanded = false;
    }

  }


  // ====================================
  // Actions
  // ====================================

  toggle() {
    if (this.items.length) {
      this.expanded = !this.expanded

      if (this.expanded && this.activeIndex !== null) {
        this.elementRef.nativeElement.querySelectorAll('.list > li')[this.activeIndex].scrollIntoView();
      }
    }

  }

  select(index) {
    this.activeIndex = index;
  }

  clear() {
    this.activeIndex = null
  }
}
