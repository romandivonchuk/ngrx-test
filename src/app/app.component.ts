import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  count: number = 0
  updatedAt?: number
  get cannotDecreas(): boolean {
    return this.count<=0
  }

  inc(): void {
    this.updatedAt = Date.now()
    this.count += 1
  }
  dec(): void {
    this.updatedAt = Date.now()
    this.count -= 1
  }
  clear(): void {
    this.updatedAt = Date.now()
    this.count = 1
  }

}
