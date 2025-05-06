import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PipeComponent } from "./pipes/pipe/pipe.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PipeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent{

  title = 'AngularNewProject3';
}
