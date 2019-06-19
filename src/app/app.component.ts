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
import fake from "./fake";
import yamlContent from "./columnConfigYaml";
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
  isLoading = false;
  totalCount = 0;

  pageSize = 100;

  columnOptions = columns.map(item => {
    if (Math.random() > 0.6) {
      return { ...item, component: DynExampleComponent };
    }
    return item;
  });
  horizontalWidth = columns.reduce((acc, col) => acc + col.width, 0);

  constructor(private http: HttpClient) {}

  scrollToIndex(index: number): void {
    this.nzTableComponent.cdkVirtualScrollViewport.scrollToIndex(index);
  }

  updateData() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      this.listOfData = fake(columns, 10e3);
      this.totalCount = 10e8;
      console.log('done')
    }, 500)
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
    //   .subscribe((res: { data: { lists: any[]; total: number } }) => {
    //     this.isLoading = false;
    //     this.listOfData = res.data.lists;
    //     this.totalCount = res.data.total;
    //   });
  }

  trackByKey(_index: number, item: any): string {
    return item.key;
  }

  onPaginationChange(e: any): void {
    console.log(e);
  }

  onSortChange(e: { key: string; value: "descend" | "ascend" | null }): void {
    console.log(e);
  }

  onColumnHeaderDrop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(
      this.columnOptions,
      event.previousIndex,
      event.currentIndex
    );
  }
  reorder() {
    this.columnOptions = this.columnOptions.slice(3, 10);
  }

  //  onPageSizeChange(pageSize) {
  //     // 注意对 pageIndex 进行校正
  //    const maxPageIndex = Math.ceil(this.totalCount / pageSize)
  //     const pageIndex = Math.min(maxPageIndex, this.pageIndex) || 1
  //     this.localDispatch('setPagination', { pageIndex, pageSize })
  //     // 存储自定义的 pageSize
  //     this.$idleTaskQue.add(
  //       () => {
  //         this.$forage.setItem(this.pageSizeStoreKey, pageSize)
  //       },
  //       { timeout: 2000 }
  //     )
  //   },

  //  onPageIndexChange(pageIndex) {
  //     this.localDispatch('setPagination', { pageIndex })
  //   },

  ngOnInit(): void {
    this.updateData();
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
