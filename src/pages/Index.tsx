import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Catalog from '@/components/Catalog';
import Cart from '@/components/Cart';
import About from '@/components/About';
import Reviews from '@/components/Reviews';
import Consultation from '@/components/Consultation';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';

interface CartItem {
  id: number;
  name: string;
  brand: string;
  image: string;
}

export default function Index() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleAddToCart = (product: any) => {
    const cartItem: CartItem = {
      id: product.id,
      name: product.name,
      brand: product.brand,
      image: product.image,
    };
    
    if (!cartItems.find(item => item.id === cartItem.id)) {
      setCartItems([...cartItems, cartItem]);
    }
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  return (
    <div className="min-h-screen">
      <Header cartCount={cartItems.length} />
      <main>
        <Hero />
        <Catalog onAddToCart={handleAddToCart} />
        <Cart 
          items={cartItems} 
          onRemove={handleRemoveFromCart}
          onClear={handleClearCart}
        />
        <About />
        <Reviews />
        <Consultation />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}