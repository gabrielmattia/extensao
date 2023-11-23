import api from './axios'

export default async function getProjects() {
  return api.get('/projetos').then((res) => res.data)
}
