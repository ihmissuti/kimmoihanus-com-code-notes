/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-6fab3e3c7dee349cfa77.js"
  },
  {
    "url": "framework-741ade27086b2708e961.js"
  },
  {
    "url": "1bfc9850-2dd0f752db5b30d671b6.js"
  },
  {
    "url": "app-3062097c4dd39317e466.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "2a12d0fc8b2bde9591bc161ac7f9695b"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-b0556ce5127c1a3e2490.js"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "33ad4ee8268967f07fa20227e9256ec8"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "4735c500b963b108ed1ba1ad7d557d92"
  },
  {
    "url": "polyfill-5550bf809f8122e93be5.js"
  },
  {
    "url": "6f89bbd25ed84b02c1c782caf7174e918b7ab15f-97d0dae4118033959775.js"
  },
  {
    "url": "component---node-modules-gatsby-theme-code-notes-src-pages-404-tsx-048fe36504324c950869.js"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "f2f72c1bebd4c3c2111422826e5f925e"
  },
  {
    "url": "page-data/sq/d/1437003973.json",
    "revision": "e430957cd46d6aa22da9a2b3a5916ca4"
  },
  {
    "url": "page-data/sq/d/2744905544.json",
    "revision": "6fded333b4ed834f59ae5dc670f8d388"
  },
  {
    "url": "page-data/sq/d/3664657028.json",
    "revision": "e0b31f6c3ae6e446709cb926d0a2b721"
  },
  {
    "url": "page-data/sq/d/467212769.json",
    "revision": "d049381390b92ada96f6ca0eadb9bad4"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "31f15b1843cfecf78b221c8b07826dba"
  },
  {
    "url": "component---node-modules-gatsby-theme-code-notes-src-templates-note-js-4d142da891009d44cd04.js"
  },
  {
    "url": "page-data/about/page-data.json",
    "revision": "3067adfdd5c50bd83cb59e3f10c833c7"
  },
  {
    "url": "page-data/hacks/page-data.json",
    "revision": "974135d5ac6e0fb60e9465433e961fdf"
  },
  {
    "url": "component---node-modules-gatsby-theme-code-notes-src-templates-notes-js-77e8453efdf827983d88.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "7642826d4105642f9796bd49946f2cda"
  },
  {
    "url": "page-data/job-history/page-data.json",
    "revision": "b584c3deab63cf1aabb640359247c8eb"
  },
  {
    "url": "page-data/work/page-data.json",
    "revision": "e93255ca64df246fc1990e548219340f"
  },
  {
    "url": "component---node-modules-gatsby-theme-code-notes-src-templates-tag-page-js-549492b9b4090b2b548b.js"
  },
  {
    "url": "page-data/tag/about/page-data.json",
    "revision": "dba88de472b0c7c690af56fdde2490ec"
  },
  {
    "url": "page-data/tag/hacks/page-data.json",
    "revision": "128dd7724883c0cfbc0df87b67ff6701"
  },
  {
    "url": "page-data/tag/jobs/page-data.json",
    "revision": "181464bf543fe8d3490d152f5940ddbd"
  },
  {
    "url": "page-data/tag/projects/page-data.json",
    "revision": "28c05bf39c38b6e6244070aa64234c30"
  },
  {
    "url": "page-data/tag/work/page-data.json",
    "revision": "5221d841efbad1dadc198c2cbdece047"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "704f5a157ad5c2c898225af61a062a1f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/.*\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-3062097c4dd39317e466.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
