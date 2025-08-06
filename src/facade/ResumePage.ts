import { ResumeImporter } from "../importer/ResumeImporter";

/**
 * Фасад: єдина точка входу.
 */
export class ResumePage {
  async init(jsonPath: string): Promise<void> {
    const data = await this.fetchData(jsonPath);
    // Отримуємо масив HTMLElement з імпортера:
    const elements = new ResumeImporter(data).import();
    // Додаємо їх у контейнер:
    const root = document.getElementById("resume-content");
    if (!root) throw new Error("❌ У index.html немає <div id='resume-content'>");
    elements.forEach((el) => root.appendChild(el));
  }

  private async fetchData(path: string): Promise<any> {
    const response = await fetch(path);
    if (!response.ok) {
      throw new Error(`Failed to fetch data from ${path}: ${response.statusText}`);
    }
    return response.json();
  }
}
