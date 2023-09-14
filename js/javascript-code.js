
		window._wpemojiSettings = { "baseUrl": "https:\/\/s.w.org\/images\/core\/emoji\/14.0.0\/72x72\/", "ext": ".png", "svgUrl": "https:\/\/s.w.org\/images\/core\/emoji\/14.0.0\/svg\/", "svgExt": ".svg", "source": { "concatemoji": "https:\/\/ladypepe.info\/wp-includes\/js\/wp-emoji-release.min.js?ver=6.3.1" } };
		/*! This file is auto-generated */
		!function (i, n) { var o, s, e; function c(e) { try { var t = { supportTests: e, timestamp: (new Date).valueOf() }; sessionStorage.setItem(o, JSON.stringify(t)) } catch (e) { } } function p(e, t, n) { e.clearRect(0, 0, e.canvas.width, e.canvas.height), e.fillText(t, 0, 0); var t = new Uint32Array(e.getImageData(0, 0, e.canvas.width, e.canvas.height).data), r = (e.clearRect(0, 0, e.canvas.width, e.canvas.height), e.fillText(n, 0, 0), new Uint32Array(e.getImageData(0, 0, e.canvas.width, e.canvas.height).data)); return t.every(function (e, t) { return e === r[t] }) } function u(e, t, n) { switch (t) { case "flag": return n(e, "\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f", "\ud83c\udff3\ufe0f\u200b\u26a7\ufe0f") ? !1 : !n(e, "\ud83c\uddfa\ud83c\uddf3", "\ud83c\uddfa\u200b\ud83c\uddf3") && !n(e, "\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f", "\ud83c\udff4\u200b\udb40\udc67\u200b\udb40\udc62\u200b\udb40\udc65\u200b\udb40\udc6e\u200b\udb40\udc67\u200b\udb40\udc7f"); case "emoji": return !n(e, "\ud83e\udef1\ud83c\udffb\u200d\ud83e\udef2\ud83c\udfff", "\ud83e\udef1\ud83c\udffb\u200b\ud83e\udef2\ud83c\udfff") }return !1 } function f(e, t, n) { var r = "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? new OffscreenCanvas(300, 150) : i.createElement("canvas"), a = r.getContext("2d", { willReadFrequently: !0 }), o = (a.textBaseline = "top", a.font = "600 32px Arial", {}); return e.forEach(function (e) { o[e] = t(a, e, n) }), o } function t(e) { var t = i.createElement("script"); t.src = e, t.defer = !0, i.head.appendChild(t) } "undefined" != typeof Promise && (o = "wpEmojiSettingsSupports", s = ["flag", "emoji"], n.supports = { everything: !0, everythingExceptFlag: !0 }, e = new Promise(function (e) { i.addEventListener("DOMContentLoaded", e, { once: !0 }) }), new Promise(function (t) { var n = function () { try { var e = JSON.parse(sessionStorage.getItem(o)); if ("object" == typeof e && "number" == typeof e.timestamp && (new Date).valueOf() < e.timestamp + 604800 && "object" == typeof e.supportTests) return e.supportTests } catch (e) { } return null }(); if (!n) { if ("undefined" != typeof Worker && "undefined" != typeof OffscreenCanvas && "undefined" != typeof URL && URL.createObjectURL && "undefined" != typeof Blob) try { var e = "postMessage(" + f.toString() + "(" + [JSON.stringify(s), u.toString(), p.toString()].join(",") + "));", r = new Blob([e], { type: "text/javascript" }), a = new Worker(URL.createObjectURL(r), { name: "wpTestEmojiSupports" }); return void (a.onmessage = function (e) { c(n = e.data), a.terminate(), t(n) }) } catch (e) { } c(n = f(s, u, p)) } t(n) }).then(function (e) { for (var t in e) n.supports[t] = e[t], n.supports.everything = n.supports.everything && n.supports[t], "flag" !== t && (n.supports.everythingExceptFlag = n.supports.everythingExceptFlag && n.supports[t]); n.supports.everythingExceptFlag = n.supports.everythingExceptFlag && !n.supports.flag, n.DOMReady = !1, n.readyCallback = function () { n.DOMReady = !0 } }).then(function () { return e }).then(function () { var e; n.supports.everything || (n.readyCallback(), (e = n.source || {}).concatemoji ? t(e.concatemoji) : e.wpemoji && e.twemoji && (t(e.twemoji), t(e.wpemoji))) })) }((window, document), window._wpemojiSettings);
	





		loading_page_settings = { "loadingScreen": 1, "closeBtn": true, "removeInOnLoad": false, "codeblock": "", "backgroundColor": "#000000", "foregroundColor": "#000000", "backgroundImage": "https:\/\/ladypepe.info\/wp-content\/uploads\/2023\/08\/4.png", "additionalSeconds": 0, "pageEffect": "none", "backgroundRepeat": "no-repeat", "fullscreen": 1, "graphic": "logo", "text": 0, "lp_ls": { "logo": { "image": "https:\/\/ladypepe.info\/wp-content\/plugins\/loading-page\/loading-screens\/logo\/images\/06.svg", "grayscale": "0", "blink": "0" } }, "screen_size": "all", "screen_width": 0, "deepSearch": 1, "modifyDisplayRule": 1, "triggerLinkScreenNeverClose": 1, "triggerLinkScreenCloseAfter": 3 };
	



		var graphina_localize = { "ajaxurl": "https:\/\/ladypepe.info\/wp-admin\/admin-ajax.php", "nonce": "3ccdecca32", "graphinaAllGraphs": [], "graphinaAllGraphsOptions": [], "graphinaBlockCharts": [], "is_view_port_disable": "off", "thousand_seperator": "," };
	




		const lazyloadRunObserver = () => {
			const dataAttribute = 'data-e-bg-lazyload';
			const lazyloadBackgrounds = document.querySelectorAll(`[${dataAttribute}]:not(.lazyloaded)`);
			const lazyloadBackgroundObserver = new IntersectionObserver((entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						let lazyloadBackground = entry.target;
						const lazyloadSelector = lazyloadBackground.getAttribute(dataAttribute);
						if (lazyloadSelector) {
							lazyloadBackground = entry.target.querySelector(lazyloadSelector);
						}
						if (lazyloadBackground) {
							lazyloadBackground.classList.add('lazyloaded');
						}
						lazyloadBackgroundObserver.unobserve(entry.target);
					}
				});
			}, { rootMargin: '100px 0px 100px 0px' });
			lazyloadBackgrounds.forEach((lazyloadBackground) => {
				lazyloadBackgroundObserver.observe(lazyloadBackground);
			});
		};
		const events = [
			'DOMContentLoaded',
			'elementor/lazyload/observe',
		];
		events.forEach((event) => {
			document.addEventListener(event, lazyloadRunObserver);
		});
	

		var astra = { "break_point": "921", "isRtl": "", "is_scroll_to_id": "", "is_scroll_to_top": "", "is_header_footer_builder_active": "1" };
	








		var HTMEGAF = { "elementorpro": "", "buttion_area_text_next": "Next", "buttion_area_text_prev": "Previous" };
	







		var elementorFrontendConfig = { "environmentMode": { "edit": false, "wpPreview": false, "isScriptDebug": false }, "i18n": { "shareOnFacebook": "\ud398\uc774\uc2a4\ubd81\uc5d0 \uacf5\uc720", "shareOnTwitter": "\ud2b8\uc704\ud130\uc5d0 \uacf5\uc720", "pinIt": "\ud540 \ud558\uae30", "download": "\ub2e4\uc6b4\ub85c\ub4dc", "downloadImage": "\uc774\ubbf8\uc9c0 \ub2e4\uc6b4\ub85c\ub4dc", "fullscreen": "\uc804\uccb4 \ud654\uba74", "zoom": "\uc90c", "share": "\uacf5\uc720", "playVideo": "\ub3d9\uc601\uc0c1 \uc7ac\uc0dd", "previous": "\uc774\uc804", "next": "\ub2e4\uc74c", "close": "\ub2eb\uae30", "a11yCarouselWrapperAriaLabel": "\uce90\ub7ec\uc140 | \uac00\ub85c \uc2a4\ud06c\ub864: \uc67c\ucabd \ubc0f \uc624\ub978\ucabd \ud654\uc0b4\ud45c", "a11yCarouselPrevSlideMessage": "\uc774\uc804 \uc2ac\ub77c\uc774\ub4dc", "a11yCarouselNextSlideMessage": "\ub2e4\uc74c \uc2ac\ub77c\uc774\ub4dc", "a11yCarouselFirstSlideMessage": "\uccab \ubc88\uc9f8 \uc2ac\ub77c\uc774\ub4dc\uc785\ub2c8\ub2e4.", "a11yCarouselLastSlideMessage": "\ub9c8\uc9c0\ub9c9 \uc2ac\ub77c\uc774\ub4dc\uc785\ub2c8\ub2e4.", "a11yCarouselPaginationBulletMessage": "\uc2ac\ub77c\uc774\ub4dc\ub85c \uc774\ub3d9" }, "is_rtl": false, "breakpoints": { "xs": 0, "sm": 480, "md": 768, "lg": 1025, "xl": 1440, "xxl": 1600 }, "responsive": { "breakpoints": { "mobile": { "label": "\ubaa8\ubc14\uc77c \ucd08\uc0c1\ud654", "value": 767, "default_value": 767, "direction": "max", "is_enabled": true }, "mobile_extra": { "label": "\ubaa8\ubc14\uc77c \ud48d\uacbd", "value": 880, "default_value": 880, "direction": "max", "is_enabled": false }, "tablet": { "label": "\ud0dc\ube14\ub9bf \uc138\ub85c", "value": 1024, "default_value": 1024, "direction": "max", "is_enabled": true }, "tablet_extra": { "label": "\ud0dc\ube14\ub9bf \uac00\ub85c", "value": 1200, "default_value": 1200, "direction": "max", "is_enabled": false }, "laptop": { "label": "\ub7a9\ud0d1", "value": 1366, "default_value": 1366, "direction": "max", "is_enabled": false }, "widescreen": { "label": "\uc640\uc774\ub4dc\uc2a4\ud06c\ub9b0", "value": 2400, "default_value": 2400, "direction": "min", "is_enabled": false } } }, "version": "3.15.0", "is_static": false, "experimentalFeatures": { "e_dom_optimization": true, "e_optimized_assets_loading": true, "e_optimized_css_loading": true, "additional_custom_breakpoints": true, "e_swiper_latest": true, "landing-pages": true, "e_lazyload": true, "e_global_styleguide": true }, "urls": { "assets": "https:\/\/ladypepe.info\/wp-content\/plugins\/elementor\/assets\/" }, "swiperClass": "swiper", "settings": { "page": [], "editorPreferences": [] }, "kit": { "active_breakpoints": ["viewport_mobile", "viewport_tablet"], "global_image_lightbox": "yes", "lightbox_enable_counter": "yes", "lightbox_enable_fullscreen": "yes", "lightbox_enable_zoom": "yes", "lightbox_enable_share": "yes", "lightbox_title_src": "title", "lightbox_description_src": "description" }, "post": { "id": 1318, "title": "ladypepe", "excerpt": "", "featuredImage": false } };
	



		var _wpUtilSettings = { "ajax": { "url": "\/wp-admin\/admin-ajax.php" } };
	


		var wpformsElementorVars = { "captcha_provider": "recaptcha", "recaptcha_type": "v2" };
	


		/(trident|msie)/i.test(navigator.userAgent) && document.getElementById && window.addEventListener && window.addEventListener("hashchange", function () { var t, e = location.hash.substring(1); /^[A-z0-9_-]+$/.test(e) && (t = document.getElementById(e)) && (/^(?:a|select|input|button|textarea)$/i.test(t.tagName) || (t.tabIndex = -1), t.focus()) }, !1);
	