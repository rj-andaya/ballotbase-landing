// Serves 410 Gone for the retired Voter Guide (/guide/*).
// A 410 tells Google to drop the URL from its index; a redirect to the
// homepage only reads as a soft 404 and takes far longer to clear.
export default function handler(req, res) {
  res.statusCode = 410;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('X-Robots-Tag', 'noindex, nofollow');
  res.setHeader('Cache-Control', 'public, max-age=3600');
  res.end(`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<meta name="robots" content="noindex, nofollow"/>
<title>This page has been retired | PolicySpan</title>
<link rel="icon" href="/favicon.ico" sizes="32x32"/>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
<style>
  body { margin: 0; font-family: 'DM Sans', sans-serif; color: #0f172a; background: #fff; }
  .wrap { max-width: 560px; margin: 0 auto; padding: 96px 24px; text-align: center; }
  h1 { font-size: 30px; font-weight: 700; letter-spacing: -0.02em; margin: 24px 0 12px; }
  p { font-size: 16px; line-height: 1.7; color: #475569; font-weight: 300; margin: 0 0 28px; }
  a.btn { display: inline-block; background: #1a56db; color: #fff; text-decoration: none; padding: 13px 26px; border-radius: 8px; font-size: 15px; font-weight: 600; }
</style>
</head>
<body>
<div class="wrap">
  <img src="/policyspan-logo.svg" alt="PolicySpan" width="140" height="26"/>
  <h1>The Voter Guide has been retired.</h1>
  <p>BallotBase is now PolicySpan, a policy intelligence platform for government, lobbying and advocacy teams. The public voter guide is no longer published.</p>
  <a class="btn" href="/">Go to PolicySpan →</a>
</div>
</body>
</html>`);
}
