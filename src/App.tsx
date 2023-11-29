import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { saveToken } from '@/store/slice/userSlice'
import RenderRoutes from "@/router/RenderRoutes"
import "./App.less"

function App() {

	// 做登录缓存，可根据需要删除重写
	const dispatch = useDispatch()
	dispatch(saveToken({
		token: "token"
	}))

	useEffect(() =>{
		console.log("App process", process.env);
	})

	return (
		<div id="app">
			{ RenderRoutes() }
		</div>
	);
}

export default App;
