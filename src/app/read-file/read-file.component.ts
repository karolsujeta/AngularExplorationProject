import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-read-file',
  templateUrl: './read-file.component.html',
  styleUrls: ['./read-file.component.css']
})
export class ReadFileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  constfileContent: string = '';

  public onChange(fileList: FileList): void {
    let file = fileList[0];
    let fileReader: FileReader = new FileReader();
    let self = this;
    fileReader.onloadend = function (x) {
      self.fileContent = fileReader.result;
    }
    fileReader.readAsText(file);
  }
}
