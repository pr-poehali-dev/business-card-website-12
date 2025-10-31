import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const portfolioItems = [
    {
      id: 1,
      title: 'Корпоративный сайт',
      description: 'Современный сайт для бизнеса',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 2,
      title: 'Интернет-магазин',
      description: 'E-commerce решение',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 3,
      title: 'Мобильное приложение',
      description: 'UI/UX дизайн приложения',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 4,
      title: 'Landing Page',
      description: 'Продающая посадочная страница',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 5,
      title: 'CRM система',
      description: 'Корпоративная система управления',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 6,
      title: 'Портал услуг',
      description: 'Платформа для B2B клиентов',
      color: 'from-pink-500 to-rose-500'
    }
  ];

  const features = [
    {
      icon: 'Sparkles',
      title: 'Современный дизайн',
      description: 'Следуем актуальным трендам веб-дизайна'
    },
    {
      icon: 'Zap',
      title: 'Быстрая разработка',
      description: 'Реализуем проекты в оптимальные сроки'
    },
    {
      icon: 'Shield',
      title: 'Надежность',
      description: 'Гарантируем качество и безопасность'
    },
    {
      icon: 'Users',
      title: 'Поддержка 24/7',
      description: 'Всегда на связи с клиентами'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-pink-50">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg z-50 border-b border-purple-100">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            CenterSvet
          </h1>
          <div className="hidden md:flex gap-8">
            <a href="#home" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              Главная
            </a>
            <a href="#about" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              О нас
            </a>
            <a href="#portfolio" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              Портфолио
            </a>
            <a href="#contacts" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              Контакты
            </a>
          </div>
          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
            Связаться
          </Button>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h2 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent leading-tight">
              Создаем цифровые<br />решения будущего
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Разрабатываем современные веб-сайты и приложения с акцентом на инновации и пользовательский опыт
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-8">
                Начать проект
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 text-lg px-8">
                Посмотреть работы
              </Button>
            </div>
          </div>
          
          <div className="mt-20 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-orange-500/20 blur-3xl rounded-full animate-gradient-shift"></div>
            <div className="relative bg-white/60 backdrop-blur-sm rounded-3xl p-8 border-2 border-purple-200 shadow-2xl animate-scale-in">
              <div className="aspect-video bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-2xl flex items-center justify-center">
                <Icon name="Sparkles" size={80} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              О нас
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Команда профессионалов с опытом создания цифровых продуктов для бизнеса любого масштаба
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-purple-100 hover:border-purple-300 animate-fade-in bg-white/80 backdrop-blur-sm"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-4">
                  <Icon name={feature.icon} size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-white text-center animate-fade-in">
            <h3 className="text-3xl font-bold mb-4">Более 100+ успешных проектов</h3>
            <p className="text-xl opacity-90 mb-6">
              Работаем с компаниями по всей России и СНГ
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div>
                <div className="text-5xl font-bold mb-2">100+</div>
                <div className="text-lg opacity-90">Завершенных проектов</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">50+</div>
                <div className="text-lg opacity-90">Довольных клиентов</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">5+</div>
                <div className="text-lg opacity-90">Лет опыта</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Портфолио
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Примеры наших работ в различных сферах digital
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item, index) => (
              <Card 
                key={item.id}
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 border-purple-100 hover:border-purple-300 animate-fade-in group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`h-48 bg-gradient-to-br ${item.color} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  <Icon name="Layout" size={60} className="text-white relative z-10" />
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50">
              Смотреть все проекты
            </Button>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-gradient-to-br from-purple-600 to-pink-600">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in text-white">
            <h2 className="text-5xl font-bold mb-4">
              Контакты
            </h2>
            <p className="text-xl opacity-90">
              Свяжитесь с нами для обсуждения вашего проекта
            </p>
          </div>

          <Card className="p-8 md:p-12 animate-scale-in bg-white/95 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">Ваше имя</label>
                <Input 
                  placeholder="Иван Иванов"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="border-2 border-purple-200 focus:border-purple-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">Email</label>
                <Input 
                  type="email"
                  placeholder="ivan@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="border-2 border-purple-200 focus:border-purple-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">Сообщение</label>
                <Textarea 
                  placeholder="Расскажите о вашем проекте..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={5}
                  className="border-2 border-purple-200 focus:border-purple-500"
                />
              </div>
              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg"
              >
                Отправить сообщение
              </Button>
            </form>

            <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
              <div className="p-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon name="Mail" size={24} className="text-white" />
                </div>
                <p className="font-medium text-gray-800">Email</p>
                <p className="text-gray-600">info@centersvet.ru</p>
              </div>
              <div className="p-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon name="Phone" size={24} className="text-white" />
                </div>
                <p className="font-medium text-gray-800">Телефон</p>
                <p className="text-gray-600">+7 (900) 123-45-67</p>
              </div>
              <div className="p-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon name="MapPin" size={24} className="text-white" />
                </div>
                <p className="font-medium text-gray-800">Адрес</p>
                <p className="text-gray-600">Москва, Россия</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            CenterSvet
          </h3>
          <p className="text-gray-400 mb-6">
            © 2024 CenterSvet. Все права защищены.
          </p>
          <div className="flex justify-center gap-4">
            <a href="#" className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors">
              <Icon name="Facebook" size={20} />
            </a>
            <a href="#" className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors">
              <Icon name="Twitter" size={20} />
            </a>
            <a href="#" className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors">
              <Icon name="Instagram" size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
