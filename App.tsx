import { Menu, Mail, Youtube, Code, Folder, Disc, Users, BookOpen } from 'lucide-react';
import { Button } from './components/ui/button';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import ProjectPage from './components/ProjectPage';
import MyIsoPage from './components/MyIsoPage';
import WindowsIsoPage from './components/WindowsIsoPage';
import DebugStickProject from './components/DebugStickProject';
import Header from './components/Header';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/project/debug-stick" element={<DebugStickProject />} />
        <Route path="/myiso" element={<MyIsoPage />} />
        <Route path="/windowsiso" element={<WindowsIsoPage />} />
      </Routes>
    </HashRouter>
  );
}

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-950 via-purple-900 to-indigo-950 text-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-br from-violet-900/40 to-purple-900/40 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-violet-700/30">
          <h1 className="text-center mb-6">
            Добро пожаловать в мое персональное пространство!
          </h1>
          
          <div className="text-center space-y-4 mb-12 max-w-3xl mx-auto">
            <p className="text-lg text-violet-200">
              Это мой личный сайт для удобного доступа к проектам, ресурсам и инструментам.
            </p>
            <p className="text-violet-300">
              Здесь вы найдете ссылки на мои работы, полезные материалы и способы связи со мной. 
              Добавьте сайт в закладки для быстрого доступа!
            </p>
          </div>

          {/* Action Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            <ActionCard
              icon={<Folder className="w-5 h-5" />}
              title="Мои проекты"
              href="/project"
            />
            <ActionCard
              icon={<Disc className="w-5 h-5" />}
              title="Мои образы"
              href="/myiso"
            />
            <ActionCard
              icon={<Code className="w-5 h-5" />}
              title="Оригинальные образы Windows"
              href="/windowsiso"
            />
            <ActionCard
              icon={<Youtube className="w-5 h-5" />}
              title="YouTube канал"
              href="https://youtube.com/@imzahar?si=LpBN-H9qzTgkqLbk"
            />
            <ActionCard
              icon={<Mail className="w-5 h-5" />}
              title="Связаться со мной"
              href="mailto:imzahar@mail.ru"
            />
            <ActionCard
              icon={<Users className="w-5 h-5" />}
              title="VK сообщество"
              href="https://vk.com/im_zahar"
            />
          </div>

          {/* Latest Content Section */}
          <div className="text-center">
            <h2 className="mb-8">Последние обновления</h2>
            <div className="bg-violet-950/50 rounded-xl p-8 border border-violet-700/30">
              <p className="text-violet-300">Скоро здесь появится контент...</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center">
          <div className="flex justify-center gap-4 mb-4">
            <SocialLink href="https://youtube.com/@imzahar?si=LpBN-H9qzTgkqLbk" icon={<Youtube className="w-5 h-5" />} />
            <SocialLink href="https://vk.com/im_zahar" icon={<Users className="w-5 h-5" />} />
            <SocialLink href="mailto:imzahar@mail.ru" icon={<Mail className="w-5 h-5" />} />
          </div>
          <p className="text-violet-400">© 2025 Imzahar</p>
        </footer>
      </main>
    </div>
  );
}

function ActionCard({ icon, title, href }: { icon: React.ReactNode | string; title: string; href: string }) {
  const isExternal = href.startsWith('http') || href.startsWith('mailto:');
  const isInternalRoute = href.startsWith('/') && !isExternal;
  
  if (isInternalRoute) {
    return (
      <Link
        to={href}
        className="group bg-gradient-to-br from-violet-800/40 to-purple-800/40 hover:from-violet-700/50 hover:to-purple-700/50 backdrop-blur-sm rounded-xl p-4 border border-violet-600/30 hover:border-violet-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-violet-500/20"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-violet-600/30 flex items-center justify-center group-hover:bg-violet-500/40 transition-colors">
            {typeof icon === 'string' ? <span className="text-lg">{icon}</span> : icon}
          </div>
          <span className="text-violet-100 group-hover:text-white transition-colors">{title}</span>
        </div>
      </Link>
    );
  }
  
  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className="group bg-gradient-to-br from-violet-800/40 to-purple-800/40 hover:from-violet-700/50 hover:to-purple-700/50 backdrop-blur-sm rounded-xl p-4 border border-violet-600/30 hover:border-violet-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-violet-500/20"
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-violet-600/30 flex items-center justify-center group-hover:bg-violet-500/40 transition-colors">
          {typeof icon === 'string' ? <span className="text-lg">{icon}</span> : icon}
        </div>
        <span className="text-violet-100 group-hover:text-white transition-colors">{title}</span>
      </div>
    </a>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode | string }) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className="w-10 h-10 rounded-full bg-violet-800/40 hover:bg-violet-700/60 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110 border border-violet-600/30 hover:border-violet-500/50"
    >
      {typeof icon === 'string' ? <span className="text-lg">{icon}</span> : icon}
    </a>
  );
}