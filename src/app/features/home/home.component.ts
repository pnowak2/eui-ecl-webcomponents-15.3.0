import { Component, Inject } from '@angular/core';
import { CONFIG_TOKEN, EuiAppConfig } from '@eui/core';
import { v4 as uuidv4 } from 'uuid';

@Component({
    templateUrl: './home.component.html',
})
export class HomeComponent {
    accordionItems = [
        { id: 'id-' + uuidv4(), label: 'Accordion item 1', content: 'Content 1' },
        { id: 'id-' + uuidv4(), label: 'Accordion item 2', content: 'Content 2' },
        { id: 'id-' + uuidv4(), label: 'Accordion item 3', content: 'Content 3' },
    ];

    constructor(@Inject(CONFIG_TOKEN) private config: EuiAppConfig) {
        console.log(config);
    }

    onAddSection(sectionName: HTMLEclInputElement) {
        const input: HTMLInputElement = sectionName.querySelector('.ecl-text-input');

        const id = 'id-' + uuidv4();
        this.accordionItems = [
            ...this.accordionItems,
            { id, label: input.value, content: id }
        ];

        input.value = '';
    }
}
