# Share Pear: Share like a pear 🍐

Share Pear is a platform built with Astro, Netlify On-Demand Builders, and Edge
Functions to consume markdown content and generate public HTML pages from that
content!

### 🏃‍♂️ How to run the repo locally

1. Clone the repo
2. Run `npm install && npm run dev`
3. Navigate to `localhost:3000/blog/whatever`

You'll have to hard-code in some URI-encoded markdown in the url, for example
`localhost:3000/blog/whatever/{MARKDOWN}`, to see how a blog looks.

#### Adapting it for yourself

-   Click "Use this Template" at the top left of this repo on GitHub
-   Update the logo in `public/`
-   Update the colors and copy in `src/layouts/Layout.astro`
-   Update the copy in `src/index.astro`, `src/404.astro`, and
    `src/blog/[slug].astro`
-   Update the `allowedUrlsRegex` in `netlify/edge-functions/headers.js` with
    your web app's that will be calling this
-   Party from dusk until dawn

### 🪄 How to use the site in general

1. Query `[this website]/blog/[SOMETHING]` with a GET request
2. The headers of the GET request have to include `markdown: "blah"` where
   `blah` is the blog content. This request publishes your blog post at the
   `[this website]/blog/[SOMETHING]` url for 30 days.

### 💖 Learn more + Support

[This is the original Share Pear repository](https://github.com/Contenda-Team/share-pear)
