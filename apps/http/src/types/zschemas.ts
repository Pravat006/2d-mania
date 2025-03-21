import { z } from "zod"  


export const CreateMapSchema = z.object({
    name: z.string(),
    admin: z.string(),
    height: z.number(),
    width: z.number(),
    objects: z.array(z.object({
        objectId: z.string(),
        position: z.object({
            x: z.number(),
            y: z.number(),
        }),
    })),

})

export const UpdateMapSchema = z.object({
    name: z.string().optional(),
    admin: z.string().optional(),
    height: z.number().optional(),  
    width: z.number().optional(),
}) 

export const AddObjectSchema = z.object({
    name: z.string(),   
    position: z.object({
        x: z.number(),  
        y: z.number(),
    }),
    mapId: z.string(),
})

export const CreateObjectSchema = z.object({
    name: z.string(),
    collidable: z.boolean(),
    interactive: z.boolean(),
    interactionType: z.string(),
})

export const UpdateObjectSchema = z.object({
    name: z.string().optional(),
    collidable: z.boolean().optional(),
    interactive: z.boolean().optional(),
    interactionType: z.string().optional()
})

// 3.54






