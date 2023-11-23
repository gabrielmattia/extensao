import { FILTER_TYPES_MAPPING } from '../constants/filters'

export const getFomattedQuery = (params = {}) => {
  if (!params.value) return

  const formattedQueryString = `${FILTER_TYPES_MAPPING[params.type]}=${params.value}`
  console.log(formattedQueryString, typeof formattedQueryString)

  return formattedQueryString
}