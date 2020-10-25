import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataTransferService } from 'src/app/services/data-transfer.service';

@Component({
  selector: 'app-header-grid',
  templateUrl: './header-grid.component.html',
  styleUrls: ['./header-grid.component.scss']
})
export class HeaderGridComponent implements OnDestroy {
  private params: any;

  constructor(public dataTransferService: DataTransferService) { }

  ngOnDestroy(): void {
  }

  agInit(params): void {
    this.params = params;
  }

  toggleMode() {
    const currentState = this.params.columnGroup
      .getOriginalColumnGroup()
      .isExpanded()
    this.params.setExpanded(!currentState)
  }
}
