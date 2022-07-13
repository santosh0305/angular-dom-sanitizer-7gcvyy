import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  template: `
    <div [innerHTML]="name"></div>
    <hr>
    <div [innerHTML]="a"></div>
    <hr>
    <div [innerHTML]="b"></div>
    <hr>
    <div [innerHTML]="c"></div>
    <hr>
    <div [innerHTML]="d"></div>
  `,
})
export class AppComponent  {
  href = 'https://www.google.com';
  ctlTarget = 'https://www.google.com';
  name = `<h1>inside_h1</h1>
          <br />
          Alert : <script>alert('hi')</script>
          <br />
          <b>inside_bold</b>
          <p>inside_p</p> 
          <a href=#>Click Here</>
          <br />
          <img src=https://portal-pdev.azurewebsites.net/cgs_bc_blk.51b3a0b9063dc97fe7fa.svg >
          <br />
          <a href=${this.href} target=${this.ctlTarget}">Click Me</a>
          `;
  a = '';
  b = '';
  c = '';
  d = '';

  constructor(t: DomSanitizer) {
    this.a = t.sanitize(0, this.name);
    //this.b = t.sanitize(1, this.name);
    //this.c = t.sanitize(2, this.name);
    //this.d = t.sanitize(3, this.name);
  }
}
