/**
 * Конкретна реалізація імпортера резюме
 * Наслідується від AbstractImporter і реалізує абстрактні методи
 */

import { AbstractImporter } from './AbstractImporter';
import { ResumeModel } from '../models/ResumeModel';
import { BlockFactory, BlockType } from '../blocks/BlockFactory';

const ALLOWED_FIELDS: BlockType[] = ['header', 'summary', 'experience', 'education', 'skills'];

export class ResumeImporter extends AbstractImporter<ResumeModel> {
  /**
   * Перевіряє, чи відповідає JSON-об'єкт очікуваній структурі
   *
   * TODO: Реалізуйте валідацію JSON-даних резюме.
   * Перевірте наявність необхідних полів (header, summary, experience, education, skills)
   */
  protected validate(): void {
    const resume = this.raw as ResumeModel;
    if (!ALLOWED_FIELDS.every(field => Object.keys(resume).includes(field))) {
      throw new Error('Invalid JSON format: missing required fields');
    }
  }

  /**
   * Перетворює JSON-дані у внутрішню модель резюме
   *
   */
  protected map(): ResumeModel {
    return this.raw as ResumeModel;
  }

  /**
   * Рендерить модель резюме у DOM
   *
   * TODO: Реалізуйте рендеринг моделі у DOM-дерево
   */
  protected render(model: ResumeModel): void {
    const root = document.getElementById('resume-content')!;
    const factory = new BlockFactory();

    root.append(
      factory.createBlock('header', model).render(),
      factory.createBlock('summary', model).render(),
      factory.createBlock('experience', model).render(),
      factory.createBlock('education', model).render(),
      factory.createBlock('skills', model).render()
    );
  }
}