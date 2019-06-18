import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-dyn-example",
  templateUrl: "./dyn-example.component.html",
  styleUrls: ["./dyn-example.component.scss"]
})
export class DynExampleComponent implements OnInit {
  @Input() cellValue: any;
  @Input() index: number;
  @Input() rowData: any;
  @Input() columnOption: any;

  constructor() {}

  ngOnInit() {}
}
