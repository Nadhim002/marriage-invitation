export function daysBetween(dateStr) {
  const now = new Date();
  const target = new Date(dateStr + "T00:00:00");
  const diff = target - now;
  if (diff <= 0) return 0;
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}

export function buildGoogleCalendarLink({ dateStr, title, details, location }) {
  const ymd = dateStr.replace(/-/g, "");
  const start = ymd;
  const end = ymd;
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: title,
    dates: `${start}/${end}`,
    details,
    location,
  });
  return `https://www.google.com/calendar/render?${params.toString()}`;
}