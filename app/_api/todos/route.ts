import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = Number(searchParams.get("id"));
  if(id){
    const todo = await prisma.todos.findUnique({ where: { id } });
    return NextResponse.json({ todo });
  } else{
    const todos = await prisma.todos.findMany();
    return NextResponse.json({ todos })
  }
}

export async function POST(request: Request) {
  const req = await request.json();
  const todo = await prisma.todos.create({
    data: {
      title: req.title,
      content: req.content,
    },
  });
  return NextResponse.json({ todo });
}

export async function PATCH(request: Request) {
  const req = await request.json();
  const todo = await prisma.todos.update({
    where: {
      id: req.id,
    },
    data: {
      title: req.title,
      content: req.content,
    }
  });
  return NextResponse.json({ todo });
}

export async function DELETE(request: Request) {
  // const id = parseInt(request.nextUrl.searchParams.get('id')!);

  // await prisma.todo.delete({
  //   where: {
  //     id: id,
  //   },
  // });
  const req = await request.json();
  const todo = await prisma.todos.delete({
    where: {
      id: req.id,
    }
  });
  return NextResponse.json({ todo });
}

async function getAllTodos() {
  const todos = await prisma.todos.findMany();
  return NextResponse.json({ todos })
}