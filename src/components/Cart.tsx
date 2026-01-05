import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

interface CartItem {
  id: number;
  name: string;
  brand: string;
  image: string;
}

interface CartProps {
  items: CartItem[];
  onRemove: (id: number) => void;
  onClear: () => void;
}

export default function Cart({ items, onRemove, onClear }: CartProps) {
  return (
    <section id="cart" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Корзина
          </h2>
          <p className="text-xl text-muted-foreground">
            Выбранные товары для консультации
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Выбранные товары ({items.length})</span>
                {items.length > 0 && (
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={onClear}
                    className="text-destructive hover:text-destructive"
                  >
                    <Icon name="Trash2" size={16} className="mr-2" />
                    Очистить
                  </Button>
                )}
              </CardTitle>
              <CardDescription>
                Позвоните нам для уточнения цен и оформления заказа
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              {items.length === 0 ? (
                <div className="text-center py-12">
                  <Icon name="ShoppingCart" size={64} className="text-muted-foreground mx-auto mb-4 opacity-50" />
                  <p className="text-lg text-muted-foreground mb-4">Корзина пуста</p>
                  <Button 
                    onClick={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-primary hover:bg-primary/90"
                  >
                    Перейти в каталог
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item, index) => (
                    <div key={item.id}>
                      <div className="flex items-center justify-between py-4">
                        <div className="flex items-center space-x-4">
                          <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center text-3xl">
                            {item.image}
                          </div>
                          <div>
                            <h4 className="font-semibold text-white">{item.name}</h4>
                            <p className="text-sm text-muted-foreground">{item.brand}</p>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => onRemove(item.id)}
                          className="text-destructive hover:text-destructive"
                        >
                          <Icon name="X" size={20} />
                        </Button>
                      </div>
                      {index < items.length - 1 && <Separator />}
                    </div>
                  ))}

                  <div className="pt-6 space-y-4">
                    <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                      <div className="flex items-start space-x-3">
                        <Icon name="Info" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                        <div className="space-y-2">
                          <p className="text-sm font-medium text-white">
                            Для уточнения цен и наличия товаров позвоните нам:
                          </p>
                          <div className="space-y-1">
                            <a href="tel:+79174192114" className="block text-primary hover:text-secondary transition-colors font-semibold">
                              +7 917 419-21-14
                            </a>
                            <p className="text-xs text-muted-foreground">Основной номер для заказов</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <a href="tel:+79174192114" className="flex-1">
                        <Button className="w-full bg-primary hover:bg-primary/90 h-12">
                          <Icon name="Phone" size={20} className="mr-2" />
                          Позвонить для заказа
                        </Button>
                      </a>
                      <Button 
                        variant="outline" 
                        className="flex-1 h-12 border-secondary text-secondary hover:bg-secondary hover:text-white"
                        onClick={() => document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' })}
                      >
                        <Icon name="MessageSquare" size={20} className="mr-2" />
                        Консультация
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
