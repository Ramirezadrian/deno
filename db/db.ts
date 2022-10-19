import { Color } from '../types/color.ts'

const colors: Color[] = []

/* export const getColors = async (): Promise<string[]> => {
    return await Promise.resolve(colors)
} */

export const getColors = async (): Promise<Color[]> => {
    return await colors
}

export const createColor = async (name: string): Promise<Color> => {
    const color: Color = {
        name
    }

    colors.push(color)

    return await Promise.resolve(color)
    
}