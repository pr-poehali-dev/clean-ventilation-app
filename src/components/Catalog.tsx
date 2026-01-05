import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

interface Product {
  id: number;
  name: string;
  category: string;
  brand: string;
  description: string;
  features: string[];
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Приточно-вытяжная установка',
    category: 'ventilation',
    brand: 'Премиум',
    description: 'Энергоэффективная система вентиляции с рекуперацией тепла',
    features: ['Рекуперация до 90%', 'Тихая работа', 'Автоматика'],
    image: '🌀',
  },
  {
    id: 2,
    name: 'Канальный вентилятор',
    category: 'ventilation',
    brand: 'Стандарт',
    description: 'Надежный вентилятор для систем воздуховодов',
    features: ['Низкий шум', 'Долговечность', 'Простой монтаж'],
    image: '💨',
  },
  {
    id: 3,
    name: 'Кондиционер Fulnau Premium',
    category: 'conditioner',
    brand: 'Fulnau',
    description: 'Инверторный кондиционер с функцией очистки воздуха',
    features: ['Wi-Fi управление', 'Очистка воздуха', 'Инверторный компрессор'],
    image: '❄️',
  },
  {
    id: 4,
    name: 'Кондиционер Fulnau Eco',
    category: 'conditioner',
    brand: 'Fulnau',
    description: 'Экономичная модель для небольших помещений',
    features: ['Энергоэффективность A++', 'Бесшумный режим', 'Компактный дизайн'],
    image: '🧊',
  },
  {
    id: 5,
    name: 'Фанкойл Royal Deluxe',
    category: 'fancoil',
    brand: 'Royal',
    description: 'Кассетный фанкойл для коммерческих помещений',
    features: ['4-х сторонняя подача', 'Пульт ДУ', 'Высокая мощность'],
    image: '🏢',
  },
  {
    id: 6,
    name: 'Фанкойл Royal Standard',
    category: 'fancoil',
    brand: 'Royal',
    description: 'Настенный фанкойл для жилых помещений',
    features: ['Стильный дизайн', 'Низкий уровень шума', '3 скорости'],
    image: '🏠',
  },
  {
    id: 7,
    name: 'Электрический теплый пол',
    category: 'heating',
    brand: 'Комфорт',
    description: 'Надежная система обогрева для любых помещений',
    features: ['Терморегулятор', 'Равномерный обогрев', 'Экономичность'],
    image: '🔥',
  },
  {
    id: 8,
    name: 'Водяной теплый пол',
    category: 'heating',
    brand: 'Премиум',
    description: 'Система водяного обогрева пола для больших площадей',
    features: ['Долговечность', 'Совместим с любым котлом', 'Энергоэффективность'],
    image: '♨️',
  },
];

interface CatalogProps {
  onAddToCart: (product: Product) => void;
}

export default function Catalog({ onAddToCart }: CatalogProps) {
  const [activeTab, setActiveTab] = useState('all');

  const filteredProducts = activeTab === 'all' 
    ? products 
    : products.filter(p => p.category === activeTab);

  const handleAddToCart = (product: Product) => {
    onAddToCart(product);
    toast.success('Товар добавлен в корзину', {
      description: `${product.name} добавлен. Позвоните нам для оформления заказа.`,
    });
  };

  return (
    <section id="catalog" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Каталог товаров
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Широкий выбор климатического оборудования для дома и офиса
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-8 bg-card h-auto">
            <TabsTrigger value="all" className="py-3">
              <Icon name="LayoutGrid" size={18} className="mr-2" />
              Все
            </TabsTrigger>
            <TabsTrigger value="ventilation" className="py-3">
              <Icon name="Wind" size={18} className="mr-2" />
              Вентиляция
            </TabsTrigger>
            <TabsTrigger value="conditioner" className="py-3">
              <Icon name="Snowflake" size={18} className="mr-2" />
              Кондиционеры
            </TabsTrigger>
            <TabsTrigger value="fancoil" className="py-3">
              <Icon name="Fan" size={18} className="mr-2" />
              Фанкойлы
            </TabsTrigger>
            <TabsTrigger value="heating" className="py-3">
              <Icon name="Flame" size={18} className="mr-2" />
              Тёплый пол
            </TabsTrigger>
          </TabsList>

          <TabsContent value={activeTab} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product, index) => (
                <Card 
                  key={product.id} 
                  className="overflow-hidden hover:shadow-xl transition-all hover:scale-105 hover:border-primary/50 bg-card animate-scale-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <CardHeader className="pb-4">
                    <div className="w-full h-32 flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg mb-3">
                      <span className="text-6xl">{product.image}</span>
                    </div>
                    <Badge className="w-fit mb-2">{product.brand}</Badge>
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                    <CardDescription>{product.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-2 text-sm">
                        <Icon name="Check" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </CardContent>
                  
                  <CardFooter className="flex flex-col space-y-2">
                    <Button 
                      className="w-full bg-primary hover:bg-primary/90"
                      onClick={() => handleAddToCart(product)}
                    >
                      <Icon name="ShoppingCart" size={18} className="mr-2" />
                      В корзину
                    </Button>
                    <a href="tel:+79174192114" className="w-full">
                      <Button variant="outline" className="w-full border-secondary text-secondary hover:bg-secondary hover:text-white">
                        <Icon name="Phone" size={18} className="mr-2" />
                        Узнать цену
                      </Button>
                    </a>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-12 p-6 bg-card rounded-2xl border border-border text-center">
          <Icon name="Info" size={32} className="text-primary mx-auto mb-3" />
          <h3 className="text-xl font-semibold text-white mb-2">Не нашли нужное оборудование?</h3>
          <p className="text-muted-foreground mb-4">
            Позвоните нам, и мы поможем подобрать оптимальное решение под ваши задачи
          </p>
          <a href="tel:+79174192114">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90">
              <Icon name="Phone" size={20} className="mr-2" />
              +7 917 419-21-14
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
