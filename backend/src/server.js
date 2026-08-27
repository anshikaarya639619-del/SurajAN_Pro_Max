import http from "node:http";

const PORT = Number(process.env.PORT || 3000);

const server = http.createServer((req, res) => {
  const url = new URL(req.url || "/", `http://${req.headers.host || "localhost"}`);

  // Basic security headers
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "DENY");
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");

  // Health endpoint
  if (req.method === "GET" && url.pathname === "/api/v1/health") {
    res.writeHead(200, {
      "Content-Type": "application/json"
    });

    res.end(
      JSON.stringify({
        status: "ok",
        service: "surajan-pro-max-backend",
        timestamp: new Date().toISOString()
      })
    );

    return;
  }

  // Default response
  res.writeHead(404, {
    "Content-Type": "application/json"
  });

  res.end(
    JSON.stringify({
      error: {
        code: "NOT_FOUND",
        message: "Route not found"
      }
    })
  );
});

server.listen(PORT, () => {
  console.log(`SurajAN Pro Max backend running on port ${PORT}`);
});
