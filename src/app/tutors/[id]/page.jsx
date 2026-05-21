import React from 'react';

// This forces the server to get fresh data every time
export const dynamic = 'force-dynamic';

export default async function TutorDetailPage({ params }) {
  const { id } = await params;

  // 1. Fetch data from your backend
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/tutor/${id}`, {
    cache: 'no-store'
  });

  const tutor = await res.json();

  // 2. Display EVERYTHING the server returned to the screen
  return (
    <div style={{ padding: '50px', background: 'white', color: 'black', fontFamily: 'monospace' }}>
      <h1>Debug Diagnostic</h1>
      <p><strong>Target ID:</strong> {id}</p>
      <hr />
      <h3>Raw Data from Server:</h3>
      <pre style={{ background: '#f4f4f4', padding: '15px' }}>
        {JSON.stringify(tutor, null, 2)}
      </pre>
      <hr />
      <h3>Checklist:</h3>
      <p>Does the JSON show a "tutorName" field? <strong>{tutor?.tutorName ? "Yes" : "NO"}</strong></p>
      <p>Does the JSON show an "_id" field? <strong>{tutor?._id ? "Yes" : "NO"}</strong></p>
    </div>
  );
}