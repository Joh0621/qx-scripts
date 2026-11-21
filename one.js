/* Quantumult X - one.google.com response body rewrite
 * 用途：将响应体中的 30tb.ai.pro.m -> 30tb.m，20tb.m.v2 -> 20tb.m
 * 配合 [rewrite_local]:
 * ^https?:\/\/one\.google\.com\/ai\/? url script-response-body one.js
 */

let body = $response.body;

if (body) {
  body = body
    .replace(/30tb\.ai\.pro\.m/g, "30tb.m")
    .replace(/20tb\.m\.v2/g, "20tb.m");
}

$done({ body });
