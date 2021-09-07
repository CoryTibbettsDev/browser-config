/* strict.js */

/* INDEX:
0100: STARTUP
0200: GEOLOCATION / LANGUAGE / LOCALE
0300: QUIET FOX
0400: BLOCKLISTS / SAFE BROWSING
0500: SYSTEM ADD-ONS / EXPERIMENTS
0600: BLOCK IMPLICIT OUTBOUND
0700: HTTP* / TCP/IP / DNS / PROXY / SOCKS etc
0800: LOCATION BAR / SEARCH BAR / SUGGESTIONS / HISTORY / FORMS
0900: PASSWORDS
1000: CACHE / SESSION (RE)STORE / FAVICONS
1200: HTTPS (SSL/TLS / OCSP / CERTS / HPKP / CIPHERS)
1400: FONTS
1600: HEADERS / REFERERS
1700: CONTAINERS
2000: PLUGINS / MEDIA / WEBRTC
2300: WEB WORKERS
2400: DOM (DOCUMENT OBJECT MODEL) & JAVASCRIPT
2500: HARDWARE FINGERPRINTING
2600: MISCELLANEOUS
2700: PERSISTENT STORAGE
2800: SHUTDOWN
4000: FPI (FIRST PARTY ISOLATION)
4500: RFP (RESIST FINGERPRINTING)
5000: PERSONAL
*/

/* START: internal custom pref to test for syntax errors
 * [NOTE] Not all syntax errors cause parsing to abort i.e. reaching the last debug pref
 * no longer necessarily means that all prefs have been applied. Check the console right
 * after startup for any warnings/error messages related to non-applied prefs
 * [1] https://blog.mozilla.org/nnethercote/2018/03/09/a-new-preferences-parser-for-firefox/
 */
user_pref("_user.js.parrot", "START: Oh yes, the Norwegian Blue... what's wrong with it?");

/* 0000: disable about:config warning */
user_pref("browser.aboutConfig.showWarning", false);

/* Ctrl+Tab cycles through tabs in recently used order */
user_pref("browser.ctrlTab.sortByRecentlyUsed", false);

/* [SECTION 0100]: STARTUP */
user_pref("_user.js.parrot", "0100 syntax error: the parrot's dead!");
/* 0101: disable default browser check
 * [SETTING] General>Startup>Always check if Firefox is your default browser */
user_pref("browser.shell.checkDefaultBrowser", false);
/* 0102: set startup page [SETUP-CHROME]
 * 0=blank, 1=home, 2=last visited page, 3=resume previous session
 * [NOTE] Session Restore is not used in PB mode (0110) and is cleared with history (2803, 2804)
 * [SETTING] General>Startup>Restore previous session */
user_pref("browser.startup.page", 0);
/* 0103: set HOME+NEWWINDOW page
 * about:home=Activity Stream (default, see 0105), custom URL, about:blank
 * [SETTING] Home>New Windows and Tabs>Homepage and new windows */
user_pref("browser.startup.homepage", "about:blank");
/* 0104: set NEWTAB page
 * true=Activity Stream (default, see 0105), false=blank page
 * [SETTING] Home>New Windows and Tabs>New tabs */
user_pref("browser.newtabpage.enabled", false);
user_pref("browser.newtab.preload", false);
/* 0105: disable some Activity Stream items
 * Activity Stream is the default homepage/newtab based on metadata and browsing behavior
 * [SETTING] Home>Firefox Home Content>...  to show/hide what you want */
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false); // [DEFAULT: false FF89+]
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.feeds.discoverystreamfeed", false); // [FF66+]
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false); // [FF83+]
/* 0106: clear default topsites
 * [NOTE] This does not block you from adding your own */
user_pref("browser.newtabpage.activity-stream.default.sites", "");
/* 0110: start Firefox in PB (Private Browsing) mode
 * [NOTE] In this mode all windows are "private windows" and the PB mode icon is not displayed
 * [WARNING] The P in PB mode can be misleading: it means no "persistent" disk state such as history,
 * caches, searches, cookies, localStorage, IndexedDB etc (which you can achieve in normal mode).
 * In fact, PB mode limits or removes the ability to control some of these, and you need to quit
 * Firefox to clear them. PB is best used as a one off window (Menu>New Private Window) to provide
 * a temporary self-contained new session. Close all Private Windows to clear the PB mode session.
 * [SETTING] Privacy & Security>History>Custom Settings>Always use private browsing mode
 * [1] https://wiki.mozilla.org/Private_Browsing
 * [2] https://support.mozilla.org/kb/common-myths-about-private-browsing */
user_pref("browser.privatebrowsing.autostart", true);

/* [SECTION 0200]: GEOLOCATION / LANGUAGE / LOCALE */
user_pref("_user.js.parrot", "0200 syntax error: the parrot's definitely deceased!");
/* 0203: use Mozilla geolocation service instead of Google if permission is granted [FF74+]
 * Optionally enable logging to the console (defaults to false) */
user_pref("geo.provider.network.url", "https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%");
   // user_pref("geo.provider.network.logging.enabled", true); // [HIDDEN PREF]
/* 0204: disable using the OS's geolocation service */
user_pref("geo.provider.ms-windows-location", false); // [WINDOWS]
user_pref("geo.provider.use_corelocation", false); // [MAC]
user_pref("geo.provider.use_gpsd", false); // [LINUX]
/* 0207: disable region updates
 * [1] https://firefox-source-docs.mozilla.org/toolkit/modules/toolkit_modules/Region.html */
user_pref("browser.region.network.url", ""); // [FF78+]
user_pref("browser.region.update.enabled", false); // [[FF79+]
/* 0208: set search region
 * [NOTE] May not be hidden if Firefox has changed your settings due to your region (0207) */
   // user_pref("browser.search.region", "US"); // [HIDDEN PREF]
/* 0210: set preferred language for displaying web pages
 * [TEST] https://addons.mozilla.org/about */
user_pref("intl.accept_languages", "en-US, en");
/* 0211: use US English locale regardless of the system locale
 * [SETUP-WEB] May break some input methods e.g xim/ibus for CJK languages [1]
 * [1] https://bugzilla.mozilla.org/buglist.cgi?bug_id=867501,1629630 */
user_pref("javascript.use_us_english_locale", true); // [HIDDEN PREF]

/* [SECTION 0300]: QUIET FOX */
user_pref("_user.js.parrot", "0300 syntax error: the parrot's not pinin' for the fjords!");
/* 0301: disable auto-INSTALLING Firefox updates [NON-WINDOWS]
 * [NOTE] You will still get prompts to update, and should do so in a timely manner
 * [SETTING] General>Firefox Updates>Check for updates but let you choose to install them */
user_pref("app.update.auto", false);
/* 0302: disable auto-INSTALLING Firefox updates via a background service [FF90+] [WINDOWS]
 * [SETTING] General>Firefox Updates>Automatically install updates>When Firefox is not running
 * [1] https://support.mozilla.org/kb/enable-background-updates-firefox-windows */
user_pref("app.update.background.scheduling.enabled", false);
/* 0303: disable auto-CHECKING for extension and theme updates */
   // user_pref("extensions.update.enabled", false);
/* 0304: disable auto-INSTALLING extension and theme updates (after the check in 0303)
 * [SETTING] about:addons>Extensions>[cog-wheel-icon]>Update Add-ons Automatically (toggle) */
   // user_pref("extensions.update.autoUpdateDefault", false);
/* 0306: disable extension metadata
 * used when installing/updating an extension, and in daily background update checks:
 * when false, extension detail tabs will have no description */
   // user_pref("extensions.getAddons.cache.enabled", false);
/* 0308: disable search engine updates (e.g. OpenSearch)
 * [NOTE] This does not affect Mozilla's built-in or Web Extension search engines */
user_pref("browser.search.update", false);
/* 0320: disable about:addons' Recommendations pane (uses Google Analytics) */
user_pref("extensions.getAddons.showPane", false); // [HIDDEN PREF]
/* 0321: disable recommendations in about:addons' Extensions and Themes panes [FF68+] */
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
/* 0330: disable telemetry
 * The "unified" pref affects the behaviour of the "enabled" pref
 * - If "unified" is false then "enabled" controls the telemetry module
 * - If "unified" is true then "enabled" only controls whether to record extended data
 * [NOTE] FF58+ "toolkit.telemetry.enabled" is now LOCKED to reflect prerelease
 * or release builds (true and false respectively) [2]
 * [1] https://firefox-source-docs.mozilla.org/toolkit/components/telemetry/telemetry/internals/preferences.html
 * [2] https://medium.com/georg-fritzsche/data-preference-changes-in-firefox-58-2d5df9c428b5 */
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false); // see [NOTE]
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false); // [FF55+]
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false); // [FF55+]
user_pref("toolkit.telemetry.updatePing.enabled", false); // [FF56+]
user_pref("toolkit.telemetry.bhrPing.enabled", false); // [FF57+] Background Hang Reporter
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false); // [FF57+]
/* 0331: disable Telemetry Coverage
 * [1] https://blog.mozilla.org/data/2018/08/20/effectively-measuring-search-in-firefox/ */
user_pref("toolkit.telemetry.coverage.opt-out", true); // [HIDDEN PREF]
user_pref("toolkit.coverage.opt-out", true); // [FF64+] [HIDDEN PREF]
user_pref("toolkit.coverage.endpoint.base", "");
/* 0340: disable Health Reports
 * [SETTING] Privacy & Security>Firefox Data Collection & Use>Allow Firefox to send technical... data */
user_pref("datareporting.healthreport.uploadEnabled", false);
/* 0341: disable new data submission, master kill switch [FF41+]
* If disabled, no policy is shown or upload takes place, ever
* [1] https://bugzilla.mozilla.org/1195552 */
user_pref("datareporting.policy.dataSubmissionEnabled", false);
/* 0342: disable Studies
 * [SETTING] Privacy & Security>Firefox Data Collection & Use>Allow Firefox to install and run studies */
user_pref("app.shield.optoutstudies.enabled", false);
/* 0343: disable personalized Extension Recommendations in about:addons and AMO [FF65+]
* [NOTE] This pref has no effect when Health Reports (0340) are disabled
* [SETTING] Privacy & Security>Firefox Data Collection & Use>Allow Firefox to make personalized extension recommendations
* [1] https://support.mozilla.org/kb/personalized-extension-recommendations */
user_pref("browser.discovery.enabled", false);
/* 0350: disable Crash Reports */
user_pref("breakpad.reportURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false); // [FF44+]
/* 0351: enforce no submission of backlogged Crash Reports [FF58+]
 * [SETTING] Privacy & Security>Firefox Data Collection & Use>Allow Firefox to send backlogged crash reports  */
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false); // [DEFAULT: false]
/* 0390: disable Captive Portal detection
 * [1] https://www.eff.org/deeplinks/2017/08/how-captive-portals-interfere-wireless-security-and-privacy */
user_pref("captivedetect.canonicalURL", "");
user_pref("network.captive-portal-service.enabled", false); // [FF52+]
/* 0391: disable Network Connectivity checks [FF65+]
 * [1] https://bugzilla.mozilla.org/1460537 */
user_pref("network.connectivity-service.enabled", false);
/* [SECTION 0400]: BLOCKLISTS / SAFE BROWSING (SB) */
user_pref("_user.js.parrot", "0400 syntax error: the parrot's passed on!");
/* BLOCKLISTS */
/* 0401: enforce Firefox blocklist
 * [NOTE] It includes updates for "revoked certificates"
 * [1] https://blog.mozilla.org/security/2015/03/03/revoking-intermediate-certificates-introducing-onecrl/ */
user_pref("extensions.blocklist.enabled", true); // [DEFAULT: true]

/* SAFE BROWSING (SB)
Safe Browsing has taken many steps to preserve privacy. If required, a full url is never
sent to Google, only a PART-hash of the prefix, and this is hidden with noise of other real
PART-hashes. Google also swear it is anonymized and only used to flag malicious sites.
Firefox also takes measures such as striping out identifying parameters and since SBv4 (FF57+)
doesn't even use cookies. (#Turn on browser.safebrowsing.debug to monitor this activity)

[1] https://feeding.cloud.geek.nz/posts/how-safe-browsing-works-in-firefox/
[2] https://wiki.mozilla.org/Security/Safe_Browsing
[3] https://support.mozilla.org/kb/how-does-phishing-and-malware-protection-work
*/
/* 0410: disable SB (Safe Browsing)
* [WARNING] Do this at your own risk! These are the master switches
* [SETTING] Privacy & Security>Security>... Block dangerous and deceptive content */
// user_pref("browser.safebrowsing.malware.enabled", false);
// user_pref("browser.safebrowsing.phishing.enabled", false);
/* 0411: disable SB checks for downloads (both local lookups + remote)
* This is the master switch for the safebrowsing.downloads* prefs (0412, 0413)
* [SETTING] Privacy & Security>Security>... "Block dangerous downloads" */
// user_pref("browser.safebrowsing.downloads.enabled", false);
/* 0412: disable SB checks for downloads (remote)
* To verify the safety of certain executable files, Firefox may submit some information about the
* file, including the name, origin, size and a cryptographic hash of the contents, to the Google
* Safe Browsing service which helps Firefox determine whether or not the file should be blocked
* [SETUP-SECURITY] If you do not understand this, or you want this protection, then override it */
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.url", "");
/* 0413: disable SB checks for unwanted software
 * [SETTING] Privacy & Security>Security>... "Warn you about unwanted and uncommon software" */
// user_pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
// user_pref("browser.safebrowsing.downloads.remote.block_uncommon", false);
/* 0419: disable "ignore this warning" on SB warnings [FF45+]
* If clicked, it bypasses the block for that session. This is a means for admins to enforce SB
* [TEST] see github wiki APPENDIX A: Test Sites: Section 5
* [1] https://bugzilla.mozilla.org/1226490 */
// user_pref("browser.safebrowsing.allowOverride", false);

/* [SECTION 0500]: SYSTEM ADD-ONS / EXPERIMENTS
System Add-ons are a method for shipping extensions, considered to be
built-in features to Firefox, that are hidden from the about:addons UI.
To view your System Add-ons go to about:support, they are listed under "Firefox Features"

* Portable: "...\App\Firefox64\browser\features\" (or "App\Firefox\etc" for 32bit)
* Windows: "...\Program Files\Mozilla\browser\features" (or "Program Files (X86)\etc" for 32bit)
* Mac: "...\Applications\Firefox\Contents\Resources\browser\features\"
[NOTE] On Mac you can right-click on the application and select "Show Package Contents"
* Linux: "/usr/lib/firefox/browser/features" (or similar)

[1] https://firefox-source-docs.mozilla.org/toolkit/mozapps/extensions/addon-manager/SystemAddons.html
[2] https://searchfox.org/mozilla-central/source/browser/extensions
*/
user_pref("_user.js.parrot", "0500 syntax error: the parrot's cashed in 'is chips!");
/* 0503: disable Normandy/Shield [FF60+]
 * Shield is a telemetry system that can push and test "recipes"
 * [1] https://mozilla.github.io/normandy/ */
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");
/* 0505: disable System Add-on updates */
user_pref("extensions.systemAddon.update.enabled", false); // [FF62+]
user_pref("extensions.systemAddon.update.url", ""); // [FF44+]
/* 0506: disable PingCentre telemetry (used in several System Add-ons) [FF57+]
 * Defense-in-depth: currently covered by 0340 */
user_pref("browser.ping-centre.telemetry", false);
/* 0515: disable Screenshots */
   // user_pref("extensions.screenshots.disabled", true); // [FF55+]
/* 0517: disable Form Autofill
 * [NOTE] Stored data is NOT secure (uses a JSON file)
 * [NOTE] Heuristics controls Form Autofill on forms without @autocomplete attributes
 * [SETTING] Privacy & Security>Forms and Autofill>Autofill addresses
 * [1] https://wiki.mozilla.org/Firefox/Features/Form_Autofill */
user_pref("extensions.formautofill.addresses.enabled", false); // [FF55+]
user_pref("extensions.formautofill.available", "off"); // [FF56+]
user_pref("extensions.formautofill.creditCards.available", false); // [FF57+]
user_pref("extensions.formautofill.creditCards.enabled", false); // [FF56+]
user_pref("extensions.formautofill.heuristics.enabled", false); // [FF55+]
/* 0518: enforce disabling of Web Compatibility Reporter [FF56+]
 * Web Compatibility Reporter adds a "Report Site Issue" button to send data to Mozilla */
user_pref("extensions.webcompat-reporter.enabled", false); // [DEFAULT: false]

/* [SECTION 0600]: BLOCK IMPLICIT OUTBOUND [not explicitly asked for - e.g. clicked on] */
user_pref("_user.js.parrot", "0600 syntax error: the parrot's no more!");
/* 0601: disable link prefetching
 * [1] https://developer.mozilla.org/docs/Web/HTTP/Link_prefetching_FAQ */
user_pref("network.prefetch-next", false);
/* 0602: disable DNS prefetching
 * [1] https://developer.mozilla.org/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control */
user_pref("network.dns.disablePrefetch", true);
   // user_pref("network.dns.disablePrefetchFromHTTPS", true); // [DEFAULT: true]
/* 0603: disable predictor / prefetching */
user_pref("network.predictor.enabled", false);
   // user_pref("network.predictor.enable-prefetch", false); // [FF48+] [DEFAULT: false]
/* 0605: disable link-mouseover opening connection to linked server
* [1] https://news.slashdot.org/story/15/08/14/2321202/how-to-quash-firefoxs-silent-requests */
user_pref("network.http.speculative-parallel-limit", 0);
/* 0606: enforce no "Hyperlink Auditing" (click tracking)
* [1] https://www.bleepingcomputer.com/news/software/major-browsers-to-prevent-disabling-of-click-tracking-privacy-risk/ */
// user_pref("browser.send_pings", false); // [DEFAULT: false]

/* [SECTION 0700]: HTTP* / TCP/IP / DNS / PROXY / SOCKS etc */
user_pref("_user.js.parrot", "0700 syntax error: the parrot's given up the ghost!");
/* 0701: disable IPv6
* IPv6 can be abused, especially with MAC addresses, and can leak with VPNs: assuming
* your ISP and/or router and/or website is IPv6 capable. Most sites will fall back to IPv4
* [STATS] Firefox telemetry (July 2021) shows ~10% of all connections are IPv6
* [NOTE] This is an application level fallback. Disabling IPv6 is best done at an
* OS/network level, and/or configured properly in VPN setups. If you are not masking your IP,
* then this won't make much difference. If you are masking your IP, then it can only help.
* [NOTE] PHP defaults to IPv6 with "localhost". Use "php -S 127.0.0.1:PORT"
* [TEST] https://ipleak.org/
* [1] https://www.internetsociety.org/tag/ipv6-security/ (Myths 2,4,5,6) */
user_pref("network.dns.disableIPv6", true);
/* 0702: disable HTTP2
* HTTP2 raises concerns with "multiplexing" and "server push", does nothing to
* enhance privacy, and opens up a number of server-side fingerprinting opportunities
* [WARNING] Don't disable HTTP2. Don't be that one person using HTTP1.1 on HTTP2 sites
* [STATS] ~46% of sites (July 2021) [5]
* [1] https://http2.github.io/faq/
* [2] https://blog.scottlogic.com/2014/11/07/http-2-a-quick-look.html
* [3] https://datatracker.ietf.org/doc/html/rfc7540#section-10.8
* [4] https://queue.acm.org/detail.cfm?id=2716278
* [5] https://w3techs.com/technologies/details/ce-http2/all/all */
// user_pref("network.http.spdy.enabled", false);
// user_pref("network.http.spdy.enabled.deps", false);
// user_pref("network.http.spdy.enabled.http2", false);
// user_pref("network.http.spdy.websockets", false); // [FF65+]
/* 0703: disable HTTP Alternative Services [FF37+]
* [SETUP-PERF] Relax this if you have FPI enabled (4001) and you understand the
* consequences. FPI isolates these, but it was designed with the Tor protocol in mind,
* and the Tor Browser has extra protection, including enhanced sanitizing per Identity.
* [1] https://tools.ietf.org/html/rfc7838#section-9
* [2] https://www.mnot.net/blog/2016/03/09/alt-svc */
user_pref("network.http.altsvc.enabled", false);
user_pref("network.http.altsvc.oe", false);
/* 0704: set the proxy server to do any DNS lookups when using SOCKS
* e.g. in Tor, this stops your local DNS server from knowing your Tor destination
* as a remote Tor node will handle the DNS request
* [1] https://trac.torproject.org/projects/tor/wiki/doc/TorifyHOWTO/WebBrowsers */
user_pref("network.proxy.socks_remote_dns", true);
/* 0709: disable using UNC (Uniform Naming Convention) paths [FF61+]
* [SETUP-CHROME] Can break extensions for profiles on network shares
* [1] https://gitlab.torproject.org/tpo/applications/tor-browser/-/issues/26424 */
user_pref("network.file.disable_unc_paths", true); // [HIDDEN PREF]
/* 0710: disable GIO as a potential proxy bypass vector
* Gvfs/GIO has a set of supported protocols like obex, network, archive, computer, dav, cdda,
* gphoto2, trash, etc. By default only smb and sftp protocols are accepted so far (as of FF64)
* [1] https://bugzilla.mozilla.org/1433507
* [2] https://gitlab.torproject.org/tpo/applications/tor-browser/-/issues/23044
* [3] https://en.wikipedia.org/wiki/GVfs
* [4] https://en.wikipedia.org/wiki/GIO_(software) */
user_pref("network.gio.supported-protocols", ""); // [HIDDEN PREF]

/* [SECTION 0800]: LOCATION BAR / SEARCH BAR / SUGGESTIONS / HISTORY / FORMS
Change 0850 and above to suit for privacy vs convenience and functionality.
Consider your environment (no unwanted eyeballs), your device (restricted access),
your device's unattended state (locked, encrypted, forensic hardened). Likewise,
you may want to check the items cleared on shutdown in section 2800.
[1] https://xkcd.com/538/
*/
user_pref("_user.js.parrot", "0800 syntax error: the parrot's ceased to be!");
/* 0801: disable location bar using search
* Don't leak URL typos to a search engine, give an error message instead
* Examples: "secretplace,com", "secretplace/com", "secretplace com", "secret place.com"
* [NOTE] This does not affect explicit user action such as using search buttons in the
* dropdown, or using keyword search shortcuts you configure in options (e.g. "d" for DuckDuckGo)
* [SETUP-CHROME] If you don't, or rarely, type URLs, or you use a default search
* engine that respects privacy, then you probably don't need this */
//user_pref("keyword.enabled", false);
/* 0802: disable location bar domain guessing
* domain guessing intercepts DNS "hostname not found errors" and resends a
* request (e.g. by adding www or .com). This is inconsistent use (e.g. FQDNs), does not work
* via Proxy Servers (different error), is a flawed use of DNS (TLDs: why treat .com
* as the 411 for DNS errors?), privacy issues (why connect to sites you didn't
* intend to), can leak sensitive data (e.g. query strings: e.g. Princeton attack),
* and is a security risk (e.g. common typos & malicious sites set up to exploit this) */
user_pref("browser.fixup.alternate.enabled", false);
/* 0803: display all parts of the url in the location bar */
user_pref("browser.urlbar.trimURLs", false);
/* 0805: disable coloring of visited links - CSS history leak
* [SETUP-HARDEN] Bulk rapid history sniffing was mitigated in 2010 [1][2]. Slower and more expensive
* redraw timing attacks were largely mitigated in FF77+ [3]. Using RFP (4501) further hampers timing
* attacks. Don't forget clearing history on close (2803). However, social engineering [2#limits][4][5]
* and advanced targeted timing attacks could still produce usable results
* [1] https://developer.mozilla.org/docs/Web/CSS/Privacy_and_the_:visited_selector
* [2] https://dbaron.org/mozilla/visited-privacy
* [3] https://bugzilla.mozilla.org/1632765
* [4] https://earthlng.github.io/testpages/visited_links.html (see github wiki APPENDIX A on how to use)
* [5] https://lcamtuf.blogspot.com/2016/08/css-mix-blend-mode-is-bad-for-keeping.html */
// user_pref("layout.css.visited_links_enabled", false);
/* 0807: disable live search suggestions
* [NOTE] Both must be true for the location bar to work
* [SETUP-CHROME] Change these if you trust and use a privacy respecting search engine
* [SETTING] Search>Provide search suggestions | Show search suggestions in address bar results */
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.urlbar.suggest.searches", false);
/* 0810: disable location bar making speculative connections [FF56+]
* [1] https://bugzilla.mozilla.org/1348275 */
user_pref("browser.urlbar.speculativeConnect.enabled", false);
/* 0811: disable location bar leaking single words to a DNS provider **after searching** [FF78+]
* 0=never resolve single words, 1=heuristic (default), 2=always resolve
* [NOTE] For FF78 value 1 and 2 are the same and always resolve but that will change in future versions
* [1] https://bugzilla.mozilla.org/1642623 */
user_pref("browser.urlbar.dnsResolveSingleWordsAfterSearch", 0);
/* 0850a: disable location bar suggestion types
* [SETTING] Privacy & Security>Address Bar>When using the address bar, suggest */
user_pref("browser.urlbar.suggest.history", false);
user_pref("browser.urlbar.suggest.bookmark", false);
user_pref("browser.urlbar.suggest.openpage", false);
user_pref("browser.urlbar.suggest.topsites", false); // [FF78+]
/* 0850b: disable tab-to-search [FF85+]
* Alternatively, you can exclude on a per-engine basis by unchecking them in Options>Search
* [SETTING] Privacy & Security>Address Bar>When using the address bar, suggest>Search engines */
// user_pref("browser.urlbar.suggest.engines", false);
/* 0850c: disable location bar dropdown
* This value controls the total number of entries to appear in the location bar dropdown */
// user_pref("browser.urlbar.maxRichResults", 0);
/* 0850d: disable location bar autofill
* [1] https://support.mozilla.org/kb/address-bar-autocomplete-firefox#w_url-autocomplete */
// user_pref("browser.urlbar.autoFill", false);
/* 0860: disable search and form history
* [SETUP-WEB] Be aware that autocomplete form data can be read by third parties [1][2]
* [NOTE] We also clear formdata on exit (2803)
* [SETTING] Privacy & Security>History>Custom Settings>Remember search and form history
* [1] https://blog.mindedsecurity.com/2011/10/autocompleteagain.html
* [2] https://bugzilla.mozilla.org/381681 */
user_pref("browser.formfill.enable", false);
/* 0862: disable browsing and download history
* [NOTE] We also clear history and downloads on exit (2803)
* [SETTING] Privacy & Security>History>Custom Settings>Remember browsing and download history */
// user_pref("places.history.enabled", false);
/* 0870: disable Windows jumplist [WINDOWS] */
user_pref("browser.taskbar.lists.enabled", false);
user_pref("browser.taskbar.lists.frequent.enabled", false);
user_pref("browser.taskbar.lists.recent.enabled", false);
user_pref("browser.taskbar.lists.tasks.enabled", false);
/* 0871: disable Windows taskbar preview [WINDOWS] */
// user_pref("browser.taskbar.previews.enable", false); // [DEFAULT: false]

/* [SECTION 0900]: PASSWORDS */
user_pref("_user.js.parrot", "0900 syntax error: the parrot's expired!");
/* 0901: disable saving passwords
 * [NOTE] This does not clear any passwords already saved
 * [SETTING] Privacy & Security>Logins and Passwords>Ask to save logins and passwords for websites */
user_pref("signon.rememberSignons", false);
/* 0902: use a primary password
* There are no preferences for this. It is all handled internally
* [SETTING] Privacy & Security>Logins and Passwords>Use a Primary Password
* [1] https://support.mozilla.org/kb/use-primary-password-protect-stored-logins-and-pas */
/* 0903: set how often Firefox should ask for the primary password
 * 0=the first time (default), 1=every time it's needed, 2=every n minutes (0904) */
user_pref("security.ask_for_password", 2);
/* 0904: set how often in minutes Firefox should ask for the primary password (0903) */
user_pref("security.password_lifetime", 5); // [DEFAULT: 30]
/* 0905: disable auto-filling username & password form fields
* can leak in cross-site forms *and* be spoofed
* [NOTE] Username & password is still available when you enter the field
* [SETTING] Privacy & Security>Logins and Passwords>Autofill logins and passwords
* [1] https://freedom-to-tinker.com/2017/12/27/no-boundaries-for-user-identities-web-trackers-exploit-browser-login-managers/ */
user_pref("signon.autofillForms", false);
/* 0909: disable formless login capture for Password Manager [FF51+] */
user_pref("signon.formlessCapture.enabled", false);
/* 0912: limit (or disable) HTTP authentication credentials dialogs triggered by sub-resources [FF41+]
* hardens against potential credentials phishing
* 0=don't allow sub-resources to open HTTP authentication credentials dialogs
* 1=don't allow cross-origin sub-resources to open HTTP authentication credentials dialogs
* 2=allow sub-resources to open HTTP authentication credentials dialogs (default) */
user_pref("network.auth.subresource-http-auth-allow", 1);
/* 0913: disable automatic authentication on Microsoft sites [FF91+] [WINDOWS 10+]
 * [SETTING] Privacy & Security>Logins and Passwords>Allow Windows single sign-on for...
 * [1] https://support.mozilla.org/kb/windows-sso */
user_pref("network.http.windows-sso.enabled", false);

/* [SECTION 1000]: CACHE / SESSION (RE)STORE / FAVICONS
Cache tracking/fingerprinting techniques [1][2][3] require a cache. Disabling disk (1001)
*and* memory (1003) caches is one solution; but that's extreme and fingerprintable. A hardened
Temporary Containers configuration can effectively do the same thing, by isolating every tab [4]

We consider avoiding disk cache (1001) so cache is session/memory only (like Private Browsing
mode), and isolating cache to first party (4001) is sufficient and a good balance between
risk and performance. ETAGs can also be neutralized by modifying response headers [5], and
you can clear the cache manually or on a regular basis with an extension

[1] https://en.wikipedia.org/wiki/HTTP_ETag#Tracking_using_ETags
[2] https://robertheaton.com/2014/01/20/cookieless-user-tracking-for-douchebags/
[3] https://www.grepular.com/Preventing_Web_Tracking_via_the_Browser_Cache
[4] https://medium.com/@stoically/enhance-your-privacy-in-firefox-with-temporary-containers-33925cd6cd21
[5] https://github.com/arkenfox/user.js/wiki/4.2.4-Header-Editor
*/
user_pref("_user.js.parrot", "1000 syntax error: the parrot's gone to meet 'is maker!");
/** CACHE */
/* 1001: disable disk cache
* [SETUP-PERF] If you think disk cache may help (heavy tab user, high-res video),
* or you use a hardened Temporary Containers, then feel free to override this
* [NOTE] We also clear cache on exit (2803) */
user_pref("browser.cache.disk.enable", false);
/* 1003: disable memory cache
* capacity: -1=determine dynamically (default), 0=none, n=memory capacity in kibibytes */
// user_pref("browser.cache.memory.enable", false);
// user_pref("browser.cache.memory.capacity", 0);
/* 1006: disable permissions manager from writing to disk [RESTART]
* [NOTE] This means any permission changes are session only
* [1] https://bugzilla.mozilla.org/967812 */
  // user_pref("permissions.memory_only", true); // [HIDDEN PREF]
/* 1007: disable media cache from writing to disk in Private Browsing
* [NOTE] MSE (Media Source Extensions) are already stored in-memory in PB
* [SETUP-WEB] ESR78: playback might break on subsequent loading (1650281) */
user_pref("browser.privatebrowsing.forceMediaMemoryCache", true); // [FF75+]
user_pref("media.memory_cache_max_size", 65536);

/* SESSIONS & SESSION RESTORE */
/* 1020: exclude "Undo Closed Tabs" in Session Restore */
// user_pref("browser.sessionstore.max_tabs_undo", 0);
/* 1021: disable storing extra session data [SETUP-CHROME]
* define on which sites to save extra session data such as form content, cookies and POST data
* 0=everywhere, 1=unencrypted sites, 2=nowhere */
user_pref("browser.sessionstore.privacy_level", 2);
/* 1022: disable resuming session from crash */
// user_pref("browser.sessionstore.resume_from_crash", false);
/* 1023: set the minimum interval between session save operations
* Increasing this can help on older machines and some websites, as well as reducing writes [1]
* [SETUP-CHROME] This can affect entries in "Recently Closed Tabs": i.e. the
* longer the interval the more chance a quick tab open/close won't be captured
* [1] https://bugzilla.mozilla.org/1304389 */
user_pref("browser.sessionstore.interval", 30000); // [DEFAULT: 15000]
/* 1024: disable automatic Firefox start and session restore after reboot [FF62+] [WINDOWS]
* [1] https://bugzilla.mozilla.org/603903 */
user_pref("toolkit.winRegisterApplicationRestart", false);

/** FAVICONS */
/* 1030: disable favicons in shortcuts
* URL shortcuts use a cached randomly named .ico file which is stored in your
* profile/shortcutCache directory. The .ico remains after the shortcut is deleted
* If set to false then the shortcuts use a generic Firefox icon */
user_pref("browser.shell.shortcutFavicons", false);
/* 1031: disable favicons in history and bookmarks
* Stored as data blobs in favicons.sqlite, these don't reveal anything that your
* actual history (and bookmarks) already do. Your history is more detailed, so
* control that instead; e.g. disable history, clear history on close, use PB mode
* [NOTE] favicons.sqlite is sanitized on Firefox close, not in-session */
// user_pref("browser.chrome.site_icons", false);

/* [SECTION 1200]: HTTPS (SSL/TLS / OCSP / CERTS / HPKP / CIPHERS)
Your cipher and other settings can be used in server side fingerprinting
[TEST] https://www.ssllabs.com/ssltest/viewMyClient.html
[TEST] https://browserleaks.com/ssl
[TEST] https://ja3er.com/
[1] https://www.securityartwork.es/2017/02/02/tls-client-fingerprinting-with-bro/
*/
user_pref("_user.js.parrot", "1200 syntax error: the parrot's a stiff!");
/** SSL (Secure Sockets Layer) / TLS (Transport Layer Security) */
/* 1201: require safe negotiation
* Blocks connections (SSL_ERROR_UNSAFE_NEGOTIATION) to servers that don't support RFC 5746 [2]
* as they're potentially vulnerable to a MiTM attack [3]. A server without RFC 5746 can be
* safe from the attack if it disables renegotiations but the problem is that the browser can't
* know that. Setting this pref to true is the only way for the browser to ensure there will be
* no unsafe renegotiations on the channel between the browser and the server.
* [STATS] SSL Labs (July 2021) reports over 99% of sites have secure renegotiation [4]
* [1] https://wiki.mozilla.org/Security:Renegotiation
* [2] https://tools.ietf.org/html/rfc5746
* [3] https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2009-3555
* [4] https://www.ssllabs.com/ssl-pulse/ */
user_pref("security.ssl.require_safe_negotiation", true);
/* 1202: control TLS versions with min and max
* 1=TLS 1.0, 2=TLS 1.1, 3=TLS 1.2, 4=TLS 1.3
* [WARNING] Leave these at default, otherwise you alter your TLS fingerprint
* [1] https://www.ssllabs.com/ssl-pulse/ */
// user_pref("security.tls.version.min", 3); // [DEFAULT: 3]
// user_pref("security.tls.version.max", 4);
/* 1203: enforce TLS 1.0 and 1.1 downgrades as session only */
user_pref("security.tls.version.enable-deprecated", false); // [DEFAULT: false]
/* 1204: disable SSL session tracking [FF36+]
* SSL Session IDs are unique and last up to 24hrs in Firefox (or longer with prolongation attacks)
* [NOTE] These are not used in PB mode. In normal windows they are isolated when using FPI (4001)
* and/or containers. In FF85+ they are isolated by default (privacy.partition.network_state)
* [WARNING] There are perf and passive fingerprinting costs, for little to no gain. Preventing
* tracking via this method does not address IPs, nor handle any sanitizing of current identifiers
* [1] https://tools.ietf.org/html/rfc5077
* [2] https://bugzilla.mozilla.org/967977
* [3] https://arxiv.org/abs/1810.07304 */
// user_pref("security.ssl.disable_session_identifiers", true); // [HIDDEN PREF]
/* 1206: disable TLS1.3 0-RTT (round-trip time) [FF51+]
* [1] https://github.com/tlswg/tls13-spec/issues/1001
* [2] https://blog.cloudflare.com/tls-1-3-overview-and-q-and-a/ */
user_pref("security.tls.enable_0rtt_data", false);

/** OCSP (Online Certificate Status Protocol)
[1] https://scotthelme.co.uk/revocation-is-broken/
[2] https://blog.mozilla.org/security/2013/07/29/ocsp-stapling-in-firefox/
*/
/* 1211: control when to use OCSP fetching (to confirm current validity of certificates)
* 0=disabled, 1=enabled (default), 2=enabled for EV certificates only
* OCSP (non-stapled) leaks information about the sites you visit to the CA (cert authority)
* It's a trade-off between security (checking) and privacy (leaking info to the CA)
* [NOTE] This pref only controls OCSP fetching and does not affect OCSP stapling
* [1] https://en.wikipedia.org/wiki/Ocsp */
user_pref("security.OCSP.enabled", 1);
/* 1212: set OCSP fetch failures (non-stapled, see 1211) to hard-fail [SETUP-WEB]
* When a CA cannot be reached to validate a cert, Firefox just continues the connection (=soft-fail)
* Setting this pref to true tells Firefox to instead terminate the connection (=hard-fail)
* It is pointless to soft-fail when an OCSP fetch fails: you cannot confirm a cert is still valid (it
* could have been revoked) and/or you could be under attack (e.g. malicious blocking of OCSP servers)
* [1] https://blog.mozilla.org/security/2013/07/29/ocsp-stapling-in-firefox/
* [2] https://www.imperialviolet.org/2014/04/19/revchecking.html */
user_pref("security.OCSP.require", true);

/** CERTS / HPKP (HTTP Public Key Pinning) */
/* 1220: disable or limit SHA-1 certificates
* 0 = allow all
* 1 = block all
* 3 = only allow locally-added roots (e.g. anti-virus) (default)
* 4 = only allow locally-added roots or for certs in 2015 and earlier
* [SETUP-CHROME] If you have problems, update your software: SHA-1 is obsolete
* [1] https://blog.mozilla.org/security/2016/10/18/phasing-out-sha-1-on-the-public-web/ */
user_pref("security.pki.sha1_enforcement_level", 1);
/* 1221: disable Windows 8.1's Microsoft Family Safety cert [FF50+] [WINDOWS]
* 0=disable detecting Family Safety mode and importing the root
* 1=only attempt to detect Family Safety mode (don't import the root)
* 2=detect Family Safety mode and import the root
* [1] https://gitlab.torproject.org/tpo/applications/tor-browser/-/issues/21686 */
user_pref("security.family_safety.mode", 0);
/* 1222: disable intermediate certificate caching (fingerprinting attack vector) [FF41+] [RESTART]
* [NOTE] This affects login/cert/key dbs. The effect is all credentials are session-only.
* Saved logins and passwords are not available. Reset the pref and restart to return them.
* [1] https://shiftordie.de/blog/2017/02/21/fingerprinting-firefox-users-with-cached-intermediate-ca-certificates-fiprinca/ */
// user_pref("security.nocertdb", true); // [HIDDEN PREF]
/* 1223: enable strict pinning
* PKP (Public Key Pinning) 0=disabled 1=allow user MiTM (such as your antivirus), 2=strict
* [SETUP-WEB] If you rely on an AV (antivirus) to protect your web browsing
* by inspecting ALL your web traffic, then leave at current default=1
* [1] https://gitlab.torproject.org/tpo/applications/tor-browser/-/issues/16206 */
user_pref("security.cert_pinning.enforcement_level", 2);
/* 1224: enable CRLite [FF73+]
* In FF84+ it covers valid certs and in mode 2 doesn't fall back to OCSP
* [1] https://bugzilla.mozilla.org/buglist.cgi?bug_id=1429800,1670985
* [2] https://blog.mozilla.org/security/tag/crlite/ */
user_pref("security.remote_settings.crlite_filters.enabled", true);
user_pref("security.pki.crlite_mode", 2);

/** MIXED CONTENT */
/* 1240: enforce no insecure active content on https pages
* [1] https://gitlab.torproject.org/tpo/applications/tor-browser/-/issues/21323 */
user_pref("security.mixed_content.block_active_content", true); // [DEFAULT: true]
/* 1241: disable insecure passive content (such as images) on https pages [SETUP-WEB] */
user_pref("security.mixed_content.block_display_content", true);
/* 1244: enable HTTPS-Only mode [FF76+]
* When "https_only_mode" (all windows) is true, "https_only_mode_pbm" (private windows only) is ignored
* [SETTING] to add site exceptions: Padlock>HTTPS-Only mode>On/Off/Off temporarily
* [SETTING] Privacy & Security>HTTPS-Only Mode
* [TEST] http://example.com [upgrade]
* [TEST] http://neverssl.org/ [no upgrade]
* [1] https://bugzilla.mozilla.org/1613063 [META] */
user_pref("dom.security.https_only_mode", true); // [FF76+]
// user_pref("dom.security.https_only_mode_pbm", true); // [FF80+]
/* 1245: enable HTTPS-Only mode for local resources [FF77+] */
// user_pref("dom.security.https_only_mode.upgrade_local", true);
/* 1246: disable HTTP background requests [FF82+]
* When attempting to upgrade, if the server doesn't respond within 3 seconds,
* Firefox sends HTTP requests in order to check if the server supports HTTPS or not
* This is done to avoid waiting for a timeout which takes 90 seconds
* [1] https://bugzilla.mozilla.org/buglist.cgi?bug_id=1642387,1660945 */
user_pref("dom.security.https_only_mode_send_http_background_request", false);
/* 1247: treat .onion as a secure context [FF60+] [TOR]
* [NOTE] Firefox cannot access .onion sites by default: it is strongly recommended you just use Tor Browser
* [1] https://bugzilla.mozilla.org/1382359 */
// user_pref("dom.securecontext.whitelist_onions", true);

/** CIPHERS
[WARNING] DO NOT USE: see the section 1200 intro
These are the ciphers listed under "Cipher Suites" [1] that are either still using SHA-1 and CBC,
and/or are missing Perfect Forward Secrecy [3] and/or have other weaknesses like key sizes of 128
[1] https://browserleaks.com/ssl
[2] https://en.wikipedia.org/wiki/Key_size
[3] https://en.wikipedia.org/wiki/Forward_secrecy
*/
/* 1261: disable 3DES (effective key size < 128 and no PFS)
* [1] https://en.wikipedia.org/wiki/3des#Security
* [2] https://en.wikipedia.org/wiki/Meet-in-the-middle_attack
* [3] https://www-archive.mozilla.org/projects/security/pki/nss/ssl/fips-ssl-ciphersuites.html */
// user_pref("security.ssl3.rsa_des_ede3_sha", false);
/* 1264: disable the remaining non-modern cipher suites as of FF78 (in order of preferred by FF) */
// user_pref("security.ssl3.ecdhe_ecdsa_aes_256_sha", false);
// user_pref("security.ssl3.ecdhe_ecdsa_aes_128_sha", false);
// user_pref("security.ssl3.ecdhe_rsa_aes_128_sha", false);
// user_pref("security.ssl3.ecdhe_rsa_aes_256_sha", false);
// user_pref("security.ssl3.rsa_aes_128_gcm_sha256", false); // no PFS
// user_pref("security.ssl3.rsa_aes_256_gcm_sha384", false); // no PFS
// user_pref("security.ssl3.rsa_aes_128_sha", false); // no PFS
// user_pref("security.ssl3.rsa_aes_256_sha", false); // no PFS

/** UI (User Interface) */
/* 1270: display warning on the padlock for "broken security" (if 1201 is false)
 * Bug: warning padlock not indicated for subresources on a secure page! [2]
 * [1] https://wiki.mozilla.org/Security:Renegotiation
 * [2] https://bugzilla.mozilla.org/1353705 */
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);
/* 1271: control "Add Security Exception" dialog on SSL warnings
 * 0=do neither 1=pre-populate url 2=pre-populate url + pre-fetch cert (default)
 * [1] https://github.com/pyllyukko/user.js/issues/210 */
user_pref("browser.ssl_override_behavior", 1);
/* 1272: display advanced information on Insecure Connection warning pages
 * only works when it's possible to add an exception
 * i.e. it doesn't work for HSTS discrepancies (https://subdomain.preloaded-hsts.badssl.com/)
 * [TEST] https://expired.badssl.com/ */
user_pref("browser.xul.error_pages.expert_bad_cert", true);
/* 1273: display "insecure" icon and "Not Secure" text on HTTP sites */
   // user_pref("security.insecure_connection_icon.enabled", true); // [FF59+] [DEFAULT: true]
user_pref("security.insecure_connection_text.enabled", true); // [FF60+]

/* [SECTION 1400]: FONTS */
user_pref("_user.js.parrot", "1400 syntax error: the parrot's bereft of life!");
/* 1401: disable rendering of SVG OpenType fonts
 * [1] https://wiki.mozilla.org/SVGOpenTypeFonts - iSECPartnersReport recommends to disable this */
user_pref("gfx.font_rendering.opentype_svg.enabled", false);
/* 1402: disable graphite
 * Graphite has had many critical security issues in the past [1]
 * [1] https://www.mozilla.org/security/advisories/mfsa2017-15/#CVE-2017-7778
 * [2] https://en.wikipedia.org/wiki/Graphite_(SIL) */
user_pref("gfx.font_rendering.graphite.enabled", false);
/* 1403: limit font visibility (Windows, Mac, some Linux) [FF79+]
 * [NOTE] IN FF8)+ RFP ignores the pref and uses value 1
 * Uses hardcoded lists with two parts: kBaseFonts + kLangPackFonts [1], bundled fonts are auto-allowed
 * 1=only base system fonts, 2=also fonts from optional language packs, 3=also user-installed fonts
 * [1] https://searchfox.org/mozilla-central/search?path=StandardFonts*.inc */
   // user_pref("layout.css.font-visibility.level", 1);
/* 1404: disable icon fonts (glyphs) and local fallback rendering
 * [1] https://bugzilla.mozilla.org/789788
 * [2] https://gitlab.torproject.org/legacy/trac/-/issues/8455 */
   // user_pref("gfx.downloadable_fonts.enabled", false); // [FF41+]
   // user_pref("gfx.downloadable_fonts.fallback_delay", -1);

/* [SECTION 1600]: HEADERS / REFERERS
   Only **cross domain** referers need controlling: leave 1601, 1602, 1605 and 1606 alone
   Expect some breakage: Use an extension if you need precise control
   ---
                  full URI: https://example.com:8888/foo/bar.html?id=1234
     scheme+host+port+path: https://example.com:8888/foo/bar.html
          scheme+host+port: https://example.com:8888
   ---
   [1] https://feeding.cloud.geek.nz/posts/tweaking-referrer-for-privacy-in-firefox/
*/
user_pref("_user.js.parrot", "1600 syntax error: the parrot rests in peace!");
/* 1601: ALL: control when images/links send a referer
 * 0=never, 1=send only when links are clicked, 2=for links and images (default) */
   // user_pref("network.http.sendRefererHeader", 2);
/* 1602: ALL: control the amount of information to send
 * 0=send full URI (default), 1=scheme+host+port+path, 2=scheme+host+port */
   // user_pref("network.http.referer.trimmingPolicy", 0);
/* 1603: CROSS ORIGIN: control when to send a referer
 * 0=always (default), 1=only if base domains match, 2=only if hosts match
 * [SETUP-WEB] Known to cause issues with older modems/routers and some sites e.g vimeo, icloud, instagram */
user_pref("network.http.referer.XOriginPolicy", 2);
/* 1604: CROSS ORIGIN: control the amount of information to send [FF52+]
 * 0=send full URI (default), 1=scheme+host+port+path, 2=scheme+host+port */
user_pref("network.http.referer.XOriginTrimmingPolicy", 2);
/* 1605: ALL: enforce no spoofing of referer
 * Spoofing effectively disables the anti-CSRF (Cross-Site Request Forgery)
 * protections that some sites may rely on */
user_pref("network.http.referer.spoofSource", false); // [DEFAULT: false]
/* 1606: ALL: set the default Referrer Policy [FF59+]
 * 0=no-referer, 1=same-origin, 2=strict-origin-when-cross-origin, 3=no-referrer-when-downgrade
 * [NOTE] This is only a default, it can be overridden by a site-controlled Referrer Policy
 * [1] https://www.w3.org/TR/referrer-policy/
 * [2] https://developer.mozilla.org/docs/Web/HTTP/Headers/Referrer-Policy
 * [3] https://blog.mozilla.org/security/2018/01/31/preventing-data-leaks-by-stripping-path-information-in-http-referrers/
 * [4] https://blog.mozilla.org/security/2021/03/22/firefox-87-trims-http-referrers-by-default-to-protect-user-privacy/ */
   // user_pref("network.http.referer.defaultPolicy", 2); // [DEFAULT: 2 FF87+]
   // user_pref("network.http.referer.defaultPolicy.pbmode", 2); // [DEFAULT: 2]
/* 1607: hide (not spoof) referrer when leaving a .onion domain [FF54+] [TOR]
 * [NOTE] Firefox cannot access .onion sites by default: it is strongly recommended you just use Tor Browser
 * [1] https://bugzilla.mozilla.org/1305144 */
   // user_pref("network.http.referer.hideOnionSource", true);
/* 1610: ALL: enable the DNT (Do Not Track) HTTP header
 * [NOTE] DNT is enforced with Enhanced Tracking Protection regardless of this pref
 * [SETTING] Privacy & Security>Enhanced Tracking Protection>Send websites a "Do Not Track" signal... */
user_pref("privacy.donottrackheader.enabled", true);

/* [SECTION 1700]: CONTAINERS
   If you want to really leverage containers, we recommend Temporary Containers [2].
   Read the article by the extension author [3], and check out the github wiki/repo [4].
   [1] https://wiki.mozilla.org/Security/Contextual_Identity_Project/Containers
   [2] https://addons.mozilla.org/firefox/addon/temporary-containers/
   [3] https://medium.com/@stoically/enhance-your-privacy-in-firefox-with-temporary-containers-33925cd6cd21
   [4] https://github.com/stoically/temporary-containers/wiki
*/
user_pref("_user.js.parrot", "1700 syntax error: the parrot's bit the dust!");
/* 1702: enable Container Tabs and it's UI setting [FF50+]
 * [SETTING] General>Tabs>Enable Container Tabs */
user_pref("privacy.userContext.enabled", true);
user_pref("privacy.userContext.ui.enabled", true);
/* 1703: set behaviour on "+ Tab" button to display container menu on left click [FF74+]
 * [NOTE] The menu is always shown on long press and right click
 * [SETTING] General>Tabs>Enable Container Tabs>Settings>Select a container for each new tab */
   // user_pref("privacy.userContext.newTabContainerOnLeftClick.enabled", true);

/* [SECTION 2000]: PLUGINS / MEDIA / WEBRTC */
user_pref("_user.js.parrot", "2000 syntax error: the parrot's snuffed it!");
/* 2001: disable WebRTC (Web Real-Time Communication)
 * [SETUP-WEB] WebRTC can leak your IP address from behind your VPN, but if this is not
 * in your threat model, and you want Real-Time Communication, this is the pref for you
 * [1] https://www.privacytools.io/#webrtc */
user_pref("media.peerconnection.enabled", false);
/* 2002: limit WebRTC IP leaks if using WebRTC
 * In FF70+ these settings match Mode 4 (Mode 3 in older versions) [3]
 * [TEST] https://browserleaks.com/webrtc
 * [1] https://bugzilla.mozilla.org/buglist.cgi?bug_id=1189041,1297416,1452713
 * [2] https://wiki.mozilla.org/Media/WebRTC/Privacy
 * [3] https://tools.ietf.org/html/draft-ietf-rtcweb-ip-handling-12#section-5.2 */
user_pref("media.peerconnection.ice.default_address_only", true);
user_pref("media.peerconnection.ice.no_host", true); // [FF51+]
user_pref("media.peerconnection.ice.proxy_only_if_behind_proxy", true); // [FF70+]
/* 2003: disable screensharing */
user_pref("media.getusermedia.screensharing.enabled", false);
user_pref("media.getusermedia.browser.enabled", false);
user_pref("media.getusermedia.audiocapture.enabled", false);
/* 2020: disable GMP (Gecko Media Plugins)
 * [1] https://wiki.mozilla.org/GeckoMediaPlugins */
   // user_pref("media.gmp-provider.enabled", false);
/* 2021: disable widevine CDM (Content Decryption Module)
 * [NOTE] This is covered by the EME master switch (2022) */
   // user_pref("media.gmp-widevinecdm.enabled", false);
/* 2022: disable all DRM content (EME: Encryption Media Extension)
 * [SETUP-WEB] e.g. Netflix, Amazon Prime, Hulu, HBO, Disney+, Showtime, Starz, DirectTV
 * [SETTING] General>DRM Content>Play DRM-controlled content
 * [TEST] https://bitmovin.com/demos/drm
 * [1] https://www.eff.org/deeplinks/2017/10/drms-dead-canary-how-we-just-lost-web-what-we-learned-it-and-what-we-need-do-next */
user_pref("media.eme.enabled", false);
/* 2030: disable autoplay of HTML5 media [FF63+]
 * 0=Allow all, 1=Block non-muted media (default), 5=Block all
 * [NOTE] You can set exceptions under site permissions
 * [SETTING] Privacy & Security>Permissions>Autoplay>Settings>Default for all websites */
   // user_pref("media.autoplay.default", 5);
/* 2031: disable autoplay of HTML5 media if you interacted with the site [FF78+]
 * 0=sticky (default), 1=transient, 2=user
 * Firefox's Autoplay Policy Documentation [PDF] is linked below via SUMO
 * [NOTE] If you have trouble with some video sites, then add an exception (2030)
 * [1] https://support.mozilla.org/questions/1293231 */
user_pref("media.autoplay.blocking_policy", 2);

/* [SECTION 2300]: WEB WORKERS
   A worker is a JS "background task" running in a global context, i.e. it is different from
   the current window. Workers can spawn new workers (must be the same origin & scheme),
   including service and shared workers. Shared workers can be utilized by multiple scripts and
   communicate between browsing contexts (windows/tabs/iframes) and can even control your cache.

   [1]    Web Workers: https://developer.mozilla.org/docs/Web/API/Web_Workers_API
   [2]         Worker: https://developer.mozilla.org/docs/Web/API/Worker
   [3] Service Worker: https://developer.mozilla.org/docs/Web/API/Service_Worker_API
   [4]   SharedWorker: https://developer.mozilla.org/docs/Web/API/SharedWorker
   [5]   ChromeWorker: https://developer.mozilla.org/docs/Web/API/ChromeWorker
   [6]  Notifications: https://support.mozilla.org/questions/1165867#answer-981820
*/
user_pref("_user.js.parrot", "2300 syntax error: the parrot's off the twig!");
/* 2302: disable service workers [FF32, FF44-compat]
 * Service workers essentially act as proxy servers that sit between web apps, and the
 * browser and network, are event driven, and can control the web page/site it is associated
 * with, intercepting and modifying navigation and resource requests, and caching resources.
 * [NOTE] Service workers require HTTPS, have no DOM access, and are not supported in PB mode [1]
 * [SETUP-WEB] Disabling service workers will break some sites. This pref is required true for
 * service worker notifications (2304), push notifications (disabled, 2305) and service worker
 * cache (2740). If you enable this pref, then check those settings as well
 * [1] https://bugzilla.mozilla.org/show_bug.cgi?id=1320796#c7 */
user_pref("dom.serviceWorkers.enabled", false);
/* 2304: disable Web Notifications
 * [NOTE] Web Notifications can also use service workers (2302) and are behind a prompt (7002)
 * [1] https://developer.mozilla.org/docs/Web/API/Notifications_API */
   // user_pref("dom.webnotifications.enabled", false); // [FF22+]
   // user_pref("dom.webnotifications.serviceworker.enabled", false); // [FF44+]
/* 2305: disable Push Notifications [FF44+]
 * Push is an API that allows websites to send you (subscribed) messages even when the site
 * isn't loaded, by pushing messages to your userAgentID through Mozilla's Push Server
 * [NOTE] Push requires service workers (2302) to subscribe to and display, and is behind
 * a prompt (7002). Disabling service workers alone doesn't stop Firefox polling the
 * Mozilla Push Server. To remove all subscriptions, reset your userAgentID.
 * [1] https://support.mozilla.org/kb/push-notifications-firefox
 * [2] https://developer.mozilla.org/docs/Web/API/Push_API */
user_pref("dom.push.enabled", false);
   // user_pref("dom.push.userAgentID", "");

/* [SECTION 2400]: DOM (DOCUMENT OBJECT MODEL) & JAVASCRIPT */
user_pref("_user.js.parrot", "2400 syntax error: the parrot's kicked the bucket!");
/* 2401: disable website control over browser right-click context menu
 * [NOTE] Shift-Right-Click will always bring up the browser right-click context menu */
   // user_pref("dom.event.contextmenu.enabled", false);
/* 2402: disable website access to clipboard events/content [SETUP-HARDEN]
 * [NOTE] This will break some sites' functionality e.g. Outlook, Twitter, Facebook, Wordpress
 * This applies to onCut/onCopy/onPaste events - i.e. it requires interaction with the website
 * [WARNING] In FF88 or lower, with clipboardevents enabled, if both "middlemouse.paste" and
 * "general.autoScroll" are true (at least one is default false) then the clipboard can leak [1]
 * [1] https://bugzilla.mozilla.org/1528289 */
   // user_pref("dom.event.clipboardevents.enabled", false);
/* 2403: disable clipboard commands (cut/copy) from "non-privileged" content [FF41+]
 * this disables document.execCommand("cut"/"copy") to protect your clipboard
 * [1] https://bugzilla.mozilla.org/1170911 */
user_pref("dom.allow_cut_copy", false);
/* 2404: disable "Confirm you want to leave" dialog on page close
 * Does not prevent JS leaks of the page close event
 * [1] https://developer.mozilla.org/docs/Web/Events/beforeunload */
user_pref("dom.disable_beforeunload", true);
/* 2405: prevent scripts from moving and resizing open windows */
user_pref("dom.disable_window_move_resize", true);
/* 2406: block popup windows
 * [SETTING] Privacy & Security>Permissions>Block pop-up windows */
user_pref("dom.disable_open_during_load", true);
/* 2407: limit events that can cause a popup [SETUP-WEB] */
user_pref("dom.popup_allowed_events", "click dblclick mousedown pointerdown");
/* 2408: enable (limited but sufficient) window.opener protection [FF65+]
 * Makes rel=noopener implicit for target=_blank in anchor and area elements when no rel attribute is set */
user_pref("dom.targetBlankNoOpener.enabled", true); // [DEFAULT: true FF79+]
/* 2414: disable shaking the screen */
user_pref("dom.vibrator.enabled", false);
/* 2420: disable asm.js [FF22+] [SETUP-PERF]
 * [1] http://asmjs.org/
 * [2] https://cve.mitre.org/cgi-bin/cvekey.cgi?keyword=asm.js
 * [3] https://rh0dev.github.io/blog/2017/the-return-of-the-jit/ */
user_pref("javascript.options.asmjs", false);
/* 2421: disable Ion and baseline JIT to harden against JS exploits [SETUP-HARDEN]
 * [NOTE] In FF75+, when **both** Ion and JIT are disabled, **and** the new
 * hidden pref is enabled, then Ion can still be used by extensions (1599226)
 * [WARNING] Disabling Ion/JIT can cause some site issues and performance loss
 * [1] https://cve.mitre.org/cgi-bin/cvekey.cgi?keyword=Firefox+JIT */
   // user_pref("javascript.options.ion", false);
   // user_pref("javascript.options.baselinejit", false);
   // user_pref("javascript.options.jit_trustedprincipals", true); // [FF75+] [HIDDEN PREF]
/* 2422: disable WebAssembly [FF52+]
 * Vulnerabilities have increasingly been found, including those known and fixed
 * in native programs years ago [2]. WASM has powerful low-level access, making
 * certain attacks (brute-force) and vulnerabilities more possible
 * [STATS] ~0.2% of websites, about half of which are for crytopmining / malvertising [2][3]
 * [1] https://developer.mozilla.org/docs/WebAssembly
 * [2] https://spectrum.ieee.org/tech-talk/telecom/security/more-worries-over-the-security-of-web-assembly
 * [3] https://www.zdnet.com/article/half-of-the-websites-using-webassembly-use-it-for-malicious-purposes */
user_pref("javascript.options.wasm", false);

/* [SECTION 2500]: HARDWARE FINGERPRINTING */
user_pref("_user.js.parrot", "2500 syntax error: the parrot's shuffled off 'is mortal coil!");
/* 2508: disable hardware acceleration [SETUP-HARDEN]
 * [WARNING] Affects rendering and performance
 * [SETTING] General>Performance>Custom>Use hardware acceleration when available
 * [1] https://wiki.mozilla.org/Platform/GFX/HardwareAcceleration */
   // user_pref("gfx.direct2d.disabled", true); // [WINDOWS]
   // user_pref("layers.acceleration.disabled", true);
/* 2517: disable Media Capabilities API [FF63+]
 * [WARNING] The API state is fingerprintable. Disabling may affect performance
 * [1] https://github.com/WICG/media-capabilities
 * [2] https://wicg.github.io/media-capabilities/#security-privacy-considerations */
   // user_pref("media.media-capabilities.enabled", false);
/* 2522: disable/limit WebGL (Web Graphics Library)
 * [SETUP-WEB] When disabled, will break some websites. When enabled, provides high entropy,
 * especially with readPixels(). Some of the other entropy is lessened with RFP (4501)
 * [1] https://www.contextis.com/resources/blog/webgl-new-dimension-browser-exploitation/
 * [2] https://security.stackexchange.com/questions/13799/is-webgl-a-security-concern */
user_pref("webgl.disabled", true);
   // user_pref("webgl.enable-webgl2", false);
   // user_pref("webgl.disable-fail-if-major-performance-caveat", true); // [DEFAULT: true FF86+]
/* 2523: enforce no system colors
 * [SETTING] General>Language and Appearance>Fonts and Colors>Colors>Use system colors */
user_pref("browser.display.use_system_colors", false); // [DEFAULT: false]
/* 2524: open links targeting new windows in a new tab instead
 * Stops malicious window sizes and some screen resolution leaks.
 * You can still right-click a link and open in a new window
 * [TEST] https://arkenfox.github.io/TZP/tzp.html#screen
 * [1] https://gitlab.torproject.org/tpo/applications/tor-browser/-/issues/9881 */
user_pref("browser.link.open_newwindow", 3); // 1=most recent window or tab 2=new window, 3=new tab
user_pref("browser.link.open_newwindow.restriction", 0);
/* 2525: enforce non-native widget theme
 * Security: removes/reduces system API calls, e.g. win32k API [1]
 * Fingerprinting: provides a uniform look and feel across platforms [2]
 * [1] https://bugzilla.mozilla.org/1381938
 * [2] https://bugzilla.mozilla.org/1411425 */
user_pref("widget.non-native-theme.enabled", true); // [DEFAULT: true FF89+]

/* [SECTION 2600]: MISCELLANEOUS */
user_pref("_user.js.parrot", "2600 syntax error: the parrot's run down the curtain!");
/* 2601: prevent accessibility services from accessing your browser [RESTART]
 * [SETTING] Privacy & Security>Permissions>Prevent accessibility services from accessing your browser (FF80 or lower)
 * [1] https://support.mozilla.org/kb/accessibility-services */
user_pref("accessibility.force_disabled", 1);
/* 2602: disable sending additional analytics to web servers
 * [1] https://developer.mozilla.org/docs/Web/API/Navigator/sendBeacon */
user_pref("beacon.enabled", false);
/* 2603: remove temp files opened with an external application
 * [1] https://bugzilla.mozilla.org/302433 */
user_pref("browser.helperApps.deleteTempFileOnExit", true);
/* 2604: disable page thumbnail collection */
user_pref("browser.pagethumbnails.capturing_disabled", true); // [HIDDEN PREF]
/* Customize top bar */
user_pref("browser.uiCustomization.state", "{\"placements\":{\"nav-bar\":[\"back-button\",\"forward-button\",\"stop-reload-button\",\"customizableui-special-spring1\",\"urlbar-container\",\"customizableui-special-spring2\",\"downloads-button\"]}");
/* 2606: disable UITour backend so there is no chance that a remote page can use it */
user_pref("browser.uitour.enabled", false);
user_pref("browser.uitour.url", "");
/* 2607: disable various developer tools in browser context
 * [SETTING] Devtools>Advanced Settings>Enable browser chrome and add-on debugging toolboxes
 * [1] https://github.com/pyllyukko/user.js/issues/179#issuecomment-246468676 */
user_pref("devtools.chrome.enabled", false);
/* 2608: reset remote debugging to disabled
 * [1] https://gitlab.torproject.org/tpo/applications/tor-browser/-/issues/16222 */
user_pref("devtools.debugger.remote-enabled", false); // [DEFAULT: false]
/* 2609: disable MathML (Mathematical Markup Language) [FF51+] [SETUP-HARDEN]
 * [TEST] https://arkenfox.github.io/TZP/tzp.html#misc
 * [1] https://bugzilla.mozilla.org/1173199 */
   // user_pref("mathml.disabled", true);
/* 2610: disable in-content SVG (Scalable Vector Graphics) [FF53+]
 * [WARNING] Expect breakage including youtube player controls
 * [1] https://bugzilla.mozilla.org/1216893 */
   // user_pref("svg.disabled", true);
/* 2611: disable middle mouse click opening links from clipboard
 * [1] https://gitlab.torproject.org/tpo/applications/tor-browser/-/issues/10089 */
user_pref("middlemouse.contentLoadURL", false);
/* 2615: disable websites overriding Firefox's keyboard shortcuts [FF58+]