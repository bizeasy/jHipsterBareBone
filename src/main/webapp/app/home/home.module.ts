import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JHipsterBareBoneSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [JHipsterBareBoneSharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent],
})
export class JHipsterBareBoneHomeModule {}
