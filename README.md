# MAT GO team d.o.o. - Web Stranica

Moderna web stranica za građevinsku tvrtku MAT GO team d.o.o. iz Zagreba.

## 🚀 Deployment na Vercel (Preporučeno)

### Opcija 1: Automatski deployment putem GitHub-a

1. **Kreiraj GitHub repo:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/TVOJ-USERNAME/matgo-website.git
   git push -u origin main
   ```

2. **Poveži s Vercel-om:**
   - Idi na [vercel.com](https://vercel.com)
   - Klikni "New Project"
   - Importiraj svoj GitHub repo
   - Vercel će automatski detektirati Next.js
   - Klikni "Deploy"

3. **Dodaj custom domenu:**
   - U Vercel dashboardu idi na Settings → Domains
   - Dodaj `matgo-team.online`
   - Slijedi upute za DNS konfiguraciju

### Opcija 2: Vercel CLI

```bash
# Instaliraj Vercel CLI
npm i -g vercel

# Deploy
vercel

# Za produkciju
vercel --prod
```

## 🌐 DNS Konfiguracija za matgo-team.online

U svom DNS provideru (npr. Cloudflare, Namecheap, GoDaddy) dodaj:

| Tip   | Ime  | Vrijednost           |
|-------|------|----------------------|
| A     | @    | 76.76.21.21          |
| CNAME | www  | cname.vercel-dns.com |

## 📁 Struktura projekta

```
matgo-website/
├── app/
│   ├── globals.css      # Globalni stilovi
│   ├── layout.js        # Root layout s meta tagovima
│   └── page.js          # Glavna stranica
├── public/
│   ├── icon.svg         # Favicon
│   ├── manifest.json    # PWA manifest
│   ├── robots.txt       # SEO robots
│   └── sitemap.xml      # SEO sitemap
├── next.config.js       # Next.js konfiguracija
├── package.json         # Dependencies
├── tailwind.config.js   # Tailwind konfiguracija
└── postcss.config.js    # PostCSS konfiguracija
```

## 🛠️ Lokalni development

```bash
# Instaliraj dependencies
npm install

# Pokreni dev server
npm run dev

# Otvori http://localhost:3000
```

## 📝 Što treba prilagoditi

1. **Kontakt podaci** u `app/page.js`:
   - Telefon: `+385 XX XXX XXXX`
   - Email: `info@matgo-team.online`
   - Adresa: točna adresa

2. **Slike projekata** - zamijeni Unsplash slike stvarnim slikama projekata

3. **Google verification** u `app/layout.js` - dodaj Google Search Console kod

4. **Favicon/ikone** - generiraj PNG verzije iz SVG-a za `apple-touch-icon.png`, `icon-192.png`, `icon-512.png`

## 🎨 Boje branda

- Primary: `#00A3E0` (svjetlo plava)
- Primary Dark: `#0088CC`
- Secondary: `#4A4A4A` (tamnosiva)
- Accent: `#E6E6E6` (svjetlosiva)

## 📱 Responzivnost

Stranica je optimizirana za:
- Mobile (< 768px)
- Tablet (768px - 1024px)
- Desktop (> 1024px)

## ✅ Checklist prije launcha

- [ ] Zamijeni placeholder telefon i email
- [ ] Dodaj stvarne slike projekata
- [ ] Generiraj favicon PNG verzije
- [ ] Postavi Google Analytics (opcionalno)
- [ ] Testiraj kontakt formu
- [ ] Provjeri SEO meta tagove
- [ ] Postavi SSL certifikat (automatski na Vercelu)

---

Izrađeno za MAT GO team d.o.o. 🏗️
