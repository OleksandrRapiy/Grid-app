import { Item } from './item.model';
import { PageInfo } from './page-info.model';

export class YouTubeResponse {
    etag: string;
    items: Item[];
    kind: string;
    nextPageToken: string;
    pageInfo: PageInfo;
    regionCode: string;
}