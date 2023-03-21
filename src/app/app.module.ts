import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AppStarterService } from './app-starter.service';
import { defineCustomElements } from '@ecl/ecl-webcomponents/loader';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CoreModule,
        AppRoutingModule,
    ],
    providers: [
        AppStarterService,
        {
            provide: APP_INITIALIZER,
            useFactory: (appStarterService) => () => new Promise<void>((resolve) => {
                appStarterService.start().subscribe(() => resolve());
            }),
            deps: [AppStarterService],
            multi: true
        },
        {
            provide: APP_INITIALIZER,
            useFactory: () => () => defineCustomElements(),
            multi: true
        },
    ],
    bootstrap: [
        AppComponent,
    ],
})
export class AppModule { }
