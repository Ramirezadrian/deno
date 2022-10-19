import { Router } from '../deps.ts'
import { getColors, createColor } from '../controllers/colors.ts'

export const router = new Router()
    .get('/api/colors', getColors)
    .post('/api/colors', createColor)