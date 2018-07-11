import { Component, OnInit } from '@angular/core';
import { configuration } from '../configurtaion';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent implements OnInit {
partner={};
  constructor(private config :ConfigService) { }

  ngOnInit() {
    this.partner=this.getpartners();
  }

getpartners(){
  return this.config.getconfig().partner;

}

}
