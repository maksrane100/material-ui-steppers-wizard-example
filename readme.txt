In this article, we will demonstrate Steppers of Material UI, Material UI is React components that implement Google's Material Design.

We will use Steppers component to create wizard flow. We will create 3 sub forms namely Form1, Form2 and Form3 
to create restaurant and when user submits Form3, the restaurant will be created using FormSubmitted component.
You can take a look at the components in src directory. 


Assumptions:
1) Node JS is installed
2) React JS is installed

First create react app material-ui-steppers-wizard-example using "create-react-app". "create-react-app" sets up development environment 
so that you can use the latest JavaScript features.



c:\articles>npx create-react-app material-ui-steppers-wizard-example

Creating a new React app in c:\articles\material-ui-steppers-wizard-example.

Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts...

yarn add v1.7.0
info No lockfile found.
(node:5388) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
[1/4] Resolving packages...
[2/4] Fetching packages...
info fsevents@1.2.4: The platform "win32" is incompatible with this module.
info "fsevents@1.2.4" is an optional dependency and failed compatibility check. Excluding it from installation.
[3/4] Linking dependencies...
[4/4] Building fresh packages...

success Saved lockfile.
warning Your current version of Yarn is out of date. The latest version is "1.10.1", while you're on "1.7.0".
success Saved 791 new dependencies.
info Direct dependencies
├─ react-dom@16.5.2
├─ react-scripts@2.0.4
└─ react@16.5.2
info All dependencies
├─ @babel/code-frame@7.0.0
├─ @babel/core@7.1.2
├─ @babel/helper-builder-binary-assignment-operator-visitor@7.1.0
├─ @babel/helper-builder-react-jsx@7.0.0
├─ @babel/helper-call-delegate@7.1.0
├─ @babel/helper-define-map@7.1.0
├─ @babel/helper-explode-assignable-expression@7.1.0
├─ @babel/helper-wrap-function@7.1.0
├─ @babel/helpers@7.1.2
├─ @babel/highlight@7.0.0
├─ @babel/plugin-proposal-async-generator-functions@7.1.0
├─ @babel/plugin-proposal-json-strings@7.0.0
├─ @babel/plugin-proposal-object-rest-spread@7.0.0
├─ @babel/plugin-proposal-optional-catch-binding@7.0.0
├─ @babel/plugin-proposal-unicode-property-regex@7.0.0
├─ @babel/plugin-syntax-dynamic-import@7.0.0
├─ @babel/plugin-syntax-json-strings@7.0.0
├─ @babel/plugin-transform-arrow-functions@7.0.0
├─ @babel/plugin-transform-async-to-generator@7.1.0
├─ @babel/plugin-transform-block-scoped-functions@7.0.0
├─ @babel/plugin-transform-block-scoping@7.0.0
├─ @babel/plugin-transform-classes@7.1.0
├─ @babel/plugin-transform-computed-properties@7.0.0
├─ @babel/plugin-transform-destructuring@7.1.2
├─ @babel/plugin-transform-dotall-regex@7.0.0
├─ @babel/plugin-transform-duplicate-keys@7.0.0
├─ @babel/plugin-transform-exponentiation-operator@7.1.0
├─ @babel/plugin-transform-for-of@7.0.0
├─ @babel/plugin-transform-function-name@7.1.0
├─ @babel/plugin-transform-literals@7.0.0
├─ @babel/plugin-transform-modules-amd@7.1.0
├─ @babel/plugin-transform-modules-commonjs@7.1.0
├─ @babel/plugin-transform-modules-systemjs@7.0.0
├─ @babel/plugin-transform-modules-umd@7.1.0
├─ @babel/plugin-transform-new-target@7.0.0
├─ @babel/plugin-transform-object-super@7.1.0
├─ @babel/plugin-transform-parameters@7.1.0
├─ @babel/plugin-transform-react-constant-elements@7.0.0
├─ @babel/plugin-transform-react-display-name@7.0.0
├─ @babel/plugin-transform-react-jsx-self@7.0.0
├─ @babel/plugin-transform-react-jsx-source@7.0.0
├─ @babel/plugin-transform-react-jsx@7.0.0
├─ @babel/plugin-transform-regenerator@7.0.0
├─ @babel/plugin-transform-shorthand-properties@7.0.0
├─ @babel/plugin-transform-spread@7.0.0
├─ @babel/plugin-transform-sticky-regex@7.0.0
├─ @babel/plugin-transform-template-literals@7.0.0
├─ @babel/plugin-transform-typeof-symbol@7.0.0
├─ @babel/plugin-transform-unicode-regex@7.0.0
├─ @babel/preset-env@7.1.0
├─ @babel/preset-react@7.0.0
├─ @babel/runtime@7.0.0
├─ @svgr/core@2.4.1
├─ @svgr/webpack@2.4.1
├─ @types/tapable@1.0.2
├─ @webassemblyjs/floating-point-hex-parser@1.7.6
├─ @webassemblyjs/helper-code-frame@1.7.6
├─ @webassemblyjs/helper-fsm@1.7.6
├─ @webassemblyjs/helper-wasm-section@1.7.6
├─ @webassemblyjs/wasm-edit@1.7.6
├─ @webassemblyjs/wasm-opt@1.7.6
├─ @xtuc/ieee754@1.2.0
├─ acorn-dynamic-import@3.0.0
├─ acorn-jsx@4.1.1
├─ acorn-walk@6.1.0
├─ acorn@5.7.3
├─ address@1.0.3
├─ ajv-errors@1.0.0
├─ ajv-keywords@3.2.0
├─ ajv@6.5.4
├─ ansi-colors@3.1.0
├─ ansi-html@0.0.7
├─ append-transform@0.4.0
├─ aproba@1.2.0
├─ argparse@1.0.10
├─ aria-query@3.0.0
├─ arr-flatten@1.1.0
├─ array-filter@0.0.1
├─ array-flatten@1.1.1
├─ array-map@0.0.0
├─ array-reduce@0.0.0
├─ array-uniq@1.0.3
├─ arrify@1.0.1
├─ asap@2.0.6
├─ asn1.js@4.10.1
├─ asn1@0.2.4
├─ assert@1.4.1
├─ assign-symbols@1.0.0
├─ astral-regex@1.0.0
├─ async-each@1.0.1
├─ async@2.6.1
├─ asynckit@0.4.0
├─ atob@2.1.2
├─ autoprefixer@9.1.5
├─ aws-sign2@0.7.0
├─ aws4@1.8.0
├─ axobject-query@2.0.1
├─ babel-core@6.26.3
├─ babel-eslint@9.0.0
├─ babel-extract-comments@1.0.0
├─ babel-generator@6.26.1
├─ babel-helpers@6.24.1
├─ babel-jest@23.6.0
├─ babel-plugin-jest-hoist@23.2.0
├─ babel-plugin-macros@2.4.2
├─ babel-plugin-syntax-object-rest-spread@6.13.0
├─ babel-plugin-transform-dynamic-import@2.1.0
├─ babel-plugin-transform-object-rest-spread@6.26.0
├─ babel-plugin-transform-react-remove-prop-types@0.4.18
├─ babel-preset-jest@23.2.0
├─ babel-preset-react-app@5.0.3
├─ babel-register@6.26.0
├─ babel-template@6.26.0
├─ babel-traverse@6.26.0
├─ base@0.11.2
├─ base64-js@1.3.0
├─ batch@0.6.1
├─ bcrypt-pbkdf@1.0.2
├─ bfj@6.1.1
├─ big.js@3.2.0
├─ binary-extensions@1.12.0
├─ body-parser@1.18.2
├─ bonjour@3.5.0
├─ brace-expansion@1.1.11
├─ braces@2.3.2
├─ browser-process-hrtime@0.1.3
├─ browser-resolve@1.11.3
├─ browserify-aes@1.2.0
├─ browserify-cipher@1.0.1
├─ browserify-des@1.0.2
├─ browserify-sign@4.0.4
├─ browserify-zlib@0.2.0
├─ bser@2.0.0
├─ buffer-indexof@1.1.1
├─ buffer-xor@1.0.3
├─ buffer@4.9.1
├─ builtin-modules@1.1.1
├─ builtin-status-codes@3.0.0
├─ cacache@11.2.0
├─ cache-base@1.0.1
├─ caller-path@0.1.0
├─ callsites@0.2.0
├─ camel-case@3.0.0
├─ caniuse-lite@1.0.30000889
├─ capture-exit@1.2.0
├─ case-sensitive-paths-webpack-plugin@2.1.2
├─ caseless@0.12.0
├─ chardet@0.7.0
├─ check-types@7.4.0
├─ chokidar@2.0.4
├─ chownr@1.1.1
├─ chrome-trace-event@1.0.0
├─ ci-info@1.6.0
├─ cipher-base@1.0.4
├─ circular-json@0.3.3
├─ class-utils@0.3.6
├─ clean-css@4.2.1
├─ cli-cursor@2.1.0
├─ cli-width@2.2.0
├─ clone-deep@2.0.2
├─ coa@2.0.1
├─ code-point-at@1.1.0
├─ collection-visit@1.0.0
├─ color-convert@1.9.3
├─ color-name@1.1.3
├─ color-string@1.5.3
├─ color@3.0.0
├─ colors@1.1.2
├─ combined-stream@1.0.7
├─ common-tags@1.8.0
├─ compressible@2.0.15
├─ compression@1.7.3
├─ concat-map@0.0.1
├─ confusing-browser-globals@1.0.3
├─ connect-history-api-fallback@1.5.0
├─ console-browserify@1.1.0
├─ constants-browserify@1.0.0
├─ contains-path@0.1.0
├─ content-disposition@0.5.2
├─ convert-source-map@1.6.0
├─ cookie-signature@1.0.6
├─ cookie@0.3.1
├─ copy-concurrently@1.0.5
├─ copy-descriptor@0.1.1
├─ core-js@2.5.7
├─ core-util-is@1.0.2
├─ cosmiconfig@5.0.6
├─ create-ecdh@4.0.3
├─ create-hmac@1.1.7
├─ cross-spawn@6.0.5
├─ crypto-browserify@3.12.0
├─ css-color-names@0.0.4
├─ css-declaration-sorter@4.0.1
├─ css-loader@1.0.0
├─ css-select-base-adapter@0.1.0
├─ css-select@1.2.0
├─ css-tree@1.0.0-alpha.28
├─ css-url-regex@1.1.0
├─ cssdb@3.2.1
├─ cssesc@1.0.1
├─ cssnano-preset-default@4.0.2
├─ cssnano-util-raw-cache@4.0.1
├─ cssnano-util-same-parent@4.0.1
├─ cssnano@4.1.4
├─ csso@3.5.1
├─ cssom@0.3.4
├─ cssstyle@1.1.1
├─ cyclist@0.2.2
├─ damerau-levenshtein@1.0.4
├─ dashdash@1.14.1
├─ data-urls@1.0.1
├─ date-now@0.1.4
├─ decamelize@1.2.0
├─ decode-uri-component@0.2.0
├─ deep-equal@1.0.1
├─ deep-is@0.1.3
├─ default-gateway@2.7.2
├─ default-require-extensions@1.0.0
├─ del@3.0.0
├─ des.js@1.0.0
├─ destroy@1.0.4
├─ detect-indent@4.0.0
├─ detect-newline@2.1.0
├─ detect-node@2.0.4
├─ detect-port-alt@1.1.6
├─ diff@3.5.0
├─ diffie-hellman@5.0.3
├─ dns-equal@1.0.0
├─ dns-packet@1.3.1
├─ dns-txt@2.0.2
├─ dom-converter@0.2.0
├─ domain-browser@1.2.0
├─ domhandler@2.1.0
├─ domutils@1.1.6
├─ dot-prop@4.2.0
├─ dotenv-expand@4.2.0
├─ dotenv@6.0.0
├─ duplexer@0.1.1
├─ duplexify@3.6.0
├─ ecc-jsbn@0.1.2
├─ ee-first@1.1.1
├─ electron-to-chromium@1.3.74
├─ emoji-regex@6.5.1
├─ emojis-list@2.1.0
├─ enhanced-resolve@4.1.0
├─ entities@1.1.1
├─ errno@0.1.7
├─ error-ex@1.3.2
├─ es-abstract@1.12.0
├─ es-to-primitive@1.2.0
├─ escodegen@1.11.0
├─ eslint-config-react-app@3.0.3
├─ eslint-import-resolver-node@0.3.2
├─ eslint-loader@2.1.1
├─ eslint-module-utils@2.2.0
├─ eslint-plugin-flowtype@2.50.1
├─ eslint-plugin-import@2.14.0
├─ eslint-plugin-jsx-a11y@6.1.1
├─ eslint-plugin-react@7.11.1
├─ eslint-utils@1.3.1
├─ eslint@5.6.0
├─ espree@4.0.0
├─ esprima@4.0.1
├─ esquery@1.0.1
├─ estraverse@4.2.0
├─ eventemitter3@3.1.0
├─ events@1.1.1
├─ eventsource@0.1.6
├─ expand-brackets@0.1.5
├─ expand-range@1.8.2
├─ expand-tilde@2.0.2
├─ expect@23.6.0
├─ express@4.16.3
├─ extend@3.0.2
├─ external-editor@3.0.3
├─ extglob@0.3.2
├─ extsprintf@1.3.0
├─ fast-deep-equal@2.0.1
├─ fast-levenshtein@2.0.6
├─ fastparse@1.1.1
├─ faye-websocket@0.10.0
├─ figgy-pudding@3.5.1
├─ figures@2.0.0
├─ file-entry-cache@2.0.0
├─ file-loader@2.0.0
├─ filename-regex@2.0.1
├─ fileset@2.0.3
├─ filesize@3.6.1
├─ fill-range@4.0.0
├─ finalhandler@1.1.1
├─ flat-cache@1.3.0
├─ follow-redirects@1.5.8
├─ for-in@1.0.2
├─ for-own@0.1.5
├─ forever-agent@0.6.1
├─ form-data@2.3.2
├─ forwarded@0.1.2
├─ fs-extra@7.0.0
├─ fs.realpath@1.0.0
├─ function-bind@1.1.1
├─ functional-red-black-tree@1.0.1
├─ get-own-enumerable-property-symbols@2.0.1
├─ get-value@2.0.6
├─ getpass@0.1.7
├─ glob-base@0.3.0
├─ glob-parent@2.0.0
├─ global-modules@1.0.0
├─ global-prefix@1.0.2
├─ globby@6.1.0
├─ growly@1.3.0
├─ gzip-size@5.0.0
├─ h2x-core@1.1.1
├─ h2x-generate@1.1.0
├─ h2x-parse@1.1.1
├─ h2x-plugin-jsx@1.2.0
├─ handle-thing@1.2.5
├─ handlebars@4.0.12
├─ har-schema@2.0.0
├─ har-validator@5.1.0
├─ harmony-reflect@1.6.1
├─ has-ansi@2.0.0
├─ has-flag@3.0.0
├─ has-symbols@1.0.0
├─ has-value@1.0.0
├─ has-values@1.0.0
├─ hash.js@1.1.5
├─ he@1.1.1
├─ hex-color-regex@1.1.0
├─ hmac-drbg@1.0.1
├─ home-or-tmp@2.0.0
├─ hoopy@0.1.4
├─ hosted-git-info@2.7.1
├─ hpack.js@2.1.6
├─ hsl-regex@1.0.0
├─ hsla-regex@1.0.0
├─ html-comment-regex@1.1.1
├─ html-entities@1.2.1
├─ html-minifier@3.5.20
├─ html-webpack-plugin@4.0.0-alpha.2
├─ htmlparser2@3.3.0
├─ http-deceiver@1.2.7
├─ http-parser-js@0.4.13
├─ http-proxy-middleware@0.18.0
├─ http-proxy@1.17.0
├─ http-signature@1.2.0
├─ https-browserify@1.0.0
├─ iconv-lite@0.4.24
├─ icss-replace-symbols@1.1.0
├─ icss-utils@2.1.0
├─ identity-obj-proxy@3.0.0
├─ ieee754@1.1.12
├─ ignore@4.0.6
├─ import-cwd@2.1.0
├─ import-from@2.1.0
├─ indexof@0.0.1
├─ inflight@1.0.6
├─ ini@1.3.5
├─ inquirer@6.2.0
├─ internal-ip@3.0.1
├─ invert-kv@1.0.0
├─ ip-regex@2.1.0
├─ ip@1.1.5
├─ ipaddr.js@1.8.1
├─ is-absolute-url@2.1.0
├─ is-accessor-descriptor@1.0.0
├─ is-arrayish@0.2.1
├─ is-binary-path@1.0.1
├─ is-builtin-module@1.0.0
├─ is-callable@1.1.4
├─ is-color-stop@1.1.0
├─ is-data-descriptor@1.0.0
├─ is-date-object@1.0.1
├─ is-descriptor@1.0.2
├─ is-dotfile@1.0.3
├─ is-equal-shallow@0.1.3
├─ is-finite@1.0.2
├─ is-generator-fn@1.0.0
├─ is-obj@1.0.1
├─ is-path-inside@1.0.1
├─ is-posix-bracket@0.1.1
├─ is-primitive@2.0.0
├─ is-promise@2.1.0
├─ is-regex@1.0.4
├─ is-regexp@1.0.0
├─ is-resolvable@1.1.0
├─ is-root@2.0.0
├─ is-svg@3.0.0
├─ is-symbol@1.0.2
├─ is-typedarray@1.0.0
├─ is-utf8@0.2.1
├─ is-windows@1.0.2
├─ is-wsl@1.1.0
├─ isarray@1.0.0
├─ isemail@3.1.3
├─ isexe@2.0.0
├─ isstream@0.1.2
├─ istanbul-api@1.3.7
├─ istanbul-lib-hook@1.2.2
├─ istanbul-lib-instrument@1.10.2
├─ istanbul-lib-report@1.1.5
├─ istanbul-lib-source-maps@1.2.6
├─ istanbul-reports@1.5.1
├─ jest-changed-files@23.4.2
├─ jest-cli@23.6.0
├─ jest-each@23.6.0
├─ jest-environment-node@23.4.0
├─ jest-leak-detector@23.6.0
├─ jest-pnp-resolver@1.0.1
├─ jest-resolve-dependencies@23.6.0
├─ jest-runner@23.6.0
├─ jest-serializer@23.0.1
├─ jest-watcher@23.4.0
├─ jest@23.6.0
├─ joi@11.4.0
├─ js-levenshtein@1.1.4
├─ js-tokens@3.0.2
├─ js-yaml@3.12.0
├─ jsdom@11.12.0
├─ json-parse-better-errors@1.0.2
├─ json-schema-traverse@0.4.1
├─ json-schema@0.2.3
├─ json-stable-stringify-without-jsonify@1.0.1
├─ json-stable-stringify@1.0.1
├─ json-stringify-safe@5.0.1
├─ json3@3.3.2
├─ json5@0.5.1
├─ jsprim@1.4.1
├─ killable@1.0.1
├─ kind-of@3.2.2
├─ kleur@2.0.2
├─ last-call-webpack-plugin@3.0.0
├─ lazy-cache@1.0.4
├─ lcid@1.0.0
├─ left-pad@1.3.0
├─ leven@2.1.0
├─ levn@0.3.0
├─ load-json-file@2.0.0
├─ loader-fs-cache@1.0.1
├─ loader-runner@2.3.1
├─ locate-path@2.0.0
├─ lodash.camelcase@4.3.0
├─ lodash.debounce@4.0.8
├─ lodash.memoize@4.1.2
├─ lodash.tail@4.1.1
├─ lodash.template@4.4.0
├─ lodash.templatesettings@4.1.0
├─ lodash.uniq@4.5.0
├─ lodash@4.17.11
├─ loglevel@1.6.1
├─ loose-envify@1.4.0
├─ lower-case@1.1.4
├─ lru-cache@4.1.3
├─ makeerror@1.0.11
├─ map-age-cleaner@0.1.2
├─ map-visit@1.0.0
├─ math-random@1.0.1
├─ media-typer@0.3.0
├─ mem@1.1.0
├─ memory-fs@0.4.1
├─ merge-deep@3.0.2
├─ merge-descriptors@1.0.1
├─ merge-stream@1.0.1
├─ merge@1.2.0
├─ methods@1.1.2
├─ miller-rabin@4.0.1
├─ mime-db@1.36.0
├─ mime-types@2.1.20
├─ mime@2.3.1
├─ mini-css-extract-plugin@0.4.3
├─ minimalistic-assert@1.0.1
├─ minimalistic-crypto-utils@1.0.1
├─ minimatch@3.0.4
├─ minimist@1.2.0
├─ mississippi@3.0.0
├─ mixin-deep@1.3.1
├─ multicast-dns-service-types@1.1.0
├─ multicast-dns@6.2.3
├─ mute-stream@0.0.7
├─ nanomatch@1.2.13
├─ negotiator@0.6.1
├─ nice-try@1.0.5
├─ node-forge@0.7.5
├─ node-int64@0.4.0
├─ node-libs-browser@2.1.0
├─ node-notifier@5.2.1
├─ node-releases@1.0.0-alpha.12
├─ normalize-range@0.1.2
├─ normalize-url@3.3.0
├─ nth-check@1.0.1
├─ num2fraction@1.2.2
├─ number-is-nan@1.0.1
├─ nwsapi@2.0.9
├─ oauth-sign@0.9.0
├─ object-assign@4.1.1
├─ object-copy@0.1.0
├─ object-hash@1.3.0
├─ object-keys@1.0.12
├─ object.getownpropertydescriptors@2.0.3
├─ object.omit@2.0.1
├─ object.values@1.0.4
├─ obuf@1.1.2
├─ on-headers@1.0.1
├─ onetime@2.0.1
├─ opn@5.4.0
├─ optimist@0.6.1
├─ optimize-css-assets-webpack-plugin@5.0.1
├─ optionator@0.8.2
├─ original@1.0.2
├─ os-browserify@0.3.0
├─ os-homedir@1.0.2
├─ os-locale@2.1.0
├─ os-tmpdir@1.0.2
├─ p-defer@1.0.0
├─ p-is-promise@1.1.0
├─ p-limit@1.3.0
├─ p-locate@2.0.0
├─ p-map@1.2.0
├─ p-try@1.0.0
├─ pako@1.0.6
├─ param-case@2.1.1
├─ parse-glob@3.0.4
├─ parse-passwd@1.0.0
├─ parse5@4.0.0
├─ pascalcase@0.1.1
├─ path-browserify@0.0.0
├─ path-dirname@1.0.2
├─ path-is-absolute@1.0.1
├─ path-is-inside@1.0.2
├─ path-key@2.0.1
├─ path-to-regexp@0.1.7
├─ path-type@2.0.0
├─ pinkie@2.0.4
├─ pkg-up@2.0.0
├─ pluralize@7.0.0
├─ pnp-webpack-plugin@1.1.0
├─ portfinder@1.0.17
├─ posix-character-classes@0.1.1
├─ postcss-attribute-case-insensitive@4.0.0
├─ postcss-calc@6.0.2
├─ postcss-color-functional-notation@2.0.1
├─ postcss-color-hex-alpha@5.0.2
├─ postcss-color-mod-function@3.0.3
├─ postcss-color-rebeccapurple@4.0.1
├─ postcss-colormin@4.0.2
├─ postcss-convert-values@4.0.1
├─ postcss-custom-media@7.0.4
├─ postcss-custom-properties@8.0.8
├─ postcss-custom-selectors@5.1.2
├─ postcss-dir-pseudo-class@5.0.0
├─ postcss-discard-comments@4.0.1
├─ postcss-discard-duplicates@4.0.2
├─ postcss-discard-empty@4.0.1
├─ postcss-discard-overridden@4.0.1
├─ postcss-env-function@2.0.2
├─ postcss-flexbugs-fixes@4.1.0
├─ postcss-focus-visible@4.0.0
├─ postcss-focus-within@3.0.0
├─ postcss-font-variant@4.0.0
├─ postcss-gap-properties@2.0.0
├─ postcss-image-set-function@3.0.1
├─ postcss-initial@3.0.0
├─ postcss-lab-function@2.0.1
├─ postcss-load-config@2.0.0
├─ postcss-loader@3.0.0
├─ postcss-logical@3.0.0
├─ postcss-media-minmax@4.0.0
├─ postcss-merge-longhand@4.0.6
├─ postcss-merge-rules@4.0.2
├─ postcss-minify-font-values@4.0.2
├─ postcss-minify-gradients@4.0.1
├─ postcss-minify-params@4.0.1
├─ postcss-minify-selectors@4.0.1
├─ postcss-modules-extract-imports@1.2.0
├─ postcss-modules-local-by-default@1.2.0
├─ postcss-modules-scope@1.1.0
├─ postcss-modules-values@1.3.0
├─ postcss-nesting@7.0.0
├─ postcss-normalize-charset@4.0.1
├─ postcss-normalize-display-values@4.0.1
├─ postcss-normalize-positions@4.0.1
├─ postcss-normalize-repeat-style@4.0.1
├─ postcss-normalize-string@4.0.1
├─ postcss-normalize-timing-functions@4.0.1
├─ postcss-normalize-unicode@4.0.1
├─ postcss-normalize-url@4.0.1
├─ postcss-normalize-whitespace@4.0.1
├─ postcss-ordered-values@4.1.1
├─ postcss-overflow-shorthand@2.0.0
├─ postcss-page-break@2.0.0
├─ postcss-place@4.0.1
├─ postcss-preset-env@6.0.6
├─ postcss-pseudo-class-any-link@6.0.0
├─ postcss-reduce-initial@4.0.2
├─ postcss-reduce-transforms@4.0.1
├─ postcss-replace-overflow-wrap@3.0.0
├─ postcss-safe-parser@4.0.1
├─ postcss-selector-matches@4.0.0
├─ postcss-selector-not@4.0.0
├─ postcss-svgo@4.0.1
├─ postcss-unique-selectors@4.0.1
├─ preserve@0.2.0
├─ prettier@1.14.3
├─ pretty-bytes@4.0.2
├─ pretty-error@2.1.1
├─ private@0.1.8
├─ process-nextick-args@2.0.0
├─ process@0.11.10
├─ progress@2.0.0
├─ promise@8.0.2
├─ prompts@0.1.14
├─ proxy-addr@2.0.4
├─ prr@1.0.1
├─ pseudomap@1.0.2
├─ psl@1.1.29
├─ public-encrypt@4.0.3
├─ pump@2.0.1
├─ q@1.5.1
├─ querystring-es3@0.2.1
├─ querystring@0.2.0
├─ querystringify@2.0.0
├─ raf@3.4.0
├─ randomatic@3.1.0
├─ randomfill@1.0.4
├─ raw-body@2.3.2
├─ react-app-polyfill@0.1.3
├─ react-dev-utils@6.0.4
├─ react-dom@16.5.2
├─ react-error-overlay@5.0.4
├─ react-scripts@2.0.4
├─ react@16.5.2
├─ read-pkg-up@2.0.0
├─ read-pkg@2.0.0
├─ readdirp@2.2.1
├─ recursive-readdir@2.2.2
├─ reduce-css-calc@2.1.5
├─ regenerate-unicode-properties@7.0.0
├─ regenerator-runtime@0.11.1
├─ regenerator-transform@0.13.3
├─ regex-cache@0.4.4
├─ regexpp@2.0.1
├─ regjsgen@0.4.0
├─ regjsparser@0.3.0
├─ relateurl@0.2.7
├─ remove-trailing-separator@1.1.0
├─ renderkid@2.0.2
├─ repeating@2.0.1
├─ request-promise-core@1.1.1
├─ request@2.88.0
├─ require-from-string@2.0.2
├─ require-uncached@1.0.3
├─ resolve-dir@1.0.1
├─ resolve-url@0.2.1
├─ resolve@1.8.1
├─ restore-cursor@2.0.0
├─ ret@0.1.15
├─ rgb-regex@1.0.1
├─ rgba-regex@1.0.0
├─ rsvp@3.6.2
├─ run-async@2.3.0
├─ run-queue@1.0.3
├─ rxjs@6.3.3
├─ safer-buffer@2.1.2
├─ sane@2.5.2
├─ sass-loader@7.1.0
├─ sax@1.2.4
├─ saxes@3.1.3
├─ select-hose@2.0.0
├─ selfsigned@1.10.3
├─ semver@5.5.1
├─ serve-index@1.9.1
├─ serve-static@1.13.2
├─ set-blocking@2.0.0
├─ set-value@2.0.0
├─ setimmediate@1.0.5
├─ shallow-clone@1.0.0
├─ shebang-regex@1.0.0
├─ shell-quote@1.6.1
├─ shellwords@0.1.1
├─ simple-swizzle@0.2.2
├─ sisteransi@0.1.1
├─ slice-ansi@1.0.0
├─ snapdragon-node@2.1.1
├─ snapdragon-util@3.0.1
├─ sockjs@0.3.19
├─ source-map-resolve@0.5.2
├─ source-map-support@0.5.9
├─ source-map-url@0.4.0
├─ source-map@0.6.1
├─ spdx-correct@3.0.2
├─ spdx-exceptions@2.2.0
├─ spdy-transport@2.1.0
├─ spdy@3.4.7
├─ split-string@3.1.0
├─ sprintf-js@1.0.3
├─ sshpk@1.14.2
├─ ssri@6.0.1
├─ stable@0.1.8
├─ stack-utils@1.0.1
├─ static-extend@0.1.2
├─ stealthy-require@1.1.1
├─ stream-browserify@2.0.1
├─ stream-http@2.8.3
├─ string_decoder@1.1.1
├─ string-width@2.1.1
├─ stringify-object@3.2.2
├─ strip-comments@1.0.2
├─ strip-json-comments@2.0.1
├─ style-loader@0.23.0
├─ stylehacks@4.0.1
├─ supports-color@5.5.0
├─ svgo@1.1.1
├─ table@4.0.3
├─ terser-webpack-plugin@1.1.0
├─ terser@3.9.3
├─ test-exclude@4.2.3
├─ text-table@0.2.0
├─ through@2.3.8
├─ thunky@1.0.2
├─ timers-browserify@2.0.10
├─ timsort@0.3.0
├─ tmp@0.0.33
├─ tmpl@1.0.4
├─ to-arraybuffer@1.0.1
├─ to-regex-range@2.1.1
├─ topo@2.0.2
├─ tough-cookie@2.4.3
├─ tryer@1.0.1
├─ tty-browserify@0.0.0
├─ tunnel-agent@0.6.0
├─ tweetnacl@0.14.5
├─ type-is@1.6.16
├─ typedarray@0.0.6
├─ uglify-es@3.3.9
├─ uglify-js@3.4.9
├─ uglifyjs-webpack-plugin@1.3.0
├─ unicode-canonical-property-names-ecmascript@1.0.4
├─ unicode-match-property-ecmascript@1.0.4
├─ unicode-match-property-value-ecmascript@1.0.2
├─ unicode-property-aliases-ecmascript@1.0.4
├─ union-value@1.0.0
├─ unique-slug@2.0.1
├─ unpipe@1.0.0
├─ unquote@1.1.1
├─ unset-value@1.0.0
├─ upath@1.1.0
├─ upper-case@1.1.3
├─ uri-js@4.2.2
├─ urix@0.1.0
├─ url-loader@1.1.1
├─ url-parse@1.4.3
├─ url@0.11.0
├─ use@3.1.1
├─ util-deprecate@1.0.2
├─ util.promisify@1.0.0
├─ util@0.10.4
├─ utils-merge@1.0.1
├─ validate-npm-package-license@3.0.4
├─ vendors@1.0.2
├─ verror@1.10.0
├─ vm-browserify@0.0.4
├─ walker@1.0.7
├─ watch@0.18.0
├─ watchpack@1.6.0
├─ wbuf@1.7.3
├─ webpack-dev-middleware@3.4.0
├─ webpack-dev-server@3.1.9
├─ webpack-manifest-plugin@2.0.4
├─ webpack@4.19.1
├─ websocket-extensions@0.1.3
├─ whatwg-encoding@1.0.5
├─ whatwg-fetch@3.0.0
├─ wordwrap@1.0.0
├─ workbox-broadcast-cache-update@3.6.2
├─ workbox-build@3.6.2
├─ workbox-cache-expiration@3.6.2
├─ workbox-cacheable-response@3.6.2
├─ workbox-google-analytics@3.6.2
├─ workbox-navigation-preload@3.6.2
├─ workbox-precaching@3.6.2
├─ workbox-range-requests@3.6.2
├─ workbox-streams@3.6.2
├─ workbox-sw@3.6.2
├─ workbox-webpack-plugin@3.6.2
├─ wrap-ansi@2.1.0
├─ write-file-atomic@2.3.0
├─ write@0.2.1
├─ ws@5.2.2
├─ xmlchars@1.3.1
├─ xregexp@4.0.0
├─ xtend@4.0.1
└─ yargs-parser@9.0.2
Done in 625.62s.

Initialized a git repository.

Success! Created material-ui-steppers-wizard-example at c:\articles\material-ui-steppers-wizard-example
Inside that directory, you can run several commands:

  yarn start
    Starts the development server.

  yarn build
    Bundles the app into static files for production.

  yarn test
    Starts the test runner.

  yarn eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd material-ui-steppers-wizard-example
  yarn start

Happy hacking!

c:\articles>cd material-ui-steppers-wizard-example

c:\articles\material-ui-steppers-wizard-example>npm i axios @material-ui/core @material-ui/icons --save
npm WARN rm not removing c:\articles\material-ui-steppers-wizard-example\node_modules\.bin\jest.cmd as it wasn't installed by c:\articles\material-ui-steppers-wizard-example\node_modules\jest
npm WARN rm not removing c:\articles\material-ui-steppers-wizard-example\node_modules\.bin\jest as it wasn't installed by c:\articles\material-ui-steppers-wizard-example\node_modules\jest
npm WARN rm not removing c:\articles\material-ui-steppers-wizard-example\node_modules\.bin\regjsparser.cmd as it wasn't installed by c:\articles\material-ui-steppers-wizard-example\node_modules\regjsparser
npm WARN rm not removing c:\articles\material-ui-steppers-wizard-example\node_modules\.bin\regjsparser as it wasn't installed by c:\articles\material-ui-steppers-wizard-example\node_modules\regjsparser
npm WARN rm not removing c:\articles\material-ui-steppers-wizard-example\node_modules\.bin\jsesc.cmd as it wasn't installed by c:\articles\material-ui-steppers-wizard-example\node_modules\jsesc
npm WARN rm not removing c:\articles\material-ui-steppers-wizard-example\node_modules\.bin\jsesc as it wasn't installed by c:\articles\material-ui-steppers-wizard-example\node_modules\jsesc
npm WARN rm not removing c:\articles\material-ui-steppers-wizard-example\node_modules\.bin\esparse.cmd as it wasn't installed by c:\articles\material-ui-steppers-wizard-example\node_modules\esprima
npm WARN rm not removing c:\articles\material-ui-steppers-wizard-example\node_modules\.bin\esvalidate.cmd as it wasn't installed by c:\articles\material-ui-steppers-wizard-example\node_modules\esprima
npm WARN rm not removing c:\articles\material-ui-steppers-wizard-example\node_modules\.bin\esvalidate as it wasn't installed by c:\articles\material-ui-steppers-wizard-example\node_modules\esprima
npm WARN rm not removing c:\articles\material-ui-steppers-wizard-example\node_modules\.bin\esparse as it wasn't installed by c:\articles\material-ui-steppers-wizard-example\node_modules\esprima
npm WARN rm not removing c:\articles\material-ui-steppers-wizard-example\node_modules\.bin\cssesc.cmd as it wasn't installed by c:\articles\material-ui-steppers-wizard-example\node_modules\cssesc
npm WARN rm not removing c:\articles\material-ui-steppers-wizard-example\node_modules\.bin\cssesc as it wasn't installed by c:\articles\material-ui-steppers-wizard-example\node_modules\cssesc

> jss@9.8.7 postinstall c:\articles\material-ui-steppers-wizard-example\node_modules\jss
> node -e "console.log('\u001b[35m\u001b[1mLove JSS? You can now support us on open collective:\u001b[22m\u001b[39m\n > \u001b[34mhttps://opencollective.com/jss/donate\u001b[0m')"

Love JSS? You can now support us on open collective:
 > https://opencollective.com/jss/donate
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN ajv-keywords@3.2.0 requires a peer of ajv@^6.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.4: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ @material-ui/icons@3.0.1
+ axios@0.18.0
+ @material-ui/core@3.1.2
added 501 packages from 216 contributors, removed 226 packages, updated 1254 packages and audited 32068 packages in 778.745s
found 0 vulnerabilities


c:\articles\material-ui-steppers-wizard-example>
c:\articles\material-ui-steppers-wizard-example>
c:\articles\material-ui-steppers-wizard-example>
c:\articles\material-ui-steppers-wizard-example>
c:\articles\material-ui-steppers-wizard-example>
c:\articles\material-ui-steppers-wizard-example>
c:\articles\material-ui-steppers-wizard-example>
c:\articles\material-ui-steppers-wizard-example>
c:\articles\material-ui-steppers-wizard-example>
c:\articles\material-ui-steppers-wizard-example>
c:\articles\material-ui-steppers-wizard-example>






I have attached the screenshots also.

