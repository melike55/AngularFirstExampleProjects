import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExampleComponent } from "./pages/example/example.component";
import { Examples2Component } from "./pages/examples2/examples2.component";
import { Examples3Component } from "./pages/example3/examples3.component"
import { EventclickComponent } from "./pages/eventclick/eventclick.component";
import { DatapassInputComponent } from "./pages/datapass-input/datapass-input.component";
import { TwoWayBindingComponent } from "./pages/two-way-binding/two-way-binding.component";
import { NgOnchangeHookComponent } from "./pages/ng-onchange-hook/ng-onchange-hook.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ExampleComponent, Examples2Component, Examples3Component, EventclickComponent, DatapassInputComponent, TwoWayBindingComponent, NgOnchangeHookComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'AngularNewProject';
}
