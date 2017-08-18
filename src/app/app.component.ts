import { Component } from '@angular/core';
import { Joke } from './joke'
import { JokeComponent } from './joke/joke.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // tslint:disable-next-line:quotemark
  jokeProp: Joke = new Joke('A kid threw a lump of cheddar at me', "I thought 'That's not very mature'");

  constructor() {
    console.log(`
    ${this.jokeProp.setup}
    ${this.jokeProp.punchline}
    `)
  }
}
