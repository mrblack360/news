export async function GET() {
  const response = await fetch(
    process?.env?.NEWS_URL ? process?.env?.NEWS_URL : ""
  );
  const posts = await response.json();

  return new Response(JSON.stringify(posts));
}
