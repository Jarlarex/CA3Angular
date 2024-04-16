import { Component } from '@angular/core';
import { CarlistComponent } from './components/carlist/carlist.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CarlistComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'carsales-nosql';
}
