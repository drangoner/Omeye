import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Response } from '@angular/http';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	listData: Object;
  constructor(public navCtrl: NavController, private http:Http) {

  }
  ionViewDidLoad(){
  	this.http.request('http://jsonplaceholder.typicode.com/photos').subscribe((res:Response) => {
  		this.listData = res.json();
  	});
  }

}
