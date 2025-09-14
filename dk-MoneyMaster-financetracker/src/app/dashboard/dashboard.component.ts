import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import Chart from 'chart.js/auto';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit {
  @ViewChild('pieChart') pieChartRef!: ElementRef<HTMLCanvasElement>;

  ngAfterViewInit() {
    const ctx = this.pieChartRef.nativeElement.getContext('2d');
    if (ctx) {
      new Chart(ctx, {
        type: 'pie',
        data: {
          labels: ['Expenses', 'Income', 'Savings'],
          datasets: [{
            data: [300, 500, 200], // Mock data
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
          }]
        },
        options: { responsive: true }
      });
    }
  }
}
