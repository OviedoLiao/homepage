export const CURSOR_TYPES = {
  default: 'pointer',
  pointer: 'link',
  text: 'handwriting',
  help: 'help',
  move: 'alternate',
  grab: 'alternate',
  'not-allowed': 'unavailable',
  wait: 'busy',
  crosshair: 'cross',
  'nw-resize': 'alternate',
  'ne-resize': 'alternate',
  'sw-resize': 'alternate',
  'se-resize': 'alternate',
  'n-resize': 'alternate',
  's-resize': 'alternate',
  'e-resize': 'alternate',
  'w-resize': 'alternate',
}

export const CHARACTERS = ['skirk', 'chisa', 'furina', 'cyrene', 'columbina', 'perlica']

export const CHARACTER_NAMES = {
  skirk: 'Skirk',
  chisa: 'Chisa',
  furina: 'Furina',
  cyrene: 'Cyrene',
  columbina: 'Columbina',
  perlica: 'Perlica',
}

export function getCursorSrc(character, cursorType) {
  const mapped = CURSOR_TYPES[cursorType] || CURSOR_TYPES.default
  return `/cursors/${character}/gifs/${mapped}.gif`
}

export function getDefaultCursorSrc(character) {
  return `/cursors/${character}/gifs/pointer.gif`
}

const STATIC_CURSOR_MAP = {
  default: 'Normal',
  pointer: 'Link',
  text: 'Text',
  help: 'Help',
  move: 'Move',
  grab: 'Alternate',
  'not-allowed': 'Unavailable',
  wait: 'Busy',
  crosshair: 'Precision',
  'nw-resize': 'Diagonal1',
  'se-resize': 'Diagonal1',
  'ne-resize': 'Diagonal2',
  'sw-resize': 'Diagonal2',
  'n-resize': 'Vertical',
  's-resize': 'Vertical',
  'e-resize': 'Horizontal',
  'w-resize': 'Horizontal',
}

export function getStaticCursorSrc(character, cursorType) {
  const mapped = STATIC_CURSOR_MAP[cursorType] || STATIC_CURSOR_MAP.default
  return `/cursors/${character}/static/${mapped}.cur`
}
