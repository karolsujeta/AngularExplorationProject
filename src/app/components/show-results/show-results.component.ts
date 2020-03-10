import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { DataModel } from 'src/app/models/data-model';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-show-results',
  templateUrl: './show-results.component.html',
  styleUrls: ['./show-results.component.css']
})
export class ShowResultsComponent implements OnInit {

  constructor(private service: ServiceService) { }
  datas: DataModel[];

  ngOnInit() {
    this.getData();
  }

  getData() {
    return this.service.downloadData()
      .subscribe((data: any) => {
        //console.log(data);
        this.datas = data.data;
      })
  }
}
