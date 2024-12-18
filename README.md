Spotify Clone

A web application built with Next.js 15, Redux, and the Spotify Web API that replicates core features of Spotify. This project allows users to sign in with their Spotify account, view playlists, play tracks, and control playback, offering both premium and free-user functionality.

Features

🔵 Authentication: Secure Spotify account login with NextAuth.js.

🔵 Playback Control: Play, pause, and adjust volume for tracks.

🔵 Track Information: View current song details and playback status.

🔵 Playlist Management: Browse user playlists and play tracks.

🔵 Responsive Design: Optimized for desktop and mobile devices.

Built With

🔵 Next.js 15: React framework for server-rendered and static web apps.

🔵 Redux: State management for playlists and current song.

🔵 NextAuth.js: Authentication with Spotify OAuth integration.

🔵 Spotify Web API: Access Spotify data and control playback.

🔵 Tailwind CSS: Styling and responsive design.

🔵 TypeScript: Type safety and enhanced development experience.

Installation

Prerequisites

🔵 Node.js (v16 or higher)

🔵 Spotify Developer Account

🔵 Git

Steps

1. Clone the repository:

git clone https://github.com/yourusername/spotify-clone.git
cd spotify-clone

2. Install dependencies:

npm install

3. Create a .env.local file in the root directory and add the following:

NEXT_PUBLIC_CLIENT_ID=your_spotify_client_id
NEXT_PUBLIC_CLIENT_SECRET=your_spotify_client_secret
JWT_SECRET=your_jwt_secret
NEXTAUTH_URL=http://localhost:3000

4. Run the development server:

npm run dev

Open http://localhost:3000 in your browser.

Deployment

This application can be deployed on platforms like Vercel, AWS Amplify, or other Node.js-compatible services. Ensure the production NEXTAUTH_URL is updated accordingly.

Usage

Authentication

🔵 Login with Spotify credentials. The app will request necessary permissions to access Spotify data and control playback.

Playback

🔵 Use the media controls to play/pause tracks and adjust the volume.

🔵 Premium Spotify users can play any track, while free users are limited by Spotify's restrictions.

Playlists

🔵 Browse playlists fetched from the user's Spotify account.

🔵 Select a track to start playback.

API Integration

The app uses the Spotify Web API for:

🔵 Fetching playlists and track data.

🔵 Controlling playback.

🔵 Fetching current playback status.

Ensure the Redirect URI matches the one in your Spotify Developer Dashboard.

Known Issues

🔵 Playback features are limited for free Spotify accounts due to API restrictions.

🔵 Volume controls might not function on certain browsers.

License

This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgements

🔵 Spotify Web API Documentation

🔵 Next.js Documentation

🔵 Redux Toolkit Documentation

🔵 Tailwind CSS Documentation
