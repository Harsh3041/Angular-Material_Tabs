import { Component } from '@angular/core';


export interface Food {
  calories: number;
  carbs: number;
  fat: number;
  name: string;
  protein: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-material-tabs';
  columnsToDisplay = ['userName', 'age'];
  expandedIndex = 0;

  dataSource: Food[] = [
    {name: 'Yoghurt',calories: 160, fat: 6, carbs: 24, protein: 4}
  ]
  displayedColumns: string[] = ['name', 'calories', 'fat', 'carbs','protein'];

  panelOpenState = false;
}
