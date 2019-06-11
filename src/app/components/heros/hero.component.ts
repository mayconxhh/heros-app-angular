import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'
import { Hero } from '../../interfaces/hero.interface';
import { HerosService } from '../../services/heros.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styles: []
})
export class HeroComponent implements OnInit {

	public hero:Hero = {
		name:'',
		bio:'',
		house:'Marvel'
	}

	new:boolean = false;
	id:string

  constructor(private _herosService:HerosService,
  						private router:Router,
  						private route:ActivatedRoute) {
  	this.route.params
  		.subscribe( params => {

  			this.id = params['id']

  			if ( this.id!=='new' ) {
  				this._herosService.getHero(this.id)
  					.subscribe( hero => this.hero = hero);
  			}
  		});
  }

  ngOnInit() {
  }

  newHero( form:NgForm ){
  	this.router.navigate(['/hero', 'new']);
  	form.reset({
			house:'Marvel'
		});
  }

  save(){
  	if (this.id === 'new') {
	  	this._herosService.newHero(this.hero)
	  		.subscribe( res=>{
	  			console.log(res)
	  			this.router.navigate(['/hero', res.name]);
	  		}, err=>{
	  			console.error(err);
	  		});
  	} else {
  		this._herosService.updateHero(this.hero, this.id)
  			.subscribe( res=>{
  				console.log(res)
  			}, err=>{
  				console.error(err);
  			});
  	}
  }

}
