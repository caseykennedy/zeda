export const enum PostCategories {
  CATEGORY_NEWS = 'News',
  CATEGORY_PRESS = 'Press Release',
  CATEGORY_INSIGHTS = 'Insight',
  CATEGORY_VIDEO = 'Video',
}
export type PostCategory = keyof typeof PostCategories

export enum BrandThemes {
  zeda = 'zeda',
  technologies = 'technologies',
  health = 'health',
}
export type BrandTheme = keyof typeof BrandThemes
