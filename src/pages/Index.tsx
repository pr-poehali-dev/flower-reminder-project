import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Calendar } from '@/components/ui/calendar'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import Icon from '@/components/ui/icon'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const Index = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')

  const plans = [
    {
      name: 'Базовый',
      price: '990₽',
      period: '/месяц',
      features: ['До 3 напоминаний', 'Email уведомления', 'Основная поддержка'],
      popular: false
    },
    {
      name: 'Премиум',
      price: '1990₽',
      period: '/месяц',
      features: ['Безлимитные напоминания', 'SMS + Email', 'Календарная интеграция', 'Приоритетная поддержка'],
      popular: true
    },
    {
      name: 'VIP',
      price: '3990₽',
      period: '/месяц',
      features: ['Всё из Премиум', 'Персональный менеджер', 'Индивидуальные букеты', 'Срочная доставка'],
      popular: false
    }
  ]

  const upcomingReminders = [
    { date: '14 февраля', recipient: 'Анна', occasion: 'День св. Валентина', status: 'active' },
    { date: '8 марта', recipient: 'Мама', occasion: '8 марта', status: 'scheduled' },
    { date: '25 мая', recipient: 'Жена', occasion: 'Годовщина', status: 'scheduled' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-flower-pink/10 via-white to-flower-mint/10">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Flower" size={32} className="text-flower-pink" />
              <span className="text-xl font-semibold text-gray-900">FlowerRemind</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-flower-pink transition-colors">Главная</a>
              <a href="#" className="text-gray-700 hover:text-flower-pink transition-colors">Напоминания</a>
              <a href="#" className="text-gray-700 hover:text-flower-pink transition-colors">Тарифы</a>
              <a href="#" className="text-gray-700 hover:text-flower-pink transition-colors">Контакты</a>
            </div>
            <Button variant="outline" className="border-flower-pink text-flower-pink hover:bg-flower-pink hover:text-white">
              Войти
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Никогда не забывайте о 
              <span className="text-transparent bg-gradient-to-r from-flower-pink to-flower-mint bg-clip-text"> важных датах</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Автоматические напоминания о доставке цветов к праздникам, дням рождения и особым моментам. 
              Будьте внимательными всегда.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="bg-flower-pink hover:bg-flower-pink/90 text-white px-8 py-3 text-lg animate-scale-in">
              <Icon name="Calendar" size={20} className="mr-2" />
              Начать планирование
            </Button>
            <Button size="lg" variant="outline" className="border-flower-mint text-flower-mint hover:bg-flower-mint hover:text-white px-8 py-3 text-lg">
              <Icon name="Play" size={20} className="mr-2" />
              Посмотреть видео
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-flower-pink/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Calendar" size={32} className="text-flower-pink" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Умное планирование</h3>
              <p className="text-gray-600">Интеграция с календарем для точного времени доставки</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-flower-mint/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Bell" size={32} className="text-flower-mint" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Автоуведомления</h3>
              <p className="text-gray-600">SMS и email напоминания за нужное время</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-flower-dark/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Heart" size={32} className="text-flower-dark" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Забота о близких</h3>
              <p className="text-gray-600">Никогда не упустите важный момент</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Tabs */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="calendar" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="calendar">Календарь доставки</TabsTrigger>
              <TabsTrigger value="reminders">Мои напоминания</TabsTrigger>
              <TabsTrigger value="profile">Личный кабинет</TabsTrigger>
            </TabsList>
            
            <TabsContent value="calendar" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-8">
                <Card className="animate-fade-in">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="Calendar" size={24} className="mr-2 text-flower-pink" />
                      Выберите дату доставки
                    </CardTitle>
                    <CardDescription>
                      Планируйте доставку цветов заранее
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      className="rounded-md border w-full"
                    />
                  </CardContent>
                </Card>

                <Card className="animate-fade-in">
                  <CardHeader>
                    <CardTitle>Детали заказа</CardTitle>
                    <CardDescription>Информация о получателе и поводе</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="recipient">Получатель</Label>
                      <Input id="recipient" placeholder="Имя получателя" />
                    </div>
                    <div>
                      <Label htmlFor="occasion">Повод</Label>
                      <Input id="occasion" placeholder="День рождения, годовщина..." />
                    </div>
                    <div>
                      <Label htmlFor="notes">Заметки</Label>
                      <Input id="notes" placeholder="Дополнительные пожелания" />
                    </div>
                    <Button className="w-full bg-flower-pink hover:bg-flower-pink/90">
                      <Icon name="Plus" size={16} className="mr-2" />
                      Добавить напоминание
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="reminders" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="flex items-center">
                      <Icon name="Bell" size={24} className="mr-2 text-flower-mint" />
                      Предстоящие напоминания
                    </span>
                    <Badge variant="secondary">{upcomingReminders.length} активных</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingReminders.map((reminder, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-flower-pink/10 rounded-full flex items-center justify-center">
                            <Icon name="Calendar" size={20} className="text-flower-pink" />
                          </div>
                          <div>
                            <h4 className="font-semibold">{reminder.occasion}</h4>
                            <p className="text-sm text-gray-600">для {reminder.recipient} • {reminder.date}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge variant={reminder.status === 'active' ? 'default' : 'secondary'}>
                            {reminder.status === 'active' ? 'Активно' : 'Запланировано'}
                          </Badge>
                          <Button variant="ghost" size="sm">
                            <Icon name="Edit" size={16} />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="profile" className="space-y-6">
              <div className="grid lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="User" size={24} className="mr-2 text-flower-dark" />
                      Профиль пользователя
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="name">Имя</Label>
                      <Input 
                        id="name" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ваше имя" 
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com" 
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Телефон</Label>
                      <Input id="phone" placeholder="+7 (999) 123-45-67" />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">SMS уведомления</span>
                      <Badge variant="secondary">Включены</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Email уведомления</span>
                      <Badge variant="secondary">Включены</Badge>
                    </div>
                    <Button className="w-full bg-flower-dark hover:bg-flower-dark/90">
                      Сохранить изменения
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Статистика</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-flower-pink mb-2">24</div>
                        <p className="text-sm text-gray-600">Успешных доставок</p>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-flower-mint mb-2">5</div>
                        <p className="text-sm text-gray-600">Активных напоминаний</p>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-flower-dark mb-2">98%</div>
                        <p className="text-sm text-gray-600">Точность доставки</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Выберите свой тариф</h2>
            <p className="text-xl text-gray-600">Подберите план, который подходит именно вам</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-flower-pink shadow-lg scale-105' : ''} animate-fade-in hover:shadow-lg transition-all`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-flower-pink">
                    Популярный
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold text-flower-pink mt-4">
                    {plan.price}
                    <span className="text-base font-normal text-gray-600">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Icon name="Check" size={16} className="text-flower-mint mr-3" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-flower-pink hover:bg-flower-pink/90' : 'bg-flower-mint hover:bg-flower-mint/90'}`}
                  >
                    Выбрать план
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 px-4 border-t">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Flower" size={28} className="text-flower-pink" />
                <span className="text-lg font-semibold">FlowerRemind</span>
              </div>
              <p className="text-gray-600 text-sm">
                Сервис умных напоминаний о доставке цветов для особых моментов
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Сервис</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-flower-pink transition-colors">Как это работает</a></li>
                <li><a href="#" className="hover:text-flower-pink transition-colors">Тарифы</a></li>
                <li><a href="#" className="hover:text-flower-pink transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-flower-pink transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-flower-pink transition-colors">Помощь</a></li>
                <li><a href="#" className="hover:text-flower-pink transition-colors">Обратная связь</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p className="flex items-center">
                  <Icon name="Mail" size={16} className="mr-2" />
                  hello@flowerremind.ru
                </p>
                <p className="flex items-center">
                  <Icon name="Phone" size={16} className="mr-2" />
                  +7 (999) 123-45-67
                </p>
              </div>
            </div>
          </div>
          <Separator className="my-8" />
          <div className="text-center text-sm text-gray-600">
            © 2024 FlowerRemind. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index