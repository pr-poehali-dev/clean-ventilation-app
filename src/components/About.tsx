import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function About() {
  const advantages = [
    {
      icon: 'Award',
      title: 'Опыт более 10 лет',
      description: 'Работаем на рынке климатического оборудования с 2013 года',
    },
    {
      icon: 'Users',
      title: 'Более 1000 клиентов',
      description: 'Нам доверяют частные лица и крупные компании',
    },
    {
      icon: 'Shield',
      title: 'Гарантия качества',
      description: 'Официальная гарантия на все оборудование',
    },
    {
      icon: 'Wrench',
      title: 'Монтаж и обслуживание',
      description: 'Профессиональная установка и сервисное обслуживание',
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            О компании
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Чистая Вентиляция — ваш надежный партнер в мире климатического оборудования
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <Card className="bg-card/50 backdrop-blur-sm border-border">
            <CardContent className="pt-6 space-y-4 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                Компания <span className="text-white font-semibold">Чистая Вентиляция</span> специализируется 
                на поставке и установке климатического оборудования премиум-класса. Мы предлагаем широкий ассортимент 
                систем вентиляции, кондиционирования, фанкойлов и теплых полов от ведущих мировых производителей.
              </p>
              <p className="text-lg leading-relaxed">
                Наша команда состоит из опытных специалистов, готовых помочь вам подобрать оптимальное решение 
                для создания комфортного микроклимата в любом помещении — от квартиры до крупного офисного центра.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((item, index) => (
            <Card 
              key={index} 
              className="bg-card hover:border-primary/50 transition-all hover:scale-105 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={item.icon as any} size={28} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20 inline-block">
            <CardContent className="pt-6 px-8">
              <Icon name="MapPin" size={32} className="text-primary mx-auto mb-3" />
              <h3 className="text-xl font-semibold text-white mb-2">Наш офис</h3>
              <p className="text-muted-foreground">
                г. Уфа, ул. Новоженова 90/1<br />
                2 этаж, офис 210
              </p>
              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground mb-2">Режим работы:</p>
                <p className="text-white font-medium">Пн-Пт: 9:00 - 18:00</p>
                <p className="text-white font-medium">Сб-Вс: по договоренности</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
