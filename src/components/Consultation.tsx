import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Consultation() {
  return (
    <section id="consultation" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Консультация
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Не знаете, какое оборудование выбрать? Наши специалисты помогут!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-card border-primary/20 hover:border-primary/50 transition-all">
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mb-3">
                  <Icon name="Phone" size={28} className="text-primary" />
                </div>
                <CardTitle>Звонок специалисту</CardTitle>
                <CardDescription>
                  Позвоните нам, и мы проконсультируем вас по любому вопросу
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Основной номер:</p>
                  <a href="tel:+79174192114" className="text-xl font-bold text-primary hover:text-secondary transition-colors">
                    +7 917 419-21-14
                  </a>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Дополнительный номер:</p>
                  <a href="tel:+79174903477" className="text-lg font-semibold text-white hover:text-primary transition-colors">
                    +7 917 490-34-77
                  </a>
                </div>
                <a href="tel:+79174192114" className="block">
                  <Button className="w-full mt-4 bg-primary hover:bg-primary/90">
                    <Icon name="Phone" size={18} className="mr-2" />
                    Позвонить сейчас
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="bg-card border-secondary/20 hover:border-secondary/50 transition-all">
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full flex items-center justify-center mb-3">
                  <Icon name="MapPin" size={28} className="text-secondary" />
                </div>
                <CardTitle>Визит в офис</CardTitle>
                <CardDescription>
                  Приходите к нам в офис для личной консультации
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Адрес:</p>
                  <p className="text-white font-medium">
                    г. Уфа, ул. Новоженова 90/1<br />
                    2 этаж, офис 210
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Режим работы:</p>
                  <p className="text-white">Пн-Пт: 9:00 - 18:00</p>
                  <p className="text-white">Сб-Вс: по договоренности</p>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full mt-4 border-secondary text-secondary hover:bg-secondary hover:text-white"
                  onClick={() => window.open('https://yandex.ru/maps/?text=Уфа, улица Новоженова 90/1', '_blank')}
                >
                  <Icon name="Navigation" size={18} className="mr-2" />
                  Открыть на карте
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Чем мы можем помочь?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: 'ClipboardList', text: 'Подбор оборудования под ваши задачи' },
                  { icon: 'Calculator', text: 'Расчет стоимости и сроков установки' },
                  { icon: 'FileText', text: 'Консультация по техническим характеристикам' },
                  { icon: 'Truck', text: 'Информация о доставке и монтаже' },
                  { icon: 'BadgeCheck', text: 'Оформление гарантии и документов' },
                  { icon: 'Headphones', text: 'Помощь в выборе между моделями' },
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-center space-x-3 p-3 bg-card/50 rounded-lg hover:bg-card transition-colors"
                  >
                    <Icon name={item.icon as any} size={20} className="text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-card rounded-lg border border-border">
                <div className="flex items-start space-x-3">
                  <Icon name="Clock" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-white mb-1">Быстрая консультация</p>
                    <p className="text-sm text-muted-foreground">
                      В среднем консультация занимает 10-15 минут. Мы быстро ответим на все ваши вопросы 
                      и поможем определиться с выбором оборудования.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
