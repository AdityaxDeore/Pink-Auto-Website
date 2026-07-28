import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import ffmpegPath from 'ffmpeg-static';

const videosDir = path.join(process.cwd(), 'src', 'assets', 'videos');
const imagesDir = path.join(process.cwd(), 'src', 'assets', 'images');

console.log('Starting GIF conversion using FFmpeg at:', ffmpegPath);

const files = fs.readdirSync(videosDir);
for (const file of files) {
  if (file.endsWith('.mp4') || file.endsWith('.MOV') || file.endsWith('.mov')) {
    const videoPath = path.join(videosDir, file);
    const gifName = path.basename(file, path.extname(file)) + '.gif';
    const gifPath = path.join(imagesDir, gifName);
    
    console.log(`Converting ${file} to GIF...`);
    try {
      // 10fps, scale width to 480px, maintaining aspect ratio.
      // This reduces GIF size while still looking decent for a gallery.
      const cmd = `"${ffmpegPath}" -y -i "${videoPath}" -vf "fps=10,scale=480:-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse" -loop 0 "${gifPath}"`;
      execSync(cmd, { stdio: 'inherit' });
      console.log(`Successfully converted ${file} to ${gifName}`);
      
      // Delete original video to clean up
      fs.unlinkSync(videoPath);
    } catch (err) {
      console.error(`Failed to convert ${file}:`, err.message);
    }
  }
}

console.log('Done converting all videos to GIFs!');
