import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface NumberItem {
  value: number;
}
interface SectionItem {
  numbers: NumberItem[];
}

@Component({
  selector: 'app-lab-six',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lab-six.html',
  styleUrl: './lab-six.scss',
})
export class LabSix implements OnInit {
  protected sections: SectionItem[] = [];

  ngOnInit() {
    this.addSection();
  }

  protected addSection(): void {
    this.sections.push({
      numbers: [{ value: 0 }],
    });
  }

  protected removeSection(index: number): void {
    if (this.sections.length > 1) {
      this.sections.splice(index, 1);
    }
  }

  protected addNumber(section: SectionItem): void {
    section.numbers.push({ value: 0 });
  }

  protected removeNumber(section: SectionItem, index: number): void {
    if (section.numbers.length > 1) {
      section.numbers.splice(index, 1);
    }
  }

  protected getSectionTotal(section: SectionItem): number {
    return section.numbers.reduce((acc, curr) => acc + (curr.value || 0), 0);
  }
}
