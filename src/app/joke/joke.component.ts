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
export class JokeComponent implements OnInit,
                                      DoCheck,
                                      AfterContentInit,
                                      AfterContentChecked,
                                      AfterViewInit,
                                      AfterViewChecked,
                                      OnChanges,
                                      OnDestroy {

  // tslint:disable-next-line:no-input-rename
  @Input('joke') data: Joke;

  constructor() {
    console.log(`new - data is ${JSON.stringify(this.data)}`);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`ngOnChanges - data is ${JSON.stringify(this.data)}`);

    // tslint:disable-next-line:forin
    for (const key in changes) {
      console.log(`${key} changed.
        Current:   ${JSON.stringify(changes[key].currentValue)}.
        Previous:  ${JSON.stringify(changes[key].previousValue)}
      `);
    }
  }

  ngOnInit() {
    console.log(`ngOnInit - data is ${JSON.stringify(this.data)}`);
  }

  ngDoCheck() {
    console.log(`ngDoCheck`);
  }

  ngAfterContentInit() {
    console.log(`ngAfterContentInit`);
  }

  ngAfterContentChecked() {
    console.log(`ngAfterContentChecked`);
  }

  ngAfterViewInit() {
    console.log(`ngAfterViewInit`);
  }

  ngAfterViewChecked() {
    console.log(`ngAfterViewChecked`);
  }

  ngOnDestroy() {
    console.log(`ngOnDestroy`);
  }

}
