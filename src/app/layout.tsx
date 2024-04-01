import AuthSessionProvider from "@/Providers/AuthSessionProvider";
import { PlaybackProvider } from "@/Providers/PlaybackProvider";
import { PlayerProvider } from "@/Providers/PlayerProvider";
import { PlaylistProvider } from "@/Providers/PlaylistProvider";
import authOptions from "@/app/api/auth/[...nextauth]/authOptions";
import { getServerSession } from "next-auth";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body>
        <AuthSessionProvider session={session}>
          <PlaybackProvider>
            <PlayerProvider>
              <PlaylistProvider>{children}</PlaylistProvider>
            </PlayerProvider>
          </PlaybackProvider>
        </AuthSessionProvider>
      </body>
    </html>
  );
}
