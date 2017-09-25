import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { EntryListComponent, EntryComponent } from './entries'; 

@NgModule({
    imports: [
        BrowserModule,
        HttpModule
    ],
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