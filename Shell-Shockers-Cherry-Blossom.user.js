// ==UserScript==
// @name         Shell Shockers Cherry Blossom Theme
// @namespace    shellshockers.cherryblossomtheme.clean
// @version      2.1.1
// @author       Virojet
// @icon         data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzIgMzIpIj48ZyBpZD0icCI+PHBhdGggZD0iTTAtNEMtOS04LTEzLTIwLTgtMjctNS0zMC0yLTI4IDAtMjQgMi0yOCA1LTMwIDgtMjcgMTMtMjAgOS04IDAtNFoiIGZpbGw9IiNmN2E4YzgiIHN0cm9rZT0iI2EyNGQ4MCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHBhdGggZD0iTTAtOFYtMjAiIHN0cm9rZT0iI2U1N2FhOCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48L2c+PHVzZSBocmVmPSIjcCIgdHJhbnNmb3JtPSJyb3RhdGUoNzIpIi8+PHVzZSBocmVmPSIjcCIgdHJhbnNmb3JtPSJyb3RhdGUoMTQ0KSIvPjx1c2UgaHJlZj0iI3AiIHRyYW5zZm9ybT0icm90YXRlKDIxNikiLz48dXNlIGhyZWY9IiNwIiB0cmFuc2Zvcm09InJvdGF0ZSgyODgpIi8+PGNpcmNsZSByPSI2IiBmaWxsPSIjZmZkMTY2IiBzdHJva2U9IiNhMjRkODAiIHN0cm9rZS13aWR0aD0iMiIvPjwvZz48L3N2Zz4=
// @license      MIT
// @description  Cherry blossom theme. Cosmetic only: no account code, and the only request is one anonymous install count.
// @homepageURL  https://github.com/Virojet/Shell-Shockers-Cherry-Blossom-Theme
// @supportURL   https://github.com/Virojet/Shell-Shockers-Cherry-Blossom-Theme/issues
// @downloadURL  https://raw.githubusercontent.com/Virojet/Shell-Shockers-Cherry-Blossom-Theme/main/Shell-Shockers-Cherry-Blossom.user.js
// @updateURL    https://raw.githubusercontent.com/Virojet/Shell-Shockers-Cherry-Blossom-Theme/main/Shell-Shockers-Cherry-Blossom.user.js
// @match        https://shellshock.io/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(() => {
  "use strict";
  if (location.pathname !== "/" || document.getElementById("ss-sakura-style")) return;
  {
    const css = document.createElement("style");
    css.id = "ss-sakura-style";
    // The game colours its UI with --ss-blue*; repointing them recolours every panel, tab and field.
    // Team colours (--ss-team-blue-*) are left alone.
    css.textContent = `
      html:root {
        --ss-blue00:#f7d3e3; --ss-blue0:#fbe3ee; --ss-blue1:#ffc5df; --ss-blue2:#d987b0; --ss-blue3:#a24d80;
        --ss-blue4:#85406c; --ss-blue5:#5a2c4f; --ss-blue6:#e7a6c6; --ss-blue7:#ff7fb8; --ss-blue8:#a8508a;
        --ss-blue2clear:rgba(217,135,176,0); --ss-blue2alpha7:rgba(217,135,176,.7); --ss-blueshadow:#5a2c4f87;
        --ss-blueblend1:linear-gradient(#a24d80,#d987b0); --ss-fieldbg:linear-gradient(#f1bcd4,#fff,#fff,#fff,#fff);
        --ss-box-shadow-1:.16em .16em 0 rgba(162,77,128,.5); --ss-box-shadow-2:.15em .15em 0 rgba(162,77,128,.9);
        --ss-text-shadow-1:.1em .1em 0 rgba(162,77,128,.8);
        --ss-lightoverlay:linear-gradient(#a8508a, #c97fab, #e7a6c6);
      }
      html, body { background-color:#251b2d !important; color:#fff0f7; }
      body button, body .button, body .btn { background-color:#713b63 !important; border:0 !important; color:#fff !important; }
      body button:hover, body .button:hover, body .btn:hover { background-color:#92547f !important; }
      body .ss_button { box-shadow:var(--ss-box-shadow-1), inset 0 -.2em .2em #4a2442, inset 0 .25em .35em #b8689a !important; }
      body .ss_keybind { background-color:#713b63 !important; color:#fff !important; border:0 !important; }
      body .ss_button_as_text { background:none !important; box-shadow:none !important; }
      body .main-menu-button { background:none !important; border:0 !important; box-shadow:none !important; }
      .main-menu-button path:not(.main-nav-item-bg) { fill:#5a2c4f !important; }
      .player-challenges-container { background:linear-gradient(-124deg, #c86a9f, #85406c) !important; }
      .is-paused .pause-ui-element, .is-paused .chat-item:first-child.chat-pinned-item { background-color:#85406c !important; }
      .popup_window, .play-panel-panels { background:linear-gradient(#a8508a, #b8689a, #c97fab, #da98bf, #e7a6c6) !important; }
      body a { color:#ffc5df; } body a:hover { color:#fff; }
      body input, body select, body textarea { accent-color:#cf6e9f; border-color:#f4a9c8 !important; }
      #crosshair, .crosshair, [class*="crosshair"], [id*="crosshair"] { color:#ff91c8 !important; border-color:#ff91c8 !important; }
      #ss-sakura-petals { position:fixed; inset:0; z-index:2001; overflow:hidden; pointer-events:none; }
      #ss-sakura-petals span { position:absolute; top:-35px; color:#ffd1e4; opacity:.8; animation:ss-sakura-fall linear infinite; }
      #progress-container { background:linear-gradient(#5a2c4f, #a24d80, #f4a9c8, #fbe3ee) !important; }
      #progress-outer { background:#5a2c4f !important; }
      #progressBar { background:#ff7fb8 !important; }
      #progress-container::after { content:"✿ Cherry Blossom ✿"; position:absolute; left:0; right:0; bottom:6%; text-align:center;
        font:28px "Sigmar One", sans-serif; color:#85406c; text-shadow:0 2px 0 #fff; letter-spacing:.06em; }
      @keyframes ss-sakura-fall { to { transform:translate3d(50px,110vh,0) rotate(480deg); } }
    `;
    // Added at document-start so the loading screen is themed from its first frame.
    const add = () => document.documentElement.appendChild(css);
    document.documentElement ? add() : new MutationObserver((_, o) => document.documentElement && (o.disconnect(), add())).observe(document, { childList: true });
  }
  const start = () => {
    const petals = document.createElement("div");
    petals.id = "ss-sakura-petals";
    for (let i = 0; i < 14; i++) {
      const p = petals.appendChild(document.createElement("span"));
      p.textContent = "✿";
      p.style.cssText = `left:${(i * 37) % 100}%;font-size:${12 + (i % 4) * 5}px;animation-duration:${9 + (i % 6) * 2}s;animation-delay:${-i * 1.7}s`;
    }
    document.body.appendChild(petals);
    // Petals fall forever, but hide while you're aiming in a match.
    document.addEventListener("pointerlockchange", () => { petals.hidden = !!document.pointerLockElement; });
  };
  document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", start, { once: true }) : start();

  // install-counter:begin
  // Install counter: one anonymous hit per browser, sent once and never again (key "ssCherryBlossom-install-counted").
  // Nothing is sent but the hit itself: no settings, names or IDs. Total: abacus.jasoncameron.dev/get/virojet-cherry-blossom/installs
  (() => {
    const KEY = "ssCherryBlossom-install-counted";
    try { if (localStorage.getItem(KEY)) return; } catch (e) { return; }
    setTimeout(() => {
      fetch("https://abacus.jasoncameron.dev/hit/virojet-cherry-blossom/installs", { credentials: "omit", referrerPolicy: "no-referrer" })
        .then(r => { if (r.ok) localStorage.setItem(KEY, "1"); })
        .catch(() => { });
    }, 8000);
  })();
  // install-counter:end
})();
