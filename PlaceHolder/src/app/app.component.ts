import { Component, OnInit, ViewChild } from '@angular/core';
import { ITodo } from './interfaces/itodo';
import { MatTableDataSource } from '@angular/material/table';
import { TodoService } from './services/todo.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'PlaceHolder';

  displayedColumns: string[] = ['id', 'userId', 'title', 'completed'];
  dataSource: MatTableDataSource<ITodo>;

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private todoService: TodoService) { }

  async ngOnInit() {
    const data = await this.todoService.get();
    this.dataSource = new MatTableDataSource(data);

    this.dataSource.sort = this.sort;

    this.dataSource.paginator = this.paginator;
  }
}
