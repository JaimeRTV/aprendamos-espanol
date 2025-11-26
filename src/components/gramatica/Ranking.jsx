export function Ranking() {
  const data = JSON.parse(localStorage.getItem("ranking")) || [];
  return (
    <div>
      <h2>🏆 Ranking</h2>
      {data.map((r, i) => (
        <p key={i}>{r.score} pts - {r.date}</p>
      ))}
    </div>
  );
}
