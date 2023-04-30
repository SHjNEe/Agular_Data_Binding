import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output('featureSelect') featureSelect = new EventEmitter<string>();
  onSelect(feature: string): void {
    this.featureSelect.emit(feature);
  }
}
