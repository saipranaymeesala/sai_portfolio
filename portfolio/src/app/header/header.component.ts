import { Component,ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @ViewChild('menuRef') menuRef!: ElementRef;
  @ViewChild('iconRef') iconRef!: ElementRef;
   toggleMenu():void {
    this.menuRef.nativeElement.classList.toggle('open');
    this.iconRef.nativeElement.classList.toggle('open');
  }
}
