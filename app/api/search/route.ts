import { NextRequest, NextResponse } from 'next/server';

// List of public SearXNG instances to try
const INSTANCES = [
  'https://searx.be',
  'https://searx.work',
  'https://searx.org',
  'https://search.ononoki.org',
  'https://northboot.xyz'
];

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const q = searchParams.get('q');
  const page = searchParams.get('page') || '1';
  const type = searchParams.get('type') || 'general'; // searxng categories are: general, images, videos, news, map, music, it, science, files, social_media

  if (!q) {
    return NextResponse.json({ error: 'Query parameter is required' }, { status: 400 });
  }

  // Map our frontend types to SearXNG categories
  let category = 'general';
  if (type === 'images') category = 'images';
  if (type === 'videos') category = 'videos';
  if (type === 'news') category = 'news';
  if (type === 'maps') category = 'map';

  // Try instances until one works
  for (const instance of INSTANCES) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 4000); // 4s timeout per instance

      const params = new URLSearchParams({
        q: q,
        p: page,
        format: 'json',
        categories: category
      });

      const response = await fetch(`${instance}/search?${params.toString()}`, {
        signal: controller.signal,
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; PortfolioBot/1.0; +https://haxford.dev)'
        }
      });

      clearTimeout(timeoutId);

      if (response.ok) {
        const data = await response.json();
        return NextResponse.json(data);
      }
    } catch (error) {
      // Continue to next instance on failure
      console.warn(`Failed to fetch from ${instance}:`, error);
      continue;
    }
  }

  return NextResponse.json({ error: 'All search instances failed' }, { status: 502 });
}
