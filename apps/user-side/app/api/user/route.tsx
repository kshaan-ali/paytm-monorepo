
import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function GET(){
    const newUser= await prisma.user.create({
        data:{
            email:"12",
            password:"shaan"
        }
    })
    console.log(newUser.id)
    return NextResponse.json({
        msg:"done"
    })
    
}