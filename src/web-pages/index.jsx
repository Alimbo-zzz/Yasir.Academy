import { createRoot } from 'react-dom/client';
import Wrapper from '@layouts/Wrapper';
import Landing from '@pages/Landing';

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const root = createRoot( document.getElementById('root') );

root.render(<>
	<Wrapper>
		<Landing/>
	</Wrapper>
</>);
