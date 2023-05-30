import BottomNav from './components/BottomNav';
import TopNav from './components/Top-Nav';
import './globals.css';

export const metadata = {
	title: 'sports app',
	description: 'SofaScore Knockoff',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>
				<main className=' font-IBM_Plex_Mono'>
					<TopNav />
					{children}
					<BottomNav />
				</main>
			</body>
		</html>
	);
}
