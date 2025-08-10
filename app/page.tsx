"use client"

import { useState } from "react"
import { Search, ShoppingCart, User, Menu, Star, Heart, Filter } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

const categories = [
  { name: "Watches", href: "/watches", image: "/placeholder.svg?height=200&width=200" },
  { name: "Goggles", href: "/goggles", image: "/placeholder.svg?height=200&width=200" },
  { name: "Gadgets", href: "/gadgets", image: "/placeholder.svg?height=200&width=200" },
  { name: "Shoes", href: "/shoes", image: "/placeholder.svg?height=200&width=200" },
  { name: "Clothing", href: "/clothing", image: "/placeholder.svg?height=200&width=200" },
]

const featuredProducts = [
  {
    id: 1,
    name: "Premium Smart Watch",
    price: 299.99,
    originalPrice: 399.99,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.8,
    reviews: 124,
    badge: "Best Seller"
  },
  {
    id: 2,
    name: "Sport Goggles Pro",
    price: 89.99,
    originalPrice: 129.99,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.6,
    reviews: 89,
    badge: "New"
  },
  {
    id: 3,
    name: "Wireless Earbuds Elite",
    price: 199.99,
    originalPrice: 249.99,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.9,
    reviews: 256,
    badge: "Exclusive"
  },
  {
    id: 4,
    name: "Running Shoes Ultra",
    price: 159.99,
    originalPrice: 199.99,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.7,
    reviews: 178,
    badge: "Sale"
  },
  {
    id: 5,
    name: "Designer Hoodie",
    price: 79.99,
    originalPrice: 99.99,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.5,
    reviews: 92,
    badge: "Trending"
  },
  {
    id: 6,
    name: "Smart Fitness Tracker",
    price: 129.99,
    originalPrice: 169.99,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.4,
    reviews: 143,
    badge: "Popular"
  },
]

export default function EcommercePage() {
  const [cartItems, setCartItems] = useState(0)

  const addToCart = () => {
    setCartItems(prev => prev + 1)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">E</span>
              </div>
              <span className="font-bold text-xl">EliteStore</span>
            </Link>
            
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/watches" className="text-sm font-medium hover:text-primary transition-colors">
                Watches
              </Link>
              <Link href="/goggles" className="text-sm font-medium hover:text-primary transition-colors">
                Goggles
              </Link>
              <Link href="/gadgets" className="text-sm font-medium hover:text-primary transition-colors">
                Gadgets
              </Link>
              <Link href="/shoes" className="text-sm font-medium hover:text-primary transition-colors">
                Shoes
              </Link>
              <Link href="/clothing" className="text-sm font-medium hover:text-primary transition-colors">
                Clothing
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center space-x-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="w-[300px] pl-8"
                />
              </div>
            </div>

            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {cartItems > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                  {cartItems}
                </Badge>
              )}
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Sign In</DropdownMenuItem>
                <DropdownMenuItem>Create Account</DropdownMenuItem>
                <DropdownMenuItem>My Orders</DropdownMenuItem>
                <DropdownMenuItem>Wishlist</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col space-y-4 mt-6">
                  <Link href="/watches" className="text-sm font-medium">Watches</Link>
                  <Link href="/goggles" className="text-sm font-medium">Goggles</Link>
                  <Link href="/gadgets" className="text-sm font-medium">Gadgets</Link>
                  <Link href="/shoes" className="text-sm font-medium">Shoes</Link>
                  <Link href="/clothing" className="text-sm font-medium">Clothing</Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-900 to-slate-700 text-white">
        <div className="container mx-auto px-4 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Discover Premium
                <span className="text-primary"> Lifestyle</span> Products
              </h1>
              <p className="text-xl mb-8 text-slate-300">
                From luxury watches to cutting-edge gadgets, find everything you need to elevate your style and tech game.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8">
                  Shop Now
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white hover:text-slate-900">
                  Explore Categories
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="Premium Products"
                width={500}
                height={500}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categories.map((category) => (
              <Link key={category.name} href={category.href} className="group">
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="aspect-square relative">
                      <Image
                        src={category.image || "/placeholder.svg"}
                        alt={category.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </CardContent>
                  <CardFooter className="p-4">
                    <h3 className="font-semibold text-center w-full">{category.name}</h3>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Featured Products</h2>
            <Button variant="outline" className="hidden md:flex">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="relative aspect-square">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-3 left-3" variant="secondary">
                      {product.badge}
                    </Badge>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="absolute top-3 right-3 bg-white/80 hover:bg-white"
                    >
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
                <CardFooter className="p-6">
                  <div className="w-full">
                    <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating)
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {product.rating} ({product.reviews})
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold">${product.price}</span>
                        <span className="text-sm text-muted-foreground line-through">
                          ${product.originalPrice}
                        </span>
                      </div>
                      <Button onClick={addToCart} size="sm">
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8 opacity-90">
            Get the latest deals and exclusive offers delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white text-black"
            />
            <Button variant="secondary" className="whitespace-nowrap">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">E</span>
                </div>
                <span className="font-bold text-xl">EliteStore</span>
              </div>
              <p className="text-slate-400">
                Your destination for premium lifestyle products and exclusive gadgets.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Categories</h3>
              <ul className="space-y-2 text-slate-400">
                <li><Link href="/watches" className="hover:text-white transition-colors">Watches</Link></li>
                <li><Link href="/goggles" className="hover:text-white transition-colors">Goggles</Link></li>
                <li><Link href="/gadgets" className="hover:text-white transition-colors">Gadgets</Link></li>
                <li><Link href="/shoes" className="hover:text-white transition-colors">Shoes</Link></li>
                <li><Link href="/clothing" className="hover:text-white transition-colors">Clothing</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Customer Service</h3>
              <ul className="space-y-2 text-slate-400">
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link href="/shipping" className="hover:text-white transition-colors">Shipping Info</Link></li>
                <li><Link href="/returns" className="hover:text-white transition-colors">Returns</Link></li>
                <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Account</h3>
              <ul className="space-y-2 text-slate-400">
                <li><Link href="/account" className="hover:text-white transition-colors">My Account</Link></li>
                <li><Link href="/orders" className="hover:text-white transition-colors">Order History</Link></li>
                <li><Link href="/wishlist" className="hover:text-white transition-colors">Wishlist</Link></li>
                <li><Link href="/newsletter" className="hover:text-white transition-colors">Newsletter</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 EliteStore. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
