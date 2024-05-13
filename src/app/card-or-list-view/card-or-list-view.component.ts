import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ua-card-or-list-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-or-list-view.component.html',
  styleUrl: './card-or-list-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardOrListViewComponent {

  @Input() items: {
    header: string,
    content: string
  }[] = [];

  @Input() mode: string ='Card';
}
