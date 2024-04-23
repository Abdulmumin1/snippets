import { error } from '@sveltejs/kit';

export async function GET({ fetch, url, locals: { supabase } }) {
	const response = await fetch('blog/api/posts');
	const posts = await response.json();
	// const { supabase } = await parent();
	let { data: keys, error: err } = await supabase
		.from('htmlPlayground')
		.select('project_key')
		.order('created_at', { ascending: false });

	console.log(keys);
	if (err) {
		// console.error(error);
		throw error(500, { message: 'Internal Error' });
	}
	const xml = `
    <?xml version="1.0" encoding="UTF-8" ?>
    <urlset
        xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="https://www.w3.org/1999/xhtml"
        xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
        xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
    >
    <url>
    <loc>https://devcanvas.art</loc>
  </url>
    <url>
    <loc>https://devcanvas.art/explore</loc>
    <lastmod>2024-01-17</lastmod>
  </url>
  <url>
    <loc>https://devcanvas.art/blog</loc>
  </url>
  <url>
    <loc>https://devcanvas.art/play/try</loc>
  </url>
  <url>
    <loc>https://devcanvas.art/signin</loc>
  </url>
 
    ${posts
			.map(
				(post) => `
            <url>
               
                <loc>${url.origin}/blog/${post.slug}</loc>
                <lastmod>${post?.lastmod}</lastmod>
            </url>
        `
			)
			.join('')}

    
      ${Object.values(keys)
				.map(
					(index) => `
              <url>
                 
                  <loc>${url.origin}/play/${index['project_key']}</loc>
              </url>
          `
				)
				.join('')}
  
      
    </urlset>`.trim();
	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml'
		}
	});
}
