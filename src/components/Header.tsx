import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  cartCount?: number;
}

export default function Header({ cartCount = 0 }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Главная', href: '#hero' },
    { name: 'Каталог', href: '#catalog' },
    { name: 'О компании', href: '#about' },
    { name: 'Контакты', href: '#contacts' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
              <Icon name="Wind" size={24} className="text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Чистая Вентиляция</h1>
              <p className="text-xs text-muted-foreground">Климатическое оборудование</p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex flex-col items-end text-sm">
              <a href="tel:+79174192114" className="text-primary hover:text-secondary transition-colors font-semibold">
                +7 917 419-21-14
              </a>
              <a href="tel:+79174903477" className="text-muted-foreground hover:text-primary transition-colors text-xs">
                +7 917 490-34-77
              </a>
            </div>

            <Button
              variant="outline"
              size="icon"
              className="relative"
              onClick={() => {
                const cart = document.getElementById('cart');
                cart?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Icon name="ShoppingCart" size={20} />
              {cartCount > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-secondary">
                  {cartCount}
                </Badge>
              )}
            </Button>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Icon name="Menu" size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <div className="flex flex-col space-y-6 mt-8">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </a>
                  ))}
                  <div className="pt-6 border-t border-border">
                    <div className="flex flex-col space-y-2">
                      <a href="tel:+79174192114" className="text-primary hover:text-secondary transition-colors font-semibold">
                        +7 917 419-21-14
                      </a>
                      <a href="tel:+79174903477" className="text-muted-foreground hover:text-primary transition-colors">
                        +7 917 490-34-77
                      </a>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
