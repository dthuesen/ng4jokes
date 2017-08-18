import {
         AfterContentChecked,
         AfterContentInit,
         AfterViewChecked,
         AfterViewInit,
         Component,
         DoCheck,
         Input,
         OnChanges,
         OnDestroy,
         OnInit,
         SimpleChange,
         SimpleChanges
} from '@angular/core';

import { Joke } from '../joke'

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent {

  // tslint:disable-next-line:no-input-rename
  @Input('joke') data: Joke;

  constructor() {}

}
