'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "8cbe37531d4ad470f1f1d9eb7a881911",
"assets/assets/fonts/Dubai-Bold.ttf": "8fbdda63d87a91c5600c512a12aec79a",
"assets/assets/fonts/Dubai-Light.ttf": "2f7c5bb9cf55f5b0cb2d06c57d5a8ae7",
"assets/assets/fonts/Dubai-Medium.ttf": "1b70cb9a589df286a5e4faf70e2a50d9",
"assets/assets/fonts/Dubai-Regular.ttf": "24ab51f6ae1804c808f822d28b9be18a",
"assets/assets/fonts/SF-Arabic.ttf": "cee165aac035ec21815b0bc416547ab1",
"assets/assets/icons/colored/icons8-about-100.png": "65a0a936698f7c5fff08b9330bc9f916",
"assets/assets/icons/colored/icons8-address-100.png": "716e8e3b7ab9d47b89a0bdd627f881a0",
"assets/assets/icons/colored/icons8-cancel-100.png": "3b2257d9851b231b2f691dd151b81b0c",
"assets/assets/icons/colored/icons8-chrome-100.png": "5bf9cf97e634e57526a214a213eb5727",
"assets/assets/icons/colored/icons8-crescent-moon-100.png": "688057cb9ae05055ac8ba9828fdd5702",
"assets/assets/icons/colored/icons8-email-100.png": "070e3dd74d294d5c5318f49330228d8f",
"assets/assets/icons/colored/icons8-export-100.png": "e1c4348910d69006c6618f3b7bf0c3af",
"assets/assets/icons/colored/icons8-facebook-100-2.png": "8c4c15c03d4bda360f40cd306e8b0638",
"assets/assets/icons/colored/icons8-facebook-100.png": "36b158165dab5aebbbbcbaa1497df8a0",
"assets/assets/icons/colored/icons8-favorite-folder-100.png": "434e38e94ccbc1d453230a1fc902e505",
"assets/assets/icons/colored/icons8-heart-100.png": "5db92f374fc203c65d55ccfda37a12af",
"assets/assets/icons/colored/icons8-help-100.png": "9ff5f248688bd8316654049002e1cb8c",
"assets/assets/icons/colored/icons8-home-address-100.png": "9b04cda40a9eea368e540280ca1f5048",
"assets/assets/icons/colored/icons8-import-100.png": "e6ce0be6d04e4a4a23cee463cf35a8bb",
"assets/assets/icons/colored/icons8-info-100.png": "b5a56ff54ec7a6762ded10f5d4a626dd",
"assets/assets/icons/colored/icons8-instagram-old-100.png": "a067e672998ab3085dc7dd3d3467a285",
"assets/assets/icons/colored/icons8-language-100.png": "d86a2366d9a9d9eb24bc418d4cd0cda5",
"assets/assets/icons/colored/icons8-light-on-100.png": "5a2b54cd67467590868937406722d3a4",
"assets/assets/icons/colored/icons8-login-100.png": "f3ff12e4d983f4f48def31a659bdde55",
"assets/assets/icons/colored/icons8-male-user-100.png": "e5efeb84c73dfed405642d606bff63ca",
"assets/assets/icons/colored/icons8-night-100.png": "91f5ed1104b7ec7c6ead05a43d3b95d8",
"assets/assets/icons/colored/icons8-paint-palette-100.png": "ff3e4af484827e6b972be2364e272a29",
"assets/assets/icons/colored/icons8-phone-100.png": "fd629cc9ec0410677a3be15afc278321",
"assets/assets/icons/colored/icons8-profile-100.png": "f0ce654c26350e0de4bbd114ab92aada",
"assets/assets/icons/colored/icons8-remove-100.png": "8a3f417374c332fd0b73f7abb989c32b",
"assets/assets/icons/colored/icons8-share-100.png": "2a479eb145cb680b2c4dcad142cc19db",
"assets/assets/icons/colored/icons8-sign-out-100.png": "4468c3be16c071662349c2acf55e5887",
"assets/assets/icons/colored/icons8-snapchat-100.png": "03d15920e2e84f4d5ee0d5c498296c15",
"assets/assets/icons/colored/icons8-star-filled-100.png": "ae715c1548eca45f62ae1e784a02f091",
"assets/assets/icons/colored/icons8-sun-100.png": "7e3f9ea95c4fd193afd71ce6e9e6911a",
"assets/assets/icons/colored/icons8-trash-100.png": "2a9a76591e61a7b4ca602f95d028deef",
"assets/assets/icons/colored/icons8-turkey-60.png": "5d58eef9314248e3d64de92b9c25fc0c",
"assets/assets/icons/colored/icons8-turkey-64.png": "5d526a9a828e84cacc6ae9c14a270053",
"assets/assets/icons/colored/icons8-twitter-100.png": "79ca095de58d4a556b96bb5dee8374ae",
"assets/assets/icons/colored/icons8-united-arab-emirates-100.png": "968c4dcff558df14218a5b2e07f7dc54",
"assets/assets/icons/colored/icons8-usa-100.png": "109bc4478f6c93de937968ddc70836dd",
"assets/assets/icons/colored/icons8-usa-60.png": "a3e13e65519177e536d0d2dce8498ec2",
"assets/assets/icons/colored/icons8-user-location-100.png": "4dad5ef065282571e12f56bd61545af6",
"assets/assets/icons/colored/icons8-website-100.png": "836800c4520c5f5a74dd462b0fb1aa57",
"assets/assets/icons/colored/icons8-whatsapp-100.png": "560e81bcf02220318593954cb2453910",
"assets/assets/icons/hud/icons8-about.png": "658b83758f795b476685cba20218c280",
"assets/assets/icons/hud/icons8-android_os.png": "1b03338bcfac5e5ce2a9565d79d20ff0",
"assets/assets/icons/hud/icons8-apple_logo.png": "1e1cb480192493da6c6c60032dd09166",
"assets/assets/icons/hud/icons8-close_window.png": "d7a4d29a35e4b096c08aaa1f1f47c462",
"assets/assets/icons/hud/icons8-high_priority.png": "8830dbee82c9b9098ebe65c3427afc0c",
"assets/assets/icons/hud/icons8-info_squared.png": "a861cdca1e934a29e68da268a2344033",
"assets/assets/icons/hud/icons8-tick_box.png": "f4f3de766370ea8b1dcd557586268297",
"assets/assets/icons/notColored/icons8-email-100%2520copy.png": "a8095b7d03d4fb262eb266a92160e9ae",
"assets/assets/icons/notColored/icons8-email-100-2.png": "4f61d36bb4f7d7fc328a0dd59f14163d",
"assets/assets/icons/notColored/icons8-email-100.png": "298a4d499d081640a1f5d12dd841dd17",
"assets/assets/icons/notColored/icons8-facebook-120.png": "70a5eaf3523f5158124620dedfd9316b",
"assets/assets/icons/notColored/icons8-instagram-120.png": "5308f52f9a75e8b6cc4d92173304f567",
"assets/assets/icons/notColored/icons8-internet-100%2520copy.png": "3253e07c5e88e89595f5d76c52e4dc0a",
"assets/assets/icons/notColored/icons8-internet-100-2.png": "827a3207f1deecaa4658e1fb913f0521",
"assets/assets/icons/notColored/icons8-internet-100.png": "7d1cc0ce51e60d9efe524061c1aa7303",
"assets/assets/icons/notColored/icons8-phone-100.png": "a7a831a51b3dc7a3a81d6c6982d0ea3d",
"assets/assets/icons/notColored/icons8-snapchat-100-2.png": "d81fe473e61e98aa0fb0424613da73d5",
"assets/assets/icons/notColored/icons8-twitter-100.png": "e6d2888d8d418e54e4ae595bc09de6bd",
"assets/assets/icons/notColored/icons8-whatsapp-100.png": "e16a83ff565eae7e5fb68222af813cb2",
"assets/assets/icons/notColored/language-choice.png": "295e97d15679b032db5fcdaf3e35124c",
"assets/assets/icons/notColored/language-choice_ar.png": "5c3427b05f7d61ccc1f029970eac3744",
"assets/assets/icons/notColored/translate.png": "9335364a705cda92905731f28ff31463",
"assets/assets/icons/notColored/translate_ar.png": "a5d22927b91a5960756bdad1ca8ae505",
"assets/assets/icons/tapbar/icons8-basket-100-2.png": "c53bc9d2ea315a35ef487ed5dca99c55",
"assets/assets/icons/tapbar/icons8-basket-100.png": "7fafad69c81adde95c54090244d204e7",
"assets/assets/icons/tapbar/icons8-gift-card-100-2.png": "1838cc49d79cf96d4936d0fcb6754629",
"assets/assets/icons/tapbar/icons8-gift-card-100.png": "b8c26d888798f704aff1da9dff719873",
"assets/assets/icons/tapbar/icons8-loyalty-card-100-2.png": "23957e6638bc4b8f59b39889b4d97802",
"assets/assets/icons/tapbar/icons8-loyalty-card-100.png": "9e5efb71f49e85db46952561f2a8af6a",
"assets/assets/icons/tapbar/icons8-online-shop-100-2.png": "34f876bbdd26a2d7e4cf7edd440d9442",
"assets/assets/icons/tapbar/icons8-online-shop-100.png": "7733cadce1f927633b76b27c27768bfd",
"assets/assets/icons/tapbar/icons8-search-more-100-2.png": "c991f192acc1ebc43efdc856f7671c0b",
"assets/assets/icons/tapbar/icons8-search-more-100.png": "734c8152e4b399b61c26404c2946729c",
"assets/assets/icons/tapbar/icons8-settings-100-2.png": "a49d6a85a26a3b46813281cf809aa525",
"assets/assets/icons/tapbar/icons8-settings-100.png": "22207c340b37bc46ac53fad8586e3450",
"assets/assets/icons/tapbar/icons8-shopping-bag-100-2.png": "0c5350d8fe54c176884d2b0674158bff",
"assets/assets/icons/tapbar/icons8-shopping-bag-100.png": "556d45ea6824bc3d259d7acccc5795c5",
"assets/assets/icons/tapbar/icons8-shopping-basket-100-2.png": "56666f375dbd1fa29c2e9ee738035524",
"assets/assets/icons/tapbar/icons8-shopping-basket-100.png": "8feccb459c7d727ec08fcdcb1845b9e2",
"assets/assets/images/logo/bg%2520map%2520.png": "94c7de5d2dbc64580d6d780bcea6213b",
"assets/assets/images/logo/bg%2520tech%2520.jpg": "08364eb795c08fc398184efbb41feb6c",
"assets/assets/images/logo/DozoStoreLogoIcone.png": "8d6490e45cdcb13548d89afade1ce5ab",
"assets/assets/images/logo/DOZO_LOGO.png": "a8fc2d653282bb82cc83e7b9e83d5258",
"assets/assets/images/logo/DOZO_LOGO_DARK.png": "cc632eeb650f365641f7f61be2d80d8c",
"assets/assets/images/logo/DOZO_LOGO_DARK2.png": "d9171cf1b5f43fa92cd9d7a87913f9c0",
"assets/assets/images/logo/DOZO_LOGO_LIGHT.png": "244357f70facc93b54ebf8d57c046e47",
"assets/assets/images/logo/DOZO_LOGO_ORANGE.png": "10aa8b27c31af59b1971ac616376d5e4",
"assets/assets/images/logo/logoMalik.png": "f6b8b07e02d9a48cd8f0b90c5676598e",
"assets/assets/images/logo/logoMalikIcon.png": "1a1393ac009aa34d1ba3ea23a67e6314",
"assets/assets/images/logo/OrangeLogoIcone.png": "85ed0153d783978257f94e28c9f8928a",
"assets/assets/images/splash/onboarding1.png": "44fd103811f55f3ca3e524d19fcd60ab",
"assets/assets/images/splash/onboarding2.png": "9ba1e6b42865fa33dbae2ec701ca396f",
"assets/assets/images/splash/onboarding3.png": "24be219d5dc467082fe82238777a1d68",
"assets/assets/json/cities.json": "86d08cae701929ac8fe9b16d463a48f1",
"assets/assets/json/countries.json": "9b206086bb8c0238541622a23c45e0b9",
"assets/assets/lottie/16656-empty-state.json": "6a65a6ec4da50a5a4db16ba1b373db9e",
"assets/assets/lottie/19948-contact-us.json": "b95891a4a65d362cf26a88a3f8af8457",
"assets/assets/lottie/36293-location-pin.json": "de078c720ee60b55be8097633b45a761",
"assets/assets/lottie/37798-lock-animation.json": "7cd66d6d2ef34d4a064122d9d1853d09",
"assets/assets/lottie/39549-account-privacy.json": "ac87718494806e8391cb87d132d22fef",
"assets/assets/lottie/41132-delivery-location.json": "7ea8776ecd103553eccb1b4a376ceef9",
"assets/assets/lottie/4901-location-finding.json": "2f07db50ccd61278290467af38cd0d5f",
"assets/assets/lottie/580-code-invite-success.json": "dbc144c79b6dd2342881b0743f9c4b1c",
"assets/assets/lottie/65618-contacte-us.json": "17bed6f193c814265c65855a4375fcd5",
"assets/assets/lottie/67766-contacte-us-with-yellow.json": "4bba7e29f418873661b6b6a4e367e222",
"assets/assets/lottie/70711-delivery.json": "3f08ba5654688a6cdaa665bfc9b8cab2",
"assets/assets/lottie/71229-not-found.json": "7172856fba28ddee917ca3e78ad61858",
"assets/assets/lottie/72879-customer-support-help-support-agent.json": "3169492da91f340642ff2136450edae6",
"assets/assets/lottie/74701-contact-us-animation.json": "70cbcd1f41f0dae49fa007c54b2d1de3",
"assets/assets/lottie/77997-no-menu-found.json": "375d3b6332a92c4109a20b158b713f0c",
"assets/assets/lottie/78016-no-order-found.json": "cb0e989a9590f3ae86d1cf33e33efbf9",
"assets/assets/lottie/9091-empty-sad-shopping-bag.json": "1db6e8180b5417d191af689780a6eed7",
"assets/assets/lottie/lf30_editor_ig0uu5jv.json": "765f978c74f5d567b0392cfb4d4cb14a",
"assets/assets/lottie/lf30_editor_ogxrimxm.json": "e1ce863433afe04a5e5b9f16d79bc79f",
"assets/FontManifest.json": "1bf829f608de11c36c06b2beed7ace90",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "fead4d44be5381439aeb177113de406d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "6c3c48132ae2691db55b4e0eb2d7bc0a",
"/": "6c3c48132ae2691db55b4e0eb2d7bc0a",
"main.dart.js": "16c6cc3647cc4f483d7fa244fa1df977",
"manifest.json": "f234c1f1a0294acf10ab5bab941883cf",
"version.json": "4615edfc585d8204e27c713035ee663c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
