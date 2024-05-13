import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardOrListViewComponent } from '../card-or-list-view/card-or-list-view.component';

@Component({
  selector: 'ua-usage-example',
  standalone: true,
  imports: [CardOrListViewComponent],
  templateUrl: './usage-example.component.html',
  styleUrl: './usage-example.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsageExampleComponent {
  mode = 'list';
  items = [
    {
      header: 'Creating Reuseable Components with NgTemplateOutlet in Angular',
      content: 'The single responsibility principle...'
    },
    {
      header: 'Item Header',
      content: 'Content of item to display'
    }
  ];
}
