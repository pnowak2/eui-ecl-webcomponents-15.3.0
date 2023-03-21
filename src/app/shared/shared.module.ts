// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Common 3rd party module used accross the app
import { TranslateModule } from '@ngx-translate/core';

// eUI specific modules - commonly used accross the app - prefered way
// keep here to avoid imports within features modules
import { EuiPageModule } from '@eui/components/eui-page';
import { EuiIconModule } from '@eui/components/eui-icon';

// import ALL eUI components
// import { EuiAllModule } from '@eui/components';

// if declared, add eui-legacy.css + eui-legacy-utilities.css in angular.json styles config
// import { UxAllModule } from '@eui/components/legacy';

const MODULES = [
    CommonModule,
    FormsModule, ReactiveFormsModule,

    TranslateModule,

    // put here commonly used eUI modules components throughout the application
    EuiPageModule,
    EuiIconModule,

    // in case of you really want to import all eUI components, see commented imports above
    // EuiAllModule,
    // UxAllModule,
];

@NgModule({
    imports: [
        ...MODULES,
    ],
    declarations: [
    ],
    exports: [
        ...MODULES,
    ]
})
export class SharedModule {}
