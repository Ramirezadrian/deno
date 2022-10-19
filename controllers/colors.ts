import { Context, helpers } from '../deps.ts'
import { Color } from '../types/color.ts'
import * as db from '../db/db.ts'

export const getColors = async (ctx: Context) => {
    const colors: Color[] = await db.getColors()
    ctx.response.body = colors
}

export const createColor = async (ctx: Context) => {
   const { name } = await ctx.request.body().value
   const newColor: Color = await db.createColor(name)
      
   ctx.response.status = 201
   ctx.response.body = newColor
    
}