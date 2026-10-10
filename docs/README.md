# Apeiron X Website (GitHub Pages)

This English-language, static Bootstrap 5 website lives entirely in the repository's `docs/` directory. It introduces the native macOS port of Apeiron X and links to the [ApeironGame repository](https://github.com/ProfDrLuigi/ApeironGame).

## Publish with GitHub Pages

1. Commit and push the `docs/` directory to the repository.
2. Open the repository's **Settings → Pages** on GitHub.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Choose the branch to publish (for example, `main`), select **`/docs`** as the source folder, and save the settings.
5. Open the URL displayed in the GitHub Pages settings once deployment finishes.

The site uses **relative asset paths**, so it also works from a project subdirectory on GitHub Pages.

## Preview locally

From the repository root, run:

    python3 -m http.server 8000 --directory docs

Then open `http://localhost:8000/` in your browser.

## Project structure

- `index.html`: responsive Bootstrap 5 landing page
- `assets/css/site.css`: custom dark arcade theme
- `assets/js/site.js`: responsive navigation
- `assets/img/`: optimized copies of artwork from the game
- `.nojekyll`: disables Jekyll processing on GitHub Pages

The page loads Bootstrap 5.3.3, Bootstrap Icons, and Google Fonts from external CDNs. It does not require a separate build step, a backend, user accounts, or custom tracking scripts.

## Artwork sources

The site uses assets from this repository:

- `Apeiron/GameAssets/Titles/banner.jpg`
- `Apeiron/Assets.xcassets/AppIcon.appiconset/AppIcon.png`
- `docs/assets/img/gameplay.jpg` (the user-supplied gameplay screenshot)
- `Apeiron/GameAssets/Sprites/pede_000.png`
- `Apeiron/GameAssets/Sprites/gecko_000.png`
- `Apeiron/GameAssets/Sprites/sprinkleshield_000.png`

The hero now displays the **real gameplay screenshot** from
`docs/assets/img/gameplay.jpg` at its original **1824 × 1488** dimensions.
It is scaled responsively, with no cropping or changes to the source file.
The other website visuals use optimized copies of game artwork; the
original game assets are not modified.

The website does not provide instructions for compiling or building the game. Instead, it directs visitors to the project page and GitHub Releases for published versions. A publicly Developer ID-signed and notarized release has not been confirmed in the project documentation.

This is an unofficial porting project, not an official Ambrosia Software website.
