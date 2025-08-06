/**
 * Блок відображення освіти в резюме
 */

import { Education } from "../models/ResumeModel";
import { IBlock } from "./BlockFactory";

export class EducationBlock implements IBlock {
  constructor(private d: Education[]) {}

  /**
   * Рендеринг блоку освіти
   *
   * TODO: Реалізуйте метод для відображення інформації про освіту
   */
  render(): HTMLElement {
    // Створюємо секцію
    const el = document.createElement("section");
    el.className = "section education";
    el.innerHTML = "<h2>Education</h2>";

    /// Додайте до секції інформацію про навчальний заклад, ступінь та рік випуску
    this.d.forEach((e) => {
      const div = document.createElement("div");
      div.className = "education-item";
      div.innerHTML = `${e.degree} ${e.field}, ${e.institution} (${e.graduation})`;
      el.appendChild(div);
    });

    return el;
  }
}
