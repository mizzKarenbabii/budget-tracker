// what files to catche, sets catche name, eventListener for resources, responses to catche reseources and deletes outdated catche

const CACHE_NAME = "my-cache-v1"
const DATA_CACHE_NAME = "data-cache-v2"
const FILES_TO_CACHE = [
    "/",
    "index.html",
    "manifest.json",
    "js/idb.js",
    "js/index.js",
    "css/style.css",
    "icons/icon-72x72.png",
    "icons/icon-96x96.png",
    "icons/icon-128x128",
    "icons/icon-144x144",
    "icons/icon-152x152",
    "icons/icon-192x192",
    "icons/icon-382x384",
    "icons/icon-512x512"

]
self.addEventListener("install", function(event){
    event.waitUntil (
        caches.open(CACHE_NAME)
        .then(function (cache){
            console.log("installing cache" + CACHE_NAME)
            return cache.addAll(FILES_TO_CACHE)
        })
    )
})