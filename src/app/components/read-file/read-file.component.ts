import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataModel } from 'src/app/models/data-model';
import { Observable } from 'rxjs';
declare var $: any;

@Component({
  selector: 'app-read-file',
  templateUrl: './read-file.component.html',
  styleUrls: ['./read-file.component.css']
})
export class ReadFileComponent implements OnInit {


  file: File = null;
  apiUrl = 'https://localhost:44377/dataexploration/';
  records: any;
  fixedAcidity: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  public onChange(fileList: FileList): void {
    this.file = fileList[0];
  }

  public sendFile(): void {
    const formData = new FormData();
    formData.append('file', this.file)
    this.http
      .post(this.apiUrl + 'upload', formData)
      .subscribe((records: any) => {
        console.log(records);
        this.records = records;
      });
  }

  public avgFixedAcidity(): void {
    let data = this.records.
      map((r: any) => r.fixedAcidity);
    this.http
      .post(this.apiUrl + 'average',
        data)
      .subscribe((fixedAcidity: any) => {
        console.log(fixedAcidity);
        this.fixedAcidity = fixedAcidity;
      })
  }
}
