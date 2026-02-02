type RateLimitEntry = {
  count: number;
  lastRequest: number;
};

const RATE_LIMIT_WINDOW = 60 * 1000;
const MAX_REQUESTS = 20;

const ipMap = new Map<string, RateLimitEntry>();

export function rateLimit(ip: string) {
  const now = Date.now();
  const entry = ipMap.get(ip);

  if (!entry) {
    ipMap.set(ip, { count: 1, lastRequest: now });
    return { allowed: true };
  }

  if (now - entry.lastRequest > RATE_LIMIT_WINDOW) {
    ipMap.set(ip, { count: 1, lastRequest: now });
    return { allowed: true };
  }

  if (entry.count >= MAX_REQUESTS) {
    return { allowed: false };
  }

  entry.count + 1;
  return { allowed: true };
}
