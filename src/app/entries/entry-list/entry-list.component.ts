import { Component, OnInit } from '@angular/core';
import { Entry } from '../share/entry.model';
import { EntryService } from '../share/entry.service';

@Component({
    selector: 'app-entry-list',
    templateUrl: 'entry-list.component.html',
    styleUrls: ['entry-list.component.css']
})
export class EntryListComponent implements OnInit {
    entries: Entry[];
    
    constructor(private entryService: EntryService) {
        
    }

    ngOnInit() {
        this.entryService.getEntries()
            .then(entries => this.entries = entries);
    }
}