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

  // constructor() {
  //   this.jokes = [
  //     new Joke('What did the cheese say when it looked in the mirror?', 'Hello-me (Halloumi)'),
  //     new Joke('What kind of cheese do you use to disguise a small horse?', 'Mask-a-pony (Mascarpone)'),
  //     // tslint:disable-next-line:quotemark
  //     new Joke('A kid thew a lump of cheddar at me', "I thought 'That's not very mature'"),
  //   ]
  // }

  // addJoke(joke) {
  //   this.jokes.unshift(joke);
  // }
  addJoke() {
    this.jokes.unshift(new Joke('What did the cheese say when it looked in the mirror?', 'Hello-me (Halloumi)'));
  }

  deleteJoke(joke) {
    this.jokes = [];
  }

}
