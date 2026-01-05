import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

interface Review {
  id: number;
  name: string;
  initials: string;
  role: string;
  text: string;
  rating: number;
  date: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: 'Алексей Петров',
    initials: 'АП',
    role: 'Владелец квартиры',
    text: 'Установили приточно-вытяжную систему вентиляции. Работа выполнена качественно и в срок. Консультанты помогли подобрать оптимальное решение для моей квартиры. Очень доволен!',
    rating: 5,
    date: 'Декабрь 2025',
  },
  {
    id: 2,
    name: 'Марина Соколова',
    initials: 'МС',
    role: 'Директор кафе',
    text: 'Заказывали кондиционеры Fulnau для нашего кафе. Отличное соотношение цены и качества. Монтаж прошел быстро, специалисты профессиональные. Рекомендую!',
    rating: 5,
    date: 'Ноябрь 2025',
  },
  {
    id: 3,
    name: 'Дмитрий Казанцев',
    initials: 'ДК',
    role: 'Владелец дома',
    text: 'Купил тёплый пол для всего дома. Ребята помогли с расчетом мощности, быстро привезли и установили. Теперь зимой тепло и комфортно. Спасибо большое!',
    rating: 5,
    date: 'Октябрь 2025',
  },
  {
    id: 4,
    name: 'Елена Васильева',
    initials: 'ЕВ',
    role: 'Управляющая офисом',
    text: 'Установили фанкойлы Royal в нашем офисе. Работают тихо, эффективно. Персонал компании вежливый и грамотный. Цены адекватные. Очень довольны результатом!',
    rating: 5,
    date: 'Сентябрь 2025',
  },
  {
    id: 5,
    name: 'Игорь Смирнов',
    initials: 'ИС',
    role: 'Собственник коттеджа',
    text: 'Заказал комплексную систему вентиляции и кондиционирования для коттеджа. Проект разработали с учетом всех пожеланий. Монтаж занял 3 дня. Все работает отлично!',
    rating: 5,
    date: 'Август 2025',
  },
  {
    id: 6,
    name: 'Ольга Иванова',
    initials: 'ОИ',
    role: 'Владелец квартиры',
    text: 'Обратилась за консультацией по выбору кондиционера. Специалисты терпеливо объяснили все нюансы, помогли выбрать оптимальную модель. Установили быстро и качественно.',
    rating: 5,
    date: 'Июль 2025',
  },
];

export default function Reviews() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Отзывы клиентов
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Что говорят о нас наши клиенты
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reviews.map((review, index) => (
            <Card 
              key={review.id}
              className="bg-card hover:border-primary/50 transition-all hover:scale-105 animate-scale-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Avatar className="w-12 h-12 bg-gradient-to-br from-primary to-secondary">
                      <AvatarFallback className="text-white font-semibold">
                        {review.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-white">{review.name}</h4>
                      <p className="text-xs text-muted-foreground">{review.role}</p>
                    </div>
                  </div>
                  <div className="flex space-x-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={14} className="text-secondary fill-secondary" />
                    ))}
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {review.text}
                </p>

                <div className="flex items-center justify-between pt-3 border-t border-border">
                  <span className="text-xs text-muted-foreground">{review.date}</span>
                  <Icon name="CheckCircle2" size={16} className="text-primary" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
            <CardContent className="pt-6 text-center">
              <Icon name="MessageCircle" size={48} className="text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">
                Оставьте свой отзыв
              </h3>
              <p className="text-muted-foreground mb-6">
                Ваше мнение очень важно для нас! Расскажите о своем опыте работы с нами
              </p>
              <a href="tel:+79174192114">
                <button className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg font-medium transition-colors">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Связаться с нами
                </button>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
