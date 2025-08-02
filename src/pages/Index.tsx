import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import Icon from '@/components/ui/icon'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Calendar } from '@/components/ui/calendar'

const Index = () => {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false)
  const [isQuestionnaireOpen, setIsQuestionnaireOpen] = useState(false)
  const [isPaymentOpen, setIsPaymentOpen] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState('')
  const [deliveryDate, setDeliveryDate] = useState<Date | undefined>(new Date())
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    recipient: '',
    occasion: '',
    flowerType: '',
    budget: '',
    address: '',
    notes: '',
    reminderDays: '7'
  })

  const plans = [
    {
      id: 'basic',
      name: 'Базовый',
      price: '990₽',
      period: '/год',
      features: ['До 5 напоминаний', 'Email уведомления', 'Базовая поддержка'],
      popular: false
    },
    {
      id: 'premium',
      name: 'Премиум',
      price: '1990₽',
      period: '/год',
      features: ['Безлимитные напоминания', 'SMS + Email', 'Календарная интеграция', 'Приоритетная поддержка'],
      popular: true
    },
    {
      id: 'vip',
      name: 'VIP',
      price: '3990₽',
      period: '/год',
      features: ['Всё из Премиум', 'Персональный консультант', 'Рекомендации флористов', 'Скидки у партнёров'],
      popular: false
    }
  ]

  const handleRegister = () => {
    setIsRegisterOpen(false)
    setIsPaymentOpen(true)
  }

  const handlePayment = () => {
    setIsPaymentOpen(false)
    setIsQuestionnaireOpen(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-flower-pink/5 via-white to-flower-mint/5">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Flower2" size={32} className="text-flower-pink" />
              <span className="text-xl font-semibold text-gray-900">FlowerRemind</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#how-it-works" className="text-gray-700 hover:text-flower-pink transition-colors">Как работает</a>
              <a href="#pricing" className="text-gray-700 hover:text-flower-pink transition-colors">Тарифы</a>
              <a href="#about" className="text-gray-700 hover:text-flower-pink transition-colors">О нас</a>
            </div>
            <Dialog open={isRegisterOpen} onOpenChange={setIsRegisterOpen}>
              <DialogTrigger asChild>
                <Button className="bg-flower-pink hover:bg-flower-pink/90 text-white">
                  Начать
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Регистрация в FlowerRemind</DialogTitle>
                  <DialogDescription>
                    Заполните данные для создания аккаунта
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="reg-name">Имя</Label>
                    <Input 
                      id="reg-name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <Label htmlFor="reg-email">Email</Label>
                    <Input 
                      id="reg-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="reg-phone">Телефон</Label>
                    <Input 
                      id="reg-phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="+7 (999) 123-45-67"
                    />
                  </div>
                  <Button onClick={handleRegister} className="w-full bg-flower-pink hover:bg-flower-pink/90">
                    Продолжить к оплате
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Никогда не забывайте
              <br />
              <span className="text-transparent bg-gradient-to-r from-flower-pink to-flower-mint bg-clip-text">
                дарить цветы
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Зарегистрируйтесь один раз, заполните анкету и получайте напоминания о важных датах. 
              Мы позаботимся о том, чтобы вы всегда были внимательными к близким.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Dialog open={isRegisterOpen} onOpenChange={setIsRegisterOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-flower-pink hover:bg-flower-pink/90 text-white px-8 py-3 text-lg animate-scale-in">
                  <Icon name="Sparkles" size={20} className="mr-2" />
                  Начать планирование
                </Button>
              </DialogTrigger>
            </Dialog>
            <Button size="lg" variant="outline" className="border-flower-mint text-flower-mint hover:bg-flower-mint hover:text-white px-8 py-3 text-lg">
              <Icon name="Play" size={20} className="mr-2" />
              Посмотреть видео
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center animate-fade-in">
              <div className="w-16 h-16 bg-flower-pink/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="CreditCard" size={32} className="text-flower-pink" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Одна регистрация</h3>
              <p className="text-gray-600">Платите только за подписку, заполняете анкету один раз</p>
            </div>
            <div className="text-center animate-fade-in">
              <div className="w-16 h-16 bg-flower-mint/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Calendar" size={32} className="text-flower-mint" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Планирование наперёд</h3>
              <p className="text-gray-600">Укажите дату доставки за месяц или даже за год</p>
            </div>
            <div className="text-center animate-fade-in">
              <div className="w-16 h-16 bg-flower-dark/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Bell" size={32} className="text-flower-dark" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Умные напоминания</h3>
              <p className="text-gray-600">SMS и email за неделю до даты с деталями заказа</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Как это работает</h2>
            <p className="text-xl text-gray-600">Простые шаги к заботливости</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-flower-pink rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                1
              </div>
              <h3 className="font-semibold mb-2">Регистрация</h3>
              <p className="text-gray-600 text-sm">Выберите тариф и оплатите подписку</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-flower-mint rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                2
              </div>
              <h3 className="font-semibold mb-2">Анкета</h3>
              <p className="text-gray-600 text-sm">Заполните информацию о получателе и предпочтениях</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-flower-dark rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                3
              </div>
              <h3 className="font-semibold mb-2">Планирование</h3>
              <p className="text-gray-600 text-sm">Укажите дату доставки и время напоминания</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-flower-pink to-flower-mint rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Heart" size={20} className="text-white" />
              </div>
              <h3 className="font-semibold mb-2">Напоминание</h3>
              <p className="text-gray-600 text-sm">Получайте уведомления и радуйте близких</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Тарифы</h2>
            <p className="text-xl text-gray-600">Выберите подходящий план подписки</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <Card key={plan.id} className={`relative ${plan.popular ? 'border-flower-pink shadow-lg scale-105' : ''} animate-fade-in hover:shadow-lg transition-all`}>
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
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <Icon name="Check" size={16} className="text-flower-mint mr-3" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Dialog open={isRegisterOpen} onOpenChange={setIsRegisterOpen}>
                    <DialogTrigger asChild>
                      <Button 
                        onClick={() => setSelectedPlan(plan.id)}
                        className={`w-full ${plan.popular ? 'bg-flower-pink hover:bg-flower-pink/90' : 'bg-flower-mint hover:bg-flower-mint/90'}`}
                      >
                        Выбрать {plan.name}
                      </Button>
                    </DialogTrigger>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Dialog */}
      <Dialog open={isPaymentOpen} onOpenChange={setIsPaymentOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Оплата подписки</DialogTitle>
            <DialogDescription>
              Выбранный тариф: {plans.find(p => p.id === selectedPlan)?.name}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <span>Тариф: {plans.find(p => p.id === selectedPlan)?.name}</span>
                <span className="font-bold">{plans.find(p => p.id === selectedPlan)?.price}</span>
              </div>
            </div>
            <div>
              <Label htmlFor="card-number">Номер карты</Label>
              <Input id="card-number" placeholder="1234 5678 9012 3456" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="expiry">Срок действия</Label>
                <Input id="expiry" placeholder="MM/YY" />
              </div>
              <div>
                <Label htmlFor="cvv">CVV</Label>
                <Input id="cvv" placeholder="123" />
              </div>
            </div>
            <Button onClick={handlePayment} className="w-full bg-flower-pink hover:bg-flower-pink/90">
              <Icon name="Lock" size={16} className="mr-2" />
              Оплатить {plans.find(p => p.id === selectedPlan)?.price}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Questionnaire Dialog */}
      <Dialog open={isQuestionnaireOpen} onOpenChange={setIsQuestionnaireOpen}>
        <DialogContent className="sm:max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Анкета планирования</DialogTitle>
            <DialogDescription>
              Заполните информацию для настройки напоминаний
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="recipient">Получатель</Label>
                <Input 
                  id="recipient"
                  value={formData.recipient}
                  onChange={(e) => setFormData({...formData, recipient: e.target.value})}
                  placeholder="Имя получателя"
                />
              </div>
              <div>
                <Label htmlFor="occasion">Повод</Label>
                <Select value={formData.occasion} onValueChange={(value) => setFormData({...formData, occasion: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите повод" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="birthday">День рождения</SelectItem>
                    <SelectItem value="anniversary">Годовщина</SelectItem>
                    <SelectItem value="valentine">День Св. Валентина</SelectItem>
                    <SelectItem value="march8">8 марта</SelectItem>
                    <SelectItem value="other">Другое</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div>
              <Label>Дата доставки</Label>
              <div className="mt-2">
                <Calendar
                  mode="single"
                  selected={deliveryDate}
                  onSelect={setDeliveryDate}
                  className="rounded-md border w-full"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="flower-type">Тип цветов</Label>
                <Select value={formData.flowerType} onValueChange={(value) => setFormData({...formData, flowerType: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Предпочтения" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="roses">Розы</SelectItem>
                    <SelectItem value="tulips">Тюльпаны</SelectItem>
                    <SelectItem value="chrysanthemums">Хризантемы</SelectItem>
                    <SelectItem value="mixed">Смешанный букет</SelectItem>
                    <SelectItem value="any">Любые</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="budget">Бюджет</Label>
                <Select value={formData.budget} onValueChange={(value) => setFormData({...formData, budget: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Диапазон цен" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1000-2000">1000-2000₽</SelectItem>
                    <SelectItem value="2000-5000">2000-5000₽</SelectItem>
                    <SelectItem value="5000-10000">5000-10000₽</SelectItem>
                    <SelectItem value="10000+">10000₽+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="address">Адрес доставки</Label>
              <Input 
                id="address"
                value={formData.address}
                onChange={(e) => setFormData({...formData, address: e.target.value})}
                placeholder="Улица, дом, квартира"
              />
            </div>

            <div>
              <Label htmlFor="reminder-days">Напомнить за</Label>
              <Select value={formData.reminderDays} onValueChange={(value) => setFormData({...formData, reminderDays: value})}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 день</SelectItem>
                  <SelectItem value="3">3 дня</SelectItem>
                  <SelectItem value="7">7 дней</SelectItem>
                  <SelectItem value="14">14 дней</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="notes">Дополнительные пожелания</Label>
              <Textarea 
                id="notes"
                value={formData.notes}
                onChange={(e) => setFormData({...formData, notes: e.target.value})}
                placeholder="Особые пожелания к букету или доставке"
                rows={3}
              />
            </div>

            <Button 
              onClick={() => setIsQuestionnaireOpen(false)} 
              className="w-full bg-flower-pink hover:bg-flower-pink/90"
            >
              <Icon name="CalendarCheck" size={16} className="mr-2" />
              Создать напоминание
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Footer */}
      <footer className="bg-white py-12 px-4 border-t">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Flower2" size={28} className="text-flower-pink" />
                <span className="text-lg font-semibold">FlowerRemind</span>
              </div>
              <p className="text-gray-600 text-sm">
                Сервис напоминаний о доставке цветов для особых моментов
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Сервис</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#how-it-works" className="hover:text-flower-pink transition-colors">Как работает</a></li>
                <li><a href="#pricing" className="hover:text-flower-pink transition-colors">Тарифы</a></li>
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