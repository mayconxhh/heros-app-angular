import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Hero } from '../interfaces/hero.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HerosService {

	herosURL:string = '...';
	heroURL:string = '...';

  constructor(private http:Http ) { }

  newHero( hero:Hero) {
  	let body = JSON.stringify( hero );

  	let headers = new Headers({
  		'Content-type': 'application/json'
  	});

  	return this.http.post( this.herosURL, body, { headers } )
  		.pipe(map( res=>{
  			console.log(res.json());
  			return res.json();
  		}))
  }

  updateHero( hero:Hero, key$:string ) {
  	let body = JSON.stringify( hero );

  	let headers = new Headers({
  		'Content-type': 'application/json'
  	});

  	let url = `${this.heroURL}/${key$}.json`;

  	return this.http.put( url, body, { headers } )
  		.pipe(map( res=>{
  			return res.json();
  		}))
  }

  getHero(key$:string){
  	let url = `${this.heroURL}/${key$}.json`;
  	return this.http.get(url)
  		.pipe(map( res => res.json()));
  }

  getHeros(){
  	return this.http.get( this.herosURL )
  		.pipe(map( res => res.json()));
  }

  deleteHero(key$:string){
  	let url = `${this.heroURL}/${key$}.json`;
  	return this.http.delete( url )
  		.pipe(map(res=>res.json()));
  }
}
