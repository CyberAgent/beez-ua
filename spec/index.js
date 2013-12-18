/**
 * @name index.js<spec/index>
 * @author Kei Funagayama <funagayama_kei@cyberagent.co.jp>
 * copyright (c) Cyberagent Inc.
 * @overview TestCase
 */

define(['index', 'underscore'], function(ua, _){

    var useragents = {
        "Android2.1": [
            'Mozilla/5.0 (Linux; U; Android 2.1-update1; ja-jp; SonyEricssonSO-01B Build/2.0.2.B.0.29) AppleWebKit/530.17 (KHTML, like Gecko) Version/4.0 Mobile Safari/530.17',
        ],
        "Android2.2": [
            'Mozilla/5.0 (Linux; U; Android 2.2.1; ja-jp; Full Android Build/MASTER) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1',
            'Mozilla/5.0 (Linux; U; Android 2.2.1; ja-jp; IS03 Build/S9090) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1',
        ],
        "Android2.3": [
            'Mozilla/5.0 (Linux; U; Android 2.3.3; ja-jp; SC-02C Build/GINGERBREAD) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1',
            'Mozilla/5.0 (Linux; U; Android 2.3.3; ja-jp; INFOBAR A01 Build/S9081) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1',
            'Mozilla/5.0 (Linux; U; Android 2.3.3; ja-jp; 001HT Build/GRI40) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1',
            'Mozilla/5.0 (Linux; U; Android 2.3.3; ja-jp; SonyEricssonX10i Build/3.0.1.G.0.75) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1',
            'Mozilla/5.0 (Linux; U; Android 2.3.3; ja-jp; INFOBAR A01 Build/S9081) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1', // INFOBAR A01
            'Mozilla/5.0 (Linux; U; Android 2.3.4; ja-jp; SBM005SH Build/S4080) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1', // GALAPAGOS 005SH
            'Mozilla/5.0 (Linux; U; Android 2.3.4; ja-jp; SonyEricssonIS11S Build/4.0.1.B.0.112) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1',
            'Mozilla/5.0 (Linux; U; Android 2.3.4; ja-jp; IS05 Build/S9290) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1',
            'Mozilla/5.0 (Linux; U; Android 2.3.5; ja-jp; F-05D Build/F0001) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1',
            'Mozilla/5.0 (Linux; U; Android 2.3.5; ja-jp; T-01D Build/F0001) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1'
        ],
        "Android3.x": [
            'Mozilla/5.0 (Linux; U; Android 3.0.1; ja-jp; MZ604 Build/H.6.2-20) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13',
            'Mozilla/5.0 (Linux; U; Android 3.1; en-us; K1 Build/HMJ37) AppleWebKit/534.13(KHTML, like Gecko) Version/4.0 Safari/534.13',
            'Mozilla/5.0 (Linux; U; Android 3.1; ja-jp; AT100 Build/HMJ37) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13',
            'Mozilla/5.0 (Linux; U; Android 3.1; ja-jp; Sony Tablet S Build/THMAS10000) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13',
            'Mozilla/5.0 (Linux; U; Android 3.2; ja-jp; SC-01D Build/MASTER) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13',
            'Mozilla/5.0 (Linux; U; Android 3.2; ja-jp; AT1S0 Build/HTJ85B) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13',
            'Mozilla/5.0 (Linux; U; Android 3.2; ja-jp; F-01D Build/F0001) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13',
            'Mozilla/5.0 (Linux; U; Android 3.2; ja-jp; Sony Tablet S Build/THMAS11000) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13',
            'Mozilla/5.0 (Linux; U; Android 3.2; ja-jp; A01SH Build/HTJ85B) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Safari/533.1',
            'Mozilla/5.0 (Linux; U; Android 3.2.1; ja-jp; Transformer TF101 Build/HTK75) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13',
            "Mozilla/5.0 (Linux; U; Android 4.1.1; ja-jp; SC-03E Build/JRO03C) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30",
            "Mozilla/5.0 (Linux; Android 4.1.1; SC-03E Build/JRO03C) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166 Mobile Safari/535.19"
        ],
        "Android4.x": [
            'Mozilla/5.0 (Linux; U; Android 4.0.1; ja-jp; Galaxy Nexus Build/ITL41D) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30',
            'Mozilla/5.0 (Linux; U; Android 4.0.3; ja-jp; URBANO PROGRESSO Build/010.0.3000) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30',
            'Mozilla/5.0 (Linux; U; Android 4.0.3; ja-jp; Sony Tablet S Build/TISU0R0110) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Safari/534.30',
            'Mozilla/5.0 (Linux; U; Android 4.0.4; ja-jp; SC-06D Build/IMM76D) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30',
            'Mozilla/5.0 (Linux; U; Android 4.1.1; ja-jp; Galaxy Nexus Build/JRO03H) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30',
            'Mozilla/5.0 (Linux; Android 4.1.1; Nexus 7 Build/JRO03S) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166 Safari/535.19',
        ],
        "IOS4": [
            'Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_0_1 like Mac OS X; ja-jp) AppleWebKit/532.9 (KHTML, like Gecko) Version/4.0.5 Mobile/8A306 Safari/6531.22.7',
            'Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_0_2 like Mac OS X; ja-jp) AppleWebKit/532.9 (KHTML, like Gecko) Version/4.0.5 Mobile/8A400 Safari/6531.22.7',
            'Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_1 like Mac OS X; ja-jp) AppleWebKit/532.9 (KHTML, like Gecko) Version/4.0.5 Mobile/8B117 Safari/6531.22.7',
            'Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_2_1 like Mac OS X; ja-jp) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8C148 Safari/6533.18.5',
            'Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_3 like Mac OS X; ja-jp) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8F190 Safari/6533.18.5',
            'Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_3_1 like Mac OS X; ja-jp) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8G4 Safari/6533.18.5',
            'Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_3_2 like Mac OS X; en-us) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8H7 Safari/6533.18.5',
            'Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_3_3 like Mac OS X; ja-jp) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8J2 Safari/6533.18.5',
            'Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_3_4 like Mac OS X; ja-jp) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8K2 Safari/6533.18.5',
            'Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_3_5 like Mac OS X; ja-jp) AppleWebKit/533.17.9 (KHTML, like Gecko) Mobile/8L1',
        ],
        "IOS5": [
            'Mozilla/5.0 (iPhone; U; CPU iPhone OS 5_0 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Mobile/9A334 Safari/7534.48.3',
            'Mozilla/5.0 (iPhone; CPU iPhone OS 5_0_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Mobile/9A405 Safari/7534.48.3',
            'Mozilla/5.0 (iPhone; CPU iPhone OS 5_1_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9B206 Safari/7534.48.3',
        ],
        "IOS6": [
            'Mozilla/5.0 (iPhone; CPU iPhone OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A403 Safari/8536.25',

        ],
        "IOS7": [
            'Mozilla/5.0 (iPhone; CPU iPhone OS 7_0 like Mac OSX) AppleWebKit/546.10 (KHTML, like Gecko) Version/6.0 Mobile/7E18WD',
            'Mozilla/5.0 (iPhone; CPU iPhone OS 7_0 like Mac OS X) AppleWebKit/537.40 (KHTML, like Gecko) Version/6.0 Mobile/11A4372q Safari/8536.25'

        ],
        "IOS4-ipad": [
            'Mozilla/5.0 (iPad; U; CPU OS 4_2 like Mac OS X; zh-cn) AppleWebKit/533.17.9 (KHTML, like Gecko) Mobile/8C134',
            'Mozilla/5.0 (iPad; U; CPU OS 4_3 like Mac OS X; ja-jp) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8F190 Safari/6533.18.5',
            'Mozilla/5.0 (iPad; U; CPU OS 4_3_1 like Mac OS X; ja-jp) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8G4 Safari/6533.18.5',
            'Mozilla/5.0 (iPad; U; CPU OS 4_3_2 like Mac OS X; ja-jp) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8H7 Safari/6533.18.5',
            'Mozilla/5.0 (iPad; U; CPU OS 4_3_3 like Mac OS X; ja-jp) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8J2 Safari/6533.18.5',
            'Mozilla/5.0 (iPad; U; CPU OS 4_3_4 like Mac OS X; ja-jp) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8K2 Safari/6533.18.5',
            'Mozilla/5.0 (iPad; U; CPU OS 4_3_5 like Mac OS X; ja-jp) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8L1 Safari/6533.18.5',
        ],
        "IOS5-ipad": [
            'Mozilla/5.0 (iPad; CPU OS 5_0_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9A405 Safari/7534.48.3',
            'Mozilla/5.0 (iPad; CPU OS 5_1_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9B206 Safari/7534.48.3',
        ],
        "IOS6-ipad": [
            'Mozilla/5.0 (iPad; CPU OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A403 Safari/8536.25',
        ],
        "BlackBerry": [
            'BlackBerry9000/4.6.0.224 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/220',
            'BlackBerry9300/5.0.0.1007 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/220',
            'BlackBerry9700/5.0.0.1014 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/220',
            'Mozilla/5.0 (BlackBerry; U; BlackBerry 9700; ja) AppleWebKit/534.8+ (KHTML, like Gecko) Version/6.0.0.570 Mobile Safari/534.8+',
            'Mozilla/5.0 (BlackBerry; U; BlackBerry 9780; ja) AppleWebKit/534.8+ (KHTML, like Gecko) Version/6.0.0.587 Mobile Safari/534.8+',
            'Mozilla/5.0 (BlackBerry; U; BlackBerry 9900; ja) AppleWebKit/534.11+ (KHTML, like Gecko) Version/7.1.0.74 Mobile Safari/534.11+',
        ],
        "WebOS": [
            'Mozilla/5.0 (webOS/1.0; U; en-US) AppleWebKit/525.27.1 (KHTML, like Gecko) Version/1.0 Safari/525.27.1 Pre/1.0',
            'Mozilla/5.0 (webOS/1.4.1.1; U; en-US) AppleWebKit/532.2 (KHTML, like Gecko) Version/1.0 Safari/532.2 Pre/1.0',
            'Mozilla/5.0 (Linux; webOS/2.1.2; U; xx-xx) AppleWebKit/534.6 (KHTML, like Gecko) webOSBrowser/221.11 Safari/534.6 Pre/3.0',
            'Mozilla/5.0 (hp-tablet; Linux; hpwOS/3.0.0; U; de-DE) AppleWebKit/534.6 (KHTML, like Gecko) wOSBrowser/233.70 Safari/534.6 TouchPad/1.0',
            'Mozilla/5.0 (hp-tablet; Linux; hpwOS/3.0.2; U; en-US) AppleWebKit/534.6 (KHTML, like Gecko) wOSBrowser/234.40.1 Safari/534.6 TouchPad/1.0',
        ],
        "TouchPad": [
            'Mozilla/5.0 (hp-tablet; Linux; hpwOS/3.0.0; U; de-DE) AppleWebKit/534.6 (KHTML, like Gecko) wOSBrowser/233.70 Safari/534.6 TouchPad/1.0',
            'Mozilla/5.0 (hp-tablet; Linux; hpwOS/3.0.2; U; en-US) AppleWebKit/534.6 (KHTML, like Gecko) wOSBrowser/234.40.1 Safari/534.6 TouchPad/1.0',
        ],
        "Kindle": [
            'Mozilla/5.0 (Linux; U; en-US) AppleWebKit/528.5+ (KHTML, like Gecko, Safari/528.5+) Version/4.0 Kindle/3.0 (screen 600×800; rotate',
            'Mozilla/5.0 (Linux; U; Android 2.3.4; en-us; Kindle Fire Build/GINGERBREAD) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1',
        ],
        "Silk": [
            'Mozilla/5.0 (Linux; U; locale; product-model Build/product-build) AppleWebKit/webkit-version (KHTML, like Gecko) Silk/browser-version Safari/webkit-version Silk-Accelerated=cloud-browsing-state',
            'Mozilla/5.0 (Linux; U; Android android-version; locale; product-model Build/product-build) AppleWebKit/webkit-version (KHTML, like Gecko) Silk/browser-version Mobile Safari/webkit-version Silk-AcEcelerated=cloud-browsing-state',
        ],
        "BB10": [
            'Mozilla/5.0 (BB10; Touch) AppleWebKit/537.1 (KHTML, like Gecko) Version/10.0.0.1337 Mobile Safari/537.1',
            'Mozilla/5.0 (BB10; Touch) AppleWebKit/537.10 (KHTML, like Gecko) Version/10.0.10.648 Mobile Safari/537.10',
        ],
        "rimtabletos": [
            'Mozilla/5.0 (PlayBook; U; RIM Tablet OS 2.0.1; en-US) AppleWebKit/535.8+ (KHTML, like Gecko) Version/7.2.0.1 Safari/535.8+',
        ],
        "DS": [
            'Mozilla/5.0 (Nintendo 3DS; U; ; ja) Version/1.7412.JP',
            'Opera/9.50 (Nintendo DSi; Opera/483; U; en-GB)',
        ],
        "PSP": [
            'Mozilla/4.0 (PSP PlayStation Portable); 2.00)',
        ],
        "PSVita": [
            'Mozilla/5.0 (PlayStation Vita 1.50) AppleWebKit/531.22.8 (KHTML, like Gecko) Silk/3.2',
        ],
        "WindowsPhone7": [
            "Mozilla/4.0 (compatible; MSIE 7.0; Windows Phone OS 7.0; Trident/3.1; IEMobile/7.0; LG; GW910)"
        ],
        "WindowsPhone7.5": [
            "Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0; SAMSUNG; SGH-i917)",
            "Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0; FujitsuToshibaMobileCommun; IS12T; KDDI)"
        ],
        "WindowsPhone8": [
            "Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch; NOKIA; Lumia 920)"
        ],
        "Safari": [
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_5) AppleWebKit/537.71 (KHTML, like Gecko) Version/6.1 Safari/537.71",
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_5) AppleWebKit/537.71 (KHTML, like Gecko) Version/6.1 Safari/537.71"
        ]
    };
    return function() {
        describe('beez-ua', function(){
            it('window.nagigator.userAgent', function() {
                if (global.navigator) {
                    // spec (browser)
                    ua.setup();
                    expect(true).be.ok;
                } else {
                    // test (node.js)
                    try {
                        ua.setup();
                    } catch (e) {
                        expect(e.message).equal('useragent setup error. useragent not found.').be.ok;

                    }
                }
            });
            /**
             * Android 2.1
             */
            it('ua.Android 2.1', function() {
                _.each(useragents["Android2.1"], function (useragent, idx) {
                    ua.setup(useragent);
                    expect(ua.android).be.ok;
                    expect(ua.webkit).be.ok;
                    expect(ua.browser.webkit).be.ok;
                    expect(ua.browser.version).be.ok;
                    expect(ua.browser.locale).equal('ja-jp').be.ok

                    expect(ua.os.android).be.ok;
                    expect(ua.os.version).be.ok;
                });
            });
            /**
             * Android 2.2
             */
            it('ua.Android 2.2', function() {
                _.each(useragents["Android2.2"], function (useragent, idx) {
                    ua.setup(useragent);
                    expect(ua.android).be.ok;
                    expect(ua.webkit).be.ok;
                    expect(ua.browser.webkit).be.ok;
                    expect(ua.browser.version).be.ok;
                    expect(ua.browser.locale).equal('ja-jp').be.ok

                    expect(ua.os.android).be.ok;
                    expect(ua.os.version).be.ok;
                });
            });
            /**
             * Android 2.3
             */
            it('ua.Android 2.3', function() {
                _.each(useragents["Android2.3"], function (useragent, idx) {
                    ua.setup(useragent);
                    expect(ua.android).be.ok;
                    expect(ua.android23).be.ok;
                    expect(ua.android4).not.be.ok;
                    expect(ua.webkit).be.ok;
                    expect(ua.browser.webkit).be.ok;
                    expect(ua.browser.version).be.ok;
                    expect(ua.browser.locale).equal('ja-jp').be.ok

                    expect(ua.os.android).be.ok;
                    expect(ua.os.version).be.ok;
                });
            });
            it('ua.Android 3.x', function() {
                _.each(useragents["Android3.x"], function (useragent, idx) {
                    ua.setup(useragent);
                    expect(ua.android).be.ok;
                    expect(ua.webkit).be.ok;
                    expect(ua.browser.webkit).be.ok;
                    expect(ua.browser.version).be.ok;
                    if (!ua.chrome) {
                        expect(ua.browser.locale.length).equal(5).be.ok
                    }

                    expect(ua.os.android).be.ok;
                    expect(ua.os.version).be.ok;
                });
            });
            it('ua.Android 4.x', function() {
                _.each(useragents["Android4.x"], function (useragent, idx) {
                    ua.setup(useragent);
                    expect(ua.android).be.ok;
                    expect(ua.android23).not.be.ok;
                    expect(ua.android4).be.ok;
                    expect(ua.webkit).be.ok;
                    expect(ua.browser.webkit).be.ok;
                    expect(ua.browser.version).be.ok;
                    if (!ua.chrome) {
                        expect(ua.browser.locale.length).equal(5).be.ok
                    }

                    expect(ua.os.android).be.ok;
                    expect(ua.os.version).be.ok;
                });
            });
            /**
             * IOS (IPhone)
             */
            it('ua.iphone (IOS4)', function() {
                _.each(useragents["IOS4"], function (useragent, idx) {
                    ua.setup(useragent);
                    expect(ua.iphone).be.ok;
                    expect(ua.webkit).be.ok;

                    expect(ua.browser.webkit).be.ok;
                    expect(ua.browser.version).be.ok;
                    expect(ua.os.iphone).be.ok;
                    expect(ua.os.ios).be.ok;
                    expect(ua.os.version).be.ok;
                    expect(ua.os.table).not.be.ok;
                    expect(ua.os.phone).be.ok;
                    for (var i = 3; i < 10; i++) { // IOS 3->9
                        if (i == 4) {
                            expect(ua['ios4']).be.ok;
                        } else {
                            expect(ua['ios' + i]).be.not.ok;
                        }
                    }
                });
            });
            it('ua.iphone (IOS5)', function() {
                _.each(useragents["IOS5"], function (useragent, idx) {
                    ua.setup(useragent);
                    expect(ua.iphone).be.ok;
                    expect(ua.webkit).be.ok;

                    expect(ua.browser.webkit).be.ok;
                    expect(ua.browser.version).be.ok;
                    expect(ua.os.iphone).be.ok;
                    expect(ua.os.ios).be.ok;
                    expect(ua.os.version).be.ok;
                    expect(ua.os.table).not.be.ok;
                    expect(ua.os.phone).be.ok;
                    for (var i = 3; i < 10; i++) { // IOS 3->9
                        if (i == 5) {
                            expect(ua['ios5']).be.ok;
                        } else {
                            expect(ua['ios' + i]).be.not.ok;
                        }
                    }
                });
            });
            it('ua.iphone (IOS6)', function() {
                _.each(useragents["IOS6"], function (useragent, idx) {
                    ua.setup(useragent);
                    expect(ua.iphone).be.ok;
                    expect(ua.webkit).be.ok;

                    expect(ua.browser.webkit).be.ok;
                    expect(ua.browser.version).be.ok;
                    expect(ua.os.iphone).be.ok;
                    expect(ua.os.ios).be.ok;
                    expect(ua.os.version).be.ok;
                    expect(ua.os.table).not.be.ok;
                    expect(ua.os.phone).be.ok;
                    for (var i = 3; i < 10; i++) { // IOS 3->9
                        if (i == 6) {
                            expect(ua['ios6']).be.ok;
                        } else {
                            expect(ua['ios' + i]).be.not.ok;
                        }
                    }
                });
            });
            it('ua.iphone (IOS7)', function() {
                _.each(useragents["IOS7"], function (useragent, idx) {
                    ua.setup(useragent);
                    expect(ua.iphone).be.ok;
                    expect(ua.webkit).be.ok;

                    expect(ua.browser.webkit).be.ok;
                    expect(ua.browser.version).be.ok;
                    expect(ua.os.iphone).be.ok;
                    expect(ua.os.ios).be.ok;
                    expect(ua.os.version).be.ok;
                    expect(ua.os.table).not.be.ok;
                    expect(ua.os.phone).be.ok;
                    for (var i = 3; i < 10; i++) { // IOS 3->9
                        if (i == 7) {
                            expect(ua['ios7']).be.ok;
                        } else {
                            expect(ua['ios' + i]).be.not.ok;
                        }
                    }
                });
            });
            /**
             * IOS (IPad)
             */
            it('ua.iphone (IOS4-ipad)', function() {
                _.each(useragents["IOS4-ipad"], function (useragent, idx) {
                    ua.setup(useragent);
                    expect(ua.ipad).be.ok;
                    expect(ua.webkit).be.ok;

                    expect(ua.browser.webkit).be.ok;
                    expect(ua.browser.version).be.ok;
                    expect(ua.os.ipad).be.ok;
                    expect(ua.os.ios).be.ok;
                    expect(ua.os.version).be.ok;
                    expect(ua.os.tablet).be.ok;
                    expect(ua.os.phone).not.be.ok;
                });
            });
            it('ua.iphone (IOS5-ipad)', function() {
                _.each(useragents["IOS5-ipad"], function (useragent, idx) {
                    ua.setup(useragent);
                    expect(ua.ipad).be.ok;
                    expect(ua.webkit).be.ok;
                    expect(ua.browser.webkit).be.ok;
                    expect(ua.browser.version).be.ok;
                    expect(ua.os.ipad).be.ok;
                    expect(ua.os.ios).be.ok;
                    expect(ua.os.version).be.ok;
                    expect(ua.os.tablet).be.ok;
                    expect(ua.os.phone).not.be.ok;
                });
            });
            it('ua.iphone (IOS6-ipad)', function() {
                _.each(useragents["IOS6-ipad"], function (useragent, idx) {
                    ua.setup(useragent);
                    expect(ua.ipad).be.ok;

                    expect(ua.browser.webkit).be.ok;
                    expect(ua.browser.version).be.ok;
                    expect(ua.os.ipad).be.ok;
                    expect(ua.os.ios).be.ok;
                    expect(ua.os.version).be.ok;
                    expect(ua.os.tablet).be.ok;
                    expect(ua.os.phone).not.be.ok;
                });
            });
            /**
             * iPhone5
             */
            it('ua.iphone5 (hardware)', function() {
                _.each(useragents["IOS6"], function (useragent, idx) {
                    ua.setup(useragent);
                    expect(ua.iphone).be.ok;
                    expect(ua.iphone5).be.a('boolean');

                    expect(ua.webkit).be.ok;

                    expect(ua.browser.webkit).be.ok;
                    expect(ua.browser.version).be.ok;
                    expect(ua.os.iphone).be.ok;
                    expect(ua.os.ios).be.ok;
                    expect(ua.os.version).be.ok;
                    expect(ua.os.table).not.be.ok;
                    expect(ua.os.phone).be.ok;
                });
            });
            /**
             * BlackBerry
             */
            it('ua.blackberry', function() {
                _.each(useragents["BlackBerry"], function (useragent, idx) {
                    ua.setup(useragent);
                    expect(ua.os.blackberry).be.ok;
                    expect(ua.os.tablet).not.be.ok;
                    expect(ua.os.phone).be.ok;
                    expect(ua.blackberry).be.ok;
                });
            });
            /**
             * WebOS
             */
            it('ua.webos', function() {
                _.each(useragents["WebOS"], function (useragent, idx) {
                    ua.setup(useragent);

                    expect(ua.webos).be.ok;
                    expect(ua.browser.webkit).be.ok;
                    expect(ua.browser.version).be.ok;
                    expect(ua.os.webos).be.ok;
                    expect(ua.os.version).be.ok;
                    expect(ua.os.tablet).not.be.ok;
                    expect(ua.os.phone).be.ok;
                });
            });
            /**
             * TouchPad
             */
            it('ua.touchpad', function() {
                _.each(useragents["TouchPad"], function (useragent, idx) {
                    ua.setup(useragent);

                    expect(ua.touchpad).be.ok;
                    expect(ua.browser.webkit).be.ok;
                    expect(ua.browser.version).be.ok;
                    expect(ua.os.webos).be.ok;
                    expect(ua.os.version).be.ok;
                    expect(ua.os.touchpad).be.ok;
                    expect(ua.os.tablet).not.be.ok;
                    expect(ua.os.phone).be.ok;
                });
            });
            /**
             * Kindle
             */
            it('ua.kindle', function() {
                _.each(useragents["Kindle"], function (useragent, idx) {
                    ua.setup(useragent);
                    expect(ua.kindle).be.ok;

                    expect(ua.browser.webkit).be.ok;
                    expect(ua.browser.version).be.ok;
                    expect(ua.os.kindle).be.ok;
                    expect(ua.os.tablet).be.ok;
                    expect(ua.os.phone).not.be.ok;

                });
            });
            /**
             * Silk
             */
            it('ua.silk', function() {
                _.each(useragents["Silk"], function (useragent, idx) {
                    ua.setup(useragent);
                    expect(ua.silk).be.ok;

                    expect(ua.browser.webkit).not.be.ok;
                    expect(ua.browser.silk).be.ok;
                    expect(ua.os.tablet).not.be.ok;
                    expect(ua.os.phone).not.be.ok;
                });
            });
            /**
             * BB10
             */
            it('ua.bb10', function() {
                _.each(useragents["BB10"], function (useragent, idx) {
                    ua.setup(useragent);
                    expect(ua.bb10).be.ok;

                    expect(ua.browser.webkit).be.ok;
                    expect(ua.browser.version).be.ok;
                    expect(ua.os.bb10).be.ok;
                    expect(ua.os.version).be.ok;
                    expect(ua.os.tablet).not.be.ok;
                    expect(ua.os.phone).be.ok;
                });
            });
            /**
             * RIM Tablet OS
             */
            it('ua.rimtabletos', function() {
                _.each(useragents["rimtabletos"], function (useragent, idx) {
                    ua.setup(useragent);
                    expect(ua.rimtabletos).be.ok;

                    expect(ua.browser.webkit).be.ok;
                    expect(ua.browser.version).be.ok;
                    expect(ua.browser.playbook).be.ok;
                    expect(ua.os.rimtabletos).be.ok;
                    expect(ua.os.version).be.ok;
                    expect(ua.os.tablet).be.ok;
                    expect(ua.os.phone).not.be.ok;
                });
            });
            /**
             * PlayBook
             */
            it('ua.playbook', function() {
                _.each(useragents["rimtabletos"], function (useragent, idx) {
                    ua.setup(useragent);
                    expect(ua.playbook).be.ok;

                    expect(ua.browser.webkit).be.ok;
                    expect(ua.browser.version).be.ok;
                    expect(ua.browser.playbook).be.ok;
                    expect(ua.os.rimtabletos).be.ok;
                    expect(ua.os.version).be.ok;
                    expect(ua.os.tablet).be.ok;
                    expect(ua.os.phone).not.be.ok;
                });
            });
            /**
             * DS
             */
            it('ua.ds', function() {
                _.each(useragents["DS"], function (useragent, idx) {
                    ua.setup(useragent);
                    expect(ua.ds).be.ok;

                    expect(ua.browser.webkit).not.be.ok
                    expect(ua.os.tablet).not.be.ok
                    expect(ua.os.phone).not.be.ok
                    expect(ua.os.nintendo).be.ok

                });
            });
            /**
             * Psp
             */
            it('ua.psp', function() {
                _.each(useragents["PSP"], function (useragent, idx) {
                    ua.setup(useragent);
                    expect(ua.psp).be.ok;

                    expect(ua.browser.webkit).not.be.ok
                    expect(ua.os.tablet).not.be.ok
                    expect(ua.os.phone).not.be.ok
                });
            });
            /**
             * Psvita
             */
            it('ua.psvita', function() {
                _.each(useragents["PSVita"], function (useragent, idx) {
                    ua.setup(useragent);
                    expect(ua.psvita).be.ok;

                    expect(ua.browser.webkit).be.ok
                    expect(ua.browser.version).be.ok
                    expect(ua.browser.silk).be.ok
                    expect(ua.os.tablet).not.be.ok
                    expect(ua.os.phone).not.be.ok

                });
            });
            /**
             * Windows Phone 7/7.5/8
             */
            it('ua.windowsphone', function() {
                _.each(useragents["WindowsPhone7"], function (useragent, idx) {
                    ua.setup(useragent);
                    expect(ua.windowsphone).be.ok;
                    expect(ua.browser.windowsphone).be.ok
                    expect(ua.browser.version).equal('7.0').be.ok
                    expect(ua.os.tablet).not.be.ok
                    expect(ua.os.phone).be.ok

                });
                _.each(useragents["WindowsPhone7.5"], function (useragent, idx) {
                    ua.setup(useragent);
                    expect(ua.windowsphone).be.ok;
                    expect(ua.browser.windowsphone).be.ok
                    expect(ua.browser.version).equal('7.5').be.ok
                    expect(ua.os.tablet).not.be.ok
                    expect(ua.os.phone).be.ok

                });
                _.each(useragents["WindowsPhone8"], function (useragent, idx) {
                    ua.setup(useragent);
                    expect(ua.windowsphone).be.ok;
                    expect(ua.browser.windowsphone).be.ok
                    expect(ua.browser.version).equal('8.0').be.ok
                    expect(ua.os.tablet).not.be.ok
                    expect(ua.os.phone).be.ok

                });
            });

            /**
             * Safari
             */
            it('ua.safari', function() {
                _.each(useragents["Safari"], function (useragent, idx) {
                    ua.setup(useragent);
                    expect(ua.safari).be.ok;
                    expect(ua.browser.safari).be.ok
                    expect(ua.browser.version).be.ok
                    expect(ua.os.tablet).not.be.ok
                    expect(ua.os.phone).not.be.ok

                });
            });

            /////


        });

    };
});
