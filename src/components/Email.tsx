import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { ArrowUpRight, LoaderCircle, Mail } from "lucide-react";
import emailjs from "@emailjs/browser";
import { getContent, type Language } from "../i18n";

interface EmailProps {
    language: Language;
}

const Email = ({ language }: EmailProps) => {
    const copy = getContent(language).contact;
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState<"success" | "error" | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        emailjs.init("K5uqp9Y24EhYao3A5");
    }, []);

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData((previous) => ({ ...previous, [name]: value }));
        setStatus(null);
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);

        try {
            const formattedDate = new Date().toLocaleString(language === "fr" ? "fr-FR" : "en-GB");
            await emailjs.send("service_1x4zekw", "template_v1mpgpk", {
                ...formData,
                time: formattedDate,
            });
            setStatus("success");
            setFormData({ name: "", email: "", message: "" });
        } catch {
            setStatus("error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="content-section section-contact" id="email-form" aria-labelledby="contact-title">
            <div className="container contact-layout">
                <div className="contact-copy">
                    <p className="eyebrow">{copy.eyebrow}</p>
                    <h2 className="section-title" id="contact-title">{copy.title}</h2>
                    <p className="section-intro">{copy.description}</p>
                    <a className="direct-email" href="mailto:kolaniflorent446@gmail.com">
                        <Mail aria-hidden="true" />kolaniflorent446@gmail.com<ArrowUpRight aria-hidden="true" />
                    </a>
                </div>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-field">
                        <label htmlFor="name">{copy.name}</label>
                        <input id="name" name="name" type="text" autoComplete="name" placeholder={copy.namePlaceholder} value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className="form-field">
                        <label htmlFor="email">{copy.email}</label>
                        <input id="email" name="email" type="email" autoComplete="email" placeholder={copy.emailPlaceholder} value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="form-field">
                        <label htmlFor="message">{copy.message}</label>
                        <textarea id="message" name="message" placeholder={copy.messagePlaceholder} value={formData.message} onChange={handleChange} rows={5} required />
                    </div>
                    {status && (
                        <p className={`form-status ${status}`} role={status === "error" ? "alert" : "status"} aria-live="polite">
                            {status === "success" ? copy.success : copy.failure}
                        </p>
                    )}
                    <button className="button button-primary submit-button" type="submit" disabled={loading}>
                        {loading && <LoaderCircle className="loading-icon" aria-hidden="true" />}
                        {loading ? copy.sending : copy.send}<ArrowUpRight aria-hidden="true" />
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Email;