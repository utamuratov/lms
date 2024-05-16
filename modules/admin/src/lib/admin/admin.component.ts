import { Component } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzMenuModule } from 'ng-zorro-antd/menu';

@Component({
  selector: 'lib-admin',
  standalone: true,
  imports: [NzLayoutModule, NzMenuModule, NzBreadCrumbModule, NzIconModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.less',
})
export default class AdminComponent {
  isCollapsed = false;
}
