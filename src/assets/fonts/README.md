# Font (self-hosted)

File `.woff2` di folder ini diambil dari **Google Fonts** (subset `latin`) dan
di-commit ke repository supaya build tidak bergantung pada jaringan.

| File | Asal | Lisensi |
| --- | --- | --- |
| `montserrat-variable-latin.woff2` | Montserrat (variable 100–900) | SIL Open Font License 1.1 |
| `montserrat-italic-variable-latin.woff2` | Montserrat italic (variable 100–900) | SIL Open Font License 1.1 |
| `space-grotesk-variable-latin.woff2` | Space Grotesk (variable 300–700) | SIL Open Font License 1.1 |
| `raleway-variable-latin.woff2` | Raleway (variable 400–800) | SIL Open Font License 1.1 |
| `poppins-{100,300,400,600,700,900}-latin.woff2` | Poppins (weight statis) | SIL Open Font License 1.1 |
| `geist-variable-latin.woff2` | Geist (variable 100–900) | SIL Open Font License 1.1 |
| `geist-mono-variable-latin.woff2` | Geist Mono (variable 100–900) | SIL Open Font License 1.1 |

Semua font dipakai lewat **satu modul**: `src/lib/fonts.ts` (`next/font/local`).
Jangan membuat deklarasi `next/font/google` baru di file lain — unduhan font
saat build/dev bisa gagal dan membuat situs diam-diam memakai font fallback.

Unduh ulang (butuh `node >= 18`):

```bash
node scripts/fetch-fonts.mjs
```
