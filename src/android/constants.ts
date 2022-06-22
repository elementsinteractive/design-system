import { join } from 'path'

export const TEMPLATES = (destination: string) => ({
  typographyTemplate: {
    source: join(__dirname, './templates/typographies.ejs'),
    destination,
    filter: 'isTypography',
    formatter: 'android/compose/typography',
  },
  spacingsTemplate: {
    source: join(__dirname, './templates/spacings.ejs'),
    destination,
    filter: 'isSpacing',
    formatter: 'android/spacings',
  },
  colorsTemplate: {
    source: join(__dirname, './templates/colors.ejs'),
    destination: `${destination}/Color.kt`,
    filter: 'color',
    formatter: 'android/compose/colors',
  },
  headerTemplate: join(__dirname, './templates/header.ejs'),
})
