import service from '@astrojs/vercel/build-image-service';
import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

export const config = {
    runtime: 'server',
};

export const POST: APIRoute = async ({ request }) => {
    try {
        const body = await request.json();
        const name = body.name;
        const email = body.email;
        const message = body.message;

        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: import.meta.env.SMTP_USER,
                pass: import.meta.env.SMTP_PASSWORD
            },
        });

        // Configurar las opciones del correo electrónico
        const mailOptions = {
            from: 'developersweapp@gmail.com', // Dirección del remitente
            to: 'adrian.pisabarro.garcia@gmail.com', // Lista de destinatarios
            subject: 'Contacto desde uruvielsa.com', // Asunto del correo
            html: `
            <h1>Formulario de contacto desde uruvielsa.com</h1>
            <p>Nombre: ${name}</p>
            <p>Email: ${email}</p>
            <p>Mensaje: ${message}</p>
            `, // Contenido del correo
        };

        // Enviar el correo electrónico
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log(`Mensaje enviado: ${info.messageId}`);
        });


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
