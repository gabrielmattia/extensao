export const PROJECT_FILTER_OPTIONS = [
  { id: 1, label: 'Nome', name: 'nome' },
  { id: 2, label: 'Arquiteto', name: 'arquiteto' },
  { id: 3, label: 'Localidade', name: 'localidade'},
]

export const FILTER_TYPES = {
  nomeOficial: 1,
  autor: 2,
  localidade: 3,
  favorito: 4,
}

export const FILTER_TYPES_MAPPING = {
  1: 'nomeOficial',
  2: 'autor',
  3: 'localidade',
  4: 'favorito',
}