import { ItemId } from './item-id.model';
import { Snippet } from './snippet.model';

export class Item {
    etag: string;
    id: ItemId;
    kind: string;
    snippet: Snippet;
}