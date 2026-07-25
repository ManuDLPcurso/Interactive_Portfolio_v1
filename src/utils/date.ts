export function getLastLogin(): string {
  return new Date().toLocaleString("es-ES", {
    weekday: "short",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    year: "numeric",
  });
}