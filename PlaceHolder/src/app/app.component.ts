import { Component, OnInit } from '@angular/core';
import { ITodo } from './interfaces/itodo';
import { MatTableDataSource } from '@angular/material/table';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'PlaceHolder';

  displayedColumns: string[] = ['id', 'userId', 'title', 'completed'];
  dataSource: MatTableDataSource<ITodo>;

  constructor(private todoService: TodoService) { }

  async ngOnInit() {
    const data = await this.todoService.get();
    this.dataSource = new MatTableDataSource(data);
  }
}
