import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [currentView, setCurrentView] = useState("marketplace");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [createStep, setCreateStep] = useState(1);

  const categories = [
    { id: "all", name: "Все категории", icon: "Grid3X3" },
    { id: "books", name: "Учебники", icon: "BookOpen" },
    { id: "tech", name: "Техника", icon: "Laptop" },
    { id: "clothes", name: "Одежда", icon: "Shirt" },
    { id: "services", name: "Услуги", icon: "Users" },
    { id: "transport", name: "Транспорт", icon: "Car" },
  ];

  const products = [
    {
      id: 1,
      title: "Учебник по математике",
      price: "1500 ₽",
      category: "books",
      seller: "Анна К.",
      rating: 4.8,
      verified: true,
      image: "/placeholder.svg",
      description: "Отличное состояние, все страницы целые",
    },
    {
      id: 2,
      title: "MacBook Air M1",
      price: "75000 ₽",
      category: "tech",
      seller: "Михаил П.",
      rating: 5.0,
      verified: true,
      image: "/placeholder.svg",
      description: "Продаю в связи с покупкой нового",
    },
    {
      id: 3,
      title: "Помощь с курсовой",
      price: "3000 ₽",
      category: "services",
      seller: "Елена С.",
      rating: 4.9,
      verified: true,
      image: "/placeholder.svg",
      description: "Экономические дисциплины",
    },
  ];

  const renderHeader = () => (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-orange rounded-lg flex items-center justify-center">
              <Icon name="GraduationCap" size={20} className="text-white" />
            </div>
            <span className="inline-block font-bold text-xl bg-gradient-to-r from-primary to-orange bg-clip-text text-transparent">
              stuDDeal
            </span>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Button
              variant={currentView === "marketplace" ? "default" : "ghost"}
              onClick={() => setCurrentView("marketplace")}
              className="text-sm"
            >
              <Icon name="Store" size={16} className="mr-2" />
              Маркетплейс
            </Button>
            <Button
              variant={currentView === "profile" ? "default" : "ghost"}
              onClick={() => setCurrentView("profile")}
              className="text-sm"
            >
              <Icon name="User" size={16} className="mr-2" />
              Профиль
            </Button>
            <Button
              variant={currentView === "chat" ? "default" : "ghost"}
              onClick={() => setCurrentView("chat")}
              className="text-sm"
            >
              <Icon name="MessageCircle" size={16} className="mr-2" />
              Чат
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );

  const renderHero = () => (
    <section className="relative py-16 px-4 bg-gradient-to-br from-primary/5 via-background to-orange/5">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iNCIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
      <div className="container mx-auto text-center relative">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-orange to-yellow bg-clip-text text-transparent">
          Студенческий маркетплейс
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Покупай и продавай между студентами одного вуза. Безопасно, удобно, с
          рейтингами.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
          <div className="relative flex-1 w-full">
            <Icon
              name="Search"
              size={20}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
            />
            <Input
              placeholder="Поиск товаров и услуг..."
              className="pl-10 h-12 bg-background/80 backdrop-blur-sm border-primary/20"
            />
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-orange hover:opacity-90 text-white px-8"
              >
                <Icon name="Plus" size={20} className="mr-2" />
                Создать объявление
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Создание объявления</DialogTitle>
              </DialogHeader>
              {renderCreateProductForm()}
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );

  const renderCategories = () => (
    <section className="py-8 px-4">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className="flex items-center gap-2"
            >
              <Icon name={category.icon} size={16} />
              {category.name}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );

  const renderProducts = () => (
    <section className="py-8 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products
            .filter(
              (product) =>
                selectedCategory === "all" ||
                product.category === selectedCategory,
            )
            .map((product) => (
              <Card
                key={product.id}
                className="group hover:shadow-lg transition-all duration-300 bg-card/80 backdrop-blur-sm border-primary/10 hover:border-primary/30"
              >
                <CardHeader className="pb-3">
                  <div className="aspect-square bg-gradient-to-br from-muted to-primary/10 rounded-lg mb-3 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-lg">{product.title}</CardTitle>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">
                      {product.price}
                    </span>
                    <Badge variant="secondary">
                      {categories.find((c) => c.id === product.category)?.name}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Avatar className="w-6 h-6">
                        <AvatarFallback className="bg-primary/20 text-xs">
                          {product.seller[0]}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-sm font-medium">
                        {product.seller}
                      </span>
                      {product.verified && (
                        <Icon
                          name="BadgeCheck"
                          size={16}
                          className="text-primary"
                        />
                      )}
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon
                        name="Star"
                        size={16}
                        className="text-yellow fill-yellow"
                      />
                      <span className="text-sm font-medium">
                        {product.rating}
                      </span>
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-gradient-to-r from-primary to-orange text-white">
                    <Icon name="MessageCircle" size={16} className="mr-2" />
                    Написать
                  </Button>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>
    </section>
  );

  const renderProfile = () => (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-card/80 backdrop-blur-sm border-primary/10">
          <CardHeader>
            <div className="flex items-center gap-4">
              <Avatar className="w-20 h-20">
                <AvatarFallback className="bg-primary/20 text-2xl">
                  АК
                </AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-2xl">Анна Козлова</CardTitle>
                <p className="text-muted-foreground">anna.kozlova@msu.ru</p>
                <div className="flex items-center gap-2 mt-2">
                  <Badge
                    variant="default"
                    className="bg-primary/20 text-primary"
                  >
                    <Icon name="BadgeCheck" size={14} className="mr-1" />
                    Студент МГУ
                  </Badge>
                  <div className="flex items-center gap-1">
                    <Icon
                      name="Star"
                      size={16}
                      className="text-yellow fill-yellow"
                    />
                    <span className="font-medium">4.8</span>
                    <span className="text-muted-foreground">(23 отзыва)</span>
                  </div>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="listings" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="listings">Мои объявления</TabsTrigger>
                <TabsTrigger value="purchases">Покупки</TabsTrigger>
                <TabsTrigger value="reviews">Отзывы</TabsTrigger>
              </TabsList>
              <TabsContent value="listings" className="space-y-4 mt-6">
                <div className="grid gap-4">
                  {products.slice(0, 2).map((product) => (
                    <Card key={product.id} className="border-primary/10">
                      <CardContent className="flex items-center gap-4 pt-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-muted to-primary/10 rounded-lg flex items-center justify-center">
                          <Icon
                            name="Image"
                            size={24}
                            className="text-muted-foreground"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold">{product.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            {product.description}
                          </p>
                          <div className="flex items-center gap-4 mt-2">
                            <span className="font-bold text-primary">
                              {product.price}
                            </span>
                            <Badge variant="outline">Активно</Badge>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          <Icon name="Edit" size={16} className="mr-2" />
                          Редактировать
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="purchases" className="space-y-4 mt-6">
                <div className="text-center py-8">
                  <Icon
                    name="ShoppingBag"
                    size={48}
                    className="mx-auto text-muted-foreground mb-4"
                  />
                  <h3 className="text-lg font-semibold mb-2">
                    Пока нет покупок
                  </h3>
                  <p className="text-muted-foreground">
                    Когда вы что-то купите, это появится здесь
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="reviews" className="space-y-4 mt-6">
                <div className="space-y-4">
                  <Card className="border-primary/10">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <Avatar className="w-8 h-8">
                          <AvatarFallback className="bg-primary/20 text-xs">
                            МП
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-medium">Михаил П.</span>
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Icon
                                  key={i}
                                  name="Star"
                                  size={14}
                                  className="text-yellow fill-yellow"
                                />
                              ))}
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Отличный продавец! Учебник в идеальном состоянии,
                            быстро ответила на все вопросы.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderChat = () => (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <Card className="h-[600px] bg-card/80 backdrop-blur-sm border-primary/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="MessageCircle" size={20} />
              Чаты
            </CardTitle>
          </CardHeader>
          <CardContent className="h-full p-0">
            <div className="flex h-full">
              <div className="w-1/3 border-r border-primary/10 p-4">
                <div className="space-y-2">
                  {[
                    {
                      name: "Михаил П.",
                      lastMessage: "MacBook ещё актуален?",
                      time: "14:30",
                      unread: true,
                    },
                    {
                      name: "Елена С.",
                      lastMessage: "Когда удобно встретиться?",
                      time: "12:15",
                      unread: false,
                    },
                    {
                      name: "Дмитрий К.",
                      lastMessage: "Спасибо за книгу!",
                      time: "Вчера",
                      unread: false,
                    },
                  ].map((chat, index) => (
                    <Card
                      key={index}
                      className="p-3 cursor-pointer hover:bg-primary/5 transition-colors border-primary/10"
                    >
                      <div className="flex items-center gap-3">
                        <Avatar className="w-10 h-10">
                          <AvatarFallback className="bg-primary/20">
                            {chat.name[0]}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <span className="font-medium truncate">
                              {chat.name}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              {chat.time}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground truncate">
                            {chat.lastMessage}
                          </p>
                        </div>
                        {chat.unread && (
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                        )}
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
              <div className="flex-1 flex flex-col">
                <div className="p-4 border-b border-primary/10">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback className="bg-primary/20">
                        МП
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-medium">Михаил П.</h3>
                      <p className="text-sm text-muted-foreground">онлайн</p>
                    </div>
                  </div>
                </div>
                <div className="flex-1 p-4 space-y-4 overflow-y-auto">
                  <div className="flex justify-start">
                    <div className="max-w-xs p-3 rounded-lg bg-muted">
                      <p className="text-sm">Привет! MacBook ещё продается?</p>
                      <span className="text-xs text-muted-foreground">
                        14:25
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="max-w-xs p-3 rounded-lg bg-primary text-white">
                      <p className="text-sm">
                        Да, актуален! Можем встретиться сегодня
                      </p>
                      <span className="text-xs opacity-70">14:26</span>
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="max-w-xs p-3 rounded-lg bg-muted">
                      <p className="text-sm">Отлично! В какое время удобно?</p>
                      <span className="text-xs text-muted-foreground">
                        14:30
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-4 border-t border-primary/10">
                  <div className="flex gap-2">
                    <Input
                      placeholder="Написать сообщение..."
                      className="flex-1"
                    />
                    <Button size="icon" className="bg-primary">
                      <Icon name="Send" size={16} />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderCreateProductForm = () => (
    <div className="space-y-6">
      {createStep === 1 && (
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Название товара</Label>
            <Input id="title" placeholder="Введите название..." />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Описание</Label>
            <Textarea
              id="description"
              placeholder="Опишите товар..."
              rows={4}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="price">Цена (₽)</Label>
            <Input id="price" type="number" placeholder="0" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="category">Категория</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Выберите категорию" />
              </SelectTrigger>
              <SelectContent>
                {categories.slice(1).map((category) => (
                  <SelectItem key={category.id} value={category.id}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="location">Локация (необязательно)</Label>
            <Input id="location" placeholder="Общежитие, адрес..." />
          </div>
          <Button onClick={() => setCreateStep(2)} className="w-full">
            Далее: Добавить фото
          </Button>
        </div>
      )}

      {createStep === 2 && (
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Фотографии товара</Label>
            <div className="border-2 border-dashed border-primary/20 rounded-lg p-8 text-center">
              <Icon
                name="ImagePlus"
                size={48}
                className="mx-auto text-muted-foreground mb-4"
              />
              <p className="text-muted-foreground mb-2">
                Перетащите фото или нажмите для выбора
              </p>
              <Button variant="outline">
                <Icon name="Upload" size={16} className="mr-2" />
                Выбрать файлы
              </Button>
            </div>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={() => setCreateStep(1)}
              className="flex-1"
            >
              Назад
            </Button>
            <Button className="flex-1 bg-gradient-to-r from-primary to-orange text-white">
              Опубликовать
            </Button>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-orange/5">
      {renderHeader()}

      {currentView === "marketplace" && (
        <>
          {renderHero()}
          {renderCategories()}
          {renderProducts()}
        </>
      )}

      {currentView === "profile" && renderProfile()}
      {currentView === "chat" && renderChat()}
    </div>
  );
};

export default Index;
