# Projet Machine IA — Page Accès anticipé (France)

Refonte complète en style **minimal premium** (sobriété Apple/Raycast):
- palette neutre (noir/gris/blanc + accent discret)
- hiérarchie claire, beaucoup d’air
- mobile-first propre
- copy courte et humaine
- sans effets gadgets

## Positionnement

Cette page ne vend pas le produit.
Elle sert à **tester l’intérêt marché en France** via une **inscription prioritaire / accès anticipé**.

## Sections livrées

1. Hero + CTA principal
2. Pourquoi ce produit
3. Comment ça fonctionne (3 étapes)
4. Pour qui
5. FAQ courte
6. Formulaire d’accès anticipé

## Formulaire

Champs présents:
- Nom
- Email
- Téléphone (optionnel)
- Profil

CTA:
- **Demander un accès anticipé**

Important:
- Le formulaire est volontairement **non branché** (note dev affichée dans la page).

## Assets

Usage sobre des assets existants du projet:
- `assets/hero-poster.svg` utilisé dans le hero
- `assets/hero-poster.svg` réutilisé dans le bloc formulaire (pas de surcharge visuelle)

## Lancer en local

```bash
cd /home/ubuntu/.openclaw/workspace/aeke-waitlist-fr
python3 -m http.server 8080
```

Puis ouvrir: `http://localhost:8080`

## Déploiement Vercel (production)

```bash
vercel --prod
```
