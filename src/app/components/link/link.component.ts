import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent implements OnInit{
  @Input()
  color: 'primary' | 'secondary' = 'primary';
  @Input()
  href: any;
  @Input()
  target?: '_self' | '_blank' | '_parent' | '_top' = '_self';
  
  public get classes(): Array<string> {
    return ['link', `${this.color}-link`];
  }

  constructor(){

  }

  ngOnInit(){
    console.log(this.color,this.href,this.target,this.classes);
  }
}
