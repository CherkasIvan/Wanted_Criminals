import {
  Component,
  ChangeDetectionStrategy,
  OnDestroy,
  OnInit,
  Input,
  ViewChild,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

import { Subject, Subscription, Observable, map, tap } from 'rxjs';

import { ContentService } from '../../services/content.service';

import { SlideInOutAnimation } from '../../animations/animation-route';

import { Criminals } from '../../models/criminals';

@Component({
  selector: 'fw-criminals-table',
  templateUrl: './criminals-table.component.html',
  styleUrls: ['./criminals-table.component.scss'],
  animations: [SlideInOutAnimation],
})
export class CriminalsTableComponent
  implements AfterViewInit, OnDestroy, OnInit
{
  @ViewChild(MatPaginator) paginator: MatPaginator;
  public array: any;
  public dataSource: any;
  public pageEvent: any;
  public animationState = 'out';

  public pageSize = 3;
  public currentPage = 0;
  public totalSize = 0;

  private iterator() {
    const end = (this.currentPage + 1) * this.pageSize;
    const start = this.currentPage * this.pageSize;
    const part = this.array.slice(start, end);
    this.dataSource = part;
  }

  public handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.iterator();
  }

  toggleShowDiv(divName: string) {
    if (divName === 'animation') {
      console.log(this.animationState);
      this.animationState = this.animationState === 'out' ? 'in' : 'out';
      console.log(this.animationState);
    }
  }

  public response: Criminals[];
  public criminals$: Observable<MatTableDataSource<Criminals>>;
  public displayedColumns: string[] = [
    'id',
    'Photo',
    'Name',
    'Sex',
    'Date of birth',
    'Max weight',
    'View',
    'Description',
  ];
  public aSub: Subscription = new Subscription();
  public unsubscribe: Subject<void> = new Subject();
  public total: number;
  public isViewMore: boolean = false;
  public viewMore(): void {
    this.isViewMore = !this.isViewMore;
    console.log(this.isViewMore);
  }

  private getArray() {
    this.contentService.getCriminals().subscribe((criminalsResponse) => {
      this.dataSource = this.criminals$;
      this.array = criminalsResponse.items;
      this.totalSize = this.array.length;
      this.dataSource.paginator = this.paginator;
      this.iterator();
      console.log(this.dataSource);
      console.log(this.array);
    });
  }

  public getData() {
    this.criminals$ = this.contentService.getCriminals().pipe(
      tap((criminalsResponse) => {
        this.total = criminalsResponse.total;

        console.log(criminalsResponse.items);
      }),
      map((criminalsResponse) => {
        const criminalsDS = new MatTableDataSource<Criminals>(
          criminalsResponse.items
        );
        console.log(criminalsDS);
        console.log(this.criminals$);
        return criminalsDS;
      })
    );
  }

  constructor(public contentService: ContentService) {}
  async ngOnInit(): Promise<void> {
    this.getData();
    this.getArray();
  }

  ngAfterViewInit(): void {}

  async ngOnDestroy(): Promise<void> {
    if (this.aSub) {
      this.aSub.unsubscribe();
    }
  }
}
