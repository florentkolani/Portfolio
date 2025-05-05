import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

/**
 * Formulaire de contact
 * @returns Formulaire de contact
 */

const Email = () => {
    // Initialisation d'EmailJS
    useEffect(() => {
        emailjs.init("K5uqp9Y24EhYao3A5");
    }, []);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    
    const [status, setStatus] = useState({
        submitted: false,
        success: false,
        message: ''
    });
    
    const [loading, setLoading] = useState(false);

    /**
     * Met à jour les données du formulaire en fonction de l'élément modifié
     * @param {{ target: HTMLInputElement | HTMLTextAreaElement }} e L'événement de modification
     */
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

/**
 * Handles the form submission event, sending form data via EmailJS.
 * Prevents default form submission behavior, displays loading state during the process,
 * and updates status based on the success or failure of the email sending operation.
 * 
 * @param {React.FormEvent<HTMLFormElement>} e - The form submission event.
 */

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        
        try {
            // Créer un timestamp formaté pour le paramètre "time"
            const now = new Date();
            const formattedDate = now.toLocaleDateString('fr-FR', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });
            
            // Envoi de l'email via EmailJS
            const result = await emailjs.send(
                'service_1x4zekw', 
                'template_v1mpgpk', 
                {
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    time: formattedDate
                }
            );
            
            if (result.text === 'OK') {
                setStatus({
                    submitted: true,
                    success: true,
                    message: 'Votre message a été envoyé avec succès!'
                });
                
                // Réinitialiser le formulaire
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                });
            } else {
                throw new Error('Une erreur est survenue');
            }
        } catch (error) {
            const errorMessage = error instanceof Error 
                ? error.message 
                : 'Une erreur inconnue est survenue.';
            setStatus({
                submitted: true,
                success: false,
                message: `Erreur: ${errorMessage}`
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center w-full px-4 md:px-6 py-8">
            <div className="w-full max-w-full bg-gray-800 rounded-lg shadow-lg p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-white">Contactez-moi</h2>
                
                {status.submitted && (
                    <div className={`mb-6 p-4 rounded-md ${status.success ? 'bg-green-500/20 text-green-200' : 'bg-red-500/20 text-red-200'}`}>
                        {status.message}
                    </div>
                )}
                
                <form 
                    className="w-full flex flex-col gap-4 md:gap-6" 
                    onSubmit={handleSubmit}
                >
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="w-full">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Nom</label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Votre nom"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-600 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                required
                            />
                        </div>
                        
                        <div className="w-full">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Votre email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-600 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                required
                            />
                        </div>
                    </div>
                    
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Votre message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-600 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                            rows={5}
                            required
                        ></textarea>
                    </div>
                    
                    <button 
                        type="submit" 
                        className="mt-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300 shadow-md flex justify-center items-center"
                        disabled={loading}
                    >
                        {loading ? (
                            <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                        ) : null}
                        {loading ? 'Envoi en cours...' : 'Envoyer'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Email;