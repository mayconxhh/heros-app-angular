import { RouterModule, Routes } from '@angular/router';
import { HerosComponent } from './components/heros/heros.component';
import { HeroComponent } from './components/heros/hero.component';

const app_routes: Routes = [
	{ path: 'heros', component: HerosComponent },
	{ path: 'hero/:id', component: HeroComponent },
	{ path: '**', pathMatch: 'full', redirectTo: 'heros' }
];

export const APP_ROUTING = RouterModule.forRoot(app_routes);