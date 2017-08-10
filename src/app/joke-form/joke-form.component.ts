import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';

import { Joke } from '../joke'

@Component({
  selector: 'app-joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.css'],

  /** ViewEncapsulation Strategy */
  encapsulation: ViewEncapsulation.Emulated    // <- default view encapsulation used by Angular, no need to set it explicitely
  // encapsulation: ViewEncapsulation.Native   // <- with this the current cmp is isolated from the global styles
  // encapsulation: ViewEncapsulation.None     // <- NONE let the styles from this cmp leak throughout the whole app
})
export class JokeFormComponent {

  @Output() jokeCreated = new EventEmitter<Joke>();

  createJoke(setup: string, punchline: string) {
    this.jokeCreated.emit(new Joke(setup, punchline));
  }

}
