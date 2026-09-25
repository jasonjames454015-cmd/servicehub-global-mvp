# Enable Netlify Forms ($0)

The waitlist form on the live site currently writes only to localStorage.

In the Netlify UI for site `servicehub-global-mvp`:

1. Site configuration → Forms (free tier).
2. Deploy includes `data-netlify=true` + `name="waitlist"`.
3. Submit one test email from the live URL after removing the JS preventDefault if you want server-side capture.
4. Check Forms → waitlist. Do not export or sell addresses.

This sandbox cannot click the Netlify dashboard. Status: config prepared, form not confirmed live.
