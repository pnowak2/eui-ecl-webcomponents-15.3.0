import { NgModule, APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { SharedModule } from '@shared/shared.module';

import { defineCustomElements } from '@ecl/ecl-webcomponents/loader';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';

@NgModule({
    imports: [
        SharedModule,
        HomeRoutingModule,
    ],
    declarations: [
        HomeComponent,
    ],
    providers: [
        {
            provide: APP_INITIALIZER,
            useFactory: () => () => defineCustomElements(),
            multi: true
        },
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class Module { }
