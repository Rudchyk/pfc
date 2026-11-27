import { connection } from 'next/server';

export default async function DemoErrorPage() {
  await connection();

  throw new Error('Intentional demonstration error');
}
