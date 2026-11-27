'use client';

export default function GlobalError({ reset }: { reset: () => void }) {
  return (
    <html lang="uk" style={{ colorScheme: 'light dark' }}>
      <body style={{ margin: 0, fontFamily: 'Arial, Helvetica, sans-serif' }}>
        <main
          style={{
            minHeight: '100vh',
            display: 'grid',
            placeContent: 'center',
            textAlign: 'center',
            padding: 24,
            boxSizing: 'border-box',
          }}
        >
          <h1>Не вдалося завантажити застосунок</h1>
          <p>Спробуйте відновити роботу або поверніться на головну.</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', alignItems: 'center' }}>
            <button type="button" onClick={reset} style={{ padding: '8px 16px' }}>
              Спробувати ще раз
            </button>
            <a href="/">На головну</a>
          </div>
        </main>
      </body>
    </html>
  );
}
