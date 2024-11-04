import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma'
import { TodoType } from "@/types/todo";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = Number(searchParams.get("id"));
  if(id){
    const todo: TodoType | null = await prisma.todos.findUnique({ where: { id } });
    // return NextResponse.json({ todo });
    return todo
  } else{
    const todos: TodoType[] = await prisma.todos.findMany();
    return NextResponse.json( todos )
    // return todos
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