import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
    try {
        // Fallback to a default key if IP is missing
        const clientKey = req.ip || req.headers["x-forwarded-for"] || "unknown";

        const { success, remaining, reset } = await ratelimit.limit(clientKey.toString());
        console.log(`IP: ${clientKey} | Remaining: ${remaining} | Resets at: ${reset}`);

        if (!success) {
            return res.status(429).json({
                message: "Too many requests, please try again later"
            });
        }

        next();
    } catch (error) {
        console.error("Rate limit error: ", error);
        next(error);
    }
};

export default rateLimiter;
