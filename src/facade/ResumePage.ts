import { ResumeImporter } from "../importer/ResumeImporter";

/**
 * Фасад: єдина точка входу.
 */
export class ResumePage {
  async init(jsonPath: string): Promise<void> {
    const data = await this.fetchData(jsonPath);
    // Ініціалізуємо імпортера, який самостійно валідує, мапить та рендерить дані
    new ResumeImporter(data).import();
  }

  private async fetchData(path: string): Promise<any> {
    const response = await fetch(path);
    if (!response.ok) {
      throw new Error(`Failed to fetch data from ${path}: ${response.statusText}`);
    }
    return response.json();
  }
}
