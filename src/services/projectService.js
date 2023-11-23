import { useAxios } from '@/libs/axios'
import { getFomattedQuery } from '../utils/filterUtils'

export const getProjects = async (filter = {}) => {
  const response = await useAxios.get('http://localhost:8000/api/projects', {
    params: filter,
    paramsSerializer: (filter) => {
      return getFomattedQuery(filter)
    },
  })
  return response.status === 200 ? response.data : []
}

export const getProjectById = async (projectId) => {
  const response = await useAxios.get(`http://localhost:8000/api/projects/${projectId}`)
  return response.status === 200 ? response.data : undefined
}