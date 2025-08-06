/**
 * Патерн Composite (Компоновщик)
 *
 * Блок досвіду роботи, який містить дочірні блоки проєктів
 */

import { Experience, Project } from "../models/ResumeModel";
import { IBlock } from "./BlockFactory";
import { ProjectBlock } from "./ProjectBlock";
import { HighlightDecorator } from "../decorators/HighlightDecorator";

export class ExperienceBlock implements IBlock {
  constructor(private d: Experience) {}

  /**
   * Рендеринг блоку досвіду роботи
   *
   * TODO: Реалізуйте метод render(), який створює DOM-елементи для секції досвіду
   * та використовує патерн Composite для рендерингу проєктів всередині цієї секції.
   */
  render(): HTMLElement {
    // Створюємо контейнер для досвіду роботи
    const container = document.createElement("section");
    container.className = "section experience";
    container.innerHTML = "<h2>Experience</h2>";

    // TODO: Для кожного досвіду створити div.experience-item з innerHTML (позиція, компанія, період)
    this.d.forEach(exp => {
      const div = document.createElement('div');
      div.className = 'experience-item';
      div.innerHTML = `<strong>${exp.position}</strong> at <em>${exp.company}</em> (${exp.start} – ${exp.end})`;

      exp.projects.forEach(p => {
        const block = new ProjectBlock(p);
        const decorated = p.isRecent ? new HighlightDecorator(block) : block;
        div.appendChild(decorated.render());
      });

      container.appendChild(div);
    });

    return container;
  }
}

export interface Experience {
  experienceItems: {
    position: string;
    company: string;
    period: string;
    description: string;
    projects: Project[];
  }[];
}
