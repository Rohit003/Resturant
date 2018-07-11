import { Component, OnInit } from '@angular/core';
import { AuthGuard } from '../auth.guard';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {

  constructor(private auth:AuthGuard) { }

  ngOnInit() {
  }
  getprice(){
    this.auth.canActivate();

  }

}
