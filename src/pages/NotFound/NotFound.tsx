import { useNavigate } from 'react-router-dom';

import { Button } from 'antd-mobile'
import notfound from './notfound.module.less'

function NotFound() {

	const navigate = useNavigate()

	const toHome = () => {
		navigate("/")
	}

	return (
		<div className={notfound.notfound}>
			<div className={notfound.mainText}>
				<div className={notfound.zhText}>你要找的页面不见啦！</div>
				<div className={notfound.enText}>The page you are looking for is missing</div>

				<div className={notfound.homeButton}>
					<Button fill='outline' onClick={toHome}>
						返回首页
					</Button>
				</div>
			</div>
		</div>
	);
}

export default NotFound;
