import { Component, OnInit } from '@angular/core';
import { HerosService } from '../../services/heros.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styles: []
})
export class HerosComponent implements OnInit {

	heros:any = []
	loading:boolean = true;

  constructor( private _herosService:HerosService ) {

  	this._herosService.getHeros()
  		.subscribe(res => {
  			console.log(res);
  			this.heros = res;
  			this.loading = false;
  		})

  }

  ngOnInit() {
  }

  deleteHero(key$:string){
  	this._herosService.deleteHero(key$)
  		.subscribe(res=>{
  			if (res) {
  				console.error(res)
  			} else {
  				delete this.heros[key$]
  			}
  		});
  }

}
