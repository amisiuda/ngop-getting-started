import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OpModalModule, OpWidget } from '@onionbutler/ngop';
import { LazyModalComponent } from './lazy-modal.component';


@OpWidget({
    default: LazyModalComponent,
})
@NgModule({
    imports: [
        CommonModule,
        OpModalModule,
    ],
    declarations: [
        LazyModalComponent,
    ],
})
export class LazyModalModule {}
