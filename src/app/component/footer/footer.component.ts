import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
public name: string = 'nik_gupta3@live.com';
  constructor() { }

  ngOnInit() {
  }

}
