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
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'

const Dashboard = () => {
  const [isNewReminderOpen, setIsNewReminderOpen] = useState(false)
  const [deliveryDate, setDeliveryDate] = useState<Date | undefined>(new Date())
  
  const [formData, setFormData] = useState({
    recipient: '',
    occasion: '',
    flowerType: '',
    budget: '',
    address: '',
    notes: '',
    reminderDays: '7'
  })

  const upcomingReminders = [
    { 
      id: 1,
      date: new Date('2024-02-14'), 
      recipient: 'Анна', 
      occasion: 'День св. Валентина', 
      status: 'active',
      flowerType: 'Розы',
      budget: '2000-5000₽',
      address: 'ул. Пушкина, 15'
    },
    { 
      id: 2,
      date: new Date('2024-03-08'), 
      recipient: 'Мама', 
      occasion: '8 марта', 
      status: 'scheduled',
      flowerType: 'Тюльпаны',
      budget: '1000-2000₽',
      address: 'ул. Ленина, 42'
    },
    { 
      id: 3,
      date: new Date('2024-05-25'), 
      recipient: 'Жена', 
      occasion: 'Годовщина', 
      status: 'scheduled',
      flowerType: 'Смешанный букет',
      budget: '5000-10000₽',
      address: 'ул. Мира, 8'
    }
  ]

  const handleCreateReminder = () => {
    setIsNewReminderOpen(false)
    setFormData({
      recipient: '',
      occasion: '',
      flowerType: '',
      budget: '',
      address: '',
      notes: '',
      reminderDays: '7'
    })
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
              <a href="#" className="text-flower-pink font-medium">Мои напоминания</a>
              <a href="#" className="text-gray-700 hover:text-flower-pink transition-colors">Профиль</a>
              <a href="#" className="text-gray-700 hover:text-flower-pink transition-colors">Поддержка</a>
            </div>
            <Button variant="outline" className="border-flower-pink text-flower-pink hover:bg-flower-pink hover:text-white">
              Выйти
            </Button>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="py-8 px-4 bg-white border-b">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Добро пожаловать, Иван!</h1>
              <p className="text-gray-600">Управляйте своими напоминаниями о доставке цветов</p>
            </div>
            <Dialog open={isNewReminderOpen} onOpenChange={setIsNewReminderOpen}>
              <DialogTrigger asChild>
                <Button className="bg-flower-pink hover:bg-flower-pink/90 text-white">
                  <Icon name="Plus" size={16} className="mr-2" />
                  Новое напоминание
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-2xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Создать новое напоминание</DialogTitle>
                  <DialogDescription>
                    Заполните информацию для планирования доставки цветов
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
                    onClick={handleCreateReminder} 
                    className="w-full bg-flower-pink hover:bg-flower-pink/90"
                  >
                    <Icon name="CalendarCheck" size={16} className="mr-2" />
                    Создать напоминание
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      {/* Stats Cards */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="animate-fade-in">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Активных напоминаний</p>
                    <p className="text-3xl font-bold text-flower-pink">3</p>
                  </div>
                  <div className="w-12 h-12 bg-flower-pink/10 rounded-full flex items-center justify-center">
                    <Icon name="Bell" size={24} className="text-flower-pink" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="animate-fade-in">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Успешных доставок</p>
                    <p className="text-3xl font-bold text-flower-mint">24</p>
                  </div>
                  <div className="w-12 h-12 bg-flower-mint/10 rounded-full flex items-center justify-center">
                    <Icon name="CheckCircle" size={24} className="text-flower-mint" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="animate-fade-in">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Дней в подписке</p>
                    <p className="text-3xl font-bold text-flower-dark">127</p>
                  </div>
                  <div className="w-12 h-12 bg-flower-dark/10 rounded-full flex items-center justify-center">
                    <Icon name="Calendar" size={24} className="text-flower-dark" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reminders List */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <Card className="animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center">
                  <Icon name="Calendar" size={24} className="mr-2 text-flower-pink" />
                  Мои напоминания
                </span>
                <Badge variant="secondary">{upcomingReminders.length} активных</Badge>
              </CardTitle>
              <CardDescription>
                Ваши запланированные доставки цветов
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingReminders.map((reminder) => (
                  <div key={reminder.id} className="border rounded-lg p-6 hover:bg-gray-50 transition-colors">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4 flex-1">
                        <div className="w-12 h-12 bg-flower-pink/10 rounded-full flex items-center justify-center">
                          <Icon name="Flower2" size={20} className="text-flower-pink" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h4 className="font-semibold text-lg">{reminder.occasion}</h4>
                            <Badge variant={reminder.status === 'active' ? 'default' : 'secondary'}>
                              {reminder.status === 'active' ? 'Активно' : 'Запланировано'}
                            </Badge>
                          </div>
                          <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
                            <div>
                              <p><strong>Получатель:</strong> {reminder.recipient}</p>
                              <p><strong>Дата:</strong> {format(reminder.date, 'dd MMMM yyyy', { locale: ru })}</p>
                            </div>
                            <div>
                              <p><strong>Цветы:</strong> {reminder.flowerType}</p>
                              <p><strong>Бюджет:</strong> {reminder.budget}</p>
                            </div>
                          </div>
                          <div className="mt-3">
                            <p className="text-sm text-gray-600">
                              <strong>Адрес:</strong> {reminder.address}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 ml-4">
                        <Button variant="ghost" size="sm">
                          <Icon name="Edit" size={16} />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                          <Icon name="Trash2" size={16} />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="User" size={24} className="mr-2 text-flower-dark" />
                  Профиль пользователя
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="name">Имя</Label>
                  <Input id="name" value="Иван Петров" placeholder="Ваше имя" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" value="ivan@example.com" placeholder="your@email.com" />
                </div>
                <div>
                  <Label htmlFor="phone">Телефон</Label>
                  <Input id="phone" value="+7 (999) 123-45-67" placeholder="+7 (999) 123-45-67" />
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

            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="CreditCard" size={24} className="mr-2 text-flower-mint" />
                  Подписка
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-flower-mint/10 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold">Премиум план</span>
                    <Badge className="bg-flower-mint">Активен</Badge>
                  </div>
                  <p className="text-sm text-gray-600">Безлимитные напоминания, SMS + Email</p>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Следующая оплата:</span>
                    <span>15 марта 2025</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Сумма:</span>
                    <span className="font-semibold">1990₽</span>
                  </div>
                </div>
                <Separator />
                <div className="space-y-2">
                  <Button variant="outline" className="w-full">
                    Изменить план
                  </Button>
                  <Button variant="outline" className="w-full text-red-600 border-red-200 hover:bg-red-50">
                    Отменить подписку
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Dashboard