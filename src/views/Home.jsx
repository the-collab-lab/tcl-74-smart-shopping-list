import './Home.css';
import { SingleList } from '../components';
export function Home({ data, setListPath }) {
	return (
		<div className="Home">
			<p>
				Hello from the home (<code>/</code>) page!
			</p>
			<ul>
				{/**
				 * TASK: data is an array of objects
				 */}
				{data.map((list) => {
					return (
						<SingleList
							key={list.path}
							name={list.name}
							path={list.path}
							setListPath={setListPath}
						/>
					);
				})}
			</ul>
		</div>
	);
}
