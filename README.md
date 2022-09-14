# Webpack preload test
This is a simple test project to try to get Webpack preload working.

To start it, run:
```
npm install
npm run build
npm run start
```

# Output 
When run in a browser, it results in the following DOM:
``` lang-html
<html>
    <head>
        <meta charset="utf-8">
        <title>Webpack App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <script defer="" src="/main.3c3f56194e5d1e08c74c.js"></script>
        <link rel="prefetch" as="script" href="/helperPrefetch.1b076248c99918cecb53.js">
    </head>
  <body>
  </body>
</html>
```