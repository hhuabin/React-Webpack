import { useEffect } from 'react';

import { Button, Space } from 'antd-mobile'
import home from './home.module.less';

function Home() {

	return (
		<div className={home.home}>
			<Space wrap>
				<Button color='primary' fill='solid'>
					Solid
				</Button>
				<Button color='primary' fill='outline'>
					Outline
				</Button>
				<Button color='primary' fill='none'>
					None
				</Button>
			</Space>
		</div>
	);
}

export default Home;
