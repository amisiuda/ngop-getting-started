import { ChangeDetectionStrategy, Component } from '@angular/core';
import { OpModalService } from '@onionbutler/ngop';
import { TestModalComponent } from './test-modal/test-modal.component';


@Component({
    templateUrl: 'modals-page.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalsPageComponent {
    
    constructor(private modalsService: OpModalService) {}


    showModal(): void {
        this.modalsService.open({
            component: TestModalComponent,
        });
    }


    showLazyModal(): void {
        this.modalsService.openLazy({
            module: () => import('./lazy-modal/lazy-modal.module').then(m => m.LazyModalModule),
        });
    }
}
