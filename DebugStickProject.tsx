import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Mail,
  Youtube,
  Users,
  Download,
  ExternalLink,
} from "lucide-react";
import { Button } from "./ui/button";
import Header from "./Header";
import image1 from "figma:asset/2e99b4833ab099f5a9bc9fc15bf576e8de8ad217.png";
import image2 from "figma:asset/922943243489ebe8f1d998f1ad6ec2a8f0114c36.png";
import image3 from "figma:asset/7059e61dfd9af5d85fa08968d528d666ba21e616.png";

export default function DebugStickProject() {
  const projectImages = [image1, image2, image3];

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-950 via-purple-900 to-indigo-950 text-white">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-br from-violet-900/40 to-purple-900/40 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-violet-700/30">
          {/* Back Button */}
          <Link
            to="/project"
            className="inline-flex items-center gap-2 text-violet-300 hover:text-violet-100 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Назад к проектам
          </Link>

          {/* Project Title */}
          <div className="text-center mb-8">
            <h1 className="mb-4">Палочка отладки</h1>
            <p className="text-lg text-violet-200 max-w-3xl mx-auto">
              Инструмент для быстрых доступов к сайтам.
            </p>
          </div>

          {/* Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {projectImages.map((image, index) => (
              <div
                key={index}
                className="aspect-video rounded-xl overflow-hidden border border-violet-600/30 hover:border-violet-500/50 transition-all duration-300 hover:scale-105"
              >
                <img
                  src={image}
                  alt={`Палочка отладки - скриншот ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Description Section */}
          <div className="bg-violet-950/50 rounded-xl p-8 border border-violet-700/30 mb-8">
            <h2 className="mb-4">Описание</h2>
            <div className="space-y-4 text-violet-200">
              <p>
                Палочка отладки - это инструмент, который
                предостовляет быстрый доступ к сайтам
              </p>
              <p>Основные возможности:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Быстрый доступ к сайтам(пароль:Imzahartop)
                </li>
              </ul>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://disk.yandex.ru/d/GXkpDYolLdqR0Q"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="w-full sm:w-auto bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white border-0">
                <Download className="w-5 h-5 mr-2" />
                Скачать
              </Button>
            </a>
            <a
              href="https://imzahar.github.io/Palochkaotlagki.github.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="w-full sm:w-auto bg-violet-600/30 border-violet-500/50 hover:bg-violet-500/40 text-white"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Открыть
              </Button>
            </a>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center">
          <div className="flex justify-center gap-4 mb-4">
            <SocialLink
              href="https://youtube.com/@imzahar?si=LpBN-H9qzTgkqLbk"
              icon={<Youtube className="w-5 h-5" />}
            />
            <SocialLink
              href="https://vk.com/im_zahar"
              icon={<Users className="w-5 h-5" />}
            />
            <SocialLink
              href="mailto:imzahar@mail.ru"
              icon={<Mail className="w-5 h-5" />}
            />
          </div>
          <p className="text-violet-400">© 2025 Imzahar</p>
        </footer>
      </main>
    </div>
  );
}

function SocialLink({
  href,
  icon,
}: {
  href: string;
  icon: React.ReactNode | string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={
        href.startsWith("http")
          ? "noopener noreferrer"
          : undefined
      }
      className="w-10 h-10 rounded-full bg-violet-800/40 hover:bg-violet-700/60 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110 border border-violet-600/30 hover:border-violet-500/50"
    >
      {typeof icon === "string" ? (
        <span className="text-lg">{icon}</span>
      ) : (
        icon
      )}
    </a>
  );
}