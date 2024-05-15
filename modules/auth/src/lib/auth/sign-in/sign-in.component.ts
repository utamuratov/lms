import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lib-sign-in',
  standalone: true,
  imports: [CommonModule],
  template: `<p>sign-in works!</p>`,
  styleUrl: './sign-in.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SignInComponent {}
