import { lazy } from "react";
import { Navigate } from "react-router-dom";

const Home = lazy(() => import("@/pages/Home/Home"))
const NotFound = lazy(() => import("@/pages/NotFound/NotFound"))

export type RouteRecordRaw = {
	path: string;
	element: JSX.Element;
	name?: string | symbol;
	redirect?: string;
	// alias?: string | string[];
	children?: RouteRecordRaw[];
	meta?: Record<string | number | symbol, unknown>;
}

export const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: "home",
		element: <Home />,
		// element: (<><Home/><Navigate to="/home/:id" replace/></>),
		meta: {
			needAuth: false,
		},
	},
	{
		path: '*',
		name: "notfound",
		element: <NotFound />,
		meta: {
			title: "notfound",
			needAuth: false,
		},
	},
]
