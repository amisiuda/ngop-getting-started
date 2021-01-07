import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OpWidget } from '@onionbutler/ngop';
import { TestWidgetComponent } from './test-widget.component';


@OpWidget({
    default: TestWidgetComponent,
})
@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        TestWidgetComponent,
    ],
})
export class TestWidgetModule {}
