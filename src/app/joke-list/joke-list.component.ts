import { Component } from '@angular/core';
import { Joke } from '../joke'
import { JokeComponent } from '../joke/joke.component'
import { JokeFormComponent } from '../joke-form/joke-form.component'

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent {

  jokes: Joke[] = [];
  jokesStock: Joke[];

  constructor() {
    this.jokesStock = [
      new Joke('What did the cheese say when it looked in the mirror?', 'Hello-me (Halloumi)'),
      new Joke('What kind of cheese do you use to disguise a small horse?', 'Mask-a-pony (Mascarpone)'),
      new Joke('What hangs on the wall and gives everyone a hand?', 'A towl'),
      new Joke('What hangs on the wall and if the Kukuksuhr falls down it breaks?', 'A very bad joke'),
      // tslint:disable-next-line:quotemark
      new Joke('A kid thew a lump of cheddar at me', "I thought 'That's not very mature'"),
    ]
  }

  randomNumber() {
    return Math.floor(Math.random() * 5);
  }

  // addJoke(joke) {
  //   this.jokes.unshift(joke);
  // }
  // addJoke() {
  //   this.jokes.unshift(new Joke('What did the cheese say when it looked in the mirror?', 'Hello-me (Halloumi)'));
  // }
  addJoke() {
    this.jokes.unshift(this.jokesStock[this.randomNumber()]);
  }

  deleteJoke(joke) {
    this.jokes = [];
  }

}
