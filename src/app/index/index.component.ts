import { Component, ElementRef, QueryList, ViewChild, ViewChildren, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements AfterViewInit {
  @ViewChildren('sliderImg') sliderImgElements! : QueryList<ElementRef>;



  public slidi : number = 1;

  slidiplus ( n : number) {
    this.slidi += n;
    if( this.slidi > this.sliderImgElements.length) this.slidi = 1;
    else if (this.slidi < 1) this.slidi = this.sliderImgElements.length;
  }


  // public x :any;
  // @ViewChild('header', { static: true }) _header!: ElementRef;
  Constructor () {
    // this._header = document.getElementById("header");
    // this.x = this._header.style.height;
  }
  public _app : any;
  public x : any;
  public _menu : any;

  // public _header : any = document.getElementById("header");
  ngAfterViewInit() {
  }

  ngOnInit () {
    this.someMethod();
  }

  someMethod () {
    const _header = document.getElementById("header");
    if(!_header) {
      return;
    }
    this.x =_header.style.height;

    this._app = document.getElementById("app");
    this._app.addEventListener('click', () => {
      _header.style.height = this.x;
    });
    this._menu = document.querySelector('.menu-btn');
    this._menu.addEventListener('click', () => {
      if(_header.style.height == this.x) {
        _header.style.height = "auto";
      }
      else _header.style.height = this.x;
    });
    // this._header.addEventListener('click', (event : any) => event.stopPropagation());
    this._menu.addEventListener('click', (event : any) => event.stopPropagation());
  }

  // turnmenu () {
  //   if(this._header.style.height == this.x) {
  //     this._header.style.height = "auto";
  //   }
  //   else this._header.style.height = this.x;
  //   console.log("turn");
  // }

  offmenu() {
    const _header = document.getElementById("header");
    if(!_header) {
      return;
    }
    _header.style.height = this.x;
    console.log("off");
  }


  check() {
    console.log("ok");
  }

  preventDefault(event : any) {
    event.preventDefault();
  }
}
