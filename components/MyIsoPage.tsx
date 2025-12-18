import { Link } from 'react-router-dom';
import { Code, ArrowLeft, Mail, Youtube, Users, Disc } from 'lucide-react';
import Header from './Header';

export default function MyIsoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-950 via-purple-900 to-indigo-950 text-white">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-br from-violet-900/40 to-purple-900/40 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-violet-700/30">
          {/* Back Button */}
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-violet-300 hover:text-violet-100 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Назад на главную
          </Link>

          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-violet-600/40 to-purple-600/40 flex items-center justify-center">
              <Disc className="w-8 h-8" />
            </div>
            <h1 className="text-center">
              Мои образы
            </h1>
          </div>
          
          <div className="text-center space-y-4 mb-12 max-w-3xl mx-auto">
            <div className="bg-violet-950/50 rounded-xl p-12 border border-violet-700/30">
              <p className="text-2xl text-violet-300">Скоро</p>
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