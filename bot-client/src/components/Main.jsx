import Form from './Form';
import Gauge from './Gauge';
import Viewer from './Viewer';

export default function Main() {
	return (
		<main className="flex flex-col p-4 gap-8">
			<Gauge />
			<Viewer />
			<Form />
		</main>
	);
}
