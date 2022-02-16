import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  Input,
  ViewChild,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { Subject, Subscription, Observable, map, tap, BehaviorSubject } from 'rxjs';

import { CriminalsService } from '../../services/criminals.service';

import { Criminals } from '../../models/criminals';
import { CriminalsFacade } from '../../redux/criminals/criminals.facade';
import { CriminalsState } from '../../redux/criminals/criminals.state';

import { criminalsState } from '../../models/criminalsState';

@Component({
  selector: 'fw-criminals-table',
  templateUrl: './criminals-table.component.html',
  styleUrls: ['./criminals-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CriminalsTableComponent implements OnInit {
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
  public page: number = 0;
  public criminalsData$: Observable<any>;
  public isViewMore: boolean = false;

  public loadCriminalsPage(event: PageEvent): void {
    this.page = event.pageIndex;
    this.criminalsFacade.loadCriminals(this.page + 1);
  }

  private initData(): any {
    this.criminalsData$ = this.criminalsFacade.criminalsData$.pipe(
      map((criminalsState: criminalsState) => {
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
    this.initData()
    this.criminalsFacade.loadCriminals(this.page + 1);
  }
}
