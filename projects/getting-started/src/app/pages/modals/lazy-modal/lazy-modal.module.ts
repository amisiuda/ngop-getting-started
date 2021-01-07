import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OpModalsModule, OpWidget } from '@onionbutler/ngop';
import { LazyModalComponent } from './lazy-modal.component';


@OpWidget({
    default: LazyModalComponent,
})
@NgModule({
    imports: [
        CommonModule,
        OpModalsModule,
    ],
    declarations: [
        LazyModalComponent,
    ],
})
export class LazyModalModule {}
