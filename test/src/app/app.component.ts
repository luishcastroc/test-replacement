import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { environment } from '../environment/environment';

@Component({
  selector: 'test-root',
  standalone: true,
  imports: [RouterOutlet],
  template: ` <router-outlet></router-outlet> `,
})
export class AppComponent implements OnInit {
  ngOnInit() {
    const env = environment.baseUrl;
    console.log('AppComponent: ', env);
  }
}
