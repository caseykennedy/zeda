export const enum PostCategories {
  NEWS = 'News',
  PRESS = 'Press Release',
  INSIGHTS = 'Insight',
  VIDEO = 'Video',
}

export type PostCategory = (typeof PostCategories)[keyof typeof PostCategories]

export enum LayoutThemes {
  DARK = 'dark',
  LIGHT = 'light',
}

export type LayoutTheme = (typeof LayoutThemes)[keyof typeof LayoutThemes]

export enum BrandThemes {
  ZEDA = 'zeda',
  TECHNOLOGIES = 'technologies',
  HEALTH = 'health',
}

export type BrandTheme = (typeof BrandThemes)[keyof typeof BrandThemes]
