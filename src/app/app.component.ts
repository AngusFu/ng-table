import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewEncapsulation
} from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { moveItemInArray, CdkDragDrop } from "@angular/cdk/drag-drop";

import { NzTableComponent } from "ng-zorro-antd";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

import YAML from "./YAML";
import yamlContent from "./demo";
import fakeData from "./mock";
import { DynExampleComponent } from "./dyn-example/dyn-example.component";

const columns: any[] = YAML.parse(yamlContent).columns;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild("virtualTable", { static: true })
  nzTableComponent: NzTableComponent;

  private destroy$ = new Subject();
  listOfData: any[] = [];

  tableColumns = columns.map(item => {
    if (Math.random() > 0.6) {
      return { ...item, component: DynExampleComponent };
    }
    return item;
  });
  tableWidth = columns.reduce((acc, col) => acc + col.width, 0);
  tableLoading = false;

  constructor(private http: HttpClient) {}

  scrollToIndex(index: number): void {
    this.nzTableComponent.cdkVirtualScrollViewport.scrollToIndex(index);
  }

  updateData() {
    // this.tableLoading = true;
    // this.http
    //   .post(
    //     "",
    //     "page=1&perpage=100",
    //     {
    //       headers: new HttpHeaders({
    //         "Content-Type": "application/x-www-form-urlencoded"
    //       }),
    //       withCredentials: true
    //     }
    //   )
    //   .subscribe((res: { data: { lists: any[] } }) => {
    //     this.listOfData = res.data.lists;
    //     this.tableLoading = false;
    //   });
  }

  trackByKey(_index: number, item: any): string {
    return item.key;
  }

  onSortChange(e: any): void {
    console.log(e);
  }

  onColumnHeaderDrop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.tableColumns, event.previousIndex, event.currentIndex);
  }

  ngOnInit(): void {
    this.listOfData = fakeData.data.lists;
  }

  ngAfterViewInit(): void {
    this.nzTableComponent.cdkVirtualScrollViewport.scrolledIndexChange
      .pipe(takeUntil(this.destroy$))
      .subscribe(data => {
        console.log("scroll index to", data);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
