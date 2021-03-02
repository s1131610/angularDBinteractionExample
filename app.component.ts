import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'Acme Software Customers';

  columnDefs = [
        { field: 'make' },
        { field: 'model' },
        { field: 'price' }
    ];
  rowData = [
        { make: 'Toyota', model: 'Celica', price: 35999 },
        { make: 'Ford', model: 'Mondeo', price: 32199.00 },
        { make: 'Porsche', model: 'Boxter', price: 72009.89}
    ];

  products:any[] = [];

//  rowData:any[]  = [];

  constructor (private dataService: DataService) {
  }

  ngOnInit() {

     this.dataService.sendGetRequest().subscribe(res => {
        console.log("returned data");
        console.log (res);
        console.log (typeof res);
        // this.rowData  = res;
      });
  }
}
