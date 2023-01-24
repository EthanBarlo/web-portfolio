import sgMail from '@sendgrid/mail';
import type { Actions } from './$types';

export const prerender = false;

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const name = data.get('name')?.toString();
		const email = data.get('email')?.toString();
		const message = data.get('message')?.toString();

		if (!name || !email || !message) {
			throw new Error('Please fill in all fields.');
		}

		try {
			await sgMail.send({
				to: 'ethanbarlow2@hotmail.com',
				from: 'ethanbarlow2@hotmail.com',
				subject: `Enquiry from Portfolio Site`,
				text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
			});
		} catch (err) {
			console.error(err);
			throw new Error(
				'Something went wrong, please contact me directly at ethanbarlow2@hotmail.com'
			);
		}

		return { success: true };
	}
} satisfies Actions;
