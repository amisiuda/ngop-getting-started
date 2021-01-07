import { ChangeDetectionStrategy, Component } from '@angular/core';
import { OpLoader } from '@onionbutler/ngop';


@OpLoader()
@Component({
    templateUrl: 'default-loader.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DefaultLoaderComponent {}
