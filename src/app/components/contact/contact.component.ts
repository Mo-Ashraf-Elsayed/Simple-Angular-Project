import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  title1: boolean = false;
  showInputTitle1(): void {
    this.title1 = true;
  }
  title2: boolean = false;
  showInputTitle2(): void {
    this.title2 = true;
  }
  title3: boolean = false;
  showInputTitle3(): void {
    this.title3 = true;
  }
  title4: boolean = false;
  showInputTitle4(): void {
    this.title4 = true;
  }
  // submit: boolean = false;
  // clickSubmit(e: MouseEvent): void {
  //   if()
  //   this.submit = true;
  // }
}
