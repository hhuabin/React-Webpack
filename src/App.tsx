import { useDispatch } from 'react-redux'
import { saveToken } from '@/store/slice/userSlice'
import RenderRoutes from "@/router/RenderRoutes"
import "./App.less"

function App() {

	const dispatch = useDispatch()
	dispatch(saveToken({
		token: "token"
	}))

	return (
		<div className="app">
			{ RenderRoutes() }
		</div>
	);
}

export default App;
