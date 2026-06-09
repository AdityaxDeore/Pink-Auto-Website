import fs from "node:fs/promises"
import path from "node:path"
import sharp from "sharp"

const root = path.resolve(import.meta.dirname, "..")
const outDir = path.join(root, "public", "images")

const jobs = [
  {
    src: "src/assets/ecfbd463-3831-411e-a250-d8b83b27f13a.png",
    out: "hero-visual.webp",
    width: 1600,
    quality: 82,
  },
  {
    src: "src/assets/ChatGPT Image Jun 9, 2026, 02_19_54 PM.png",
    out: "women-rides.webp",
    width: 1400,
    quality: 80,
  },
  {
    src: "src/assets/ChatGPT Image Jun 9, 2026, 02_15_24 PM.png",
    out: "office-commute-card.webp",
    width: 1200,
    quality: 80,
  },
  {
    src: "src/assets/ChatGPT Image Jun 9, 2026, 02_15_38 PM.png",
    out: "senior-transport.webp",
    width: 1200,
    quality: 80,
  },
  {
    src: "src/assets/ChatGPT Image Jun 9, 2026, 02_16_03 PM.png",
    out: "event-packages.webp",
    width: 1200,
    quality: 80,
  },
  {
    src: "src/assets/190fb356-ff9d-4337-82b6-8348a69cb994.png",
    out: "support-24x7.webp",
    width: 1200,
    quality: 80,
  },
  {
    src: "src/assets/9154d593-9098-40f7-b4be-a36ed307631c.png",
    out: "app-screen.webp",
    width: 900,
    quality: 82,
  },
]

await fs.mkdir(outDir, { recursive: true })

for (const job of jobs) {
  const input = path.join(root, job.src)
  const output = path.join(outDir, job.out)
  const before = (await fs.stat(input)).size

  await sharp(input)
    .resize({ width: job.width, withoutEnlargement: true })
    .webp({ quality: job.quality })
    .toFile(output)

  const after = (await fs.stat(output)).size
  const saved = (((before - after) / before) * 100).toFixed(1)
  console.log(`${job.out}: ${(before / 1024 / 1024).toFixed(2)}MB → ${(after / 1024).toFixed(0)}KB (${saved}% smaller)`)
}