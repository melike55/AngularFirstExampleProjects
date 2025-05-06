import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { NgforComponent } from "./directives/ngfor/ngfor.component";
import { CommonModule, NgFor } from '@angular/common';
import { NgIfComponent } from "./directives/ng-if/ng-if.component";
import { NgSwitchComponent } from "./directives/ng-switch/ng-switch.component";
import { NgClassComponent } from "./directives/ng-class/ng-class.component";
import { NgStyleComponent } from "./directives/ng-style/ng-style.component";
import { NgModelComponent } from "./directives/ng-model/ng-model.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, RouterOutlet, NgforComponent, CommonModule, NgFor, NgIfComponent, NgSwitchComponent, NgClassComponent, NgStyleComponent, NgModelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'AngularNewProject';
}
