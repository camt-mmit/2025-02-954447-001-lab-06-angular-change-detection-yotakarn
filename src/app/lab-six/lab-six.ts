import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

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
export class LabSix {
  protected sections: SectionItem[] = [];

  protected addSection(): void {
    this.sections.push({ numbers: [] });
  }

  protected removeSection(index: number): void {
    this.sections.splice(index, 1);
  }

  protected addNumber(section: SectionItem): void {
    section.numbers.push({ value: 0 });
  }

  protected removeNumber(section: SectionItem, index: number): void {
    section.numbers.splice(index, 1);
  }

  protected getSectionTotal(section: SectionItem): number {
    return section.numbers.reduce((acc, curr) => acc + (curr.value || 0), 0);
  }
}
