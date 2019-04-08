import { Component, OnInit } from '@angular/core';
import {Home} from '../home';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  selectedHero: Home;
  heroes: Home[];
  // heroes = HEROES;
  
  hero : Home = {
    id: 1,
    name: 'Windstorm'
    };
    
    onSelect(hero: Home): void {
      this.selectedHero = hero;
    }  

  // h1Style= false;
  constructor(private heroService: HeroService) { }
  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }
  ngOnInit() {
  }
  firstClick() {
    console.log('clicked');
    // this.h1Style = true;
  }
  
}


 
