import { NextResponse } from "next/server";

export async function POST(request) {
    
    try {

        // tema "Reacrouter"
        const { tema } = await request.json()

        const prompCompleto = `
        Genera una nota educativa sobre el siguiente tema: "${tema}"
        Debes generar UNICAMENTE con un objeto JSON valido que contenga exactamente estas tres llaves (no agregues texto ni antes ni despues, solo el JSON): 
        {
            "title": "un titulo corto y profesional",
            "content": "una explicacion conceptual breve en formato texto plano",
            "ejemplo": "un bloque de codigo de ejemplo practico",
        }
        `
        const apiKey = process.env.GEMINI_API_KEY

        if (!apiKey) {
            return NextResponse.json({error: "Configuruacion incompleta: FALTA LA API KEY!"}, {status: 500})
        }

        // const url = `https://generativelanguage.googleapis.com/v1/models/gemini-3.5-flash:generateContent?key=${apiKey}`
        const url = `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${apiKey}`

        const response = await fetch(url, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    contents: [{parts: [{text: prompCompleto}]}]
                })
            }
        )

        const data = await response.json()

        if (!response.ok || data.error) {
            console.error("Error en la API de google:", data.error)
            return NextResponse.json(
                {error: `Error en la API de google: ${data.error?.message}` || "Peticion invalida"}, 
                {status: response.status || 400}
            )
        }

        const rawText = data.candidates?.[0]?.content?.parts?.[0]?.text || "{}"
        const cleanJson = rawText.replace(/```json|```/g, "")
        const noteData = JSON.parse(cleanJson)

        console.log(noteData)

        return NextResponse.json({ success: true, result: noteData })

    } catch (err) {
        console.error(`Error critico en la ruta /api/ai ${err}`)
        return NextResponse.json({error: err}, {status: 500})
    }
}