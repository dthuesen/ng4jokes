import { AfterViewInit, Component, QueryList, ViewChild, ViewChildren } from '@angular/core';

import { Joke } from '../joke'
import { JokeComponent } from '../joke/joke.component'
import { JokeFormComponent } from '../joke-form/joke-form.component'

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements AfterViewInit {

  @ViewChild (JokeComponent) jokeViewChild: JokeComponent;
  @ViewChildren (JokeComponent) jokeViewChildren: QueryList<JokeComponent>;

  jokes: Joke[] = [
    new Joke('What did the cheese say when it looked in the mirror?', 'Hello-me (Halloumi)'),
    new Joke('What kind of cheese do you use to disguise a small horse?', 'Mask-a-pony (Mascarpone)')
  ];
  jokesStock: Joke[];

  constructor() {
    this.jokesStock = [
      new Joke('What did the cheese say when it looked in the mirror?', 'Hello-me (Halloumi)'),
      new Joke('What kind of cheese do you use to disguise a small horse?', 'Mask-a-pony (Mascarpone)'),
      new Joke('What hangs on the wall and gives everyone a hand?', 'A towl'),
      new Joke('What hangs on the wall and if the Kukuksuhr falls down it breaks?', 'A very bad joke'),
      // tslint:disable-next-line:quotemark
      new Joke('A kid threw a lump of cheddar at me', "I thought 'That's not very mature'"),
    ]
    // this.addJoke();

    console.log(`new - jokeViewChild is ${this.jokeViewChild}`);
  }

  ngAfterViewInit() {
    console.log(`ngAfterViewInit - jokeViewChild is ${JSON.stringify(this.jokeViewChild)}`);
    const jokes: JokeComponent[] = this.jokeViewChildren.toArray();
    console.log(jokes);
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
  // addJoke() {
  //   this.jokes.unshift(this.jokesStock[this.randomNumber()]);
  // }

  deleteJoke(joke) {
    this.jokes = [];
  }

}
