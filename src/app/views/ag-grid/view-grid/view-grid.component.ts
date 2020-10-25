// Components
import { Component, OnInit } from '@angular/core';
import { HeaderGridComponent } from '../header-grid/header-grid.component';

// Models
import { Item } from 'src/app/models/item.model';

// Services
import { YoutubeService } from 'src/app/services/youtube.service';
import { DataTransferService } from 'src/app/services/data-transfer.service';

// Ag-Grid
import {
  AllModules,
  GridOptions,
  Module
} from '@ag-grid-enterprise/all-modules'

@Component({
  selector: 'app-view-grid',
  templateUrl: './view-grid.component.html',
  styleUrls: ['./view-grid.component.scss']
})
export class ViewGridComponent implements OnInit {

  public gridOptions: GridOptions
  public defaultColDef: any;
  public rowData: Item[];
  public rowSelection: string = 'multiple';;
  public rowHeight: number = 90;
  public getContextMenuItems: any
  public popupParent: any;

  public modules: Module[] = AllModules;

  constructor(private youtubeService: YoutubeService,
    private dataTransferService: DataTransferService) {

    this.youtubeService.getVideoDatas().subscribe(data => {
      this.rowData = data;
      this.dataTransferService.totalVideos.next(data.length)
    });

    this.popupParent = document.querySelector('body')

    this.getContextMenuItems = params => {
      const result = []
      const link = this.getTitleLink(params.node.data, 'Open in new tab')
      if (params.column.userProvidedColDef.headerName === 'Video Title') {
        result.push({
          name: link
        });
      }
      return result
    }
  }

  ngOnInit(): void {
    this.gridOptions = {
      columnDefs: this.getColumns(),
      defaultColDef: this.getDefaultColumnDef(),
    };
    this.gridOptions.defaultColDef.sortable = true
    this.gridOptions.defaultColDef.filter = true
  }

  frameworkComponents = {
    headerGridComponent: HeaderGridComponent
  }

  getTitleLink(data: Item, title): string {
    return `<a href="https://www.youtube.com/watch?v=${data.id.videoId}" target="_blank">${title}</a>`
  }

  getThumbnails(data: Item) {
    return `<img
    style="width: ${data.snippet.thumbnails.default.width};
    height: ${data.snippet.thumbnails.default.height}"
    src="${data.snippet.thumbnails.default.url}">`
  }

  getColumns() {
    return [
      {
        headerName: '',
        headerGroupComponent: 'headerGridComponent',
        children: [
          {
            field: "checkbox",
            headerName: "",
            width: 60,
            cellRenderer: "checkbox",
            headerCheckboxSelection: true,
            checkboxSelection: true,
            columnGroupShow: 'closed',
            sortable: true,
            suppressMenu: true
          },
          {
            headerName: '',
            field: 'thumbnails',
            width: 150,
            cellRenderer: item => this.getThumbnails(item.data),
            sortable: true,
            suppressMenu: true
          },
          {
            headerName: "Published on",
            valueGetter: 'data.snippet.publishedAt',
            width: 200,
            field: "publishedAt",
            sortable: true,
            suppressMenu: true
          },
          {
            headerName: "Video Title",
            width: 300,
            field: "title",
            cellRenderer: item => this.getTitleLink(item.data, item.data.snippet.title),
            sortable: true,
            suppressMenu: true
          },
          {
            headerName: "Description",
            valueGetter: 'data.snippet.description',
            width: 800,
            field: "description",
            sortable: true,
            suppressMenu: true
          },

        ]
      }]
  }

  getDefaultColumnDef() {
    this.defaultColDef = {
      sortable: true,
      minWidth: 60,
      resizable: true,
    };
    return this.defaultColDef;
  }

  getRowHeight(params) {
    return params.data.snippet.thumbnails.default.height;
  }


  onSelect(params) {
    this.dataTransferService.selectedVideos.next(params.api.getSelectedNodes().length)
  }
}
