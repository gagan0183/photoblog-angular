import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EntryListComponent, EntryComponent, EntryService, EntryComponentFormComponent } from './entries'; 
import { InMemoryEntryService } from './backend';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryEntryService),
        FormsModule
    ],
    providers: [EntryService],
    bootstrap: [
        AppComponent
    ],
    declarations: [
        AppComponent,         
        EntryComponent,
        EntryListComponent,
        EntryComponentFormComponent
    ]
})
export class AppModule {

}