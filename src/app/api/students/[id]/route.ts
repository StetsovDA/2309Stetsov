import { addStudentDb, deleteStudentDb } from '@/db/studentDb';
import { type NextApiRequest } from 'next/types';

interface Params {
  params: { id: number };
}

export async function DELETE(req: NextApiRequest, { params }: Params): Promise<Response> {  
  const p = await params;
  const studentId = await p.id;

  const deletedStudentId = await deleteStudentDb(studentId);

  return new Response(JSON.stringify({ deletedStudentId }), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};


export async function POST(req: NextApiRequest): Promise<Response> {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const student = await req.json();

  const newStudent = await addStudentDb(student);

  console.log(newStudent);
  return new Response(JSON.stringify(newStudent), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};