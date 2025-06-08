/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
  async fetch(request, env, ctx) {
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    // Răspunde la preflight CORS
    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: corsHeaders,
      });
    }

    const url = new URL(request.url);

    if (request.method === "POST" && url.pathname === "/api/contact") {
      try {
        const body = await request.json();

        // Validare simplă câmpuri
        if (!body.captcha_token || !body.email || !body.mesaj) {
          return new Response(JSON.stringify({ error: "Date lipsă" }), {
            status: 400,
            headers: {
              ...corsHeaders,
              "Content-Type": "application/json",
            },
          });
        }

        // ✅ (opțional) verifică CAPTCHA cu secret key din env
        // vezi: https://developers.cloudflare.com/turnstile/

        // Trimite email, loghează sau doar răspunde ok
        return new Response(JSON.stringify({ success: true }), {
          status: 200,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        });
      } catch (err) {
        return new Response(JSON.stringify({ error: "Eroare server" }), {
          status: 500,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        });
      }
    }

    // Alte rute
    return new Response("Not Found", {
      status: 404,
      headers: corsHeaders,
    });
  },
};
