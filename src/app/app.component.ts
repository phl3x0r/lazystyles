import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lazystyles';
  private _element: HTMLScriptElement;
  public style = '';
  constructor(private cdr: ChangeDetectorRef) {}

  loadStyle(n: number) {
    const o = {
      1: () => this.create('one'),
      2: () => this.create('two')
    };
    o[n]();
  }

  create(s: string) {
    if (this._element) {
      document.body.removeChild(this._element);
    }
    this._element = document.createElement('script');
    this._element.src = `lazystyle-${s}.js`;
    document.body.appendChild(this._element);
    this.style = s;
  }
}
