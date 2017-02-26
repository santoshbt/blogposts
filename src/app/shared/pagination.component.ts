import {Component} from "@angular/core";

@Component({
    selector: 'pagination',
    template: `
                    <ul>
                        <li *ngFor="let item of collection | paginate: { itemsPerPage: 10, currentPage: p }"> ... </li>
                    </ul>
                     <pagination-controls (pageChange)="p = $event"></pagination-controls>
             `
    
})

export class PaginationComponent{
    public items = [];
}