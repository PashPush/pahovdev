import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current as HTMLFormElement,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact" ref={sectionRef}>
      <div className="flex-center pt-50 pb-10 sm:text-8xl text-5xl">Контакты</div>
      <div className="form-wrapper">
        <div className="flex-center rounded-xl p-10 bg-[rgba(0,0,0,0.9)]">
          <form ref={formRef} onSubmit={handleSubmit} className="w-full flex flex-col gap-7">
            <div>
              <label htmlFor="name">Имя</label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Как к Вам обращаться?"
                required
              />
            </div>

            <div>
              <label htmlFor="email">Email / Telegram / WhatsApp</label>
              <input
                type="text"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Куда удобнее получить ответ?"
                required
              />
            </div>

            <div>
              <label htmlFor="message">Сообщение</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Есть вакансия или интересный проект? Напишите пару слов :)"
                rows={4}
                required
              />
            </div>

            <button type="submit">
              <div className="cta-button group">
                <div className="bg-circle" />
                <p className="text">{loading ? 'Отправка...' : 'Отправить'}</p>
                <div className="arrow-wrapper">
                  <img src="/images/mail-login.svg" alt="arrow" className="animate-pulse" />
                </div>
              </div>
            </button>
          </form>
        </div>
      </div>
      <div className="flex-center pb-20 pt-10  sm:text-5xl text-3xl z-50 relative text-shadow-[2px_2px_10px_rgba(0,0,0,0.8)]">
        Telegram: @pahhov
      </div>
    </div>
  );
};

export default Contact;
