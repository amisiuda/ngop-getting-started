import { ChangeDetectionStrategy, Component } from '@angular/core';
import { OpWrapper } from '@onionbutler/ngop';


@Component({
    templateUrl: 'default-modal-wrapper.component.html',
    styleUrls: [ 'default-modal-wrapper.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DefaultModalWrapperComponent extends OpWrapper {}
