import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { SiTelegram, SiWhatsapp } from 'react-icons/si';
import { MdMail } from 'react-icons/md';
import { classNames } from '../lib/classNames';

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
      setIsSent(true);
      setTimeout(() => {
        setIsSent(false);
      }, 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div ref={sectionRef} className="contacts" id="contacts">
      <div className="title">Контакты</div>
      <div className="form-wrapper">
        <div className="form-body">
          <form ref={formRef} onSubmit={handleSubmit} className="w-full flex flex-col sm:gap-7 gap-4">
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

            <div id="contact">
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
                rows={2}
                required
              />
            </div>

            <button type="submit">
              <div className="cta-button group">
                <div className="bg-circle" />
                <p className="text">{loading ? 'Отправка...' : 'Отправить'}</p>
                <div className="arrow-wrapper">
                  <img src="/images/mail-login.svg" alt="email" className="animate-pulse" />
                </div>
              </div>
            </button>
          </form>
          <div
            className={classNames(
              'absolute flex-center rounded-2xl px-4 py-2 bg-[#50a2ff] text-lg transition-all duration-300 ease-in-out opacity-0 bottom-0',
              {
                'opacity-100': isSent,
                'translate-y-5': isSent,
              }
            )}
          >
            <p>Сообщение отправлено!</p>
          </div>
        </div>
      </div>
      <div className="socials">
        <a href="https://t.me/pah0v" aria-label="telegram" target="_blank" className="bg-[#00aaff]">
          <SiTelegram size={44} color="#fff" />
        </a>
        <a href="https://wa.me/79934690793" aria-label="whatsapp" target="_blank" className="bg-[#4ac959]">
          <SiWhatsapp size={44} color="#fff" />
        </a>
        <a href="mailto:pahovdev@gmail.com" aria-label="email" target="_blank" className="bg-[#2e2d38]">
          <MdMail size={24} color="#fff" />
        </a>
      </div>
      <div className="flex-center md:pb-4 pb-2">Pavel Khovalkin © {new Date().getFullYear()}</div>
    </div>
  );
};

export default Contact;
