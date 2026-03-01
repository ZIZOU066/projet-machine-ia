# AEKE Waitlist FR — Landing Premium (France)

Landing statique (HTML/CSS/JS) orientée **waitlist uniquement** pour le lancement France de la machine de sport IA.

## Objectif
- Positionnement premium, moderne, mobile-first
- Focus produit: machine de sport IA
- CTA principal: **rejoindre la liste d’attente**
- Zone de lancement: **Antibes / France**

## Stack
- `index.html` unique (styles + script intégrés)
- Aucun framework, aucun build step

## Lancer en local
Option la plus simple:

```bash
cd /home/ubuntu/.openclaw/workspace/aeke-waitlist-fr
python3 -m http.server 8080
```

Puis ouvrir: `http://localhost:8080`

## Édition rapide
- Tout est dans `index.html`
- Sections incluses: Hero, bénéfices, comment ça marche, preuves, pour qui, FAQ, waitlist
- Variante CTA A/B prête via query param:
  - Variante A (défaut): `Rejoindre la liste d’attente`
  - Variante B: `Demander un accès anticipé`
  - Tester B avec: `?cta=b`

## Intégration formulaire (next step)
Le formulaire est volontairement en mode démo (`type="button"`).
Pour production:
1. connecter Formspree / Airtable / HubSpot
2. ajouter event submit JS
3. ajouter message succès/erreur

## NOTE DEV (assets)
Pour la preview, cette version utilise des visuels distants `aeke.com` en placeholder (hero image), conformément à la demande.
Avant une mise en prod finale marque blanche, remplacer par assets autorisés/propres au projet.

## Checklist qualité
- ✅ Aucune référence legacy hors scope produit
- ✅ Waitlist only (pas de vente directe)
- ✅ UX responsive mobile + desktop
- ✅ Micro-animations CSS légères
