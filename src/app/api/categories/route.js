import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { createOrUpdateCurrentUser } from "@/lib/currentUser";
createOrUpdateCurrentUser

export async function GET() {
    try {
        const user = await createOrUpdateCurrentUser()
        if (!user) return NextResponse.json({error: "no auth"}, {status: 401})
            
        const categories = await db.category.findMany({
            where: {
                userId: user.id
            },
        })
        return NextResponse.json(categories)

    } catch (err) {
        return NextResponse.json({err: "error al obtener categorias"}, {status: 500})
    }
}

export async function POST(request) {
    try {
        const user = await createOrUpdateCurrentUser()
        if (!user) return NextResponse.json({error: "no auth"}, {status: 401})

        const { title } = await request.json()
        
        const newCategory = await db.category.create({
            data: {
                title,
                userId: user.id
            }
        })

        return NextResponse.json(newCategory, {status: 201})

    } catch (err) {
        return NextResponse.json({err: "Error al crear la categoria"}, {status: 500})
    }
}