import { AfterViewInit, ViewChild, Component, OnInit } from '@angular/core';
import { MatTableModule} from '@angular/material/table'
import { MatTableDataSource } from '@angular/material/table';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-app-dashboard2',
  templateUrl: './app-dashboard2.component.html',
  styleUrls: ['./app-dashboard2.component.css']
})
export class AppDashboard2Component implements OnInit {
  displayedColumns: string[] = [
    'id',
    'name',
    'description',
    'imagePath'
  ];

  RECIPES: Recipe[] = [
      {   id: 11,
          name: 'Chinese Chicken',
          description: 'Chinese Chicken with sweet and sour sauce',
          imagePath: 'Path1'
      },
      {   id: 12,
          name: 'Sausage Casserole',
          description: 'Sausage Casserole with onion gravy',
          imagePath: 'Path2'
      }
  ];

  dataSource = new MatTableDataSource(this.RECIPES);

  constructor() { }

  ngOnInit() {
  }

}