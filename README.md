# Projet Machine IA — Waitlist France (Brand Shock Edition)

Landing page statique premium/mobile-first orientée **conversion waitlist uniquement**.

## Objectif
Créer un impact visuel immédiat (3 secondes) pour un lancement France d’un AI Home Gym, sans vente directe, avec storytelling clair:

- Problème → Solution → Preuve → Waitlist
- Positionnement haut de gamme/émotionnel
- Branding neutre (pas de mention explicite de marque)

## Ce qui a été refait

- `index.html` entièrement refondu (design cinématique + glassmorphism maîtrisé)
- Hero fullscreen avec fond vidéo + overlay premium
- Direction artistique forte (néons pink/violet/cyan, typo Sora + Inter)
- Sections conversion ajoutées:
  - Pourquoi maintenant
  - Lancement France
  - FAQ courte conversion
- Features produit réelles intégrées:
  - coaching IA
  - correction de forme
  - résistance digitale
  - format compact
  - multi-profils
  - sans abonnement
- Micro-interactions légères:
  - reveal au scroll
  - parallax léger sur hero
  - hover cards

## Media

Section média en mode léger:

- Miniatures YouTube (`loading="lazy"`)
- Liens play externes (pas d’embed lourd par défaut)

## Fichiers

- `index.html` — landing complète
- `assets/hero-poster.svg` — fallback visuel hero
- `assets/README.md` — notes de remplacement assets

## Développement local

```bash
# dans ce dossier
python3 -m http.server 8080
# puis ouvrir http://localhost:8080
```

## Déploiement Vercel

```bash
vercel --prod
```

> Si le projet est déjà lié, Vercel redéploie directement en production.
