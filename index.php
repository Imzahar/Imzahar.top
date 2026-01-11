<?php
// Простая маршрутизация
$page = isset($_GET['page']) ? $_GET['page'] : 'home';
$page = preg_replace('/[^a-z0-9_-]/', '', $page);

// Проверка существования файла страницы
if (!file_exists('pages/' . $page . '.php')) {
    $page = 'home';
}
?>
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Imzahar</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            background: linear-gradient(135deg, #5b21b6 0%, #7c3aed 25%, #a78bfa 50%, #6d28d9 100%);
            color: white;
            min-height: 100vh;
            line-height: 1.6;
        }

        h1 {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 1.5rem;
            text-align: center;
        }

        h2 {
            font-size: 2rem;
            font-weight: 600;
            margin-bottom: 2rem;
            text-align: center;
        }

        h3 {
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: 1rem;
        }

        p {
            font-size: 1rem;
            line-height: 1.7;
        }

        /* Header */
        header {
            background: rgba(88, 28, 135, 0.2);
            backdrop-filter: blur(20px);
            border-bottom: 1px solid rgba(196, 181, 253, 0.2);
        }

        .header-container {
            max-width: 1280px;
            margin: 0 auto;
            padding: 1.5rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            text-decoration: none;
            color: white;
        }

        .logo-icon {
            width: 48px;
            height: 48px;
            border-radius: 50%;
            background: linear-gradient(135deg, rgba(196, 181, 253, 0.3) 0%, rgba(168, 85, 247, 0.2) 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            font-weight: bold;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(196, 181, 253, 0.3);
        }

        .logo-text {
            font-size: 1.25rem;
            font-weight: 600;
            letter-spacing: 0.5px;
            color: #ffffff;
            text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        }

        nav {
            display: flex;
            gap: 2rem;
        }

        nav a {
            color: rgba(255, 255, 255, 0.9);
            text-decoration: none;
            transition: all 0.3s;
            font-weight: 500;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        nav a:hover {
            color: #ffffff;
            transform: translateY(-2px);
        }

        .menu-btn {
            display: none;
            background: none;
            border: none;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
            padding: 0.5rem;
        }

        /* Main Content */
        main {
            max-width: 1200px;
            margin: 0 auto;
            padding: 3rem 1.5rem;
        }

        .hero-card {
            background: rgba(139, 92, 246, 0.15);
            backdrop-filter: blur(20px);
            border-radius: 24px;
            padding: 3rem 2rem;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(196, 181, 253, 0.2);
            border: 1px solid rgba(196, 181, 253, 0.25);
        }

        .hero-title {
            text-align: center;
            margin-bottom: 2rem;
            color: #ffffff;
            text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        }

        .hero-description {
            text-align: center;
            max-width: 800px;
            margin: 0 auto 3rem;
        }

        .hero-description p {
            margin-bottom: 1rem;
            color: rgba(255, 255, 255, 0.95);
            font-size: 1.05rem;
        }

        /* Action Grid */
        .action-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 1.5rem;
            margin-bottom: 3rem;
        }

        .action-card {
            background: rgba(139, 92, 246, 0.12);
            backdrop-filter: blur(15px);
            border-radius: 16px;
            padding: 1.5rem;
            border: 1px solid rgba(196, 181, 253, 0.25);
            text-decoration: none;
            color: rgba(255, 255, 255, 0.95);
            display: flex;
            align-items: center;
            gap: 1rem;
            transition: all 0.3s ease;
            cursor: pointer;
            box-shadow: inset 0 1px 0 rgba(196, 181, 253, 0.2);
        }

        .action-card:hover {
            background: rgba(139, 92, 246, 0.2);
            border-color: rgba(196, 181, 253, 0.4);
            transform: translateY(-4px);
            box-shadow: 0 15px 40px rgba(91, 33, 182, 0.15), inset 0 1px 0 rgba(196, 181, 253, 0.3);
            color: #ffffff;
        }

        .action-icon {
            width: 50px;
            height: 50px;
            border-radius: 12px;
            background: rgba(139, 92, 246, 0.15);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.8rem;
            transition: all 0.3s;
            flex-shrink: 0;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(196, 181, 253, 0.25);
            box-shadow: inset 0 1px 0 rgba(196, 181, 253, 0.2);
        }

        .action-card:hover .action-icon {
            background: rgba(139, 92, 246, 0.25);
            transform: scale(1.1);
            border-color: rgba(196, 181, 253, 0.35);
        }

        .action-text {
            flex: 1;
        }

        .action-text span {
            display: block;
            font-weight: 500;
        }

        /* Latest Content */
        .latest-section {
            text-align: center;
            margin-top: 4rem;
        }

        .latest-content {
            background: rgba(139, 92, 246, 0.1);
            border-radius: 16px;
            padding: 3rem 2rem;
            border: 1px solid rgba(196, 181, 253, 0.25);
            max-width: 800px;
            margin: 0 auto;
            backdrop-filter: blur(15px);
            box-shadow: inset 0 1px 0 rgba(196, 181, 253, 0.2);
        }

        .latest-content p {
            color: rgba(255, 255, 255, 0.95);
            font-size: 1.05rem;
        }

        /* Footer */
        footer {
            margin-top: 4rem;
            text-align: center;
        }

        .social-links {
            display: flex;
            justify-content: center;
            gap: 1rem;
            margin-bottom: 1.5rem;
        }

        .social-link {
            width: 45px;
            height: 45px;
            border-radius: 50%;
            background: rgba(139, 92, 246, 0.12);
            backdrop-filter: blur(10px);
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            color: white;
            border: 1px solid rgba(196, 181, 253, 0.25);
            transition: all 0.3s ease;
            font-size: 1.3rem;
            box-shadow: inset 0 1px 0 rgba(196, 181, 253, 0.2);
        }

        .social-link:hover {
            background: rgba(139, 92, 246, 0.25);
            border-color: rgba(196, 181, 253, 0.4);
            transform: scale(1.15);
            box-shadow: 0 8px 20px rgba(91, 33, 182, 0.1), inset 0 1px 0 rgba(196, 181, 253, 0.3);
        }

        .copyright {
            color: rgba(255, 255, 255, 0.8);
        }

        /* Mobile Menu */
        .mobile-nav {
            display: none;
            flex-direction: column;
            gap: 1rem;
            padding: 1rem;
            background: rgba(88, 28, 135, 0.2);
            backdrop-filter: blur(15px);
            border-top: 1px solid rgba(196, 181, 253, 0.2);
        }

        .mobile-nav.active {
            display: flex;
        }

        .mobile-nav a {
            color: rgba(255, 255, 255, 0.9);
            text-decoration: none;
            padding: 0.75rem;
            border-radius: 8px;
            transition: all 0.3s;
        }

        .mobile-nav a:hover {
            background: rgba(139, 92, 246, 0.15);
            color: #ffffff;
        }

        .back-button {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            color: rgba(255, 255, 255, 0.85);
            text-decoration: none;
            margin-bottom: 2rem;
            transition: all 0.3s;
            font-weight: 500;
        }

        .back-button:hover {
            color: #ffffff;
            transform: translateX(-4px);
        }

        .project-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 1.5rem;
            margin-bottom: 2rem;
        }

        .project-card {
            background: rgba(139, 92, 246, 0.12);
            border-radius: 16px;
            overflow: hidden;
            border: 1px solid rgba(196, 181, 253, 0.25);
            transition: all 0.3s ease;
            text-decoration: none;
            color: inherit;
            display: block;
            backdrop-filter: blur(10px);
            box-shadow: inset 0 1px 0 rgba(196, 181, 253, 0.2);
        }

        .project-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 15px 40px rgba(91, 33, 182, 0.15), inset 0 1px 0 rgba(196, 181, 253, 0.2);
            border-color: rgba(196, 181, 253, 0.35);
        }

        .project-image {
            width: 100%;
            height: 200px;
            object-fit: cover;
        }

        .project-info {
            padding: 1.5rem;
        }

        .project-title {
            margin-bottom: 0.5rem;
            color: #ffffff;
            font-weight: 600;
        }

        .project-info p {
            color: rgba(255, 255, 255, 0.85);
        }

        .download-btn, .open-btn {
            display: inline-block;
            padding: 0.85rem 1.75rem;
            border-radius: 12px;
            text-decoration: none;
            transition: all 0.3s ease;
            margin: 0.5rem;
            border: 1px solid transparent;
            font-weight: 500;
            font-size: 1rem;
        }

        .download-btn {
            background: rgba(168, 85, 247, 0.3);
            color: white;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(196, 181, 253, 0.35);
            box-shadow: inset 0 1px 0 rgba(196, 181, 253, 0.3);
        }

        .download-btn:hover {
            transform: translateY(-3px);
            background: rgba(168, 85, 247, 0.4);
            box-shadow: 0 10px 25px rgba(91, 33, 182, 0.15), inset 0 1px 0 rgba(196, 181, 253, 0.3);
            border-color: rgba(196, 181, 253, 0.45);
        }

        .open-btn {
            background: rgba(139, 92, 246, 0.15);
            color: rgba(255, 255, 255, 0.95);
            border: 1px solid rgba(196, 181, 253, 0.25);
            backdrop-filter: blur(10px);
            box-shadow: inset 0 1px 0 rgba(196, 181, 253, 0.2);
        }

        .open-btn:hover {
            background: rgba(139, 92, 246, 0.25);
            color: #ffffff;
            border-color: rgba(196, 181, 253, 0.4);
            box-shadow: 0 10px 25px rgba(91, 33, 182, 0.15), inset 0 1px 0 rgba(196, 181, 253, 0.3);
        }

        .buttons-container {
            display: flex;
            gap: 1rem;
            justify-content: center;
            margin: 2rem 0;
            flex-wrap: wrap;
        }

        .project-images {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1rem;
            margin: 2rem 0;
        }

        .project-images img {
            width: 100%;
            border-radius: 12px;
            border: 1px solid rgba(196, 181, 253, 0.25);
            transition: all 0.3s ease;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
        }

        .project-images img:hover {
            transform: scale(1.05);
            border-color: rgba(196, 181, 253, 0.35);
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
        }

        /* Responsive */
        @media (max-width: 768px) {
            nav {
                display: none;
            }

            .menu-btn {
                display: block;
            }

            h1 {
                font-size: 2rem;
            }

            h2 {
                font-size: 1.5rem;
            }

            .hero-card {
                padding: 2rem 1.5rem;
            }

            .action-grid {
                grid-template-columns: 1fr;
            }

            .buttons-container {
                flex-direction: column;
            }

            .download-btn, .open-btn {
                width: 100%;
                text-align: center;
            }
        }
    </style>
</head>
<body>
    <!-- Header -->
    <header>
        <div class="header-container">
            <a href="?page=home" class="logo">
                <div class="logo-icon">💼</div>
                <span class="logo-text">Imzahar</span>
            </a>
            <nav id="desktop-nav">
                <a href="?page=home">🏠 Главная</a>
                <a href="?page=projects">🚀 Проекты</a>
                <a href="?page=myiso">💿 Мои образы</a>
                <a href="?page=windowsiso">🪟 Windows ISO</a>
            </nav>
            <button class="menu-btn" id="menuBtn">☰</button>
        </div>
        <div class="mobile-nav" id="mobileNav">
            <a href="?page=home">🏠 Главная</a>
            <a href="?page=projects">🚀 Проекты</a>
            <a href="?page=myiso">💿 Мои образы</a>
            <a href="?page=windowsiso">🪟 Windows ISO</a>
        </div>
    </header>

    <!-- Main Content -->
    <main>
        <?php include 'pages/' . $page . '.php'; ?>
    </main>

    <script>
        // Mobile menu toggle
        const menuBtn = document.getElementById('menuBtn');
        const mobileNav = document.getElementById('mobileNav');

        menuBtn.addEventListener('click', () => {
            mobileNav.classList.toggle('active');
            menuBtn.textContent = mobileNav.classList.contains('active') ? '✕' : '☰';
        });
    </script>
</body>
</html>
