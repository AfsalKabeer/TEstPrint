import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { KotReceiptComponent } from "./kot-receipt/kot-receipt.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, KotReceiptComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Print-Receipt-App';
}
