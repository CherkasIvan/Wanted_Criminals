import {
  Component,
  ChangeDetectionStrategy,
  OnDestroy,
  OnInit,
  Input,
  ViewChild,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CriminalsService } from '../../services/criminals.service';

@Component({
  selector: 'fw-content-page',
  templateUrl: './content-page.component.html',
  styleUrls: ['./content-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentPageComponent {}
