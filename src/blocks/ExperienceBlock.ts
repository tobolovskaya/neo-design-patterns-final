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
  constructor(private d: Experience[]) {}

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

    // Для кожного досвіду створити div.experience-item з позицією, компанією та періодом
    this.d.forEach((item) => {
      const div = document.createElement("div");
      div.className = "experience-item";
      div.innerHTML = `
        <h3>${item.position}</h3>
        <p><em>${item.company}</em> (${item.start} – ${item.end})</p>
      `;
      // Для кожного проекту створюємо блок і, за потреби, обгортаємо декоратором
      item.projects.forEach((proj: Project) => {
        let block: IBlock = new ProjectBlock(proj);
        if (proj.isRecent) {
          block = new HighlightDecorator(block);
        }
        div.appendChild(block.render());
      });
      container.appendChild(div);
    });

    return container;
  }
}
