import BottomNav from './components/BottomNav';
import TopNav from './components/Top-Nav';
import './globals.css';
import { SearchProvider } from './libs/context/searchContext';

export const metadata = {
	title: 'sports app',
	description: 'SofaScore Knockoff',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>
				<SearchProvider>
					<main className=' font-IBM_Plex_Mono'>
						<TopNav />
						{children}
						<BottomNav />
					</main>
				</SearchProvider>
			</body>
		</html>
	);
}
