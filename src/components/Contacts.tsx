import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Contacts() {
  return (
    <section id="contacts" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Контакты
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Свяжитесь с нами удобным способом
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <Card className="bg-card">
            <CardContent className="pt-6 space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <Icon name="Phone" size={24} className="text-primary mr-3" />
                  Телефоны
                </h3>
                <div className="space-y-3 ml-9">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Основной (заказы и консультации):</p>
                    <a 
                      href="tel:+79174192114" 
                      className="text-2xl font-bold text-primary hover:text-secondary transition-colors"
                    >
                      +7 917 419-21-14
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Дополнительный:</p>
                    <a 
                      href="tel:+79174903477" 
                      className="text-xl font-semibold text-white hover:text-primary transition-colors"
                    >
                      +7 917 490-34-77
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <Icon name="MapPin" size={24} className="text-primary mr-3" />
                  Адрес офиса
                </h3>
                <div className="ml-9 space-y-2">
                  <p className="text-white font-medium">
                    г. Уфа, ул. Новоженова 90/1
                  </p>
                  <p className="text-white font-medium">
                    2 этаж, офис 210
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="mt-3 border-primary text-primary hover:bg-primary hover:text-white"
                    onClick={() => window.open('https://yandex.ru/maps/?text=Уфа, улица Новоженова 90/1', '_blank')}
                  >
                    <Icon name="Navigation" size={16} className="mr-2" />
                    Проложить маршрут
                  </Button>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <Icon name="Clock" size={24} className="text-primary mr-3" />
                  Режим работы
                </h3>
                <div className="ml-9 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Понедельник - Пятница:</span>
                    <span className="text-white font-medium">9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Суббота - Воскресенье:</span>
                    <span className="text-white font-medium">По договоренности</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-3 mb-4">
                  <Icon name="Info" size={24} className="text-primary flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Информация о ценах</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Цены на оборудование можно уточнить по телефону или при личной встрече в офисе.
                    </p>
                    <a href="tel:+79174192114">
                      <Button className="bg-primary hover:bg-primary/90 w-full">
                        <Icon name="Phone" size={18} className="mr-2" />
                        Узнать цены
                      </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card">
              <CardContent className="pt-6">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <Icon name="MessageSquare" size={20} className="text-primary mr-2" />
                  Быстрые ссылки
                </h4>
                <div className="space-y-2">
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <Icon name="ShoppingBag" size={18} className="mr-2" />
                    Перейти в каталог
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={() => document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <Icon name="Headphones" size={18} className="mr-2" />
                    Получить консультацию
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <Icon name="Building" size={18} className="mr-2" />
                    О компании
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-secondary/10 to-primary/10 border-secondary/20">
              <CardContent className="pt-6 text-center">
                <Icon name="Star" size={32} className="text-secondary mx-auto mb-3" />
                <h4 className="text-lg font-semibold text-white mb-2">Работаем с 2013 года</h4>
                <p className="text-sm text-muted-foreground">
                  Более 10 лет опыта в сфере климатического оборудования
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
