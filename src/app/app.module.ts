import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EntryListComponent, EntryComponent } from './entries'; 

@NgModule({
    imports: [BrowserModule],
    bootstrap: [
        AppComponent
    ],
    declarations: [
        AppComponent,         
        EntryComponent,
        EntryListComponent
    ]
})
export class AppModule {

}