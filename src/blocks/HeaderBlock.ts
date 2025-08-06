/**
 * Блок відображення заголовка резюме
 */

import { ResumeModel } from "../models/ResumeModel";
import { IBlock } from "./BlockFactory";

export class HeaderBlock implements IBlock {
  constructor(private d: ResumeModel["header"]) {}

  /**
   * Рендеринг блоку заголовка
   *
   * TODO: Реалізуйте метод render(), який створює DOM-елементи
   * для відображення даних заголовка: ім'я, позиція та контактна інформація.
   */
  render(): HTMLElement {
    // Створюємо контейнер для заголовка
    const header = document.createElement("header");
    header.className = "section header";

    // TODO: Заповнити header.innerHTML з h1 (ім'я), p (title), p (контакти: email, phone, location)
    header.innerHTML = `
      <h1>${this.d.fullName}</h1>
      <p class="title">${this.d.title}</p>
      <p class="contacts">
        Email: ${this.d.contacts.email} <br />
        Phone: ${this.d.contacts.phone} <br />
        Location: ${this.d.contacts.location}
      </p>
    `;

    return header;
  }
}
