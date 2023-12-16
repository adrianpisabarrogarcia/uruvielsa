import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
    try {
        const body = await request.json();
        console.log(body);
        const name = body.name;
        const email = body.email;
        const message = body.message;

        return new Response(
            JSON.stringify({
                message: `Hello ${name}! Your email is ${email} and your message is ${message}`,
            }), {
            headers: {
                'Content-Type': 'application/json',
            },
            status: 200,
        });
    } catch (error) {
        return new Response(JSON.stringify({
            error: error.message,
        }), {
            headers: {
                'Content-Type': 'application/json',
            },
            status: 500,
        });
    }
};
