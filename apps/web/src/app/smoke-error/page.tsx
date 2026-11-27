import { connection } from 'next/server';

export default async function SmokeErrorPage() {
  await connection();

  throw new Error('Intentional smoke test error');
}
