import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { Observable, map } from 'rxjs';

import { CriminalsService } from '../../services/criminals.service';

import { Criminals } from '../../models/criminals';
import { CriminalsFacade } from '../../redux/criminals/criminals.facade';

import { displayedColumns } from '../../constants/displayed-columns';

@Component({
  selector: 'fw-criminals-table',
  templateUrl: './criminals-table.component.html',
  styleUrls: ['./criminals-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CriminalsTableComponent implements OnInit {
  public columns = displayedColumns;
  public page: number = 1;
  public criminalsData$: Observable<any>;
  public isViewMore: boolean = false;

  public loadCriminalsPage(event: PageEvent): void {
    this.page = event.pageIndex + 1;
    this.criminalsFacade.loadCriminals(this.page);
  }

  private initData(): void {
    this.criminalsData$ = this.criminalsFacade.criminalsData$.pipe(
      map((criminalsState) => {
        const { page, criminals, total } = criminalsState;
        const criminalsDS = new MatTableDataSource<Criminals>(criminals);
        const criminalsData = {
          criminalsDS,
          page,
          total,
          size: criminals.length,
        };
        return criminalsData;
      })
    );
  }

  public viewMore(): void {
    this.isViewMore = !this.isViewMore;
  }

  constructor(private criminalsFacade: CriminalsFacade) {}

  ngOnInit(): void {
    this.initData();
    this.criminalsFacade.loadCriminals(this.page);
  }
}
