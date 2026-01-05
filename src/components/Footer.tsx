import Icon from '@/components/ui/icon';
import { Separator } from '@/components/ui/separator';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="Wind" size={20} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">Чистая Вентиляция</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Профессиональное климатическое оборудование для вашего комфорта
            </p>
            <p className="text-xs text-muted-foreground">
              © {currentYear} Чистая Вентиляция. Все права защищены.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 flex items-center">
              <Icon name="Link" size={18} className="text-primary mr-2" />
              Навигация
            </h4>
            <ul className="space-y-2">
              {[
                { name: 'Главная', href: '#hero' },
                { name: 'Каталог', href: '#catalog' },
                { name: 'О компании', href: '#about' },
                { name: 'Консультация', href: '#consultation' },
                { name: 'Контакты', href: '#contacts' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 flex items-center">
              <Icon name="Phone" size={18} className="text-primary mr-2" />
              Контакты
            </h4>
            <ul className="space-y-3">
              <li>
                <p className="text-xs text-muted-foreground mb-1">Основной номер:</p>
                <a
                  href="tel:+79174192114"
                  className="text-sm text-primary hover:text-secondary transition-colors font-semibold"
                >
                  +7 917 419-21-14
                </a>
              </li>
              <li>
                <p className="text-xs text-muted-foreground mb-1">Дополнительный:</p>
                <a
                  href="tel:+79174903477"
                  className="text-sm text-white hover:text-primary transition-colors"
                >
                  +7 917 490-34-77
                </a>
              </li>
              <li>
                <p className="text-xs text-muted-foreground mb-1">Адрес:</p>
                <p className="text-sm text-white">
                  г. Уфа, ул. Новоженова 90/1<br />
                  2 этаж, офис 210
                </p>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-6" />

        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
          <p>Климатическое оборудование в Уфе</p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span>Вентиляция</span>
            <span>•</span>
            <span>Кондиционеры</span>
            <span>•</span>
            <span>Фанкойлы</span>
            <span>•</span>
            <span>Теплый пол</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
